//ES 5
var name = "anikken";

//ES6
let secondName = "Tom";

secondName = "Max"; // change let variable value using its name,

const thirdName = "Marius The great";

thirdName = "Julie"; // change const variable

// 2. console.log -- console.dir console.info // yellow // console.error

// 3. >= <= = ==

"H" = "H"
// its equal and true, we are using not strict equality

"H" === "h" // false is called strict equality. it means same type, same structure etc

"1" = 1 // true
"1" === 1 // false, one is string and one is numeric so not exactly the same

// switch case

// 5 objects
// Whatever is inside the curly brackets is objects. objects contains items. key and values.
//example

let car = {
    color: "red" // color is key and red is value. together they are the object of variable car
}


// 6 for loops
//init starting point // condition // increment
for(let i = 0; i < 11; i++) { // start from 0 and keep adding until it reaches 11
    console.log(i);

}

// console will print numbers until it reaches it desires max number which is 11 in this case

// 7. Array

//make array using let or const

let myBigBox = [];

console.log(myBigBox.length); // shows length of array, this case 0 as nothing is added.
console.log(MyBigBox); // shows what it is in console
console.log(MyBigBox[0]); // shows index item in list or array
console.log(MyBigBox[3].name); //shows third item in list of array


const lastItemIndex = myBigBox.length -1;
console.log("lastItemIndex: ",[lastItemIndex]); // shows last item in list or array
console.log(myBigBox [lastItemIndex]);

//8 looping over an array

for(let i = 0; i < myBigBox.length; i++){
    console.log(myBigBox[i])
}


//concatination

let theName = "Anniken";
let theSecondName = "Hesh";
let theThirdName = "patrick";

// "" ```

const myParagraph = "Hello " + theName + "and hello " + theSecondName + "hello my friend";
// this is using double quotes and is older version, but still viable


//single quotes is on the new ES6 and uses ${} instead of + and ""


// 10. functions

