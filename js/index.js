window.addEventListener('load', removeDOMClasses);
window.addEventListener('resize', removeDOMClasses);
window.addEventListener('scroll', getTopButton);

document.querySelectorAll(".grid-item").forEach(e => {
    if (!navigator.userAgentData.mobile) 
        e.addEventListener("click", openSkills);
    else
        e.addEventListener("touchend", openSkills);
});

document.querySelectorAll(".flex-item").forEach(e => {
    // if (navigator.userAgentData.mobile)
        e.onpointerdown = openPortfolio;
});

document.querySelectorAll(".flex-link").forEach(e => {
    if (navigator.userAgentData.mobile)
        e.onpointerdown = manageLink;
});

document.querySelector(".top-button").addEventListener("click", scrollTop)

function openSkills() {
    const hadActive = this.children[1].classList.contains("active")
    document.querySelectorAll(".grid-item .menu").forEach(e => {
        e.classList.remove("active");
    });
    if(!hadActive)
        this.children[1].classList.toggle("active")
}

function openPortfolio(e) {
    e.stopPropagation();
    const hadActive = this.classList.contains("active")
    document.querySelectorAll(".flex-item").forEach(e => {
        e.classList.remove("active");
    });
    document.querySelectorAll(".flex-link").forEach(e => {
        e.classList.remove("active");
    });
    if(!hadActive){
        this.classList.toggle("active");
        setTimeout(() => {
            this.querySelectorAll(".flex-link").forEach(e => {
                e.classList.add("active");
            })
        }, 45);
    }
}

function removeDOMClasses() {
    if(window.innerWidth <= 800) {
        // Tablet and mobile changes
        document.querySelectorAll(".grid .menu .menu-item .squarebox .alt").forEach(squarebox => {
            if(squarebox.classList.contains("alt"))
                squarebox.classList.remove("alt")
        })
    }
    else {
        // Tablet and mobile changes
        document.querySelectorAll(".grid .menu .menu-item .squarebox").forEach(squarebox => {
            const children = squarebox.children
            for (let i = 0; i < children.length; i++) {
                if(!children[i].classList.contains("alt"))
                    children[i].classList.add("alt")
            }
        })
    }
}

function getTopButton(e) {
    if ((document.body.scrollHeight - window.innerHeight) - window.pageYOffset <= 200) {
        document.querySelector(".top-button").classList.remove("hidden")
    }
    else {
        document.querySelector(".top-button").classList.add("hidden")
    }
}

function scrollTop(e) {
    window.scrollTo({top: 0, behavior: "smooth"});
}

function manageLink(e) {
    e.stopPropagation()
}