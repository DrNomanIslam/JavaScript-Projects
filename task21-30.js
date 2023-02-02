var students = ["Noman", "Asad", "Rashid", "Agha"];
var teachers = ["Dr. Imran", "Dr. Zubair", "Dr. Zamin"];


//Then think of something you could store in a JavaScript Object. Write a program that creates Objects containing these items.

var list = {

    students : ["Noman", "Asad", "Rashid", "Agha"],
    teachers : ["Dr. Imran", "Dr. Zubair", "Dr. Zamin"]

}

//console.log("Teacher at index 7 is "+ teachers[7]);

/*
Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
*/

let car = 'subaru';
let bike= 'yamaha';
console.log(car == 'subaru'? "I predict True.": "False")
console.log(car == 'subaru');
console.log(car != 'subaru');
console.log(bike=='yamaha');
console.log(bike!='yamaha');
console.log(car=='subaru' && bike=='yamaha');
console.log(car!='subaru' && bike=='yamaha');
console.log(car=='subaru' && bike!='yamaha');
console.log(car!='subaru' && bike!='yamaha');
console.log(car=='Mehran' && bike=='yamaha');
console.log(car=='Corolla' && bike=='yamaha');
console.log(car=='subaru' && bike=='kawasaki');

/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/

console.log(car.toLowerCase()=='corolla' && bike=='yamaha');
console.log(car=='Corolla' || bike=='yamaha');

console.log("Noman" in students);

console.log(! ("Noman" in students));

/*
Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
*/

const alien = "Green";
if(alien=="Green") {
    console.log("You have earned 5 points");
}

if(alien=="Red") {
    
}else{
    console.log("Sample output");
}

/*
Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.
*/

var c = "Purple";

if(c=="Green") {
    console.log("You have earned 5 points");
}else{
    console.log("You have earned 10 points");
}

c="Green";
if(c=="Green") {
    console.log("You have earned 5 points");
}else{
    console.log("You have earned 10 points");
}

/*
Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.
*/

c="Green";
if(c=="Green") {
    console.log("You have earned 5 points");
}else if (c=="Yellow") {
    console.log("You have earned 10 points");
}else if(c=="Red") {
    console.log("You have earned 15 points");
}


c="Yellow";
if(c=="Green") {
    console.log("You have earned 5 points");
}else if (c=="Yellow") {
    console.log("You have earned 10 points");
}else if(c=="Red") {
    console.log("You have earned 15 points");
}


c="Red";
if(c=="Green") {
    console.log("You have earned 5 points");
}else if (c=="Yellow") {
    console.log("You have earned 10 points");
}else if(c=="Red") {
    console.log("You have earned 15 points");
}

/*
Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder.
*/

var age = 10;
if(age<2) console.log("Baby");
else if(age<4) console.log("Toddler");
else if(age<13) console.log("kid");
else if(age<20) console.log("Teenage");
else if(age<65) console.log("Adult");
else console.log("Elder")

/*
Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
*/
var favorite_fruits = ["Apple", "Orange", "Banana", "Peach", "Gauva"];
if("Apple" in favorite_fruits) ;
if("Orange" in favorite_fruits) ;
if("Banana" in favorite_fruits) {}
if("Peach" in favorite_fruits) {}
if("Gauva" in favorite_fruits) {}

/*
Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
*/
var users = ["noman", "ali", "saleem", "admin", "ahmed"];

for (var i=0;i<users.length;i++) {
    if(users[i]=="admin") console.log("Hello admin, would you like to see a status report?");
    else console.log("Hello " + users[i]  + " Thank you for loggin in");

}