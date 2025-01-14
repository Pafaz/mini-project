const myForm = document.getElementById('myForm')
const name = document.forms["messageForm"]["name-message"];
const tanggal = document.forms["messageForm"]["tanggal-message"];
const jk = document.forms["messageForm"]["jk-message"];
const message = document.forms["messageForm"]["message-message"];

function setName() {
    let name = document.getElementById("name")
    let person = prompt("Siapa nama anda?");
    name.innerHTML = person;
}

function hasil() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();


    document.getElementById("hasil-date").innerHTML = `${day} - ${month + 1} -  ${year}`;

    let hasilNama = document.getElementById("hasil-name");
    let hasilTanggal = document.getElementById("hasil-tanggal");
    let hasilJK = document.getElementById("hasil-jk");
    let hasilMessage = document.getElementById("hasil-message");

    hasilNama.innerHTML = name.value;
    hasilTanggal.innerHTML = tanggal.value;
    hasilJK.innerHTML = jk.value;
    hasilMessage.innerHTML = message.value;
}

function validate() {
    let isError = false;

    if (name.value == "") {
        name.style.border = "1px solid red";
        document.getElementById("error-name-message").innerHTML = "Nama Harus Diisi";
        isError = true;
    } else {
        name.style.border = "1px solid green";
        document.getElementById("error-name-message").innerHTML = "";
    }

    if (tanggal.value == "" && !isValidDate(tanggal.value)) {
        tanggal.style.border = "1px solid red";
        document.getElementById("error-tanggal-message").innerHTML = "Tanggal Lahir Harus Diisi";
        isError = true;
    } else {
        tanggal.style.border = "1px solid green";
        document.getElementById("error-tanggal-message").innerHTML = "";
    }

    if (jk.value == "") {
        jk.style.border = "1px solid red";
        document.getElementById("error-jk-message").innerHTML = "Jenis Kelamin Harus Diisi";
        isError = true;
    } else {
        jk.style.border = "1px solid green";
        document.getElementById("error-jk-message").innerHTML = "";
    }

    if (message.value == "") {
        message.style.border = "1px solid red";
        document.getElementById("error-message-message").innerHTML = "Pesan Harus Diisi";
        isError = true;
    } else {
        message.style.border = "1px solid green";
        document.getElementById("error-message-message").innerHTML = "";
    }

    return isError == false ? true : false;
}

function isValidDate(dateString) {
    const regex = /^(0[1-9]|[12]\d|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
    if (!regex.test(dateString)) return false;

    const [day, month, year] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day);

    return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day
    );
}

myForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (validate()) {
        hasil()
    }
})

ScrollReveal().reveal('.facdiv');

particlesJS("hero", { "particles": { "number": { "value": 80, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#000000" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": true, "distance": 150, "color": "#000000", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true }); var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function () { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;