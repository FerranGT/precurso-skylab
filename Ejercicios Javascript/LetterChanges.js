
var texto = prompt("Hola, introduce una frase");
console.log (texto);
LetterChanges(texto);
alert (res);


function LetterChanges(texto){

	var asci = []; // declaramos un array

	for (i in texto){ // transformamos el texto en numeros ASCII
	asci[i] = texto.charCodeAt(i);
	console.log (asci); // Incremeto en uno el caracter menos el espacio en blanco

	if ((asci[i] > 64  && asci[i] < 91) || (asci[i] > 96  && asci[i] < 123)) { // miramos que sea un caracter del alfabeto
		asci[i] ++;
	}

	}
	res = String.fromCharCode.apply(String, asci); // transformamos los valores en ASCII en caracteres
	console.log (res);

	for (i in res){ // transformamos el texto en numeros ASCII
	asci[i] = res.charCodeAt(i);
	
	if (asci[i] == 97 || asci[i] == 101 || asci[i] == 105 || asci[i] == 111 || asci[i] == 117){ // transformo las vocales en mayusculas
		asci[i] = asci[i] - 32;
	}
	console.log (asci);
	}
	res = String.fromCharCode.apply(String, asci); // transformamos los valores en ASCII en caracteres
	console.log (res);

}