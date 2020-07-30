# Test 2

El fragmento de código de nuestro fichero `test.js` nos devuelve un output no 
deseado. Queremos imprimir un valor incremental a cada segundo pero lo que 
nos devuelve el código es el mismo valor en cada iteración. 

1. Sin necesidad de ejecutar el código, ¿sabrías decirnos qué valor imprimiría
 por consola el script? ¿Cuál es el motivo?
 
 Siempre se va a implirmir el último valor del bucle for, en este caso 5. y de
 forma simultánea a los 1000 ms.
 
 El bucle for se ejecuta de forma sícrona y, por tanto, llama a setTimeout 5 veces
 de forma casi consecutiva. Cuando esos 1000ms se vencen se pintarán en consola 5 
 veces el valor de i que, al haber terminado el bucle de ejecutarsen tendrá valor 5.
 
2. Sabiendo que el output que buscamos es el que encuentras bajo estas líneas… 
¿Cómo solucionarías el fragmento de código para que el output sea el deseado?

```
    > 0
    > 1
    > 2
    > 3
    > 4
```

Con otro par de funciones propia de JavaScript, setInterval y clearInterval
let i = 0;
const setLog = () => {
  console.log(i);
  i++;
};
const interval = setInterval(setLog, 1000);

setTimeout(() => {
  clearInterval(interval);
}, 5000);
