const toggleBtn = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector(".primary-navigation");
const html = document.querySelector(".HTML");
const body = document.querySelector(".BODY");

toggleBtn.addEventListener("click", (e) => {
    const navIsVisible = nav.getAttribute("data-visible") === "true";

    if (navIsVisible) {
        nav.setAttribute("data-visible", "false");
        toggleBtn.setAttribute("aria-expanded", "false");
        body.classList.remove("dont-scroll");
        html.classList.remove("dont-scroll");
    } else {
        nav.setAttribute("data-visible", "true");
        toggleBtn.setAttribute("aria-expanded", "true");
        body.classList.add("dont-scroll");
        html.classList.add("dont-scroll");
    }
});
