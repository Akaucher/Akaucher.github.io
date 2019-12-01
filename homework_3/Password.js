
function generatepassword(){
//declare variables for password criteria
let desiredproperties_upperletter = document.getElementById("uppercase").checked; 
let desiredproperties_lowerletter = document.getElementById("lowercase").checked;
let desiredproperties_unicode = document.getElementById("unicode").checked;
let desiredproperties_interger = document.getElementById("interger").checked;
let desiredlength = document.getElementById("length").value;
let noConditionsMet;
//set if statement for no conditions entered
if (desiredproperties_interger == false && desiredproperties_lowerletter == false && desiredproperties_upperletter == false && desiredproperties_unicode == false){
    alert("Please Select a Condition!");
    let noConditionsMet = true;
    console.log("No Conditions Met")
}else if(desiredlength < 8 || desiredlength > 128){
    let noConditionsMet = true;
    console.log("Length not in range");
    alert("Please Select a value between 8 and 128!");
}else{
//declare password_variables
let password_formula = [];
let password_final = "";

//declare arrays
let upperletterarray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let lowerletterarray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let unicodearray = ['\u0020', '\u0021', '\u0022', '\u0023', '\u0024', '\u0025', '\u0026', '\u0027','\u0028', '\u0029', '\u002A', '\u002B', '\u002C', '\u002D', '\u002E', '\u002F', '\u003A', '\u003B', '\u003C', '\u003D', '\u003E', '\u003F', '\u0040', '\u005B', '\u005C', '\u005D', '\u005E', '\u005F', '\u0060', '\u007B', '\u007C', '\u007D', '\u007E']
let intergersarray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

//declare no condition array
let noConditionsMetArray = [""]

//confirms must pass logical tests for arrays to be passed along
if(desiredproperties_upperletter){
   password_formula = password_formula.concat(upperletterarray);
    console.log("upperletters true");
}
if(desiredproperties_lowerletter){
   password_formula = password_formula.concat(lowerletterarray);
    console.log("lowerletters true");
}
if(desiredproperties_unicode){
    password_formula = password_formula.concat(unicodearray);
    console.log("unicode true");
}
if(desiredproperties_interger){
    password_formula = password_formula.concat(intergersarray);
    console.log("intergers true");
}
console.log(noConditionsMet);
//returns nothing in box for formula
if(noConditionsMet){
    password_formula = noConditionsMetArray;
    console.log("no conditions true");
}else{
console.log(password_formula)

//generate password by repeating random numbers to the length of the password_formula
for (let i = 0; i < desiredlength; i++) {
    let Randompicker = Math.floor((Math.random() * (password_formula.length)));
    password_final += password_formula[Randompicker];
}};

document.getElementById("password").innerHTML = password_final;
}
}

function CopyToClipboard(){
    let CopyText = document.getElementById("password");
    CopyText.select();
    document.execCommand("copy");
    alert("Password copied to Clipboard")
};