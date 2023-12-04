const clouds = document.querySelectorAll('.cloud'),
    boat = document.querySelector('.boat');

window.addEventListener("scroll", () => {
    clouds.forEach(cloud => {
        let speed = cloud.getAttribute("speed")
        cloud.style.transform = `translateX(${window.scrollY * speed}px)`
    })
    boat.style.transform = `translateX(${window.scrollY}px)`
})

const title = document.querySelector('.title');
const titleInfo = title.innerHTML
title.innerHTML = ""

function rec(i = 0) {
    title.innerHTML += titleInfo[i]
    i++
    if (i < titleInfo.length) {
        setTimeout(() => {
            rec(i)
        }, 300);
    }
}
rec()

const div = document.querySelector('.div'),
    images = document.querySelectorAll('.img');

div.addEventListener("mousemove", (e) => {
    images.forEach(img => {
        let speed = img.getAttribute("speed")
        img.style.transform = `translate(${e.clientX * speed / 10}px,${e.clientY * speed / 5}px)`
    })
})

const times = document.querySelectorAll('.times'),
    box = document.querySelector('.box');
window.addEventListener("scroll", function scroll() {
    if (box.offsetTop < window.scrollY + 2.5 * box.clientHeight) {
        times.forEach(time => {
            function count(i = 0) {
                time.innerHTML = i
                i++
                let countAtt = time.getAttribute("count")
                if (i <= countAtt) {
                    setTimeout(() => {
                        count(i)
                    }, 30);
                }
            }
            count()
        })
        window.removeEventListener("scroll", scroll)
    }
})

const btns = document.querySelectorAll('.btn'),
    root = document.querySelector(':root');

btns.forEach(btn => {
    window.addEventListener("mousemove", (e) => {
        let y = e.pageY - btn.offsetTop
        let x = e.pageX - btn.offsetLeft
        btn.style.setProperty("--x", `${x}px`)
        btn.style.setProperty("--y", `${y}px`)
    })
    btn.onclick = () => {
        root.style.setProperty("--color", "greenyellow")
        localStorage.setItem("color", "greenyellow")
    }
    btn.ondblclick = () => {
        root.style.setProperty("--color", "blue")
        localStorage.setItem("color", "blue")
    }
})

root.style.setProperty("--color", localStorage.getItem("color"))


const cards = document.querySelectorAll('.info__card');

cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        let half = card.clientHeight / 2
        // card.innerHTML = `${e.offsetX - half}X | ${e.offsetY - half}Y`
        let x = e.offsetX - half
        let y = e.offsetY - half
        card.style.transform = `rotateX(${-y / 5}deg) rotateY(${x / 5}deg)`
    })
    card.addEventListener("mouseout", () => {
        card.style.transform = `rotate(0)`
    })
})