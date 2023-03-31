// Для навигации боковой
function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// Переключатель темы
// на старте тёмная тема не установлена
var dark = false;
// получаем доступ ко всей странице и к абзацу с переключателем
var a = document.body;
var p = document.getElementById("select", "selects")

// находим стили по тегу
const style = document.getElementsByTagName("style")[0];
// получаем доступ к разделу стилей
const styleSheet = style.sheet;

var flag = document.getElementById("flexSwitchCheckDefault");



// эта функция будет срабатывать при нажатии на переключатель
function darkLight() {
    // если тёмная тема не активна
    if (!dark) {
        // добавляем класс с тёмной темой ко всей странице
        a.className = "theme-dark";
        // меняем надпись на переключателе
        p.innerHTML = "<i class='bx bxs-sun' ></i>";
        // а если активна — 
    } else {
        // добавляем класс со светлой темой ко всей странице
        a.className = "theme-light";
        // меняем надпись на переключателе
        p.innerHTML = "<i class='bx bxs-moon' ></i>";
    }

    // меняем значение темы на противоположное
    dark = !dark;
    // сохраняем в памяти статус ручного переключателя
    localStorage.setItem('selected', dark);
}

// переменная для временного хранения индекса медиазапроса
var temp;

function autoDarkLight() {
    // если переключатель установлен
    if (flag.checked) {
        // создаём новый медиазапрос
        const mediaRuleText = `@media screen and (prefers-color-scheme: dark) {
            body {
              background: #56575A;
              color: white;
            }
          }`;
        // добавляем его на страницу
        const mediaRuleIndex = styleSheet.insertRule(mediaRuleText);
        // сохраняем индекс запроса в стилях
        temp = mediaRuleIndex;
        // скрываем ручной переключатель
        p.style.visibility = "hidden";
        // сохраняем положение переключателя в памяти браузера
        localStorage.setItem('auto', true);
        // если переключатель не установлен
    } else {
        // удаляем медиазапрос по индексу
        styleSheet.deleteRule(temp);
        // показываем ручной переключатель
        p.style.visibility = "visible";
        // сохраняем положение переключателя в памяти браузера
        localStorage.setItem('auto', false);
    }

}

// выполняется сразу после загрузки страницы
window.addEventListener('DOMContentLoaded', (event) => {
    // если в нашем хранилище есть информация о том, что мы установили вручную тёмную тему
    if (localStorage.getItem('selected') == 'true') {
        // виртуально нажимаем на ручной переключатель темы
        darkLight();
        // если такой информации там нет — 
    } else {
        // сохраняем текущее значение темы
        localStorage.setItem('selected', dark);
    }

    // если в нашем хранилище есть информация о том, что мы установили авторежим
    if (localStorage.getItem('auto') == 'true') {
        // виртуально включаем переключатель авторежима
        flag.checked = true;
        // вызываем обработчик автопереключателя
        autoDarkLight();
        // если такой информации там нет
    } else {
        // значит мы просто сохраняем значение false – авторежим выключен
        localStorage.setItem('auto', false);
    }
});

// Аккордионы
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function myFunction1() {
    document.getElementById("myDropdowns").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtns')) {

        var dropdowns = document.getElementsByClassName("dropdown-contents");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function myFunction2() {
    document.getElementById("myDropdownss").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtnss')) {

        var dropdowns = document.getElementsByClassName("dropdown-contentss");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}