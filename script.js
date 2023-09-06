(function validateForm() {
    const form = document.querySelector("form");
    const emailInput = document.querySelector("#email");
    const errorMsg = document.querySelector("#error-msg");

    const emailRegex =
        new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        validateEmail();
    })

    function validateEmail() {
        if (!emailRegex.test(emailInput.value.trim())){
            errorMsg.classList.remove("no-error");
            emailInput.style.border = "1px solid var(--clr-error)";
            return false;
        } else {
            errorMsg.classList.add("no-error");
            emailInput.style.border = "1px solid var(--clr-accent)";
            return true;
        }
    }
})()
