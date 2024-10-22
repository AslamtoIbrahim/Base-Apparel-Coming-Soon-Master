const emailInput = document.getElementById('email');
const button = document.getElementById('submit');
const errorMessage = document.getElementById('error');
const errorCard = document.getElementById('errorCard');
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const animation = "shake-anime";

button.addEventListener('click', function (e) {
    if (emailInput.value == "") {
        errorMessage.innerHTML = "This field should not be empty";
        errorCard.style.display = "flex";
        errorCard.classList.remove(animation);
        void errorMessage.offsetWidth;
        errorCard.classList.add(animation);

    } else {
        if (!emailPattern.test(email.value)) {
            errorMessage.innerHTML = "Please enter a valid email";
            errorCard.style.display = "flex";
            errorCard.classList.remove(animation);
            void errorMessage.offsetWidth;
            errorCard.classList.add(animation);
        } else {
            errorMessage.innerHTML = "";
            errorCard.style.display = "none";
            errorCard.classList.remove(animation);
        }
    }

});
