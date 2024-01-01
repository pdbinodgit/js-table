console.log("hello world js.");
// variable 
// variable we use to store  data temporaily

// let name;
// console.log(name);
// by default value is undefined

let name="mosh";
console.log(name);

// rule for naming variable
// can not be reserved
// they should be meaning full;
// they can not start with number
// cannot contain a space or hyphen
//camel noatation


//constant
//when in define variable with constan we cannot change value of this variable
const d="nabin";

//primitive/value type(string,number,boolean,undefined,null)

//Dyanmic typing

console.log("here.......");
let car={
    car1:"tata",
    car2:"nexon"
};
console.log(car);
car.car1="john";
//array

let arrayList= ["red","ram"];
console.log(arrayList[0]);

console.log("*************");
function person(name){
    return console.log(name);
    console.log("!!!!!!!!")
}


function greet(name){
    console.log("hello "+name);

}
person(d);
greet(d);

