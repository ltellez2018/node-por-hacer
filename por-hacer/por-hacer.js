const fs = require('fs');


// * Arreglo de tareas

let tareasPorHacer = [];


// * Funciones

// * Leer archivo

const cargarDB = () => {
    try {
        tareasPorHacer = require ('../db/data.json');        
    } catch (error) {
        tareasPorHacer = [];
    }
    

};

// * Grabar en archivo
const guardarDB = () => {
    let data = JSON.stringify(tareasPorHacer);
    fs.writeFile(`db/data.json`, data, (err) => {  
        if (err) {
             throw new Error('No se pudo grabar ', err);   
        }            
      });
};

// * Crear tarea
const crear = (descripcion) => {   
    
    cargarDB();

    let tarea  = {
        descripcion,
        completado: false
    };

    tareasPorHacer.push(tarea);
    
    guardarDB();
    
    return tarea;
};

// * Obtiene todas las tareas por hacer
const get  = (completado = true) => {    
    cargarDB();
    if (completado) {
         return  tareasPorHacer.filter(tarea => tarea.completado === true );
    } else {
        return tareasPorHacer.filter(tarea => tarea.completado === false );
    }  
}

// * Actualiza tarea
const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = tareasPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if(index >= 0) {
        tareasPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }else {
        return false;
    }
};

// * Borra tarea
const borrar = (descripcion) =>{
    cargarDB();
    let nuevoListado = tareasPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    if(nuevoListado.length === tareasPorHacer.length) {
        return false;        
    }else {
        tareasPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
};

module.exports = {
    crear,
    get,
    actualizar,
    borrar
}