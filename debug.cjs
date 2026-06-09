const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => {
    for (let i = 0; i < msg.args().length; ++i)
      console.log(`${i}: ${msg.args()[i]}`);
  });

  page.on('pageerror', error => {
    console.error(`Page Error: ${error.message}`);
  });

  page.on('requestfailed', request => {
    console.error(`Request Failed: ${request.url()} - ${request.failure().errorText}`);
  });

  try {
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle0', timeout: 10000 });
  } catch (e) {
    console.error(`Goto error: ${e.message}`);
  }
  
  await browser.close();
})();
