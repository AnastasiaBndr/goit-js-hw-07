const form = document.querySelector(".login-form");
const handleSubmit = e => {
    e.preventDefault();
    const elements = form.elements;
    const email = elements["email"].value.trim();
    const password = elements["password"].value.trim();
    if (!email || !password) {
        alert('All form fields must be filled in');
        return;
    }
    console.log({ email, password });
    form.reset();
    
}

form.addEventListener("submit", handleSubmit);
