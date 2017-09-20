function button() {
    $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
        function (data) {

            console.log(data);
        });
}

$(document).ready(function () {
    $("button").click(function () {
        $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",

            function (data) {
                console.log(data);

                $.each(data, function (e, i) {
                    $("div").append("<br>" + "<br>" + e + ': ' + i);
                });

            });
    });
});





