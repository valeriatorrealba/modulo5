# Módulo 5

Programación avanzada en JavaScript.

### Instrucciones para Visualizar el Proyecto

1. Clonar el repositorio:
```bash
git clone git@github.com:valeriatorrealba/modulo5.git
```
2. Accede al local host desde tu navegador y abrir la consola del navegador.

``` bash
http://127.0.0.1:5500/index.html
```

Si usas Visual Studio Code, puedes instalar la extensión Live Server para visualizarlo rápidamente.

## 1. M5AE4 - ABP3 Ejercicio Práctico

1. Vamos a crear una función callback en JavaScript.
Tenemos tres partes.

    a. La llamada o invocación a la función principal: Para ello debes
    utilizar como parámetro una llamada a la función callback.

    b. Ejecución de la función principal: La función deberá ejecutar su código, en nuestro caso lo primero que debe hacer la función es
    darnos los 'Buenos días' y al final del código de esta función se debe encontrar una llamada a la función callback.

    c. En último lugar se ejecuta la función callback que en este caso nos pregunta si queremos un café.

2. La función principal se llama operaciones y tiene cuatro parámetros, los dos primeros son números (a y b) y los dos últimos son dos funciones callback denominadas minora y potencias.

- Calculamos la variable diferencia restando a menos b.
- Calculamos la variable elevada usando como base a y como potencia b.
- Invocamos la función de callback denominada minora usando como parámetro la diferencia.
- Invocamos la función de callback denominada elevado usando como parámetro el valor elevado.

Invocamos la función operaciones pasándole cuatro parámetros los dos
primeros son numéricos 5 y 3, y los dos últimos son las funciones callback
en forma de funciones anónimas.

```bash
function operaciones(a,b,minora,potencias){
    var diferencia=a-b;
    var elevado=Math.pow(a,b);
    minora(diferencia);//invocamos la 1ª función anónima
    potencias(elevado);//invocamos la 2ª función anónima
}
operaciones(5,3,
    function(diferencia){
        console.log("La diferencia es: ",diferencia);
    },
    function(elevado){
        console.log("Elevando se obtiene: ",elevado);
    }
);

```
Basándose en el código anterior, modificarlo para que la primera frase que
se muestre en pantalla sea "La diferencia entre 5 y 3 es: 2", y la segunda
frase sea "Elevando 5 a potencia 3 se obtiene: 125". De forma que al
cambiar los números 5 y 3 por otros las expresiones que se imprimen en
pantalla se adapten a cada caso.


## 1. M5AE1 - ABP1 Ejercicio Práctico

Requerimientos
1. Crear el código usando ES6.
2. Crear un método mediante la propiedad prototype que permita
buscar los datos de los usuarios por nombre y otro método que
permita mostrar todos los datos de los usuarios registrados.
3. Crear una función constructora para cada objeto.
4. Implementar métodos getters y setters para poder acceder y
modificar los datos de los pacientes
5. Instanciar cada objeto utilizando la instrucción new.