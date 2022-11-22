function bmiCalculator(inputWeightInKG, inputHeightInCM) {
    let bmiResult = ( inputWeightInKG / inputHeightInCM / inputHeightInCM ) * 10000; 
    if (bmiResult < 18.5) {
        console.log(`Your BMI result is ${bmiResult.toFixed(2)}. You are Underweight.`)
    } else if (bmiResult >= 18.5 && bmiResult <= 24.9) {
        console.log(`Your BMI result is ${bmiResult.toFixed(2)}. You are Normal.`)
    } else if (bmiResult >= 25 && bmiResult <= 29.9) {
        console.log(`Your BMI result is ${bmiResult.toFixed(2)}. You are Overweight.`)
    } else {
        console.log(`Your BMI result is ${bmiResult.toFixed(2)}. You are Obesity.`)
    };
        return bmiResult;
    
}

bmiCalculator(73, 165);