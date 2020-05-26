import {assert, header} from '../util/util';
// 1. 
header('Chapter 4 - exercise');
function sum(...args) {
  var sum = 0;
  args.forEach((arg) => sum += arg);
  return sum;
}
assert(sum(1,2,3) === 6, 'sum of first three numbers is 6');
assert(sum(1, 2, 3, 4) === 10, 'Sum of first four numbers is 10');

//2.
 function getSamurai(samurai) {
   "use strict"
   arguments[0] = "Ishida";
   return samurai;
 }
 function getNinja(ninja) {
   arguments[0] = "Fuma";
   return ninja;
 }
 var samurai = getSamurai("Toyotomi");
 var ninja = getNinja("Yoshi");
 assert(samurai === "Toyotomi", "samurai is Toyotomi");
 assert(ninja === "Yoshi", "ninja is Yoshi");
 
 //5.
 function Ninja() {
   this.whoAmI = () => this;
 }
 var ninja1 = new Ninja();
 var ninja2 = {
   whoAmI: ninja1.whoAmI
 };

 assert(ninja1.whoAmI() === ninja1, "ninja1 here?");
 assert(ninja2.whoAmI() === ninja2, "ninja2 here?");

 //6.
 function Ninja() {
   this.whoAmI = function() {
     return this;
   }.bind(this);
 }
 var ninja1 = new Ninja();
 var ninja2 = {
   whoAmI: ninja1.whoAmI
 };
 assert(ninja1.whoAmI() === ninja1, "ninja1 here?");
 assert(ninja2.whoAmI() === ninja2, "ninja2 here?");