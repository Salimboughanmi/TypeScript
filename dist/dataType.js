"use strict";
function getGardSeconds() {
    return 10;
}
var Kids;
(function (Kids) {
    Kids[Kids["three"] = 5] = "three";
    Kids[Kids["Five"] = 9] = "Five";
    Kids[Kids["ten"] = 6] = "ten";
})(Kids || (Kids = {}));
var Level;
(function (Level) {
    Level[Level["kid"] = 5] = "kid";
    Level[Level["Easy"] = 9] = "Easy";
    Level[Level["Medium"] = 6] = "Medium";
    Level[Level["hard"] = 3] = "hard";
    Level[Level["insane"] = getGardSeconds()] = "insane";
})(Level || (Level = {}));
let lvl = "Easy";
if (lvl === "Easy") {
    console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.Easy}`);
    console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.kid}`);
}
let myObject = {
    username: "Elzero",
    id: 100,
    hire: true,
    skills: {
        one: "HTML",
        two: "CSS"
    }
};
myObject.id = 101;
myObject.hire = false;
console.log(myObject.username);
console.log(myObject.id);
console.log(myObject.hire);
console.log(myObject.skills.one);
//# sourceMappingURL=dataType.js.map