const ECTS = require("ectsify");

const studentScore = new ECTS(88);
console.log(`The ECTS grade for a score of 88 is: ${studentScore.ectsFromScore()}`);
