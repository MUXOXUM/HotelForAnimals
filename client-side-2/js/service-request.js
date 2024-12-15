const requestElement = document.querySelector(".payment")
const requestForm = document.querySelector('.payment__taxi') 
const formSubmitMessage = document.querySelector('.formSumbitMessage');
const succesWindowElement = document.querySelector(".succes-window")

requestForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formSubmitMessage.classList.remove("visually-hidden");
    formSubmitMessage.style.transition = "opacity 0.5s ease"; // Настройка плавного появления
    formSubmitMessage.style.opacity = "1";

    requestElement.classList.add("visually-hidden")
    succesWindowElement.classList.remove("visually-hidden")


    setTimeout(() => {
        formSubmitMessage.style.opacity = "0";
        setTimeout(() => {
            formSubmitMessage.classList.add("visually-hidden");
        }, 500); // Ждем завершения анимации перед скрытием
    }, 3000); // Сообщение видно 3 секунды
})


