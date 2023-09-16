/****************************************************************************************
 * Выбор случайного цвета jQuery
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

$(document).ready(function () {
     $("#addBlock").click(function () {
         let randName = GetNumber(1, 700)  // случайное имя (число)
         $("#blocks").prepend("<div class='block " + randName + "'>" + randName + "</div>") // добавить до (в начало)
         $('.' + randName).css("background", "#" +
             GetNumber(0,9) +
             GetNumber(0,9) +
             GetNumber(0,9) +
             GetNumber(0,9) +
             GetNumber(0,9) +
             GetNumber(0,9))
     })
    function GetNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min // случайное число в диапазоне max/min
    }
})
