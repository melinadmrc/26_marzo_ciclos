// Declaramos una variable llamada 'contador' y le asignamos el valor inicial 0
// Esta variable servirá para llevar la cuenta de cuántas veces hemos ejecutado el bucle
// Se usa típicamente en ciclos para saber cuándo detenerse
let contador = 0;

// Inicia un bucle while (mientras) que seguirá ejecutándose mientras la condición dentro de los paréntesis sea verdadera
// En este caso, la condición es "contador <= 10"
// Esto significa que mientras 'contador' sea menor o igual a 10, el código dentro del while seguirá corriendo
while (contador <= 10) {

    // Dentro del ciclo, usamos console.log para mostrar información en la consola
    // En este caso, mostramos el texto "el contador es: " seguido del valor actual de 'contador'
    // console.log es muy útil para depurar, ver el flujo del programa y mostrar resultados
    console.log("el contador es: ", contador);

    // Luego incrementamos el valor de 'contador' en 1 usando contador++
    // Esto es crucial porque si no aumentamos 'contador', la condición del while siempre sería verdadera
    // y el ciclo se ejecutaría **infinitamente** (esto se llama bucle infinito)
    contador++;
}

// Una vez que 'contador' supera 10 (por ejemplo, cuando contador = 11), la condición 'contador <= 10' deja de cumplirse
// En ese momento, el bucle while se detiene automáticamente y el programa continúa con cualquier código que siga

