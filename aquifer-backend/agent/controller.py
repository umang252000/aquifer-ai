from agent.suppliers.indiamart_agent import search_indiamart
from agent.suppliers.alibaba_agent import search_alibaba
from agent.suppliers.amazon_agent import search_amazon
from agent.decision.decision_engine import choose_best_supplier
from agent.orders.order_agent import place_order
from utils.logger import log

def run_procurement_agent(product, quantity):

    log("AI Agent Started")

    log("Step 1: Searching IndiaMART")
    indiamart = search_indiamart(product)

    log("Step 2: Searching Alibaba")
    alibaba = search_alibaba(product)

    log("Step 3: Searching Amazon")
    amazon = search_amazon(product)

    suppliers = indiamart + alibaba + amazon

    log("Step 4: Comparing suppliers")
    best = choose_best_supplier(suppliers)

    log(f"Step 5: Best supplier selected: {best['supplier']}")

    log("Step 6: Placing order")
    order = place_order(product, quantity, best)

    log("AI Agent Completed")

    return {
        "all_suppliers": suppliers,
        "best_supplier": best,
        "order": order
    }