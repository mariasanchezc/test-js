# Test 3

En este caso, tenemos un código usando el objeto `Promise` (Promesa). Las *promises* 
(promesas) nos permiten manejar situaciones asíncronas en nuestras ejecuciones, 
pero tenemos un pequeño problema… No es una solución totalmente cross-browser. 
Sabemos que no funciona en Internet Explorer así que nos gustaría saber cómo 
modificarías nuestro código (`test.js`) para que funcione correctamente.

El objeto Promise de ECMAScript 2015 no es soportada por Internet Explorer. El workaround más común
es importar un polyfill para la funcionalidad que necesitamos usar, en este caso las promesas, o bien
crear uno si la funcionalidad a cubrir es sencilla de implementar
(Ejemplo: ```https://www.npmjs.com/package/promise-polyfill```)
