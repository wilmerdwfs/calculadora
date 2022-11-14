boton   = document.querySelectorAll(".bot");
btnCal  = document.querySelector(".igual");
con  = document.querySelector(".calculadora-contenedor");
display = document.getElementById("display");

for(i=0 ; i<boton.length ; i++){
  boton[i].addEventListener("click", function()
  {

    display.value += this.innerHTML;
    let letras = display.value.split('');
    contLetra  = 0;

    if (this.innerHTML!='c') {

        letras.forEach(letra => {

      if (letra == '-' || letra == '+' || letra == '*' || letra == '%' || letra == '.' || letra == '='   ) 
      {
        contLetra+= 1; 

      }else {  contLetra = 0; }

      if (contLetra > 1) 
      {
        display.value = display.value.substr(0,display.value.length-1);
      }

      if ( display.value.indexOf('-') == 0 || display.value.indexOf('+') == 0 || display.value.indexOf('*') == 0 || display.value.indexOf('%') == 0 || display.value.indexOf('=') == 0 || display.value.indexOf('.') == 0  ) 
      {
        display.value = display.value.substr(0,display.value.length-1);
      }

      if (letra == '=') 
      {
        display.value = display.value.substr(0,display.value.length-1);
      }

    });
    
    }

    if (this.innerHTML=='c') 
         display.value = '';
    });
}

btnCal.addEventListener("click", function()
{
    display.value = eval(display.value);
});



