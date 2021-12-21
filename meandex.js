
let textInputElement = document.getElementById('textInput');
textInputElement.addEventListener('keyup', function(){
    
  let valorH = textInputElement.value;
  while(isNaN(valorH)){
    valorH = prompt("Ingrese una cantidad")
    }while(valorH>30){
        valorH = prompt("No hacemos ventas mayores a 30 litros")
        }        
  console.log('Su nuevo total es de "' + valorH*35 + ' soles"');
  
}
);

const nerv = []
function calcVal() {
    nerv.push("Su nuevo total es de " + textInputElement.value*35 + " soles");
    document.getElementById("demure").innerHTML = nerv;
}