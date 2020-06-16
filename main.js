
const whatCanIDoLegally = require('./back-end.js');

const age = getInput(0);

console.log(whatCanIDoLegally(age));





















function getInput(i) {
  return process.argv[i + 2];
}
