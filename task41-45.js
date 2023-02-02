//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

var magicians = ["Tom", "Dick", "Herry"];

function show_magicians(mgs) {
    mgs.forEach(element => {
        console.log(element);
    });
}
show_magicians(magicians);

//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function make_great(mgs) {
    for(var i=0;i<mgs.length;i++) {
        mgs[i] = "Great " + mgs[i];
    }
}
make_great(magicians);
show_magicians(magicians);

//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
magicians = ["Tom", "Dick", "Herry"];
var new_magicians = magicians.slice()
make_great(new_magicians);
console.log("New array : ");
show_magicians(new_magicians);

console.log("Original array : ");
show_magicians(magicians);

//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function make_sandwich(...items) {
    console.log("This sandwich has following items : ");
    items.forEach(
        (item) => {
            console.log(item);
        }
    );
}

make_sandwich("Salt", "Cheese", "Ketchup", "Bread");
make_sandwich("Cheese", "Ketchup", "Bread");
make_sandwich("Salt", "Cheese", "Ketchup", "Bread", "Aginomoto");

//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function store_car(manufacturer,model, {color="Red", price=20}={}) {
    this.manufacturer=manufacturer;
    this.model=model;
    this.color=color;
    this.price=price;    
}

let car1 = new store_car("Honda", 2020, {color:"Blue"});
console.log(car1);
let car2 = new store_car("Civic", "2021", {color:"Blue", price: 80});
console.log(car2);