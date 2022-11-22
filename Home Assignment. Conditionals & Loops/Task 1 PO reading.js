let oxySat = 94;
function observation(oxySat) {
    if (oxySat >= 96){
        console.log("Normal Reading.");
    } else if (oxySat == 95){
        console.log("Acceptable to continue home monitoring.");
    } else if (oxySat >= 93 && oxySat <= 94) {
        console.log("Seek advice from health professionals.");
    } else if (oxySat <= 92){
        console.log("Seek urgent medical advice.");
    } else {
    	   console.log("The value of S is not numerical.");
    }
}

observation(oxySat);
