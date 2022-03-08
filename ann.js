/* let numOne = 0;
for (let i = 1; i <= 20; i++) {
    numOne+=i; 
}
console.log(numOne);

for (let index = 1; index <= 5; index++) {
    if (index < 1) {
        console.log(`there are ${index} bottle on the wall `);
    }else{
        console.log(`there is ${index} bottle of beer on the wall`);
    }
}
for (let index = 0; index <= 20; index++) {
    if (index % 2 == 0) {
        console.log(`${index} is even`);
    }else {
        console.log(`${index} is old`);
    }
}
 */
/* for (let index = 0; index <= 10; index++) {
   console.log(`${index} * 9 ${index * 9}`);
}

for (let index = 0; index <= 10; index++) {
   for (let y = 0; y <= 10; y++) {
       const element = index * y;
       console.log(`${index} * ${y} = ${element}`);
   }
    
} */

/* for (let i = 1; i <= 100; i++) {
   if (i % 3 == 0 && i % 5 == 0) {
       console.log('FizzBuzz');
   }else if (i % 3 == 0) {
       console.log('Fizz');
   }else if (i % 5 == 0) {
     console.log('Buzz');  
   }else {
       console.log(i);
   }
    
} */
/* let sumMultiple = 0;
for (let i = 1; i <= 1000; i++) {
    if (i % 3 == 0 && i % 5 ==0) {
        sumMultiple += i;  
    }
}
console.log(sumMultiple);

for (let i = 1; i <= 10; i++) {
   console.log(`${i} * 100 ${i * 100}`);
    
}
for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
for (let i = 1; i <= 15; i++) {
    if (i % 3 == 0) {
        console.log(i);
    }
}
for (let i = 9; i > 0; i--){
    console.log(i);
   
}
 */
/*  let count = 1;
for (let i = 1; i <= 4;) {
    console.log(i);

    if (count !== 0 && count % 3 == 0) {
        i++;
        count = 0;
    }
    count++;
}  */
//Switch
const color = 'blue';
switch (color) {
    case 'red':
        console.log('you look good on red');
        break;
        case 'blue':
            console.log('you look good on blue')
        break;
        case 'green':
            console.log('you look good on green')
        break;
        case 'yellow':
            console.log('you look good on yellow')
        break;

    default:
        console.log('the rule is to pick a color');
        break;
}

console.log(Math.floor(Math.random() * 6) + 1);

//Function scope

let exponent = (x,y) => {
    for (let i = 0; i <= y; i++) {
      let  result = Math.pow(x,i)
      console.log(`${x} ^ ${i} is ${result}`);  
    }
}
//console.log(result);
exponent(2,8)

let favFruit = 'apples';
function result() {
    favFruit = 'kiwi';
    console.log(`my fav fruit is ${favFruit}`);
}
result();

function returnA(age) {
    if (age > 18) {
      return true  
    }else {return false}
}
console.log(returnA(10));
function min(a,b) {
    if (a > b) {
        return b
    }else {return a}
}
console.log(min(1,1));

function pow(x,n) {
    if (x **n) {
       return x**n 
    }
}
console.log(pow(1,100));

function calBmi(weight,height) {
    let bmi = weight / (height ** 2)
    return bmi.toFixed(2)
}
function whoIsB(anne,carol,bmi1,bmi2) {
    if (bmi1>bmi2) {
        console.log(`${anne} is bigger`);
        return anne
    }
    console.log(`${carol} is bigger`);
    return carol
}

function whoIsB(anne, carol, weight1, weight2, height1, height2) {
    const bmi1 = calBmi(name1, weight1, height1)
    const bmi2 = calBmi(name2, weight2, height2)
    
    if(bmi1 > bmi2) {
      console.log(`${anne} is bigger`)
      return name1
    }
    console.log(`${carol} is bigger`)
    return name2
  }
  /* let i = 0;
  while (i <= 5) {
      alert(i)
      i++;
  }
   */
  /* let i = 3;
  while (i) {
     alert(i)
    i--;
  }  */
/* let i = 0;
  do {
     alert(i) 
     i++;
  } while (i <= 5); */
/*   let sum = 0;
  while (true) {
      let value = +prompt('enter a number')
      if(!value);
      break;
      sum += value;
  }
  alert('sum: ' + sum) */
  for (let i = 0; i <= 10; i++) {
      if (i % 2 == 0) continue;
      alert(i)
  }
  