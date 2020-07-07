SELECT *
    FROM orders
    LEFT JOIN 
        users 
    ON 
        orders.userId = users.id 
    LEFT JOIN 
        paymentstate_types
    ON 
        paymentstate_types.paymentState = orders.paymentState
    LEFT JOIN 
        payment_types AS pay
    ON 
        pay.payment = orders.deliveryState
    LEFT JOIN 
        delivery_types
    ON
        delivery_types.delivery = orders.delivery
    INNER JOIN  
        order_details AS details
    ON 
        details.orderId = orders.orderId
    LEFT JOIN  
        items
    ON 
        details.itemId = items.itemId
    WHERE
        orders.orderId = 1000520522