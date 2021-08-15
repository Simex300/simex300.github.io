document.querySelectorAll(".grid-item").forEach(e => {{
    e.addEventListener("touchend", openSkills);
}});

document.querySelectorAll(".flex-item").forEach(e => {{
    e.addEventListener("touchend", openPortfolio);
}});

function openSkills() {
    this.children[1].classList.toggle("active")
}

function openPortfolio() {
    const hadActive = this.classList.contains("active")
    document.querySelectorAll(".flex-item").forEach(e => {{
        e.classList.remove("active");
    }});
    if(!hadActive)
        this.classList.toggle("active")
}