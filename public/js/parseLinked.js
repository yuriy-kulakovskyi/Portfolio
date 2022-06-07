const { LinkedInProfileScraper } = require('linkedin-profile-scraper');
const fs = require('fs');
 
(async() => {
  try {
    const scraper = new LinkedInProfileScraper({
      sessionCookieValue: 'AQEDATYQk1MDCtz2AAABgI7bxDIAAAGAsuhIMk4AVLdqUpa-PAItbkQCA0yCh1KnYqyymr1ZmCk4Pw17gS56WwUwFF6jgCeBggiDDyWeLO7WqPr_8J42UjNIjFd4bzM4txNDNGYz-CTIElRDiG8q6XRs'
    });
 
    await scraper.setup()
 
    const result = await scraper.run('https://www.linkedin.com/in/yuriy-kulakovskyi-783930213/')
  
    console.log(result.userProfile);
    let nickname = (result.userProfile.url).substr(28, 17);
    let connections = result.userProfile.fullName;
    let photo = result.userProfile.photo;
    let firmname = result.userProfile.title;

    fs.writeFileSync('parseLinkedinfo.js', `$("#linkedin__image").css("background-image", "url(${photo})");
$("#nickname").text('${nickname}');
$("#username").text('Yuriy Kulakovskyi');
$("#connections").text("${connections}");
$("#firmname").text("Company: ${firmname}");
`)

  } catch (err) {
    if (err.name === 'SessionExpired') {
      console.log("User is not logged in");
    }
  }

const { LinkedInProfileScraper } = require('linkedin-profile-scraper');
const fs = require('fs');
 
(async() => {
  try {
    const scraper = new LinkedInProfileScraper({
      sessionCookieValue: 'AQEDATYQk1MDCtz2AAABgI7bxDIAAAGAsuhIMk4AVLdqUpa-PAItbkQCA0yCh1KnYqyymr1ZmCk4Pw17gS56WwUwFF6jgCeBggiDDyWeLO7WqPr_8J42UjNIjFd4bzM4txNDNGYz-CTIElRDiG8q6XRs'
    });
 
    await scraper.setup()
 
    const result = await scraper.run('https://www.linkedin.com/in/yuriy-kulakovskyi-783930213/')
  
    console.log(result.userProfile);
    let nickname = (result.userProfile.url).substr(28, 17);
    let connections = result.userProfile.fullName;
    let photo = result.userProfile.photo;
    let firmname = result.userProfile.title;

    fs.writeFileSync('parseLinkedinfo.js', `$("#linkedin__image").css("background-image", "url(${photo})");
$("#instagram__image").css("background-image", "url(${photo})");
$("#nickname").text('${nickname}');
$("#username").text('Yuriy Kulakovskyi');
$("#connections").text("${connections}");
$("#firmname").text("Company: ${firmname}");
`)

  } catch (err) {
    if (err.name === 'SessionExpired') {
      console.log("User is not logged in");
    }
  }
  })()
})