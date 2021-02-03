// replace `${i}` --> \`\${i}\`

const data = [
    
    // card ----------------------------------------------------- >
    [
        //html
        [],
        //css
        [],
        //js
        [
{'js': `const object1 = {
  property1: "value",
  property2: "value2"
}

object1.property1 = "new value";
object1["property2"] = "new value";

const object2 = new Object();

for (x in object) {}

// delete a property from an object
delete object.age;

{
  firstName: "firstName",
  lastName: "lastName",
  // this specifies properties in the object
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

//convert to array
var myArray = Object.values(object);

// convert object to a string
JSON.stringify(object);


// JavaScript Object Constructors
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");


// Built-in JavaScript Constructors
var x1 = new Object(); // A new Object object
var x2 = new String(); // A new String object
var x3 = new Number(); // A new Number object
var x4 = new Boolean(); // A new Boolean object
var x5 = new Array(); // A new Array object
var x6 = new RegExp(); // A new RegExp object
var x7 = new Function(); // A new Function object
var x8 = new Date(); // A new Date object`}
        ],
        // output
        [],
        //render
        {'render': false}
    ],

// card ----------------------------------------------------- >
[
//html
[],
//css
[],
//js
[
{'js': `// Computed property names (ES2015)
let i = 0
let a = {
  ['foo' + ++i]: i,
  ['foo' + ++i]: i,
  ['foo' + ++i]: i
}

console.log(a.foo1) // 1
console.log(a.foo2) // 2
console.log(a.foo3) // 3`}
],
// output
[],
//render
{'render': false}
],

];

module.exports = data;