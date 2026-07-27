//console.log('a');

const weight =68;
const height =1.7;

function bmiCalculator(weight, height) {
    const bmi = weight / (height * height);
    return bmi;
}

const bmi = bmiCalculator(weight, height);
console.log(bmi);