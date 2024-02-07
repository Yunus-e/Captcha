var captcha = document.querySelector('.captcha');
var releoddBtn = document.querySelector('.reload-btn');
var input = document.querySelector('input');
var checkBtn = document.querySelector('.check-btn');
var statusText = document.querySelector(".error-text");

let allCharacters = ["A", "B", "C", "D", "E", "F", "G", "I", "H", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "r", "s", "t", "v", "w", "y", "z",
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
];

function getRandomCaptcha() {
    for (let i = 0; i < 6; i++) {
        let randomCharacters = allCharacters[Math.floor(Math.random() * allCharacters.length)];
        captcha.innerText += randomCharacters;
    }
}

releoddBtn.addEventListener("click", () => {
    captcha.innerText = "";
    getRandomCaptcha();
})

checkBtn.addEventListener("click", e => {
    e.preventDefault();
    statusText.style.display = "flex";
    let inputVal = input.value;
    if (inputVal == captcha.innerText) {
        statusText.innerText = "Nice ! You don't appear to be a robot"
        statusText.style.color = "green";
        setTimeout(() => {
            statusText.style.display = "none";
            captcha.innerText = "";
            getRandomCaptcha();
            input.value = ""
        }, 6000);
    }
    else {
        statusText.innerText = "Captcha not matched. Please try again!"
        statusText.style.color = "red";
    }
})

getRandomCaptcha();

