const config = require("./next.config");
module.exports = {
	siteUrl: config.siteUrl,
	generateRobotsTxt: true,
	outDir: "out",
};
