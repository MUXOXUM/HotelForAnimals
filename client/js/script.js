import { select } from './select.js'

const dates = [...document.querySelectorAll('#custom-date')]
dates.forEach((elem) => {
    elem.valueAsDate = new Date()
})

select()

