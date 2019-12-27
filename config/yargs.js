const descripcion = {
	demand: true,
	alias: 'd',
	desc: 'Descripcion de la tarea por hacer'
}

const completado = {
	alias: 'c',
	default: true,
	desc: 'Marca como completado o pediente la tarea'
}

const argv = require('yargs')
	.command('crear', 'crea un elemento por hacer', {
		descripcion
	})
	.command('actualizar', 'Actualiza el estado completado de una tarea', {
		descripcion,
		completado
	})
	.command('borrar', 'Elimina una tarea de la lista', {
		descripcion
	})
	.command('listar', 'Lista las tareas',{
		completado
	})
	.help()
	.argv;





module.exports = {
	argv
}