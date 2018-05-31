prices = { "Banana": 200, "Watermelon": 800, "Apple": 3000 }

Item = { "Banana": 3, "Watermelon": 2, "Apple": 12 }

function totalPrice(Item, prices) {
    total = 0;
    for (var key in Item) {
        if (Item.hasOwnProperty(key)) {
            total += Item[key] * prices[key];
        }
    }
    return total;
};