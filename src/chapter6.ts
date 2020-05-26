/**
 *  tsc --downlevelIteration -w ./function-generator/gen.ts
 */
import { assert, header } from '../util/util';
header ('Chapter 6 - communication in generator function');

function* WarriorGenerator() {
  yield "Sun Tzu";
  yield* NinjaGenerator3();
  yield "Gengis Khan";
}
function* NinjaGenerator3() {
  yield "Hattori";
  yield "Yoshi";
}
for(let warrior of WarriorGenerator()) {
  assert(warrior !== null, warrior);
}
// id generator with generator
function* IdGenerator() {
  let id = 0;
  while(true) {
    yield ++id;
  }
}
const idIterator = IdGenerator();

const ninja1 = { id: idIterator.next().value };
const ninja2 = { id: idIterator.next().value };
const ninja3 = { id: idIterator.next().value };

assert(ninja1.id === 1, "First ninja has id 1");
assert(ninja2.id === 2, "Second ninja has id 2");
assert(ninja3.id === 3, "Third ninja has id 3");

function* NinjaGenerator2(action) {
  const imposter = yield ("Hattori " + action);
  assert(imposter === "Hanzo", "The generator has been infiltrated");
  yield ("Yoshi (" + imposter + ") " + action);
}
const ninjaIterator = NinjaGenerator2("skulk");

const result1 = ninjaIterator.next();
assert(result1.value === "Hattori skulk", "Hattori is skulking");

const result2 = ninjaIterator.next("Hanzo");
assert(result2.value === "Yoshi (Hanzo) skulk", "We have an imposter");

//dom
function* DomTraversal(element) {
  yield element;
  element = element.firstElementChild;
  while(element) {
    yield* DomTraversal(element);
    element = element.nextElementSibling;
  }
}
const subTree = document.getElementById("subTree");
for(let element of DomTraversal(subTree)){
  assert(element !== null, element.nodeName);
}


header('Chapter 6 - exercise');
// 5.1
function *EvenGenerator() {
  let num = 2;
  while(true) {
    yield num;
    num = num + 2;
  }
}
let generator = EvenGenerator();
let a1 = generator.next().value;
let a2 = generator.next().value;
let a3 = EvenGenerator().next().value;
let a4 = generator.next().value;

assert(a1 === 2, "a1 === 2");
assert(a2 === 4, "a2 === 3");
assert(a3 === 2, "a3 === 2");
assert(a4 === 6, "a4 === 6");

// 5.2
function* NinjaGenerator() {
  yield "Yoshi";
  return "Hattori";
  yield "Hanzo";
}
var ninjas = [];
for (let ninja of NinjaGenerator()) {
  ninjas.push(ninja);
}

console.log(ninjas);

// 5.3
function* Gen(val) {
  val = yield val * 2;
  yield val;
}
let generator2 = Gen(2);
let aa1 = generator2.next(5).value;
let aa2 = generator2.next(5).value;

assert(aa1 === 4, "aa1 is 4");
assert(aa2 === 5, "aa2 is 5");

// 5.4

// const promise = new Promise((resolve, reject) => {
//   reject("Hattori");
// });

// promise.then(val => alert("Success: " + val))
// .catch(e => alert("Error : " + e));

//5.5

// const promise = new Promise((resolve, reject) => {
//   resolve("Hattori");
//   setTimeout(() => {
//     reject("Yoshi")
//   }, 3000);
// });
// promise.then(val => alert("Success: " + val))
// .catch(e => alert("Error: " + e));