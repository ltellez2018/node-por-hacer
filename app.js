// * Requires
const  argv = require('./config/yargs').argv;
const  porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
	case 'crear':		
		let tarea = porHacer.crear(argv.descripcion);     
		console.log(tarea);		
    break;	
  case 'listar':
		let tareas =  porHacer.get(argv.completado);
		console.log('tareas', tareas);
		
			
			for (const tarea of tareas) {
				console.log('|----------------------|'.yellow);
				console.log(tarea.descripcion);				
				console.log(`Estado ${tarea.completado}`);
			}		
    break;
  case 'actualizar':
		 let actualizado = porHacer.actualizar(argv.descripcion,argv.completado);
		 console.log(actualizado);
		 
		 break;
	 case 'borrar':
				let borrado = porHacer.borrar(argv.descripcion);
				console.log(borrado);				
				break;
  default:
			console.log('Comando no reconocido');
     break;
}
