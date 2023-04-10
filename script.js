// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var length = Number(prompt('How many characters? (8-128)'))
  console.log (length)
  console.log (typeof length)
  if (length < 8 || length > 128 || isNaN(length)){
    alert("Password length must be 8 to 128 characters long!");
   return;
  }
  var chosenCharacterArr= []
   var uppercase ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split ("")
  if (confirm('would you like Capital letters?')) {
    chosenCharacterArr = chosenCharacterArr.concat(uppercase)
  }
  var lowercase = 'abcdefghijklmnopqrstuvwxyz'.split ("")
   if (confirm('would you like to include lowercase letters')) {
    chosenCharacterArr = chosenCharacterArr.concat(lowercase)
  }
  var numbers = '1234567890'. split ("")
    if (confirm('would you like to include numbers?')) {
      chosenCharacterArr = chosenCharacterArr.concat(numbers)
  }
  var symbols = ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'. split ("")
  if (confirm('would you like to include symbols?')) {
    chosenCharacterArr = chosenCharacterArr.concat(symbols)
  }
  if (chosenCharacterArr.length === 0  ){
    alert ("Password must meet the criteria")
    return
  }
  console.log(chosenCharacterArr)
 for (var i =0; i <= length;i++){
    if(chosenCharacterArr[i]){
        console.log(chosenCharacterArr[i])
    }
  
  var randomindex =Math.floor(Math.random() * chosenCharacterArr.length)
  console.log (randomindex)
  var randomcharacter = chosenCharacterArr[randomindex]
  console.log(randomcharacter)}
  return "generated password will go here"
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
