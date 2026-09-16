console.log('1. Variables: const, let, and var');

const name = "Vicky";
let age = 22;
var country = "Italy";

age = 25; // Reassigning a variable

if (age >= 18) {
  const message = `${name} is over 18.`;
  let status = "adult";
  console.log(message, status);
}

console.log(country); // Italy
// console.log(status); // ReferenceError: status is not defined


console.log('2. Data Types, null, and undefined');

const products = ['milk', 'bread', 'eggs'];
const product = {
  name: 'milk',
  price: 1.67,
  inStock: true
};

console.log(typeof products);        // object
console.log(typeof product);         // object
console.log(typeof product.name);    // string
console.log(Array.isArray(products)); // true
console.log(Array.isArray(product));  // false


console.log('3. Operators and Type Conversion');

const x = 10;
const y = "5";
const z = 5;

console.log(x + y); // 105 - string conversion
console.log(x + z); // 15
console.log(x - z); // 5
console.log(x * z); // 50
console.log(x / z); // 2
console.log(x ** 2); // 100
console.log(x % z); // 0


console.log('4. Strings and Template Literals');

const firstName = "Vicky";
const middleName = "  Lily  ";
const lastName = "Smith";

const fullName = `${firstName} ${middleName} ${lastName}`;

console.log(fullName);
console.log(fullName.length);
console.log(middleName.toLowerCase());
console.log(middleName.trim( ));
console.log(lastName.includes("Smith"));
console.log(`Hello, ${fullName.toUpperCase()}!`);


console.log('5. Comparisons, Logical Operators, and Decisions');

const age2 = 20;
const isLoggedIn = true;

console.log(age2 === 20); // true
console.log(age2 !== 18); // true
console.log(age2 > 18);   // true
console.log(age2 < 25);   // true
console.log(age2 >= 20);  // true
console.log(age2 <= 20);  // true

console.log(5 === "5"); // false
console.log(5 == "5");  // true


console.log(age2 >= 18 && isLoggedIn); // true
console.log(age2 < 18 || isLoggedIn);  // true
console.log(!isLoggedIn);             // false

console.log(Boolean(""));        // false
console.log(Boolean(0));         // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean("Hello"));   // true

const ageStatus = (age) => {
  if (age < 13) {
    return "Child";
  } else if (age < 18) {
    return "Teenager";
  } else {
    return "Adult";
  }
};

const message = ageStatus(age2) === "Adult" && isLoggedIn
  ? "Welcome!"
  : "Please log in.";

console.log(message);

console.log('6. Numbers and the Math Object');

const num1 = 10;
const num2 = 3;
const num3 = 7.4;
const randomNum = Math.random() * 5 + 1; // Random number between 1 and 6

console.log(Math.round(num3)); // 7
console.log(Math.ceil(num3));  // 8
console.log(Math.floor(num3)); // 7
console.log(Math.max(num1, num2, num3)); // 10
console.log(Math.min(num1, num2, num3)); // 3
console.log(Math.round(randomNum));  // Rounded random number

console.log('7. Arrays and Loops');

const animals = ['dog', 'parrot', 'turtle', 'hamster'];

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

if (animals.includes('parrot')) {
  console.log('Parrot is a pet.');
}
else {
  console.log('Parrot is not a pet.');
}

animals.push('rabbit');
console.log(animals);
animals.pop();
console.log(animals);

for (const animal of animals) {
  console.log(animal);
}

let animalcount = 0;
for(let i = 0; i < animals.length; i++) {
    animalcount++;
}
console.log(`Total number of animals: ${animalcount} are pets.`);

while (animals.includes('dog')) {
  console.log('Dog is a pet.');
  break; // Prevents infinite loop
}

console.log('8. Objects and Handling Missing Data');

const customer = {
    name: 'John',
    age: 30,
    address: {
        street: '1 Main St',
        city: 'New York',
    },
    status: 'active'
};

console.log(customer.name); // John
console.log(customer.age); // 30
console.log(customer.address.city); // New York

console.log(customer.phoneNumber = 2222);
console.log(customer.address.street = '2 Main St');

console.log(customer.phoneNumber);   // 2222
console.log(customer.address.street); // 2 Main St

console.log(customer.address.country?.zipcode); // undefined

console.log(customer.email ?? 'Email not provided'); // Email not provided

// ?? vs ||
console.log(false ?? true);  // false
console.log(false || true);  // true

const profile = {
  name: 'John',
  age: 30
};

const email = profile.email ?? 'No email provided';
const city = profile.address?.city ?? 'No city provided';

console.log(`${profile.name}, ${email}, ${city}`);


console.log('9. Functions: Reusable Behavior');

const names = ['Alice', 'Bob', 'Charlie'];

function greet(name){
    return `Hello, ${name}!`;
    console.log('doesnt run');
}

// Calling the function + argument
console.log(greet('Alice'));

//giving new value to the parameter
function greetStranger(name = "Tom") {
    console.log(`Hello, ${name}!`);
}

greetStranger();
// Calling the function with a new value
greetStranger('Liisa');

//return and console.log

function add(a, b) {
    return a + b;
}

const sum = add(5, 3);
console.log(`The sum is: ${sum}`);

//function wihtout return value
function ProfileInfo(name, age) {
    console.log(`Name: ${name}, Age: ${age}`);
}

const  account = ProfileInfo('John', 30);
console.log(account); // undefined


console.log('10. Arrow Functions and Callbacks');

//func expression
const sayHi = function(name) {
    return `Hello, ${name}!`;
}

const multiply = (a, b) => a * b;
console.log(multiply(4, 5)); // 20

// implicit vs explicit return
const sayHiImplicit = (name) => `Hello, ${name}!`;

const sayHiExplicit = name => {
    return `Hello, ${name}!`;
};

// Callback func example
function calculate(number, callback) {
    return callback(number);
}

const result = calculate(5, number => number * 2);
console.log(result); // 10

//callback with forEach()
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(number => 
    console.log(number * 2));

console.log('11. Array Methods: map, filter, and find');

const mapArray = [1, 2, 3, 4, 5];

const sqrdNums = mapArray.map(number => number ** 2);
console.log(sqrdNums); // [1, 4, 9, 16, 25] 

const animalArray = ['butterfly', 'cat', 'dog',
     'elephant', 'fox', 'giraffe', 'horse', 
     'iguana', 'jaguar', 'kangaroo', 'lion', 
     'monkey', 'newt', 'octopus', 'penguin', 
     'quail', 'rabbit', 'snake', 'tiger', 
     'urchin', 'vulture', 'wolf', 'xenops', 
     'yak', 'zebra'];

const filteredAnimals = animalArray.filter(animal => animal.length < 5);
console.log(filteredAnimals); // ['cat', 'dog', 'fox', 'lion', 'newt', 'quail', 'wolf', 'yak']

const findArray = [105, 260, 343, 4358, 5358, 598, 40, 254, 99];
const findFirst = findArray.find(number => number < 100);
console.log(findFirst); // 99

//no match found
const findNoMatch = findArray.find(number => number > 6000);
console.log(findNoMatch);

console.log('12. Destructuring and Spread Syntax');

const zodiacs = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo'];
const [first, third, ...rest] = zodiacs;
console.log(first);
console.log(third);
console.log(rest);

const alien1 = {
    firstName: 'Wee',
    lastName: 'Woo',
    age: 300,
    address: {
        street: '99 pancakes cave',
        city: 'Moonland',
        country: 'donut'
    },
}

const alien2 = {
    firstName: 'Zee',
    lastName: 'Zoo',
    age: 250,
    address: {
        street: '100 baffles way',
        city: 'Cinnamonroll',
        country: 'plate'
    },
}

const {firstName: name1, address: {city: city2}} = alien1;

console.log(name1, city2);

const copiedZodiacs = [...zodiacs];
console.log(copiedZodiacs);

const moreZodiacs = [...zodiacs, 'Libra', 'Scorpo', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
console.log(moreZodiacs);

const alien3 = {...alien1, firstName: 'Dee', age: 400};
console.log(alien3);

const dinodaurus = {
    name: 'T-Rex'
}

//name change
dinodaurus.name = 'Z-Rex';

const copiedDino = {...dinodaurus};
copiedDino.name = 'Y-Rex';
console.log(dinodaurus.name);

console.log('13. Modules: import and export');

import {bye, sub} from './task_1-1.js';

import CUAgain from './task_1-1.js';

console.log(bye('Anna'));
console.log(sub(140));
console.log(CUAgain('Moth'));


console.log('14. Asynchronous JavaScript: Promises and async/await');

// A promise gives a result
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Data received!'), 1000);
});

// Pending promise
console.log(promise);

// async + await
async function getData() {
  const result = await promise;
  console.log(result);
}

getData();

const rejectedPromise = new Promise((resolve, reject) => {
  reject('Something went wrong!');
});

rejectedPromise.catch(error => {
  console.log('Error:', error);
});


console.log('15. Fetching Data, JSON, and Error Handling');

async function getUser() {
  try {
    const response = await fetch(
      'https://dummyjson.com/users/1'
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const user = await response.json();

    console.log(`Name: ${user.firstName} ${user.lastName}`);
    console.log(`Age: ${user.age}`);
    console.log(`Email: ${user.email}`);
  } catch (error) {
    console.log('Error:', error.message);
  }
}

getUser();