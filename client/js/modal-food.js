const buttonsElements = [...document.querySelectorAll('.service__button--thin')]
const modalElement = document.querySelector('.pay-modal')
const foodPriceElement = document.querySelector(".payment-form__price")
const foodNameElement = document.querySelector(".payment-form__good-name")
const closeButtonElement = document.querySelector('.pay-modal__close-button')
const headerBurgerButtonElement = document.querySelector(".header__burger-button")

buttonsElements.forEach((button) => {
    button.addEventListener('click', () => {
        const parentBody = button.closest(".service__body--food")

        const priceToSet = parentBody.querySelector(".service__price").textContent
        foodPriceElement.innerHTML = `к оплате: <b>${priceToSet}</b>`

        const nameToSet = parentBody.querySelector(".service__title--food").textContent
        console.log(nameToSet)
        foodNameElement.innerHTML = `<p> ${nameToSet} </p>`

        modalElement.classList.toggle('visually-hidden')
        headerBurgerButtonElement.style.zIndex = "0"    
    })
})

closeButtonElement.addEventListener('click', () => {
    modalElement.classList.toggle('visually-hidden')
    headerBurgerButtonElement.style.zIndex = "60"
})