let Ddate = document.getElementById("Ddate")
let Dtime = document.getElementById("Dtime")
let lockScreen = document.getElementById("lockScreen")
let touch = document.getElementById("touch")
let camera = document.getElementById("camera")
let password = document.getElementById("password")
document.getElementById("main").style.backgroundImage = "url('black.jpg')";
let show = true
date.style.display = "none"
touch.style.display = "none"
camera.style.display = "none"
Open.style.display = "none"
password.style.display = "none"
lockScreen.style.display = "block"
password.style.display = "none"


touch.innerHTML = `<button><span class="material-symbols-outlined">flashlight_on</span></button>`
camera.innerHTML = `<button><i class="fa-solid fa-camera"></i></button>`

console.log(touch.innerHTML);
console.log(camera.innerHTML);

function dDate() {
    setInterval(() => {
        let date = new Date

        // Ddate.innerHTML =`${date.getMonth()}, ${date.getDay()}`
        Ddate.innerHTML =`${date.toDateString()}`
    }, 1000);
}

dDate()

function dTime() {
    setInterval(() => {
        let date = new Date();
        Dtime.innerHTML = `${date.getHours()} : ${date.getMinutes()}`

        h = date.getHours()
        m = date.getMinutes()

        h = h < 10 ? "0" + h : h
        m = m < 10 ? "0" + m : m
        Dtime.innerHTML = `${h} : ${m} `
    }, 1000);
}

dTime()

function onn() {
    console.log(show);
    if (show == true) {
        document.getElementById("main").style.backgroundImage = "url('iphone.jpg')"
        show = false
        date.style.display = "block"
        touch.style.display = "block"
        camera.style.display = "block"
        Open.style.display = "block"
        lockScreen.style.display = "block"
        // password.style.display = "block"
    }
    else {
        document.getElementById("main").style.backgroundImage = "url('black.jpg')";
        show = true
        date.style.display = "none"
        touch.style.display = "none"
        camera.style.display = "none"
        Open.style.display = "none"
        password.style.display = "none"
    }

}

function openphone() {
    password.style.display == "none" ? password.style.display = "block" : password.style.display = "none";
    lockScreen.style.display == "block" ? lockScreen.style.display = "none" : lockScreen.style.display = "block";

    // touch.innerHTML === `<button><span class="material-symbols-outlined">flashlight_on</span></button>` ? touch.innerHTML = "Emergency" : touch.innerHTML = `<button><span class="material-symbols-outlined">flashlight_on</span></button>`;
    // camera.innerHTML === `<button><i class="fa-solid fa-camera"></i></button>` ? camera.innerHTML = 'Cancel' : camera.innerHTML = `<button><i class="fa-solid fa-camera"></i></button>`
}