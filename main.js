function myMove() {
    var btn = document.getElementById("btn");
    var elem = document.getElementById("myAnimation");   
    var elem2 = document.getElementById("myAnimation2");   
    var elem3 = document.getElementById("myAnimation3");
    
    //Una vez incie el sistema, no es necesario que el botón continue habilitado, dado que se puede volver a ejecutar el procedimiento
    btn.disabled = true;
    
    //Estas tres variables me permiten manejar un número entero, número que marcará la posición en pixel más adelante.
    var pos = 0;
    var pos2 = 0;
    var pos3 = 0;
    
    //Hacemos uso de la función setInterval, la cual me permite ejecutar una función limitadamente cada n milisegundos
    //las variables id(1...n), nos dan un número entero el cual nos sirve para detener esa ejecución utilizando el método clearInterva(id)
    var id = setInterval(mov_diagonal, 20);
    var id2 = setInterval(mov_horizontal,20);
    var id3 = setInterval(mov_vertical,20);
    
    //Estamos usando estas tres banderas para saber cuando se está avanzando en una dirección y luego queremos regresarnos
    //Asi, por ejemplo el numero 0 en bandera, significa adelante, y si está en 1 significa que estamos retrocediendo
    var bandera = 0;
    var bandera2 = 0;
    var bandera3 = 0;
    
    
    function mov_vertical(){
        if(bandera3 == 0 & pos3 != 350){
          pos3++;
          elem3.style.top = pos3 + 'px';
      }
      if(bandera3 == 1 & pos3 != 0){
          pos3--;
          elem3.style.top = pos3 + 'px';
      }
      if(pos3 == 350){
          bandera3 = 1;
          pos3-=1;
      }
      if(pos3 == 0){
          bandera3 = 0;
          pos3+=1;
      }
      
    }
    
    
    function mov_horizontal(){
        if(bandera2 == 0 & pos2 != 350){
          pos2++;
          elem2.style.left = pos2 + 'px';
      }
      if(pos2 == 350){
          bandera2 = 1;
          pos2 -= 1;
      }
      if(bandera2 == 1 & pos2 != 0){
          pos2--
          elem2.style.left = pos2 + 'px';
      }
      if(pos2 == 0){
          bandera2 = 0;
          pos2 += 1;
      }
      
      
    }
    
    
    function mov_diagonal() {
        if( bandera == 0 & pos!=350){
          pos++; 
            elem.style.top = pos + 'px'; 
            elem.style.left = pos + 'px'; 
      }
    
      if (pos == 350) {
        bandera = 1;
        pos -= 1;
        
      }
      if( bandera == 1 & pos!=350){
          pos--; 
            elem.style.top = pos + 'px'; 
            elem.style.left = pos + 'px'; 
      }
      if (pos == 0) {
        bandera = 0;
        pos += 1;
        
      }
    }
  }