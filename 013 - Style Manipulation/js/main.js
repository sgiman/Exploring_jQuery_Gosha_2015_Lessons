/****************************************************************************************
 * 013 - Манипулирование стилями
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

$("#div").css("font-size", "36px")
$("#div").css("color", "yellow")
$("#div").css("font-weight", "500")
$("#div").css("width", "100%")

$("#div").css("background-color", function (){
    return "blue"
})

//$("#div").css("width", 350)

/*
// Пропорцинально (width, height)
$("#div").css("height", function (){
    return $(this).width
})
*/

// With prompt: height
$("#div").css("height", function (){
    let height = prompt("Ввeдите высоту")
    return height + "px"
})
