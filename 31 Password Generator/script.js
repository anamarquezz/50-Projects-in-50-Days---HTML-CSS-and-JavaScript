const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const upperCaseEl = document.getElementById('uppercase')
const lowerCaseEl = document.getElementById('lowercase')
const numberCaseEl = document.getElementById('numbers')
const symbolCaseEl  = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

generateEl.addEventListener('click', () => {
    const length = + lengthEl.value;  
    const hasLower = lowerCaseEl.checked;
    const hasUpper = upperCaseEl.checked;
    const hasNumber = numberCaseEl.checked;
    const hasSymbol = symbolCaseEl.checked;

    resultEl.innerHTML = generatePassword(hasLower,hasUpper,hasUpper, hasNumber, hasSymbol, length);

});

function getGeneratePassword() {
    let generatePassword = ''
    const typesCount= lower + '' + upper + '' +symbol+ console.log(typesCount)
}
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97 );
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65); 
}
function getRandomNumber () {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol () {
    const symbols = '!@#$%^&*()[]=<>,./'
    return symbols[Math.floor(Math.random() * symbols.length)];
}