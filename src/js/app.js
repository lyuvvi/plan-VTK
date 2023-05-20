let btnMenu = document.querySelector('.menu-btn');
let navbar = document.querySelector('.navbar');
let dataNavbar = navbar.getAttribute('data-navbar');
btnMenu.onclick = function () {
    navbar.classList.toggle("navbar--active");
};
// подключение слайдера
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
    },
});

// Для навигации боковой
function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

const btnAccordion = document.querySelectorAll('#accordion-button');
const bodyAccordion = document.querySelectorAll('#accordion-body');
for (x = 0; x < btnAccordion.length; x++) {
    btnAccordion[x].onclick = function () {
        let accordionPath = this.getAttribute('data-accroidon');
        console.log(accordionPath)
        for (y = 0; y < bodyAccordion.length; y++) {
            let accroidonTarget = bodyAccordion[y].getAttribute('data-accordion-target');
            if (bodyAccordion[y].getAttribute('data-accordion-target') === accordionPath) {
                bodyAccordion[y].classList.toggle('accordion--active');
            }
        }

    }
}



const toggleSwitch = document.getElementById('input-checkbox');
const currentTheme = localStorage.getItem('data-theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('data-theme', 'light');
    }
}
toggleSwitch.addEventListener('change', switchTheme, false);

// Смена вида плиток новостей

const newsButtonsList = document.getElementById('#article-list');
const newsButtonsBrick = document.getElementById('#article-grid');

const newsContent = document.querySelector('.articles-section__list');

try {
    newsButtonsBrick.addEventListener('click', function (e) {
        if (newsContent.classList.contains('article-list')) {
            newsContent.classList.remove('article-list');
            newsContent.classList.add('article-grid');
            newsButtonsBrick.classList.add('_active');
            newsButtonsList.classList.remove('_active');
        }
    })
} catch (error) {

}
try {
    newsButtonsList.addEventListener('click', function (e) {
        if (newsContent.classList.contains('article-grid')) {
            newsContent.classList.remove('article-grid');
            newsContent.classList.add('article-list');
            newsButtonsBrick.classList.remove('_active');
            newsButtonsList.classList.add('_active');
        }
    })
} catch (error) {

}


// scroll header
window.addEventListener("scroll", function () {
    var header = document.querySelector(".header");
    header.classList.toggle("header--sticky", window.scrollY > 0);
});
Ellipsis
    ({
        ellipsis: '…', //default ellipsis value
        debounce: 0, //if you want to chill out your memory usage on resizing
        responsive: true, //if you want the ellipsis to move with the window resizing
        className: '.clamp-1', //default class to apply the ellipsis
        lines: 1, //default number of lines when the ellipsis will appear
        portrait: null, //default no change, put a number of lines if you want a different number of lines in portrait mode,
        break_word: true //default the ellipsis can truncate words
    })
Ellipsis
    ({
        ellipsis: '…', //default ellipsis value
        debounce: 0, //if you want to chill out your memory usage on resizing
        responsive: true, //if you want the ellipsis to move with the window resizing
        className: '.clamp-2', //default class to apply the ellipsis
        lines: 2, //default number of lines when the ellipsis will appear
        portrait: null, //default no change, put a number of lines if you want a different number of lines in portrait mode,
        break_word: true //default the ellipsis can truncate words
    })
Ellipsis
    ({
        ellipsis: '…', //default ellipsis value
        debounce: 0, //if you want to chill out your memory usage on resizing
        responsive: true, //if you want the ellipsis to move with the window resizing
        className: '.clamp-3', //default class to apply the ellipsis
        lines: 3, //default number of lines when the ellipsis will appear
        portrait: null, //default no change, put a number of lines if you want a different number of lines in portrait mode,
        break_word: true //default the ellipsis can truncate words
    })
Ellipsis
    ({
        ellipsis: '…', //default ellipsis value
        debounce: 0, //if you want to chill out your memory usage on resizing
        responsive: false, //if you want the ellipsis to move with the window resizing
        className: '.clamp-4', //default class to apply the ellipsis
        lines: 6, //default number of lines when the ellipsis will appear
        portrait: null, //default no change, put a number of lines if you want a different number of lines in portrait mode,
        break_word: true //default the ellipsis can truncate words
    })


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "%";
        }
    });
}

// Для навигации боковой
function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// Modal
const btnOpenModal = document.querySelectorAll('.products-grid__name');
const modalOverlay = document.querySelector('.modal-overlay');
const modals = document.querySelectorAll('.modal');

btnOpenModal.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modals.forEach((el) => {
			el.style.display = 'none'
		});
     const modal = document.querySelector(`[data-modal="${path}"]`)
		modal.style.display = 'block'
		modalOverlay.style.opacity = '1';
        modalOverlay.style.visibility = 'visible';
        document.body.style.overflow = "hidden";
	});
});

modalOverlay.addEventListener('click', (e) => {
	document.body.style.overflow = "visible";

	if (e.target == modalOverlay) {
		modalOverlay.style.opacity = '0';
    	modalOverlay.style.visibility = 'hidden';
		modals.forEach((el) => {
			el.style.display = 'none';
		});
	}
});