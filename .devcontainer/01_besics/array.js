// array
// array object, as with arrays in other programming languages,enables strong a collection of multiple items under a single variable name

const myArr = [0, 1, 2, 3, 4, 5, 9]

// console.log(myArr);

                 //array methods

// myArr.push(5)
// myArr.push(7)


// myArr.pop()
// myArr.unshift(9)
// myArr.shift()


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(5));


// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);

// slice and splice

console.log("A",myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ",myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ",myArr);
console.log(myn2);

const marvel_heros = ["Thor", "Ironman", "spiderman", "Hulk"]
const dc_heros = ["Flash", "Superman", "Batman", "Harley Quinn"]

// marvel_heros.push(dc_heros)


// console.log(marvel_heros);
// console.log(marvel_heros[4][1]);

// marvel_heros.concat(dc_heros)
// console.log(marvel_heros);

 // in both push and concat have same value,both add the second array on it.


 const allHeros = marvel_heros.concat(dc_heros)
 console.log(allHeros);
 
 // this method through we can find out a new array


      //or

const all_new_heros =[...marvel_heros,  ...dc_heros]
console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("siddhartha"))
console.log(Array.from("siddhartha"))
console.log(Array.from({name: "siddhartha"})) //imp
//output was empty, for answer we need enter which value we need


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score3, score2));
