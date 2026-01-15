// const config = require("./next.config");

const commit_sha = process.env.CF_PAGES_COMMIT_SHA; 
const project = process.env.CF_PAGES_PROJECT_NAME; 
const previewUrl = (commit_sha && project) ? `https://${commit_sha}.${project}.pages.dev` : undefined;

module.exports = {
	siteUrl: previewUrl || "https://acevedomiguel.com",
	generateRobotsTxt: true,
	outDir: "out",
};
