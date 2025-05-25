
interface Item {
    name: string,
    price: number|string
}


class ShoppingCart {

    //need an array to store the items
    private items: Item[] = [];


    addItem(item: Item): void{
        if(!item.name || item.price == null){
            throw new Error("items must have name or price");
        }
        else{
            this.items.push(item);
            console.log(`Added ${item.name} to the cart`);
        }
    }


    removeItem(name: string): void{
        // get the length of array
        let itemsLength = this.items.length;
        //creates a new array keeping only the items that donot match the name parameter
        this.items = this.items.filter((item) => item.name !== name);
        //match the itemslength if same then item not there if not same then item removed
        if(this.items.length < itemsLength){
            console.log(`Removed ${name} from the cart`);
        }
        else{
            console.log(`Item ${name} not found in the cart`);
        }
    }

    getTotalPrice(): number {
         return this.items.reduce((total, item) => {
            let price: number;
            // Type narrowing for price
            if (typeof item.price === "string") {
                // Remove any non-numeric characters (e.g., "$") and convert to number
                price = parseFloat(item.price.replace(/[^0-9.]/g, ""));
                if (isNaN(price)) {
                console.warn(`Invalid price format for ${item.name}: ${item.price}`);
                return total; // Skip invalid prices
                }
            } else {
                price = item.price;
            }
            return total + price;
            }, 0);
    }


    displayCart(): void {
        if (this.items.length === 0){
            console.log("cart is empty");
            return;
        }
        else {
            console.log("Cart Contents:");
            this.items.forEach((item) => {
            console.log(`- ${item.name}: ${item.price}`);
            });
            console.log(`Total Price: $${this.getTotalPrice().toFixed(2)}`);
        }
    }


    getItemCount(): number{
        return this.items.length;
    }

}

function main(){
    const cart = new ShoppingCart();

    try{

        cart.addItem({name: "Laptop", price: 200.50});
        cart.addItem({name: "Headphones", price: "$22.33"});
        cart.addItem({name: "Mouse", price: 10});
        cart.addItem({name: "Keyboard", price: "50.50"});


        cart.displayCart();

        cart.removeItem("Mouse");
        cart.displayCart();

        //remove not available item
        cart.removeItem("House");
        //add an invalid item
        cart.addItem({name:"", price: ""});

        cart.displayCart();

    } catch (error){
        console.error("Error", error.message);
    }
}

main();