var cantidad;
var marcos;
$("#calcular").on("click", function(){
    cantidad = parseInt($("#cantidad").val());
    marcos = parseInt($("#inicio").val());
    var input = "<input type='text' class='result__item referencia'>"
    var input2 = "<input type='text' class='result__item marco'>"

    for (var i = 1 ; i <= cantidad; i++) {
        $(".result__container__input").append(input);
    };

    $(".article").slideUp("fast");
    $(".ocultar").css("display","flex");
    $(".result").slideDown();
    $(".referencia:first").addClass("active");
});
var val;
var fallos = 0;
var p = 0;
$(".result__calcular__button").on("click", function(){
    var marco = []
    var referencias = []
    for(i = 0 ; i < cantidad ; i++){
        p = 0
        var active = $(".active")
        val = parseInt(active.val())
        referencias.push(val)
        active.next().addClass("active")
        active.removeClass("active")
    
    }
    for(i = 0 ; i < cantidad ; i++){
        for (j = 0 ; j < marcos ; j++){
            if (marco[j] == undefined){
                marco.push(referencias[i])
                fallos = fallos + 1
                console.log(fallos)
            }else if(marco[j] == referencias[i]){

            }else if (p != (marcos) ){
                p = 0
            }else{
                fallos = fallos + 1
                marco[p] = referencias[i]
                p += 1
            }
        }
    }
    var rendimiento = (1-(fallos / cantidad))*100
    $(".result__container__pistas").append("<p>"+rendimiento+"%"+"</p>");

    $(".result__container__promedio").append("<p>"+promedio+"</p>");
    console.log(referencias)
    console.log(marco)
    console.log(fallos)
})