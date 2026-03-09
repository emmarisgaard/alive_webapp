
//Find alle accordions
const accordions = document.querySelectorAll(".accordion");

//Loop igennem alle accordions og lyt efter klik. Fang også ikonet, så det kan ændres ved åben/luk.

accordions.forEach(accordion => {
    accordion.addEventListener("click", function () {
        const panel = this.nextElementSibling;
        const icon = this.querySelector("i");

        this.classList.toggle("open");
        panel.classList.toggle("open");
        icon.classList.toggle("fa-angle-down");
        icon.classList.toggle("fa-minus");
    });
});

