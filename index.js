const display = document.getElementById('displayCalculadora');
const btnsNumeros = document.querySelectorAll(".numero");
const btnsOperadores = document.querySelectorAll(".tipo");
const resultadoFinal = document.querySelector(".igual");
const btnBorrarDisplay = document.getElementById("borrarDisplay");

let numeroA;
let numeroB;
let operacion;
let resultado;

btnsNumeros.forEach(btnNum => {
   
         btnNum.addEventListener("click", () =>{
            if(btnNum.innerHTML === "." && display.textContent.includes(".")) return
            if(resultado === parseFloat(display.textContent)) return 
            display.textContent += btnNum.innerHTML
         });
     })

btnsOperadores.forEach(btnOperador => {
    btnOperador.addEventListener('click', () =>{
       
        operacion = btnOperador.value;
        guardarNumeroA();
        
        if(isNaN(numeroA)) return
        if(operacion === "porcentaje"){
            resultado = porcentaje(numeroA);
            display.textContent = Number(resultado.toFixed(5));
           
        }
    })
});

btnBorrarDisplay.addEventListener("click" ,borrarDisplay)

resultadoFinal.addEventListener("click" , resultados)

function borrarDisplay(){
    
    numeroA = "";
    numeroB = "";
    resultado = "";
    display.textContent = "";
}

 function guardarNumeroA(){
    numeroA = parseFloat(display.textContent);
    display.textContent = "";
}

function sumar(num1, num2){
    return num1 + num2;
    }
function restar(num1, num2){
    return num1 - num2;
    }
function dividir(num1, num2){
    return num1 / num2;
    }
function multiplicar(num1, num2){
    return num1 * num2;
    }
function porcentaje(num1){
    return num1 / 100
}

function resultados(){
    numeroB = parseFloat(display.textContent);
    
    if(isNaN(numeroB)) return;

        switch (operacion) {
                case ("multiplicar"):
                    if(resultado !== undefined && resultado !== ""){
                        resultado = multiplicar(resultado,numeroB);
                        display.textContent = Number(resultado.toFixed(8));
                        
                    }else if (resultado === undefined || resultado === ""){
                        resultado =  multiplicar(numeroA,numeroB);
                        display.textContent = Number(resultado.toFixed(8));    
                    }
                   
                    break;
                case ("dividir"):
                    if(resultado !== undefined && resultado !== ""){
                        resultado = dividir(resultado,numeroB);
                        display.textContent = Number(resultado.toFixed(8));
                    }else if (resultado === undefined || resultado === ""){
                        resultado =  dividir(numeroA,numeroB);
                        display.textContent = Number(resultado.toFixed(8));
                    }
                    
                    break;
                case ("sumar"):
                    if(resultado !== undefined && resultado !== ""){
                        resultado = sumar(resultado,numeroB);
                        display.textContent = Number(resultado.toFixed(8));
                    }else if (resultado === undefined || resultado === ""){
                        resultado =  sumar(numeroA,numeroB);
                        display.textContent = Number(resultado.toFixed(8));
                    }
                   
                    break;
                case ("restar"):
                    if(resultado !== undefined && resultado !== ""){
                        resultado = restar(resultado,numeroB);
                        display.textContent = Number(resultado.toFixed(8));
                    }else if (resultado === undefined || resultado === ""){
                        resultado = restar(numeroA,numeroB);
                        display.textContent = Number(resultado.toFixed(8));
                    }
                   
                break;       
                default:
                break;
             }
        
    }


