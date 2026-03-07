import uuid
from utils.logger import log

def place_order(product, quantity, supplier):

    log(f"Placing order with supplier: {supplier['supplier']}")

    order_id = str(uuid.uuid4())[:8]

    order = {
        "order_id": order_id,
        "product": product,
        "quantity": quantity,
        "supplier": supplier["supplier"],
        "price": supplier["price"],
        "delivery_days": supplier["delivery_days"],
        "website": supplier["website"],
        "status": "Order Placed"
    }

    log(f"Order successfully placed. Order ID: {order_id}")

    return order