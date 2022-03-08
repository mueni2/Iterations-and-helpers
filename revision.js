// CONDITIONALS BMI calculator
///Q1 Store Mark's and John's mass and height in variables.

const markHeight = 1.65;
const markMass = 85;

const johnHeight = 1.90;
const johnMass = 120;

//Q2 Calculate both their BMIs and store their BMIs in variables. 

const markBMI = markMass / (markHeight * markHeight);
const johnBMI = johnMass / (johnHeight * johnHeight);

//Q3 Create a boolean variable containing information about whether Mark has a higher BMI than John.

const markMoreBeefCake = markBMI > johnBMI;

console.log('Q3: ', markMoreBeefCake); // to test

//Q4 Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is"). 

if (markMoreBeefCake) {
    console.log(`Q4: Is Mark's BMI higher than John's? Why yes, it's ${markMoreBeefCake}, it is`);
} else {
    console.log(`Q4: That is blatantly ${markMoreBeefCake}, John may be built for speed, but Mark? Mark is built for comfort.`);
}

//Q5 Create an *if* statement which prints the name and BMI of the person with the highest BMI. 

if (markMoreBeefCake === true) {
    console.log(`Q5: Mark ${markBMI.toFixed(2)}`);
} else {
    console.log(`Q5: John ${johnBMI.toFixed(2)}`);
}

//FOR LOOPS JS
//Q1 Addition

let sumOneToTwenty = 0;
for (let i= 1; i <= 20; i ++) {
    sumOneToTwenty += i;
}
console.log(sumOneToTwenty);

//Q2 Bottles of Beer

for (let i = 1; i <= 5; i ++) {
    if (i > 1) {
        console.log(`There are ${i} bottles of beer on the wall.`);
    } else {
        console.log(`There is ${i} bottle of beer on the wall.`);
    }   
}

//Q3 Odd/Even

for (let i= 0; i <= 20; i ++) {
    if (i % 2 == 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`)
    }
}

//Q4 Multi tables

for (let i = 0; i <= 10; i ++) {
    console.log(`${i} * 9 = ${i * 9}`);
}
//Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
// runs for i
for (let i = 0; i <=10; i++) {
    // for each time that i runs, y runs 10 times
    for (let y = 0; y <=10; y++) {
        const multiplier = i * y;
        console.log(`${i} * ${y} = ${multiplier}`);
    }
}

//Q5 FizzBuzz

for (let i = 1; i <= 100; i ++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

//Q6 Sum of Multiples

let sumOfMultiplesOfThreeAndFive = 0;

for (let i = 1; i <= 1000; i ++) {
    if (i % 3 == 0 && i % 5 == 0) {
        sumOfMultiplesOfThreeAndFive += i;
    }
}

console.log(sumOfMultiplesOfThreeAndFive);

//Q7

// 100, 200... 1000
const starter = 100; 

for (let i = 1; i <= 1000/starter; i++) {
    console.log(starter * i);
}

// 0, 2, 4... 10

for (let i = 0; i <= 10;) {
        console.log(i);
        i += 2;
}

// 3, 6, 9 ... 15

for (let i = 3; i <= 15;) {
    console.log(i);
    i += 3;
}

// 9, 8, 7... 0

for (let i = 9; i >=0;) {
    console.log(i);
    i --;
}

// 1 1 1 2 2 2 3 3 3 4 4 4

let count = 1;
for (let i = 1; i <= 4;) {
    console.log(i);
    if ((count !== 0) && (count % 3 === 0)) {
        i++;
        count = 0;
    } 
    count++;
}

// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

let runCount = 0;
for (let i = 0; i <= 4;) {
    console.log(i);
    if ((i === 4) && (runCount <= 1)) {
        i = 0;
        runCount++;
    } else {
        i++;
    }
}

//Q8

const word = "Anna";

const reversedWord = word.split('').reverse().join('').toLowerCase();

if (word.toLowerCase() == reversedWord) {
  console.log(`${word} is a palindrome!`);
} else {
  console.log(`${word} is not a palindrome :(`);
}

//PROGRAM MULTIPLE CHOICE JS
// 1
const color = "";

switch (color) {
  case "red":
    console.log("Q1: Red's a great color on you.");
    break;
  case "blue":
    console.log("Q1: Blue? Great choice.");
    break;
  case "green":
    console.log("Q1: Ok. Green it is.");
    break;
  case "yellow":
    console.log("Q1: Not what I would have picked, but yellow is fine.");
    break;
  default:
    console.log("Q1: The aim of the game is to pick a color.");
    break;
}

// 2
const grade = "B";

switch (grade) {
  case "A":
    console.log("Q2: A - Well done!");
    break;
  case "B":
    console.log("Q2: B - Good on you!");
    break;
  case "C":
    console.log("Q2: C - Good effort");
    break;
  case "D":
    console.log("Q2: D - Try harder next time...");
    break;
  default:
    console.log("Q2: Yikes...");
    break;
}

// 3
const fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("Q3: An apple a day keeps the doctor away.");
    break;
  case "banana":
    console.log("Q3: Bananas are full of potassium.");
    break;
  case "orange":
    console.log("Q3: Yep, oranges. Great choice.");
    break;
  case "strawberry":
    console.log("Q3: Mmmm...nothing better than strawberries.");
    break;
  default:
    console.log("Q3: PICK A FRUIT");
    break;
}

// 4
const percentageComplete = 29; 
if (percentageComplete < 30) {
    console.log("Q4: Still a long way to go");
} else if (percentageComplete >= 30 && percentageComplete <= 50) {
    console.log("Q4: Slowly getting there...")
} else if (percentageComplete >= 51 && percentageComplete <= 80) {
    console.log("Q4: You can do it!")

} else if (percentageComplete >= 81 && percentageComplete <= 99) {
    console.log("Q4: This is the last push!");
} else {
    console.log("Q4: You're there. Well done!");
}

// Generally, if we are testing an expression or boolean values, then we would use if/else. In contrast, we would use switch when choosing between a number of options.

//
