//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var names = ["Noman", "Saleem", "Rashid"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
console.log("Hello " + names[0]);
console.log("Hello " + names[1]);
console.log("Hello " + names[2]);

//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

var modes = ["Qingki" , "Bike"];
console.log("I like to ride " + modes[0]);
console.log("I like to own " + modes[1]);

//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

var guests = ["Mustafa", "Taha", "Farah"]
for(var i=0;i<guests.length;i++) {
    console.log(guests[i] + " You are invited for lunch");
}

//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

guests[1]="Shakeela";
for(var i=0;i<guests.length;i++) {
    console.log(guests[i] + " You are invited for lunch");
}

/*Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
Print a second set of invitation messages, one for each person who is still in your list.
*/


for(var i=0;i<guests.length;i++) {
    if(i==1)
        console.log(guests[i] + " can't come for dinner");
    else
        console.log(guests[i] + " You are invited for lunch");
}

guests[1]="Taha";

for(var i=0;i<guests.length;i++) {
    console.log(guests[i] + " you are invited for dinner");
}

//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//Add one new guest to the beginning of your array.
//Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

for(var i=0;i<guests.length;i++) {
    console.log(guests[i] + " A bigger table has been found for dinner");
}

guests.splice(0, 0, "Rashid");

len = guests.length
guests.splice(len/2, 0, "Asad");
guests.push("Naheed")

for(var i=0;i<guests.length;i++) {
    console.log(guests[i] + " You are invited for dinner");
}


/*
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
*/

console.log("We are sorry. We can accommodate only two people for dinner");


while (guests.length!=2) {
    console.log("We are sorry, we can't accommodate you " + guests.pop());
}

for(var i=0;i<guests.length;i++) {
    console.log("Welcome " + guests[i]);
}

guests.pop();
guests.pop();

console.log("Guests now are " + guests);

/*
Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/

var locations = ["Makkah" , "Medina", "Aldquds", "Turkey", "Iraq"];

console.log("The locations are : " + locations);

console.log("The locations in sorted order are " + locations.slice().sort());

console.log("Original list still is " + locations);

console.log("The list in reverse is " + locations.reverse());

console.log("Reversing again. The list is " + locations.reverse());

console.log("List in alphabetical order " + locations.sort());

console.log("List in reverse alphabetical order " + locations.sort().reverse());

//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

console.log("The nubmber of people for dinner are " + guests.length);

//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var students = ["Noman", "Asad", "Rashid", "Agha"];
var teachers = ["Dr. Imran", "Dr. Zubair", "Dr. Zamin"];

