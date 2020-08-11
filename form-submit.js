const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://childcaresearch.ohio.gov/export');
  const elementHandle = await page.$('#ContentPlaceHolder1_txtEmail');
  await elementHandle.type('jmilani@vitamix.com');
  await elementHandle.press('Enter');

  await browser.close();
})();