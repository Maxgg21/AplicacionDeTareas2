const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerArchivo: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    escribirJSON: function (arrayDeTareas){
        //Se convierte de Objeto a JSON para sobre-escribir el archivo JSON
        fs.writeFileSync('./tareas.json', JSON.stringify(arrayDeTareas, null, 2), {encoding: 'utf-8'})
        console.log('Guardado exitoso');
    },
    guardarTarea: function(tarea){
        //Se agregan las nuevas tareas para ser luego guardadas en escribirJSON
        let listaDeTarea = this.leerArchivo();
        listaDeTarea.push(tarea);
        this.escribirJSON(listaDeTarea);
    },
}
module.exports = archivoTareas;