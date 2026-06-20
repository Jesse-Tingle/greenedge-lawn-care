const quoteForm = document.querySelector(".quote-form");

quoteForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const existingMessage = document.querySelector(".success-message");

    if (existingMessage) {
        existingMessage.remove();
    }

    const successMessage = document.createElement("p");

    successMessage.classList.add("success-message");

    successMessage.textContent =
        "Thanks! Your quote request has been received. We will contact you soon.";

    quoteForm.appendChild(successMessage);

    quoteForm.reset();
});