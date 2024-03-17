
// 44. Sandwiches: Write a  function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.


44
function orderSandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    
    if (items.length === 0) {
        console.log("No items selected. Your sandwich is empty.");
    } else {
        console.log("Items:");

        for (const item of items) {
            console.log( -{items});
        }

        console.log("Enjoy your sandwich!");
    }

    console.log("-------------------------");
}
orderSandwich("Club", "Cheese", "Lettuce", "Chicken");
orderSandwich("Mayo", "Swiss Cheese");
orderSandwich();
