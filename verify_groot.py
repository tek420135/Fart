import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        await page.goto("http://localhost:4173")
        await page.wait_for_timeout(2000)
        await page.screenshot(path="groot_v2_hero.png", full_page=False, clip={"x": 0, "y": 0, "width": 1280, "height": 800})
        await browser.close()

asyncio.run(run())
