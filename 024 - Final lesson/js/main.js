/****************************************************************************************
 * 024 - Заключительный урок
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
// Animate size: width,height
$(document).ready(function () {
    $("#i_img").bind("click", function (event){
        // $(event.target).parent().css("text-align", "center")
        $(event.target).animate({
            width: $(event.target).width() * 3,
            height: $(event.target).height() * 3
        }, 3000)    // 3sec.
    })
})

