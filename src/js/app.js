let btnMenu = document.querySelector('.menu-btn');
let navbar = document.querySelector('.navbar');
let dataNavbar = navbar.getAttribute('data-navbar');
btnMenu.onclick = function () {
    navbar.classList.toggle("navbar--active");
};

// Для навигации боковой
function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
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

// аккордеон
var accordion = (function () {

    var $accordion = $('.js-accordion');
    var $accordion_header = $accordion.find('.js-accordion-header');
    var $accordion_item = $('.js-accordion-item');

    // default settings 
    var settings = {
        // animation speed
        speed: 400,

        // close all other accordion items if true
        oneOpen: false
    };

    return {
        // pass configurable object literal
        init: function ($settings) {
            $accordion_header.on('click', function () {
                accordion.toggle($(this));
            });

            $.extend(settings, $settings);

            // ensure only one accordion is active if oneOpen is true
            if (settings.oneOpen && $('.js-accordion-item.active').length > 1) {
                $('.js-accordion-item.active:not(:first)').removeClass('active');
            }

            // reveal the active accordion bodies
            $('.js-accordion-item.active').find('> .js-accordion-body').show();
        },
        toggle: function ($this) {

            if (settings.oneOpen && $this[0] != $this.closest('.js-accordion').find('> .js-accordion-item.active > .js-accordion-header')[0]) {
                $this.closest('.js-accordion')
                    .find('> .js-accordion-item')
                    .removeClass('active')
                    .find('.js-accordion-body')
                    .slideUp()
            }

            // show/hide the clicked accordion item
            $this.closest('.js-accordion-item').toggleClass('active');
            $this.next().stop().slideToggle(settings.speed);
        }
    }
})();

$(document).ready(function () {
    accordion.init({ speed: 300, oneOpen: true });
});