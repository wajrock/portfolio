let itemsWhealer = [...document.querySelectorAll('.child')];
itemsWhealer.forEach(e => {
    e.addEventListener('mouseenter',() => {
        e.style.width = "4rem";
    })

    e.addEventListener('mouseleave',() => {
        e.style.width = "3rem";
    })
});