const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Visiter l'URL HTTP
  await page.goto('https://ta.bigolive.tv/spring_bigolive_activity/act2021/share39011/mm?code=6893554100&uid=2948801479&room=7015338174445824037&actor=560092345&roomType=1&shareType=');

  // Ouvrir le Deep Link
  await page.evaluate(() => {
    window.location.href = "bigolive://livevideoshow?roomid=7015338174445824037&uid=560092345&visitor=1";
  });

  // Fermer le navigateur
  await browser.close();
})();
