//const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  //code here
  return weight/Math.pow(height , 2)
}
function getBMIMeaning(weight, height) {
  //code here
  return calculateBMI(weight, height) < 18.5 ? 'UnderWeight' : calculateBMI(weight, height) >= 18.5 && calculateBMI(weight, height) <= 24.9  ? 'Normal Weight' : 'Overweight' 
}
//module.exports = getBMIMeaning

//console.log(calculateBMI(53,1.75))
//console.log(getBMIMeaning(65,1.8))
//console.log(getBMIMeaning(80,1.7))
//console.log(getBMIMeaning(44,1.6))
