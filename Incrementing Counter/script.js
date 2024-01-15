const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target') // the + turns the counter string into a number
        const c = +counter.innerText
        const increment = target / 725
        if(c < target) {
            counter.innerText =`${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        }
    }
    updateCounter()
})