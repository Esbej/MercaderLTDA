var limitDescription = 80;



//   -------------------CARGA

$(function () {
    $("#description").on("input", function () {
        //al cambiar el texto del txt_detalle
        var init = $(this).val().length;
        total_characters = (limitDescription - init);

        $('#contador_description').html(total_characters + " /80");
        if (total_characters < 10) {
            document.getElementById("contador_description").style.color = "red"
        } else {
            document.getElementById("contador_description").style.color = "gray"
        }
    });
});

//   -------------------UPDATE


$(function () {
    $("#descriptionU").on("input", function () {
        //al cambiar el texto del txt_detalle
        var init = $(this).val().length;
        total_characters = (limitDescription - init);

        $('#contador_descriptionU').html(total_characters + " /80");
        if (total_characters < 10) {
            document.getElementById("contador_descriptionU").style.color = "red"
        } else {
            document.getElementById("contador_descriptionU").style.color = "gray"
        }
    });
});
