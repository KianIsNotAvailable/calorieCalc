function genderCheck(){
    var genderVal = '';
    var male = document.getElementById('male');
    var female = document.getElementById('female');
    if(male.checked == true){
        genderVal = 5
    } else if (female.checked == true){
        genderVal = -161
    }
    return genderVal;
}

var age = document.getElementById('age').value;

var weight = document.getElementById('weight').value;
var weightCM = weight * 0.45359237;

var height = document.getElementById('height').value;
var heightCM = height * 2.54;

var activityLevel = document.getElementById('Activity').value;

function calculate(){
    var calories = ''
    calories = (10 * weightCM) + (6.25 * heightCM) - (5 * age) + genderVal;
    console.log(calories);
    return calories
};
function showResults(){
    document.getElementById("Results").style.display = "block";
    console.log('this works')
}


var calculateButton = document.getElementById('submit');
calculateButton.addEventListener("click", calculate(), showResults());
genderCheck();