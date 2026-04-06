from playwright.sync_api import sync_playwright, expect
import time

def verify_site():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.set_viewport_size({"width": 1280, "height": 800})

        # Navigate
        page.goto("http://localhost:8000")
        time.sleep(2) # Wait for GSAP

        # 1. Capture Hero
        page.screenshot(path="verification_hero.png")
        print("Captured verification_hero.png")

        # 2. Trigger Mission Modal via evaluate to bypass intercept
        page.evaluate("showInfo('Mission')")
        time.sleep(1)
        page.screenshot(path="verification_modal.png")
        print("Captured verification_modal.png")

        # 3. Close Modal
        page.evaluate("closeModal()")
        time.sleep(1)

        # 4. Scroll to Customizer
        page.locator("#customizer").scroll_into_view_if_needed()
        page.screenshot(path="verification_customizer.png")
        print("Captured verification_customizer.png")

        # 5. Interact with Customizer
        page.click("text=Custom Bong")
        time.sleep(1)
        page.screenshot(path="verification_customizer_interacted.png")
        print("Captured verification_customizer_interacted.png")

        browser.close()

if __name__ == "__main__":
    verify_site()
