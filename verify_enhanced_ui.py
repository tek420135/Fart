import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1280, 'height': 1600})
        await page.goto('http://localhost:8000')

        # Wait for GSAP animations to settle slightly
        await page.wait_for_timeout(2000)

        # Take full page screenshot
        await page.screenshot(path='potgrowhub_v3_enhanced.png', full_page=True)

        # Click a smoke puff to verify modal
        await page.click('text=Mission')
        await page.wait_for_timeout(1000)
        await page.screenshot(path='potgrowhub_modal_check.png')

        await browser.close()

asyncio.run(main())
