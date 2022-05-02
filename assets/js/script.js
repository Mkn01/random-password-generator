// Assignment Code
const generateBtn = document.querySelector("#generate");
// Array of uppercase letters if uppercase criteria is selected
const upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// Array of lowercase letters if lowercase criteria is selected
const lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// Array of  numbers if numbers criteria is selected
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Array of special characters if special characters  criteria is selected
const specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~".split("");
// getting the password length from an input from the user
const getPasswordLength = () => {
  const passwordLength = parseInt(prompt("Enter password length"));

  return passwordLength;
};
// getting the criteria for the password from the user using confirm boxes and creating an array if that criteria is selected with the selected criteria array
const getPasswordCriteria = () => {
  let passwordCriteria = [];
  const passwordCriteriaLowerCase = confirm(
    "Would you like lowercase letters in your password?"
  );
  // If the user presses ok (true) an array of lowercase letters is created.
  if (passwordCriteriaLowerCase) {
    passwordCriteria = [...passwordCriteria, ...lowerCase];
  }

  const passwordCriteriaUpperCase = confirm(
    "would you like Uppercase letters in your password?"
  );
  // If the user presses ok (true) an array of uppercase letters is created.
  if (passwordCriteriaUpperCase) {
    passwordCriteria = [...passwordCriteria, ...upperCase];
  }

  const passwordCriteriaNumbers = confirm(
    "would you like numbers is your password?"
  );
  // If the user presses ok (true) an array of numbers is created.

  if (passwordCriteriaNumbers) {
    passwordCriteria = [...passwordCriteria, ...numbers];
  }

  // If the user presses ok (true) an array of special characters is created.
  const passwordCriteriaSpecialCharacter = confirm(
    "Would you like any special characters in your password?"
  );
  if (passwordCriteriaSpecialCharacter) {
    passwordCriteria = [...passwordCriteria, ...specialCharacters];
  }
  // if no criteria is selected an alert box appears  otherwise a password criteria array is created with the selected criteria
  if (
    !passwordCriteriaLowerCase &&
    !passwordCriteriaUpperCase &&
    !passwordCriteriaNumbers &&
    !passwordCriteriaSpecialCharacter
  ) {
    alert("Please choose at least one criteria!");
    return null;
  }
  return passwordCriteria;
};

const createRandomPassword = (passwordLength, passwordCriteria) => {
  console.log(passwordLength);
  const password = [];
  // for the password have a for loop
  // to ensure we have the user input password length
  // to select a random index from password criteria array that is within the array
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * passwordCriteria.length - 1);
    // random character array is created with random index's from password criteria array that is then pushed into the new random character array so we get characters in our password printed when we return our password in a string
    const randomCharacter = passwordCriteria[randomIndex];
    password.push(randomCharacter);
  }
  // password to be returned when button is clicked in a string
  return password.join("");
};

// main function to generate the random password
const generatePassword = () => {
  // get the password length
  const passwordLength = getPasswordLength();
  if (passwordLength >= 8 && passwordLength <= 128) {
    // get the password criteria
    const passwordCriteria = getPasswordCriteria();

    // create random password
    const password = createRandomPassword(passwordLength, passwordCriteria);

    return password;
  } else {
    alert("please provide valid password length");
  }
};

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword() || "";
  if (password === null) {
    return;
  }
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
