// ----------------------------Navbar and responsive navbar--------------//

let nav = document.getElementsByClassName('nav-button');
let ddNav = document.getElementsByClassName('dd-select');
let ffNav = document.getElementsByClassName('footer-button')

let setNavEvents = (a, b) => {
    for (let i of a) {
        i.addEventListener('click', (e) => {
            e.preventDefault();
            // console.log(i.getAttribute('href'))
            let elementHref = i.getAttribute('href');
            if (elementHref[0] === "#") {
                let element = document.querySelector(i.getAttribute('href'))
                let offsetTop = element.offsetTop;
                if (b) {
                    let dots = document.getElementById('dots');
                    myFunction(dots);
                }
                scroll({
                    top: offsetTop,
                    behavior: "smooth"
                });

            }

        })
    }
}




setNavEvents(nav);
setNavEvents(ffNav);
setNavEvents(ddNav, true);


// -----------------------------Hamberger and cross toggle---------------//

function myFunction(x) {
    let ddContainer = document.getElementById("dropdown-select");
    let haze = document.getElementById("hazy-background");



    x.classList.toggle("change");
    if (x.classList.contains("change")) {
        ddContainer.style.display = 'block';
        ddContainer.style.opacity = 1;
        ddContainer.style.visibility = 'visible';
        ddContainer.style.animation = 'fade 0.75s';
        haze.style.display = "block";
        x.style.visibility = 'hidden'

    } else {
        ddContainer.style.display = 'none';
        ddContainer.style.opacity = 0;
        ddContainer.style.visibility = 'hidden';
        haze.style.display = "none";
        x.style.visibility = 'visible';
    }

    return;

}

function contentRemoval(x) {
    let a = document.getElementById('dots');
    a.classList.remove('change');
    a.style.visibility = 'visible';
    x.style.display = 'none'
    document.getElementById("dropdown-select").style.display = 'none';
}


// ---------------------------------------------------------------------//


// ----------------------Date and time----------------------------------//



let dateAndTime = () => {
    let t = new Date().toString();
    t = t.split(" ");
    document.getElementById('day').innerHTML = t[0];
    document.getElementById('date').innerHTML = t[2];
    document.getElementById('month').innerHTML = t[1];
    document.getElementById('year').innerHTML = t[3];
    t = t[4].split(":");
    let a = "AM", b = t[0];
    if (parseInt(b) >= 12) a = "PM"
    if (t[0] !== '12') t[0] = t[0] % 12;
    document.getElementById('hour').innerHTML = t[0];
    document.getElementById('min').innerHTML = t[1];
    document.getElementById('sec').innerHTML = t[2];
    document.getElementById('mer').innerHTML = a;

}

dateAndTime();
setInterval(dateAndTime, 60000);
// ---------------------------------------------------------------------//



