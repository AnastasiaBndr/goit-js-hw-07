const input = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
const nameOutputValue = "Anonymous";
const handleInput = e => {
    let text = input.value.trim();
    if (!text){
        nameOutput.textContent = nameOutputValue;
        return;
    } 
    nameOutput.textContent = text;
}

input.addEventListener("input", handleInput);