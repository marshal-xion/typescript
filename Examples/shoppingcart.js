var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        //need an array to store the items
        this.items = [];
    }
    ShoppingCart.prototype.addItem = function (item) {
        if (!item.name || item.price == null) {
            throw new Error("items must have name or price");
        }
        else {
            this.items.push(item);
            console.log("Added ".concat(item.name, " to the cart"));
        }
    };
    ShoppingCart.prototype.removeItem = function (name) {
        // get the length of array
        var itemsLength = this.items.length;
        //creates a new array keeping only the items that donot match the name parameter
        this.items = this.items.filter(function (item) { return item.name !== name; });
        //match the itemslength if same then item not there if not same then item removed
        if (this.items.length < itemsLength) {
            console.log("Removed ".concat(name, " from the cart"));
        }
        else {
            console.log("Item ".concat(name, " not found in the cart"));
        }
    };
    ShoppingCart.prototype.getTotalPrice = function () {
        return this.items.reduce(function (total, item) {
            var price;
            // Type narrowing for price
            if (typeof item.price === "string") {
                // Remove any non-numeric characters (e.g., "$") and convert to number
                price = parseFloat(item.price.replace(/[^0-9.]/g, ""));
                if (isNaN(price)) {
                    console.warn("Invalid price format for ".concat(item.name, ": ").concat(item.price));
                    return total; // Skip invalid prices
                }
            }
            else {
                price = item.price;
            }
            return total + price;
        }, 0);
    };
    ShoppingCart.prototype.displayCart = function () {
        if (this.items.length === 0) {
            console.log("cart is empty");
            return;
        }
        else {
            console.log("Cart Contents:");
            this.items.forEach(function (item) {
                console.log("- ".concat(item.name, ": ").concat(item.price));
            });
            console.log("Total Price: $".concat(this.getTotalPrice().toFixed(2)));
        }
    };
    ShoppingCart.prototype.getItemCount = function () {
        return this.items.length;
    };
    return ShoppingCart;
}());
function main() {
    var cart = new ShoppingCart();
    try {
        cart.addItem({ name: "Laptop", price: 200.50 });
        cart.addItem({ name: "Headphones", price: "$22.33" });
        cart.addItem({ name: "Mouse", price: 10 });
        cart.addItem({ name: "Keyboard", price: "50.50" });
        cart.displayCart();
        cart.removeItem("Mouse");
        cart.displayCart();
        //remove not available item
        cart.removeItem("House");
        //add an invalid item
        cart.addItem({ name: "", price: "" });
        cart.displayCart();
    }
    catch (error) {
        console.error("Error", error.message);
    }
}
main();
