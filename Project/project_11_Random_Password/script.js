const passwordBox = document.getElementById("password");
const pwdLength = 8;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*";

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
   
    const allChar = upperCase + lowerCase + number + symbol;
    console.log(allChar)

    while(pwdLength > password.length){
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    passwordBox.value = password;
}

function copyPassword() {
    // જો passwordBox ખાલી નથી તો જ copy કરો
    if (passwordBox.value) {
        navigator.clipboard.writeText(passwordBox.value)
            .then(() => {
                alert("Password copied to clipboard");
            })
            .catch(err => {
                console.error("Failed to copy password: ", err);
            });
    } else {
        alert("No password to copy");
    }
}

// function copyPassword(){
//     passwordBox.select();
//     document.execCommand("copy");
// } // document.execCommand junu che amuk modern browsers nathi chaltu. ane apade j upar code karyo a modern way che 