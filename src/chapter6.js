"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var e_1, _a, e_2, _b, e_3, _c;
exports.__esModule = true;
/**
 *  tsc --downlevelIteration -w ./function-generator/gen.ts
 */
var util_1 = require("../util/util");
util_1.header('Chapter 6 - communication in generator function');
function WarriorGenerator() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, "Sun Tzu"];
            case 1:
                _a.sent();
                return [5 /*yield**/, __values(NinjaGenerator3())];
            case 2:
                _a.sent();
                return [4 /*yield*/, "Gengis Khan"];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
function NinjaGenerator3() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, "Hattori"];
            case 1:
                _a.sent();
                return [4 /*yield*/, "Yoshi"];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
try {
    for (var _d = __values(WarriorGenerator()), _e = _d.next(); !_e.done; _e = _d.next()) {
        var warrior = _e.value;
        util_1.assert(warrior !== null, warrior);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_e && !_e.done && (_a = _d["return"])) _a.call(_d);
    }
    finally { if (e_1) throw e_1.error; }
}
// id generator with generator
function IdGenerator() {
    var id;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = 0;
                _a.label = 1;
            case 1:
                if (!true) return [3 /*break*/, 3];
                return [4 /*yield*/, ++id];
            case 2:
                _a.sent();
                return [3 /*break*/, 1];
            case 3: return [2 /*return*/];
        }
    });
}
var idIterator = IdGenerator();
var ninja1 = { id: idIterator.next().value };
var ninja2 = { id: idIterator.next().value };
var ninja3 = { id: idIterator.next().value };
util_1.assert(ninja1.id === 1, "First ninja has id 1");
util_1.assert(ninja2.id === 2, "Second ninja has id 2");
util_1.assert(ninja3.id === 3, "Third ninja has id 3");
function NinjaGenerator2(action) {
    var imposter;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ("Hattori " + action)];
            case 1:
                imposter = _a.sent();
                util_1.assert(imposter === "Hanzo", "The generator has been infiltrated");
                return [4 /*yield*/, ("Yoshi (" + imposter + ") " + action)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
var ninjaIterator = NinjaGenerator2("skulk");
var result1 = ninjaIterator.next();
util_1.assert(result1.value === "Hattori skulk", "Hattori is skulking");
var result2 = ninjaIterator.next("Hanzo");
util_1.assert(result2.value === "Yoshi (Hanzo) skulk", "We have an imposter");
//dom
function DomTraversal(element) {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, element];
            case 1:
                _a.sent();
                element = element.firstElementChild;
                _a.label = 2;
            case 2:
                if (!element) return [3 /*break*/, 4];
                return [5 /*yield**/, __values(DomTraversal(element))];
            case 3:
                _a.sent();
                element = element.nextElementSibling;
                return [3 /*break*/, 2];
            case 4: return [2 /*return*/];
        }
    });
}
var subTree = document.getElementById("subTree");
try {
    for (var _f = __values(DomTraversal(subTree)), _g = _f.next(); !_g.done; _g = _f.next()) {
        var element = _g.value;
        util_1.assert(element !== null, element.nodeName);
    }
}
catch (e_2_1) { e_2 = { error: e_2_1 }; }
finally {
    try {
        if (_g && !_g.done && (_b = _f["return"])) _b.call(_f);
    }
    finally { if (e_2) throw e_2.error; }
}
util_1.header('Chapter 6 - exercise');
// 5.1
function EvenGenerator() {
    var num;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                num = 2;
                _a.label = 1;
            case 1:
                if (!true) return [3 /*break*/, 3];
                return [4 /*yield*/, num];
            case 2:
                _a.sent();
                num = num + 2;
                return [3 /*break*/, 1];
            case 3: return [2 /*return*/];
        }
    });
}
var generator = EvenGenerator();
var a1 = generator.next().value;
var a2 = generator.next().value;
var a3 = EvenGenerator().next().value;
var a4 = generator.next().value;
util_1.assert(a1 === 2, "a1 === 2");
util_1.assert(a2 === 4, "a2 === 3");
util_1.assert(a3 === 2, "a3 === 2");
util_1.assert(a4 === 6, "a4 === 6");
// 5.2
function NinjaGenerator() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, "Yoshi"];
            case 1:
                _a.sent();
                return [2 /*return*/, "Hattori"];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
var ninjas = [];
try {
    for (var _h = __values(NinjaGenerator()), _j = _h.next(); !_j.done; _j = _h.next()) {
        var ninja = _j.value;
        ninjas.push(ninja);
    }
}
catch (e_3_1) { e_3 = { error: e_3_1 }; }
finally {
    try {
        if (_j && !_j.done && (_c = _h["return"])) _c.call(_h);
    }
    finally { if (e_3) throw e_3.error; }
}
console.log(ninjas);
// 5.3
function Gen(val) {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, val * 2];
            case 1:
                val = _a.sent();
                return [4 /*yield*/, val];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
var generator2 = Gen(2);
var aa1 = generator2.next(5).value;
var aa2 = generator2.next(5).value;
util_1.assert(aa1 === 4, "aa1 is 4");
util_1.assert(aa2 === 5, "aa2 is 5");
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
