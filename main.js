/////// for-in and for-of /////
//for objects
/* for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}

///for arrays(for-of)
for (const iterator of object) {
    
} */

let myCar1 = {
    brand:'BMW',
    color:'gray',
    engine:3,
    power:250
}

let myCar2 = {
    brand:'Porsche',
    color:'black',
    engine:5,
    power:500
}

let myCar3 = {
    brand:'Ferrari',
    color:'red',
    engine:6,
    power:700
}

let myGarage = [myCar1,myCar2,myCar3]

for (const car of myGarage) {
    console.log(car.color);
}

console.log(myGarage[0].brand);
console.log(myGarage[1].brand);
console.log(myGarage[2].brand);

console.log(myGarage.brand); //undefined

for (let index = 0; index < myGarage.length; index++) {
    const car = myGarage[index];
    console.log(car.power);
}

//for-in for objects
/* myCar1 is not iterable 
for (const car of myCar) {
    console.log(car);
}*/

console.log('mcCar1: ');

for (const key in myCar1) {
    const element = myCar1[key];
    console.log(key,element);
}

//////////////////////////////
for (const car of myGarage) {
    for(const key in car){
        const element = car[key];
        console.log(key, ':',element);
    }

}

////for each
console.log('for each');
myGarage.forEach((car, index, source) =>{
console.log(index);
console.log(car.brand);
console.log(source);
} 
);

/////syntax
//let props = array.map(element => {return element.prop});
console.log('map');
let brands = myGarage.map((car, index, source) =>{
    console.log(index);
    console.log(car.brand);
    console.log(source);
    return car.brand
    } 
    );
    console.log(brands);

    let hour = 12;
    let minute = 30;
    if (hour == 12 && minute == 30) {
        alert('the time is 12:30');
    }
    