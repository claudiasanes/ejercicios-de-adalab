1. vemos los flujos, los pasos que va a dar el usuario

2. creamos las constantes necesarias, en este caso primero crearemos la del botón que va a ser el elemento sobre el que vamos a escuchar. En este caso const
   btn = document.querySelector(".js-update");

3. creamos el listener, con la acción que hay que realizar, en este caso
   btn.addEventListener("click", handlerUpdateClick)

4. creamos la función, el handler. en este caso será la que pusimos en el listener.
   function handlerUpdateClick(ev) {}

5. creamos una constante para el siguiente paso, la carita. Primero la llamamos arriba del todo const selectValue = document.querySelector(".js-select-face").; y luego se mete dentro del evento, dentro de la función handlerUpdateClick, con value para llamar al value de la constante
   { const selectValue = document.querySelector(".js-select-face").value; }

6.

1) flujos
2) si hay eventos, cuándo y qué
3) si hay arrays hay que iterar
4) si tengo un fallo pregunto al ordenador toda la info que pueda (console.log), no empezar a cambiar cosas a lo loco
