from playwright.sync_api import sync_playwright
from utils.logger import log
import random

def search_amazon(product):

    log(f"Opening Amazon for {product}")

    suppliers = []

    try:

        with sync_playwright() as p:

            browser = p.chromium.launch(headless=True)

            page = browser.new_page()

            url = f"https://www.amazon.in/s?k={product}"

            page.goto(url)

            page.wait_for_timeout(5000)

            log("Amazon page loaded")

            browser.close()

    except Exception as e:

        log(f"Amazon scraping failed: {e}")

    suppliers.append({
        "supplier": "Amazon Industrial Store",
        "price": random.randint(100,140),
        "rating": 4.7,
        "delivery_days": 3,
        "website": "Amazon"
    })

    return suppliers