const yargs = require("yargs");

const opcion1 = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'

    }
};

const opcion2 = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'

    },
    completado: {
        default: true,
        alias: 'c',
        desc: 'Marca como completado o pendiente una tarea'

    }
};




const argv = require("yargs")

.command("crear", "Crea un elemento por hacer", opcion1)
    .command("actualizar", "actualiza el estado de una tarea por hacer", opcion2)
    .help()
    .argv;

module.exports = {
    argv

};