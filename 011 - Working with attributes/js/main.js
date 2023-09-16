/****************************************************************************************
 * 011 - Работа с атрибутами
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

// Проверка в "img" атрибута "ALT"
// Найти все теги "img" у которых нет атрибута "alt"
$(":not(img[alt])").attr("alt", "jQuery") // добавить атрибут "alt" со значением "jQuery"
//$("img").not("alt").attr("alt", "jQuery")

let elements = $("img")
let text = "";
for (let i=0; i < elements.length; i++){
    text += elements[i].alt + "\n"
    //text += elements[i].src + "\n\n"      // sources
    //text += elements[i].className + "\n"  // classes
}
alert(text)

