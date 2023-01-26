const Insta = require('scraper-instagram');
const InstaClient = new Insta();
const fs = require("fs");

InstaClient.authBySessionId('')
	.then(profile => {
		fs.writeFileSync('parseInstainfo.js', '$("#instagram__username").text("'+ profile.first_name +'"); $("#instagram__nickname").text("'+profile.username+'"); $("#instagram__bio").text(`'+ profile.biography +'`)');
	})