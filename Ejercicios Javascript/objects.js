var student = { // Declaramos el objeto student
    name : "David Aughan", 
    class : "VI", 
    id : 12 
};

muestraobjeto();

muestracontenidoobjeto();

cambiavalorobjeto();

eliminapropiedadobjeto();

anadirpropiedadobjeto();

cambiamosnombrecampoobjeto();

alert("Hello, my name is " + student.fullName + " I'm for class " + student.class + " and I live in " + student.city);

function muestraobjeto(){ // Muestra los campos del objeto
	
	console.log(Object.keys(student)); 
}

function muestracontenidoobjeto(){ // Muestra el contenido de los campos

	for (i in student){
		console.log(student[i]);
	}
}

function cambiavalorobjeto(){ // Cambiamos el contenido de un campo

	student.class = "XI";
	console.log(student.class);
}

function eliminapropiedadobjeto(){ // Eliminamos un campo

	delete student.id;
	muestraobjeto();
}

function anadirpropiedadobjeto(){ // Añadimos un campo

	student.city = "Sebastopol";
	console.log(student.city);
}

function cambiamosnombrecampoobjeto(){ // Cambiamos el nombre de un campo

	//Object.defineProperty(student,)

	student.fullName = student.name; // Primero el nombre nuevo y luego el viejo
	delete student.name;
	muestraobjeto();
	muestracontenidoobjeto();
}