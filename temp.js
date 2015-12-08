
db.product.insert(
    [
        {"product_name": "Package One", "price": 100},
        {"product_name": "Package Two", "price": 200},
        {"product_name": "Package Three", "price": 300},
        {"product_name": "Package Four", "price": 400}
    ]
);

db.users.insert(
    [
        {"username": "David", "email": "david@gmail.com", "password": "123", "admin": true},
        {"username": "Bob", "email": "bob@gmail.com", "password": "12345", "admin": false},
        {"username": "Johnny", "email": "johnny@gmail.com", "password": "123", "admin": false}
    ]
);

db.orders.insert(
    [
        {"orders": [{"order_number": 1, "product_id": 1}, {"order_number": 2, "product_id": 2}]},
        {"orders": [{"order_number": 3, "product_id": 3}, {"order_number": 4, "product_id": 4}]},
        {"orders": [{"order_number": 5, "product_id": 2}, {"order_number": 6, "product_id": 3}]}
    ]
);

db.location.insert(
    [
        {
            "locations": [
                {
                    "order_number": 1,
                    "address": "1234 Deer Dr",
                    "zipcode": 75024,
                    "city": "Plano",
                    "state": "TX"
                },
                {

                    "order_number": 2,
                    "address": "1346 Bob Rd",
                    "zipcode": 75078,
                    "city": "Richardson",
                    "state": "TX"
                }
            ]
        },
        {
            "locations": [
                {
                    "order_number": 3,
                    "address": "3724 Llama Dr",
                    "zipcode": 75075,
                    "city": "Plano",
                    "state": "TX"
                },
                {

                    "order_number": 4,
                    "address": "2438 Tarrant Rd",
                    "zipcode": 75071,
                    "city": "Mckinney",
                    "state": "TX"
                }
            ]
        },
        {
            "locations": [
                {
                    "order_number": 5,
                    "address": "2134 Darkon Dr",
                    "zipcode": 75075,
                    "city": "Plano",
                    "state": "TX"
                },
                {

                    "order_number": 6,
                    "address": "9927 Zealot Rd",
                    "zipcode": 75025,
                    "city": "Plano",
                    "state": "TX"
                }
            ]
        }
    ]
);

db.delivery_date.insert (
    [
        {
            "date": 1448864642
        },
        {
            "date": 1446099842
        },
        {
            "date": 1446272642
        },
        {
            "date": 1447136642
        },
        {
            "date": 1446791042
        },
        {
            "date": 1447136642
        }
    ]
);