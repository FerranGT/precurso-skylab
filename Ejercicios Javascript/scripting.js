
/* // version corta
var code = [3,7,1,2];

for (var i = 0; i < 3; i++){

code.push(code.shift());

console.log(code);

}
*/

var codigo = prompt ("Introduce 4 numeros:");

console.log(codigo);

var codigo1 = [];
var codigo2 = [];
var codigo3 = [];

for (var i = 0; i < codigo.length; i++){ // no funciona con for (i in codigo), da undefined cuando intentamos acceder a la casilla codigo[i+1]
	if (i!=3){

		codigo1[i] = codigo[i+1];
	}

	else{
		codigo1[i] = codigo[0];
	}	
}

for (i = 0; i < codigo.length; i++){ 
	
	codigo2[i] = codigo[i+2];

	if (i>1){

		codigo2[i] = codigo[i-2];
	}	
}

for (i = 0; i < codigo.length; i++){ 
	
	codigo3[i] = codigo[i+3];

	if (i>=1){

		codigo3[i] = codigo[i-1];
	}	
}


console.log("codigo1: " + codigo1);
console.log("codigo2: " + codigo2);
console.log("codigo3: " + codigo3);

