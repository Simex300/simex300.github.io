window.addEventListener('load', removeDOMClasses);
window.addEventListener('load', getNavActive);
window.addEventListener('resize', removeDOMClasses);
window.addEventListener('scroll', getTopButton);
window.addEventListener('scroll', getNavActive);

const home = document.querySelector("#home");
const skills = document.querySelector("#skills");
const portfolio = document.querySelector("#portfolio");
const contact = document.querySelector("#contact");

document.querySelectorAll(".nav-item").forEach(e => {
    e.onpointerup = scrollToPage;
})

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

function changeNavClass(element) {
    document.querySelectorAll(".nav-item").forEach(item => {
        item.classList.remove("active")
    });
    element.classList.add("active");
}

function getNavActive() {
    const posArray = [home, skills, portfolio, contact]
    const needle = 0;
    posArray.sort((prev, curr) => {
        return Math.abs(needle - prev.getBoundingClientRect().top) - Math.abs(needle - curr.getBoundingClientRect().top);
    });

    document.querySelectorAll(".nav-item").forEach(item => {
        if (item.children[0].innerHTML.toLowerCase() == posArray[0].id) {
            changeNavClass(item);
        } 
    })
}

function scrollToPage(e) {
    // Move to the actual position
    switch (this.children[0].innerHTML.toLowerCase()) {
        case "home":
            window.scrollTo({top: window.innerHeight * 0, behavior: "smooth"});
            break;
        case "skills":
            window.scrollTo({top: window.innerHeight * 1, behavior: "smooth"});
            break;
        case "portfolio":
            window.scrollTo({top: window.innerHeight * 2, behavior: "smooth"});
            break;
        case "contact":
            window.scrollTo({top: window.innerHeight * 3, behavior: "smooth"});
            break;
    }
}

function scrollTop(e) {
    window.scrollTo({top: 0, behavior: "smooth"});
}

function manageLink(e) {
    e.stopPropagation()
}