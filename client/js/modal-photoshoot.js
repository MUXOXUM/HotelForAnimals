const buttonsElements = [...document.querySelectorAll('.photoshoot__button')]
const modalElement = document.querySelector('.pay-modal')
const photoshootDescElement = document.querySelector(".payment-form__description")
const photoshootPriceElement = document.querySelector(".payment-form__price")
const photoshootNameElement = document.querySelector(".payment-form__good-name")
const closeButtonElement = document.querySelector('.pay-modal__close-button')


const headerBurgerButtonElement = document.querySelector(".header__burger-button")

buttonsElements.forEach((button) => {
    button.addEventListener('click', () => {
        const parentBody = button.closest('.photoshoot__body')
        const descriptionText = parentBody.querySelector('.photoshoot__description').textContent
        photoshootDescElement.textContent = descriptionText

        const priceToSet = parentBody.querySelector(".photoshoot__price").textContent
        photoshootPriceElement.innerHTML = `к оплате: <b>${priceToSet}</b>`

        const nameToSet = parentBody.querySelector(".photoshoot__title").textContent
        console.log(nameToSet)
        photoshootNameElement.innerHTML = `<p> ${nameToSet} </p>`

        modalElement.classList.toggle('visually-hidden')
        headerBurgerButtonElement.style.zIndex = "0"    
    })
})

closeButtonElement.addEventListener('click', () => {
    modalElement.classList.toggle('visually-hidden')
    headerBurgerButtonElement.style.zIndex = "60"
})