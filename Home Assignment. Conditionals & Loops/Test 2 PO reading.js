
let pulseRatePerMin = 110;
function observation(pulseRatePerMin) {
    if (pulseRatePerMin >= 40 && pulseRatePerMin <= 100){
        console.log("Normal Reading.");
    } else if (pulseRatePerMin >= 101 && pulseRatePerMin <= 109){
        console.log("Acceptable to continue home monitoring.");
    } else if (pulseRatePerMin >= 110 && pulseRatePerMin <= 130) {
        console.log("Seek advice from health professionals.");
    } else if (pulseRatePerMin >= 131){
        console.log("Seek urgent medical advice.");
    } else if (pulseRatePerMin <= 39){
    	console.log("bpm is below normal, seek urgent health professionals.");
    } else {
        console.log("The value of Oxygen Saturation is not numerical.");
    }
}

observation(pulseRatePerMin);