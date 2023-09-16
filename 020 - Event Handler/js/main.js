/****************************************************************************************
 * 020 - Обработчик событий
 * --------------------------------------------------------------------------------------
 * PhpStorm 2023.1
 * jQuery 3.7
 * HTML, CSS, JavaScript
 * --------------------------------------------------------------------------------------
 * Изучение библиотек jQuery
 * Gosha Dudar (2015)
 * https://www.youtube.com/watch?v=458mWXnWSmA&list=PL0lO_mIqDDFXQk_TTlSO7y7J1l5e-RMgi
 *
 ****************************************************************************************
 * Writing & Modification by sgiman @ 2023-09
 */

/*
 * bind - работает только с заранее загруженными тегами страницы
 * unbind - отлючает события bind
 * on - рабтает со всеми тегами страницы (с загруженными и созданными)
 */


// Вызывается после полной загрузки страницы
$(document).ready(function (){
    function IncSize(event) {
        //alert("test")
        // Преобразовать в число
        let width = Number(event.target.style.width.substring(0, event.target.style.length - 3))
        //alert(width)
        // Увеличить ширину
        event.target.style.width = (width + 5) + "px"
        //$(event.target).unbind()
        // Вывести координаты в новые теги "P"
        $('<p style="cursor: pointer; background-color: #cbd7d0">Координаты мышки при нажатии: x = ' + event.screenX + " , y = " + event.screenY + "<\p>").insertAfter("div:last")
    }

    // Подключить событие "click"
    $("#box_1, #box_2, #box_3").bind("click", IncSize)

    // Подключить события для созданных тегов "P"
    $(document).on("click", "p", function () {
        alert("TEST-P")
        $("p").remove()
    })

})

