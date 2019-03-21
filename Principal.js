const cursos1 = require ('./CursosObject');
const fs = require('fs');
const opciones = { 
    idCurso:{
        demand: true,
        alias: 'i'
        },
    nombre:{
        demand: true,
        alias: 'n'
    },
    cedula: {
        demand: true,
        alias: 'c'
    }
}
const argv = require('yargs').command ('inscribir', 'inscribir aspirante', opciones).argv                                    

if(argv.i != undefined){
let crearArchivo = () =>{    
    let cur = cursos1.buscar(argv.i);    
    texto='El estudiante ' + argv.n + ' con cedula ' + argv.c +
    ' se ha matriculado en el curso llamado ' + cur.Nombre +
    ' tiene una duraciòn de ' + cur.Duracion +
    ' y un valor de ' + cur.Valor ;         
    fs.writeFile('Inscripcion.txt', texto,  (err) => {
        if (err) throw (err);
        console.log('Se ha creado el archivo correctamente');
    });
}

crearArchivo();
}
else cursos1.mostrarTodos();

//  by Juan Carlos Atehortua, cedula 71260155