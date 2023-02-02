/*
No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.
*/
var users = ["noman", "ali", "saleem", "admin", "ahmed"];

if(users.length==0) console.log("We need to find some users!");

while(users.length!=0) users.pop();
if(users.length==0) console.log("We need to find some users!");

/*
Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/

current_users = ['john','peter','naeem', 'sam'];
new_users=['lorraine', 'Sam', 'xyz'];

users = current_users.map(
    function(u) {
        return u.toLowerCase()
    }
);

for(var i=0;i<new_users.length;i++) {
    if(users.includes(new_users[i].toLowerCase())) {
        console.log(new_users[i] + " should enter a new name");
    }else{
        console.log(new_users[i] + " is available");
    }
}

/*
Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
*/

var numbers = [1,2,3,4,5,6,7,8,9];

for(var i=0;i<numbers.length;i++) {
    if(numbers[i] == 1) {
        console.log("1st");
    }else if(numbers[i]==2) {
        console.log("2nd");
    }else if(numbers[i]==3) {
        console.log("3rd")
    }else{
        console.log(numbers[i] +"th");
    }
}

/*
Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
*/
var pizzas = ['Fujita', 'Tikka', 'Cheesy'];

pizzas.forEach(
    function(pizza) {
        console.log("I love " + pizza);
    }
);
console.log("I love Cheesy pizza. It comprises lot of cheese. Cheese is good for health. I really love this pizza");


//Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
var pets = ["Hen", "Pigeon", "Duck"];
pets.forEach((pet)=> {
    console.log(pet+ " would make a great pet");
});
console.log("These pets " + pets + " are all birds");
console.log("Any of them could make a great pet");

//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size="Large", text="I love JavaScript") {
    console.log("The size of t-shirt is " + size);
    console.log("The text on t-shirt is " + text);
}
make_shirt();
make_shirt("Large");
make_shirt("Medium");
make_shirt("X Large", "I love creating t-shirts");

//Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

function describe_city(city, country = "Pakistan") {
    console.log(city +  " is in " + country);
}
describe_city("Lahore");
describe_city("Dubai", "UAE");
describe_city("Kolkutta", "India");

/*
City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.
*/

function city_country(city,country) {
    return city + "," + country;
}

console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Colombo", "Srilanka"));
console.log(city_country("Dhaka", "Bangladesh"));


//Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

function make_album(artist, title, tracks) {
    this.artist=artist;
    this.title=title;
    if(tracks != undefined) {
        this.tracks = tracks;

    }
}

var album1 = new make_album("Sajjad Ali", "Babiya");
var album2 = new make_album("Atif Aslam", "Aanso");
var album3 = new make_album("Adnana Sami", "Dholki");

console.log(album1, album2,album3);



