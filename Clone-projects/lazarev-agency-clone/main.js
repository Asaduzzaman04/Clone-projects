


// ===navlinks===\\
const dropDown = document.getElementById("dropdown");
const arrow = document.getElementById("arrow-sign")


 dropDown.addEventListener("mouseenter", () => { 
    
    gsap.from("#dropdown-links", {
        y:-400,
        opacity:0,
        duration :1,
        ease: "circ.out",
    })

})
const dropIcon = () => {
    dropDown.addEventListener("mouseover", () => {
        if(arrow.className.includes("ri-arrow-down-s-line")){
            arrow.classList.add("ri-arrow-up-s-line")
        } 
    })
    dropDown.addEventListener("mouseleave" , () => {
        if(arrow.className.includes("ri-arrow-up-s-line")){
            arrow.classList.add("ri-arrow-down-s-line")
        }
    })
}
dropIcon()

// -----second-section-----
const intosec = document.getElementById("intro-vedio")
const vedioCursor = document.getElementsByClassName("vedio-cursor")
intosec.addEventListener("mousemove", (e) => {
 gsap.to(".vedio-cursor", {
    x:e.clientX - vedioCursor.offsetWidth / 2,
    y: e.offsetY - vedioCursor.offsetHeight / 2,
    ease: "power3.out",
    duration : 0.2,
    scale:2
 })
 

})