//Task 1: Create the Order System

let orders =[
    ["Latte", "Tea", "Espresso"],
    ["Croissant","Muffin","Bagel"]
];

//Task 2: Log the number of drinks and number of pastries by using .length on each
console.log(`Number of drinks:- ${orders[0].length}`);
console.log(`Number of pastries:- ${orders[1].length}`);  

//Task 3: Access Orders Using Bracket Notation
console.log(`Combo 1 ${orders[0][0]} and ${orders[1][2]}`);
console.log(`Combo 2 ${orders[0][1]} and ${orders[1][1]}`);
console.log(`Combo 3 ${orders[0][2]} and ${orders[1][0]}`);

//Task 4: Access Orders Dynamically with Variables

console.log("Orders are ..");
for (let i=0;i<orders.length;i++)
    {
        
        for(let j=0;j<orders[i].length;j++)
        {

                console.log(`${orders[i][j]}`);
        }
    }
//Task 5: Write a loop that logs all the items in the drink category, ensuring the loop dynamically adjusts to the number of items using .length

for (let d=0;d<orders[0].length;d++)
    {
        console.log(`Drink ${d} is ${orders[0][d]}`);
    }
// Task 6 Add "flat white” to the drinks category dynamically.

console.log(`The number of drinks at present is ${orders[0].length}`);
let new_drink = orders[0].push("flat white");

console.log(`Updated number of drinks is ${new_drink}`);

let row =0; let item=orders[row].pop();

console.log(`The new order received is ${item}`);
