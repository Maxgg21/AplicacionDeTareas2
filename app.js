// const { guardarTarea, filtrarPorEstado, searchTask } = require('./funcionesDeTareas');
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
        //Se registra nueva tarea con estado pendiente para ser guardada en el JSON. Se coloco una validacion para avisar que no ingreso una nueva tarea
        let titulo = process.argv[3];
        if (typeof titulo === 'undefined'){
            console.log('No ingreso el titulo de la tarea a guardar');
            return;
        }
        let tareaNueva = {
            titulo,
            estado : 'pendiente'
        };
        archivoTareas.guardarTarea(tareaNueva);
        break;
    case 'filtrar':
        //Se coloca validaciones de datos, si cuando se ejecula la funcion de filtrar por estado luego se la itera para mostar por pantalla.
        let estado = process.argv[3];
        if(typeof estado === 'undefined'){
            console.log('No ingreso el titulo de la tarea a filtrar');
            return;
        };
        let tareasFiltradas = filtrarPorEstado(estado);
        tareasFiltradas.forEach((tarea) => console.log(`-- ${tarea.titulo}`))
        break;
    case 'buscarTarea':
        //Se ejecuta la funcion busqueda para mostrarla por pantalla
        let tarea = process.argv[3];
        if(typeof tarea === 'undefined'){
            console.log('No ingreso el titulo de la tarea a buscar');
            return;
        };
        let resultado = archivoTareas.searchTask(tarea);
        console.log(resultado);
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
