const servicesStatusElements = [...document.querySelectorAll(".services__status")]

servicesStatusElements.forEach((statusElement) => {
    if (statusElement.dataset.status === "confirmed") {
        const firstChild = statusElement.firstElementChild;
        const lastChild = statusElement.lastElementChild;

        if (firstChild && lastChild) {
            firstChild.classList.remove("visually-hidden");
            lastChild.classList.add("visually-hidden");
        }
    } 
    else if (statusElement.dataset.status === "pending") {
        const firstChild = statusElement.firstElementChild;
        const lastChild = statusElement.lastElementChild;

        if (firstChild && lastChild) {
            firstChild.classList.add("visually-hidden");
            lastChild.classList.remove("visually-hidden");
        }
    }
})