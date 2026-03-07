from agent.controller import run_procurement_agent

def calculate_insights(suppliers, best_supplier):

    prices = [s["price"] for s in suppliers]

    avg_price = sum(prices) / len(prices)

    best_price = best_supplier["price"]

    savings = avg_price - best_price

    return {
        "total_suppliers": len(suppliers),
        "average_price": round(avg_price, 2),
        "best_price": best_price,
        "estimated_savings": round(savings, 2)
    }


def start_procurement(product_name, quantity):

    result = run_procurement_agent(product_name, quantity)

    suppliers = result["all_suppliers"]
    best = result["best_supplier"]

    insights = calculate_insights(suppliers, best)

    return {
        "status": "completed",
        "data": {
            "suppliers": suppliers,
            "best_supplier": best,
            "order": result["order"],
            "insights": insights
        }
    }