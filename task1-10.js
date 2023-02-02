//Install Node.js and VS Code on your computer.

//Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var name = "NOman Islam"
console.log("Hello " + name +", I am reading metaverse today");

//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

console.log(name.toUpperCase());
console.log(name.toLowerCase());

words = name.toLowerCase().split(" ");

for(var i=0;i<words.length;i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}

console.log(words.join(" "));

//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

console.log("Tipu Sultan once said, \"To live like a lion for a day is far better than to live for a hundred years like a jackal.\"");

//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var author = "Tipu Sultan"
var quote = "To live like a lion for a day is far better than to live for a hundred years like a jackal."

console.log(author + " once said, \"" + quote + "\"")

//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
name = "\t  Zia Khan \n";
console.log(name);
console.log(name.trim());

//You should create four lines that look like this: console.log(5 + 3)
console.log(5+3);
console.log(5+3);
console.log(5+3);
console.log(5+3);

//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
var number = 10;
console.log("Favourite number is " + number);

/*
This is a task
Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
*/



