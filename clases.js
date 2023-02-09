class Estudiante {
    
    constructor(nombre){
        this.nombre = nombre
        this.asignaturas = ["Javascript" , "HTML" , "CSS"]
    }

    getDatos(){
        return [this.nombre,this.asignaturas];
    }

    
}

const nuevoEstudiante = new Estudiante("Tony");
console.log(nuevoEstudiante.getDatos());



