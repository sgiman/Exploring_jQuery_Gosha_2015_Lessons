/****************************************************************************************
 * 022 - Анимация
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

// --- Actions events (hide, show) ---
function hideComments() {
    $("#comments").hide(1000, function (){
        // Links c задержкой
        $("#hide").hide()
        $("#show").show()
    })
}
function showComments() {
    $("#comments").show(1000, function (){
        // Links c задержкой
        $("#hide").show()
        $("#show").hide()
    })
}
/*-------------------------------------------------------
function showComments() {
    // Links без задержки
    $("#hide").show()
    $("#show").hide()
    $("#comments").show(1000)
}
--------------------------------------------------------*/

// --- Select Links ---
$(document).ready (function() {
    $("#hide").bind("click", hideComments)
    $("#show").bind("click", showComments)
})
