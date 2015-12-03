var cantidad;
var pistaInicio;
$("#calcular").on("click", function(){
    cantidad = parseInt($("#cantidad").val());
    pistaInicio = parseInt($("#inicio").val());
    var input = "<input type='text' class='result__item'>"
    for (var i = 1 ; i <= cantidad; i++) {
        $(".result__container__input").append(input);
    };
    $(".article").slideUp("fast");
    $(".ocultar").css("display","flex");
    $(".result").slideDown();
    $(".result__item:first-child").addClass("active");
});

var val;
var arrayPistas = [];
var arrayRecorrido = [];
var promedio;
var suma = 0;
$(".result__calcular__button").on("click", function(){
    var a = pistaInicio;
    arrayPistas.push(a);
    for (var i = 0; i < cantidad; i++) {
        var active = $(".active");
        val = parseInt(active.val());
        //agregar Array Pistas
        arrayPistas.push(val);

        //agregar array recorrido
        a = Math.abs(arrayPistas[i+1] - arrayPistas[i]);
        suma = suma + a;
        arrayRecorrido.push(a);
        var result = arrayRecorrido[i];
        $(".result__container__pistas").append("<p>"+result+"</p>");
        active.next().addClass("active");
        active.removeClass("active");
    };
    promedio = suma /cantidad;
    $(".result__container__promedio").append("<p>"+promedio+"</p>");
    console.log(arrayPistas);
    console.log(arrayRecorrido);
    console.log(promedio);
});