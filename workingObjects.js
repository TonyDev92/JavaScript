const datos = {
    nombre : "Tony",
    apellido : "Carrasco",
    edad : 30,
    altura : 1.70,
    isDeveloper : true
}; 

const edad = datos.edad;

const nuevaLista = [{...datos},
{
    nombre:"Isaac",
    apellido : "Vico",
    edad : 40,
    altura : 1.65,
    isDeveloper : false
},
{
    nombre : "Jorge",
    apellido : "Hidalgo",
    edad : 40,
    altura : 1.75,
    isDeveloper : false 
}
];

const listaOrdenada = nuevaLista.sort((a,b) => b.edad - a.edad);







