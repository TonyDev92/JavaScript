let resultado = 1;
for( let i = 2; i <= 10; i++) {
    resultado *= i;
}
console.log(resultado);
//Ejercicio con bucle For para calcular el factorial de 10 y mostrar el resultado por pantalla

let total = 10;
let param = total - 1;

while (param > 1){
    total *= param;
    param--;
}
console.log(total);
//En el bucle While calculamos el factorial de 10 cambiando el sentido de la iteración
// Ahora iteramos hacia atrás
let j = 10;
let i = j - 1;


while(j) {
    j *= i;
    i--;

    if(i <= 1){
        break;
    }
}

console.log(j);
//El mismo bucle while pero cambiamos la condición
//Ahora el bucle para cuando entra en la bifurcación If y se detiene cuando esta condición es verdadera

