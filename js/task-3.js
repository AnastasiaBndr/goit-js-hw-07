const input = document.querySelector('#name-input');
const nameOutputValue = "Anonymous";
const handleInput = e => {
    e.preventDefault();
    let text = input.value.trim();
    console.log(text);
    if (!text){
        nameOutput.textContent = nameOutputValue;
        return;
    } 
    nameOutput.textContent = input.value.trim();
}

input.addEventListener("input", handleInput);