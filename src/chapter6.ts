/**
 *  tsc --downlevelIteration -w ./function-generator/gen.ts
 */
import { assert, header } from '../util/util';

header('Chapter 6 - exercise');

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