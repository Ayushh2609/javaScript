// const mySym = Symbol()
// let KeyFirst = "Pehla Banda hai ye admi"


// const jsUser = {

//     "name" : "Ayush Paliwal",
//     age : 18,
//     [mySym] : "KeyFirst",
//     "Location Meri" : "Haridwar"

// }

// console.log(jsUser.name)
// console.log(jsUser ["name"])

// console.log(jsUser.mySym)                   //This is the wrong way to access, jsUser.mySym is trying to access a property named mySym (a string), not the symbol you've defined.
// console.log(jsUser [mySym])                 //This is the right way to access the symbol inside the Object.

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//functions In Objects

// const myFunc = function(){
//     console.log(`Hello Bro, Is you name is ${this.name}`)
// }


// jsUser.newFunc = myFunc

// console.log(jsUser.newFunc)
// console.log(jsUser.newFunc())




const target = {a : 1 , b : 2}
const source = {c : 3 , d : 4}


// console.log(target , source)

const newC = Object.assign(target , source)         // In this console, the Object.assign will copy the data from the source object and place it in the target Object.

console.log(target)
console.log(newC)

// const newC = Object.assign({} , target , source)       // In this we are givning the empty object where all the data of target Object and Source object will the paste.      

// console.log(newC) 
