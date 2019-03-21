let cursos = [{
    Id: 1,
    Nombre: 'Técnicas de  Itil',
    Duracion: '40 horas',
    Valor: '100000'
},
{
    Id: 2,
    Nombre: 'Excel Avanzado',
    Duracion: '45 horas',
    Valor: '80000'
},
{
    Id: 3,
    Nombre: 'Introduccion a Xamarin',
    Duracion: '60 horas',
    Valor: '280000'
}];

let mostrarTodos = (i) => {
    if(i == undefined ){
        i = 0;
        console.log('***LISTADO DE CURSOS***\n');
    }
    if(cursos.length > i){
    setTimeout(function(){
        console.log('Id = '+ cursos[i].Id + '\nNombre= ' + cursos[i].Nombre + '\nDuración= ' + cursos[i].Duracion + '\nValor= ' + cursos[i].Valor + '\n\n');
        mostrarTodos(++i);
    }, 2000);
    }   
}

let buscar =(id) => cursos.find( function(x) {return x.Id = id});

module.exports = {
    cursos,
    mostrarTodos,
    buscar
};

//  by Juan Carlos Atehortua, cedula 71260155