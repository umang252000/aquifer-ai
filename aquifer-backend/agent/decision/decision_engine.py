def choose_best_supplier(suppliers):

    best_supplier = None
    best_score = 999999

    for supplier in suppliers:

        price = supplier["price"]
        delivery = supplier["delivery_days"]
        rating = supplier["rating"]

        score = price + delivery - (rating * 10)

        if score < best_score:
            best_score = score
            best_supplier = supplier

    return best_supplier