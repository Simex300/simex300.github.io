window.addEventListener('load', removeDOMClasses)
window.addEventListener('resize', removeDOMClasses)

document.querySelectorAll(".grid-item").forEach(e => {
    if (!navigator.userAgentData.mobile) 
        e.addEventListener("click", openSkills);
    else
        e.addEventListener("touchend", openSkills);
});

document.querySelectorAll(".flex-item").forEach(e => {
    if (navigator.userAgentData.mobile)
        e.onpointerdown = openPortfolio;
});

document.querySelectorAll(".flex-link").forEach(e => {
    if (navigator.userAgentData.mobile)
        e.onpointerdown = manageLink;
});

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
        document.querySelectorAll(".menu .menu-item .squarebox .alt").forEach(squarebox => {
            if(squarebox.classList.contains("alt"))
                squarebox.classList.remove("alt")
        })
    }
    else {
        // Tablet and mobile changes
        document.querySelectorAll(".menu .menu-item .squarebox").forEach(squarebox => {
            console.log(squarebox.children);
            for (const child in squarebox.children) {
                if(child.classList && !child.classList.contains("alt"))
                child.classList.add("alt")
            }
        })
    }
}

function manageLink(e) {
    e.stopPropagation()
}