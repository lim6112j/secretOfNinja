import { assert, header } from '../util/util';

header('Chapter 5 - exercise');

// 3.
function Samurai(name) {
  var weapon = 'katana';
  this.getWeapon = function(){
    return weapon;
  };
  this.getName = function() {
    return name;
  };
  this.message = name + " wielding a " + weapon;
  this.getMessage = function() {
    return this.message;
  }
}

var samurai = new Samurai("Hattori");

assert(samurai.getWeapon() === "katana", "weapon is katana");
assert(samurai.getName() === "Hattori", "Samurai name is Hattori");
assert(samurai.getMessage() === "Hattori wielding a katana", "Hattori wielding a katana");
