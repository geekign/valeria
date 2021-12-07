function calcularOperacion() {
    let numero1 = parseInt(document.querySelector(".valor1").value);
    let numero2 = parseInt(document.querySelector(".valor2").value);
    let operador = document.getElementById("operador").value;
    //Sacar los valores de los input
    operacion(operador, numero1, numero2);
}
let respuesta = function(resultado){
    let espacioRespuesta = document.querySelector(".resultado")
    espacioRespuesta.innerText = `La respuesta es: ${resultado}` 
    
}
let operacion = function(operador , numero1 , numero2){
    var resultado;
    switch(operador) {
        case "sumar":
            resultado = numero1 + numero2;
            break;
        case "restar":
            resultado = numero1 - numero2;
        break;
        case "multiplicar":
            resultado = numero1 * numero2;
        break;
        case "divide":
            resultado = numero1 / numero2;
            break;
        default:
    }
    respuesta(resultado);
}
