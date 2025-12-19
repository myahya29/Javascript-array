
// 1
let students = [ "Muhammad","Yahya", "Ali", ];
console.log(students);
students.push("Ubaid");
console.log(students);

// 2
let fruits = ["Orange", "Mangoes", "Bananas"];
fruits.pop();
console.log(fruits);

// 3
let days = ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
days.unshift("Monday");
console.log(days);

// 4
let colors = ["Yellow", "Orange", "Red", "Tomato", "Purple", "Blue"];
colors.shift();
console.log(colors);

// 5
let subjects = ["Islamiat", "Urdu", "English", "Geography", "Statisitcs"];
subjects.splice(2, 0, "Math", "Science");
console.log(subjects);

// 6
let cities = ["Quetta", "Sukkur", "Sialkot", "Islamabad", "Karachi"];
console.log(cities);
cities.splice(1, 2);
console.log(cities);

// 7
let countries = ['Pakistan', 'China', 'Yemen', 'Kazakhistan', 'India', 'Russia'];
console.log(countries.slice(0, 3));

// 8
let fruits2 = "apple,banana,mango";
let fruitsArray = fruits2.split(",");
console.log(fruitsArray);

// 9. Join an array of characters ['J','S'] into a single string using join().
let array = ["j","S"];
console.log(array.join(""))
// 10. Combine two arrays ['pen','pencil'] and ['eraser','sharpener'] using
// concat().
let stationary1 = ['pen','pencil'];
let stationary2 = ['eraser','sharpener'];
let allStationary = stationary1.concat(stationary2);
console.log(allStationary)
// 11. Sort an array of numbers [10, 5, 2, 8] using sort() (as strings).
let numbers = [10, 5, 2, 8];
let newNumbers = numbers.map(String);
newNumbers.sort();
console.log(newNumbers);

// 12. Sort an array of names alphabetically using sort().
let names = ["ali", "Zubair","Khan","Azhar","Jamaal","Abdullah",];
let sortNames = names.sort();
console.log(sortNames);

// 13. Reverse the order of an array of numbers using reverse().
numbers.reverse();
console.log(numbers);
// 14. Use indexOf() to find the index of "Blue" in a colors array
console.log(colors.indexOf("Blue"));
// 15. Add three new items to an empty array using push().
let emptyArray = [];
emptyArray.push("Hello!", "How", "Are You?");
console.log(emptyArray[1]);

// 16. Remove the middle item from an array of 5 numbers using splice().
let numberArray = [1, 2, 3, 4, 5];
numberArray.splice(2,1);
console.log(numberArray);
// 17. Create a string "HTML CSS JavaScript" and convert it to an array using split().
let website = "HTML CSS JavaScript";
let websiteArray = website.split(" ");
console.log(websiteArray);

// 18. Create an array ['a', 'b', 'c'], reverse it, then join it with - in between.
// 18. Create an array ['a', 'b', 'c'], reverse it, then join it with - in between.

let letters = ['a', 'b', 'c'];
let result = letters.reverse().join('-');
console.log(result); 
// 19. Check if "Karachi" exists in an array using indexOf() and show its index.
console.log(cities.indexOf("Karachi")); 
// 20. Concatenate two arrays of even and odd numbers using concat() and then reverse
// them.
let oddNumbers = [1, 3, 5, 7, 9];
let evenNumbers = [2, 4, 6, 8, 10];
let naturalNumbers = oddNumbers.concat(evenNumbers);
console.log(naturalNumbers);
naturalNumbers.reverse();
console.log(naturalNumbers);
//Assignment Complete



