const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 10);
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("open");
}

window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("open");
}

// Update page title based on current section
function updatePageTitle() {
    var sections = document.querySelectorAll('section');
    var pageTitle = document.getElementById('page-title');
    var viewportHeight = window.innerHeight;

    sections.forEach(function (section) {
        var sectionId = section.getAttribute('id');
        var sectionTop = section.offsetTop;
        var sectionHeight = section.offsetHeight;
        var sectionBottom = sectionTop + sectionHeight;
        var scrollPos = window.pageYOffset;

        if (scrollPos < sectionBottom && scrollPos + viewportHeight > sectionTop) {
            if (sectionId === 'home') {
                pageTitle.textContent = 'Shaikh Abdul Sami - Personal Portfolio';
            } else {
                pageTitle.textContent = sectionId.charAt(0).toUpperCase() + sectionId.slice(1) + " - Personal Portfolio";
            }
        }
    });
}

// Listen for scroll event to update page title
window.addEventListener('scroll', updatePageTitle);
window.addEventListener('resize', updatePageTitle);


// // tooltip elements
// document.querySelectorAll('.tooltip-element').forEach(function(element) {
//     element.addEventListener('click', function() {
//       var tooltipText = this.getAttribute('title');
//       if (tooltipText) {
//         alert(tooltipText);
//       }
//     });
//   });

var typed = new Typed('#about-typed-text', {
    strings: ['Full Stack Web Developer!', 'Software Engineer!', 'Tech Enthusiast!',],
    typeSpeed: 50,
    loop: true,
    hideCursor: true,
    onComplete: function () {
        typed.cursor.remove();
    }
});

var typed = new Typed('#home-text-repeat', {
    strings: ['Full Stack Web Developer!', 'Software Engineer!'],
    typeSpeed: 50,
    loop: true,
    hideCursor: true,
    onComplete: function () {
        typed.cursor.remove();
    }
});

function Submit() {
    let name = document.getElementById("name").value
    let subject = document.getElementById("subject").value
    let msg = document.getElementById("message").value
    console.log({
        name, subject, msg
    });
    window.location.href = `mailto:admin@abdulsami.com.pk?subject=${subject}&body=${msg}`
    setTimeout(function () {
        window.location.href = "/index.html"; // Change the URL to your login page
    }, 1000);
    return false;
}

//   AOS.init({
//     // offset: 20,
//     // disableMutationObserver: true,
//     delay: 10, // values from 0 to 3000, with step 50ms
//     duration: 1000, // values from 0 to 3000, with step 50ms
//   });