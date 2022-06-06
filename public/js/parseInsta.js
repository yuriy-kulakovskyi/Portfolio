const Insta = require('scraper-instagram');
const InstaClient = new Insta();
const fs = require("fs");

InstaClient.authBySessionId('11634522357%3A8y6xKnqG2iAh9R%3A7')
	.then(profile => {

		fs.writeFileSync('parseInstainfo.js', '$("#instagram__username").text("'+ profile.first_name +'"); $("#instagram__nickname").text("'+profile.username+'"); $("#instagram__bio").text(`'+ profile.biography +'`)');
	})