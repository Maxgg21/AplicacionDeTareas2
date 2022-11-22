const { guardarTarea } = require('./funcionesDeTareas');
let archivoTareas = require('./funcionesDeTareas');

let accion = process.argv[2];

switch(accion) {
    case 'listar':
        // Se requieren el Json para listarlo por pantalla.
        console.log('Listado de tareas');
        console.log('------------------');
        let tareas = archivoTareas.leerArchivo();
        tareas.forEach((tarea, i) => console.log(`${i + 1}: ${tarea.titulo}.`)) 
        break;
    case 'crear':
        let titulo = process.argv[3];
        let tareaNueva = {
            titulo,
            estado : 'pendiente'
        };
        archivoTareas.guardarTarea(tareaNueva);
        break;
    case undefined:
        console.log();    
        console.log('Atención - Tienes que pasarme una acción');
        console.log('Las acciones disponibles son: listar');
        console.log('----------------------------------------');
        break;

    default:
        console.log('------------------------------------');
        console.log('No entiendo qué quieres hacer');
        console.log('Las acciones disponibles son: listar');
        console.log('------------------------------------');
        break;
}
