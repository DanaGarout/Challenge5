
var symbols = ["A","B","C","D","E","F","G","H","I",
"J","K","L","M","N","O","P","Q","R","S","T","U","V","W",
"X","Y","Z","a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x","y",
"z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~",
"`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
"{","[","}","]",",","|",":",";","<",">",".","?","/"]



let randomBtn1 = document.getElementById("random1");
let randomBtn2 = document.getElementById("random2");
let passwordLength = 15;

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * symbols.length);
    return symbols[randomChar];
  }
  function clickButton() {
    let randomPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      randomPassword += getRandomCharacter();
    }
    randomBtn1.textContent = randomPassword;
    let secondRandomPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      secondRandomPassword += getRandomCharacter();
    }
    randomBtn2.textContent = secondRandomPassword;
  }