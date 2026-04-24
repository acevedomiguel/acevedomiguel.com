const http = require("http");
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const OUT_DIR = path.join(__dirname, "..", "out");
const PORT = 3456;

function mimeType(filePath) {
	const ext = path.extname(filePath).toLowerCase();
	const map = {
		".html": "text/html",
		".js": "application/javascript",
		".css": "text/css",
		".json": "application/json",
		".png": "image/png",
		".jpg": "image/jpeg",
		".jpeg": "image/jpeg",
		".svg": "image/svg+xml",
		".webp": "image/webp",
		".pdf": "application/pdf",
		".woff2": "font/woff2",
		".woff": "font/woff",
		".ttf": "font/ttf",
	};
	return map[ext] || "application/octet-stream";
}

function serveStatic(req, res) {
	let url = req.url || "/";
	// Remove query string
	url = url.split("?")[0];
	// Serve trailingSlash-style paths from index.html
	let filePath = path.join(OUT_DIR, decodeURIComponent(url));
	if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
		filePath = path.join(filePath, "index.html");
	}
	if (!fs.existsSync(filePath)) {
		filePath = path.join(OUT_DIR, "404.html");
	}
	if (!fs.existsSync(filePath)) {
		res.writeHead(404);
		res.end("Not found");
		return;
	}
	res.writeHead(200, { "Content-Type": mimeType(filePath) });
	fs.createReadStream(filePath).pipe(res);
}

async function generatePDF() {
	const server = http.createServer(serveStatic);
	await new Promise((resolve) => server.listen(PORT, resolve));
	console.log(`Serving ${OUT_DIR} on http://localhost:${PORT}`);

	const browser = await chromium.launch();
	const page = await browser.newPage();

	// Wait for the print resume page to load fully
	await page.goto(`http://localhost:${PORT}/resume/print/`, {
		waitUntil: "networkidle",
	});

	// Wait for resume data to render
	await page.waitForSelector("[data-print-ready='true']", { timeout: 10000 });

	// Generate PDF
	await page.pdf({
		path: path.join(OUT_DIR, "resume.pdf"),
		format: "A4",
		printBackground: true,
		margin: {
			top: "0.5in",
			right: "0.5in",
			bottom: "0.5in",
			left: "0.5in",
		},
	});

	console.log(`Generated out/resume.pdf`);

	await browser.close();
	await new Promise((resolve) => server.close(resolve));
}

generatePDF().catch((err) => {
	console.error(err);
	process.exit(1);
});
