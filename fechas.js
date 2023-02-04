const date = new Date();

console.log(date);

const fechaDeNacimiento = new Date("September , 03 , 1992");

console.log(fechaDeNacimiento + 1);

const mayor = date.getTime() > fechaDeNacimiento.getTime();
const day = fechaDeNacimiento.getDate();
const month = fechaDeNacimiento.getMonth();
const año = fechaDeNacimiento.getFullYear();

console.log(month + 1);






