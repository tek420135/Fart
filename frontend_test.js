const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Start the server
  const { exec } = require('child_process');
  const server = exec('python3 -m http.server 4173');

  await new Promise(resolve => setTimeout(resolve, 2000));

  try {
    await page.goto('http://localhost:4173');
    await page.screenshot({ path: 'screenshot_hero.png', fullPage: false });

    const title = await page.title();
    console.log('Page Title:', title);

    const rootVisible = await page.isVisible('.groot-container');
    console.log('Groot container visible:', rootVisible);

    const searchVisible = await page.isVisible('#main-search');
    console.log('Search bar visible:', searchVisible);

    // Test customizer interaction
    await page.click('button:has-text("Custom Bong")');
    const customText = await page.innerText('#current-item');
    console.log('Customizer item after click:', customText);

    await page.screenshot({ path: 'screenshot_customizer.png' });

  } catch (error) {
    console.error('Error during frontend verification:', error);
  } finally {
    await browser.close();
    server.kill();
  }
})();
