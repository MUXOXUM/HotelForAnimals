const changeInfobuttoElement = document.querySelector('.profile__change-button')
const changeInfoModalElement = document.querySelector('.settings-modal')
const changeInfoCloseButtonElement = document.querySelector('.settings-modal__close-button')
const headerBurgerButtonElement = document.querySelector(".header__burger-button")

// модалка для изменения данных
changeInfobuttoElement.addEventListener('click', () => {
    const parentBody = changeInfobuttoElement.closest(".profile__user")

    const phone = parentBody.querySelector(".profile__phone").textContent.replace("Телефон: ", "").trim()
    const email = parentBody.querySelector('.profile__email').textContent.replace('Почта: ', '').trim()
    const address = parentBody.querySelector('.profile__address').textContent.replace('Адрес: ', '').trim()

    const phoneInput = changeInfoModalElement.querySelector('input[name="phone"]')
    const emailInput = changeInfoModalElement.querySelector('input[name="email"]')
    const addressInput = changeInfoModalElement.querySelector('input[name="address"]')

    if (phoneInput) phoneInput.value = phone
    if (emailInput) emailInput.value = email
    if (addressInput) addressInput.value = address;

    changeInfoModalElement.classList.toggle('visually-hidden')
    headerBurgerButtonElement.style.zIndex = "0"    
})

// кнопка которая закрывает модалку для изменения данных
changeInfoCloseButtonElement.addEventListener('click', () => {
    changeInfoModalElement.classList.toggle('visually-hidden')
    headerBurgerButtonElement.style.zIndex = "60"
})


// внесение изменений пользователя 
const changeInfoFormElement = document.querySelector('.change-info-form')
const succesAlertElement = document.querySelector(".success-alert")

changeInfoFormElement.addEventListener('submit', (event) => {
    event.preventDefault()
    const parentElement = changeInfoFormElement

    const phoneInput = parentElement.querySelector('input[name="phone"]')
    const emailInput = parentElement.querySelector('input[name="email"]')
    const addressInput = parentElement.querySelector('input[name=address')

    const phoneValue = phoneInput ? phoneInput.value.trim() : ""
    const emailValue = emailInput ? emailInput.value.trim() : ""
    const addressValue = addressInput ? addressInput.value.trim() : ""

    const profileUser = document.querySelector(".profile__user")
    const profilePhone = profileUser.querySelector(".profile__phone")
    const profileEmail = profileUser.querySelector(".profile__email")
    const profileAddress = profileUser.querySelector(".profile__address")

    if (profilePhone) profilePhone.textContent = `Телефон: ${phoneValue}`
    if (profileEmail) profileEmail.textContent = `Почта: ${emailValue}`
    if (profileAddress) profileAddress.textContent = `Адрес: ${addressValue}`

    changeInfoModalElement.classList.toggle('visually-hidden')
    headerBurgerButtonElement.style.zIndex = "0"  

    // всплытие окна об успехе

    succesAlertElement.classList.remove("visually-hidden");
    succesAlertElement.style.transition = "opacity 0.5s ease"; // Настройка плавного появления
    succesAlertElement.style.opacity = "1";
    succesAlertElement.classList.remove("visually-hidden")
    
    setTimeout(() => {
        succesAlertElement.style.opacity = "0";
        setTimeout(() => {
            succesAlertElement.classList.add("visually-hidden");
        }, 500); // Ждем завершения анимации перед скрытием
    }, 3000); // Сообщение видно 3 секунды

})