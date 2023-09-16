/****************************************************************************************
 * 010 - Завершение работы над формой
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
 
 function valid() {
    let state = $("input[name='sex']:checked").val()  // выбрать input c атрибутом name="sex" (уcтановленный в true)
    if (!state) {
        // return $("#message").html("<font style='color: red'>Укажите ваш пол</font><br />")
        $('#img').hide()
        $("#message").show()
        return $("#message").html("Укажите ваш пол")    // выход и функции
    }
    else {
        alert(state)    // STOP!
        $('#img').show()
        $("#message").hide()
    }

    let test = $("div, p")  // sapmle search DOM
    console.log(test)
 }
