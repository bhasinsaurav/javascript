/**
 * Primitive Datatypes => Call by Value
 * 7: String, Number, Boolean, null, undefined, Symbol, BigInt
 * 
 * Non-Primitve Datatypes => Reference Types
 * Array, Objects, Functions
 */

const id = Symbol('123');
const id2 = Symbol('123');



console.log(id == id2)
console.log(id === id2)