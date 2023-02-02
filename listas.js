const listaCompra = [ "cebollas" , "tomates","manzanas", "zanahorias", "lechuga" ];

listaCompra.push("aceite de girasol");

listaCompra.pop();

const listaCine = [
    {Nombre : "Alien, el Ocatavo Pasajero", Director : "Ridley Scott", Año : 1979},
    {Nombre : "Hellraiser", Director :"Clive Barker" , Año : 1987},
    {Nombre : "Expediente Warren", Director : "James Wan" , Año : 2013}
];

const posteriores_2010 = listaCine.filter(obj => obj.Año > 2010);

const directores = listaCine.map((indice) => {return `${indice.Director}`});

const titulos = listaCine.map((indice) => { return `${indice.Nombre}`});

const nuevaLista = titulos.concat(directores);

const listaPropagada =[...directores,...titulos];









