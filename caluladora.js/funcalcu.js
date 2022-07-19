var operandoa;
var operandob;
var operacion;
function init (){
    var resultado = document.getElementById("resultado");
    let numero0 = document.getElementById('numero0');
    var numero1 = document.getElementById('numero1');
    var numero2 = document.getElementById('numero2');
    var numero3 = document.getElementById('numero3');
    var numero4 = document.getElementById('numero4');
    var numero5 = document.getElementById('numero5');
    var numero6 = document.getElementById('numero6');
    var numero7 = document.getElementById('numero7');
    var numero8 = document.getElementById('numero8');
    var numero9 = document.getElementById('numero9');
    var operaciondiv = document.getElementById('operaciondiv');
    var operacionmas = document.getElementById('operacionmas');
    var operacionmenos = document.getElementById('operacionmenos');
    var operacionpor = document.getElementById('operacionpor');
    var operaciongual = document.getElementById('operaciongual');
    
    numero0.onclick = function(e){
        resultado.textContent = resultado.textContent + '0';
    }
    numero1.onclick = function(e){
        resultado.textContent = resultado.textContent + '1';
    }
    numero2.onclick = function(e){
        resultado.textContent = resultado.textContent +'2';
    }
    numero3.onclick = function(e){
        resultado.textContent = resultado.textContent +'3';
    }
    numero4.onclick = function(e){
        resultado.textContent = resultado.textContent +'4';
    }
    numero5.onclick = function(e){
        resultado.textContent = resultado.textContent +'5';
    }
    numero6.onclick = function(e){
        resultado.textContent = resultado.textContent +'6';
    }
    numero7.onclick = function(e){
        resultado.textContent = resultado.textContent +'7';
    }
    numero8.onclick = function(e){
        resultado.textContent = resultado.textContent +'8';
    }
    numero9.onclick = function(e){
        resultado.textContent = resultado.textContent +'9';
    }
    operaciondiv.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar();
        
    }
    operacionmas.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();
           
    }
    operacionmenos.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    operacionpor.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    operaciongual.onclick = function(e){
        operandob = resultado.textContent;
        mostrar();
        resolver();


    }
} 
function mostrar(){
    resultado.textContent = resultado.textContent + operandoa.textContent + operacion.textContent + operandob.textContent;
}
function limpiar(){
    resultado.textContent = "";
}
function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function resolver(){ 
     resultadob = 0;
    switch(operacion){
        case "+":
            resultadob = parseFloat(operandoa) + parseFloat(operandob);
            break;
        case "-":
            resultadob = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "/":
            resultadob = parseFloat(operandoa) / parseFloat(operandob);
            break;
        case "*":
            resultadob = parseFloat(operandoa) * parseFloat(operandob);
            break;
        
    }
    resetear();   
    resultado.textContent = resultadob;
}




