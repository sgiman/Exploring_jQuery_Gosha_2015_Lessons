/****************************************************************************************
 * 018 - Создание элементов
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

// --- appendTo, prependTo, insertBefore, InsertAfter ---

$("<p class='t_blue'>Text: Prepend To </p>").prependTo("#div")          // добавить до (внутри div)
$("<p class='t_red'>Text: Append To</p>").appendTo("#div")              // добавить после (внутри div)

$("<p class='t_green'>Text: insert Before</p>").insertBefore("#div")    // вставить до (снаружи div)
$("<p class='t_green'>Text: insert After</p>").insertAfter("#div")      // вставить после (снаружи div)
