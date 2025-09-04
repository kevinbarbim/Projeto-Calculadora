// programa de calculadora

const display = document.getElementById("display");

function mostrarDisplay(input){
    display.value += input;

}
function limpaDisplay(){
    display.value = "";

}
function calcular(){
    try{
    display.value = eval(display.value);
    }
    catch(error){
        display.value = 'Erro'
    }
}