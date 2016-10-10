
var codigo = prompt ("Introduce una palabra a encriptar que su numero de letras sea multiple de 3:");
console.log("codigo introducido: " + codigo);

var encript = [];
var desencript = [];

//var parte=[];

/*for (x = 0; x < codigo.length/3; x++){

	parte[x] = [];
}*/

var parte1 = [];
var parte2 = [];
var parte3 = [];
var parte4 = [];

separacodigo();

encriptacodigo();

desncriptacodigo();

function separacodigo(){

	for (var i = 0; i < codigo.length; i++){

		if (i<3){

			parte1[i] = codigo[i];

		}else{

			if (i>=3 && i<6){

				parte2[i-3] = codigo[i];

			}else{

				if (i>=6 && i<9){	
				
					parte3[i-6] = codigo[i];

				}else{

					parte4[i-9] = codigo[i];
				}
			}
		}

	}
	console.log("parte1: " + parte1);
	console.log("parte2: " + parte2);
	if (codigo.length>6){
		console.log("parte3: " + parte3);
		console.log("parte4: " + parte4);
	}
}

function encriptacodigo(){

	var j=0;
	var k=0;
	var l=0;

	if (codigo.length<7){

		for (var i = 0; i < parte1.length; i++){

				encript[j] = parte1[i];
				encript[j+1] = parte2[i];
				j++;
				j++;
		}
	}else{

		for (i = 0; i < parte1.length; i++){

			encript[j] = parte1[i];
			encript[j+1] = parte2[i];
			encript[k+2] = parte3[i];
			encript[l+3] = parte4[i];
			j += 4;
			k += 4;
			l += 4;
		}
	}

	encript = encript.join(""); 
	console.log("codigo encriptado: " + encript);
}

function desncriptacodigo(){

	var j=0;
	var k=0;
	var l=0;
	var m=0;

	for (var i = 0; i < encript.length; i++){

		if (codigo.length<7){

			parte1[j] = encript[i];
			j++;i++;
			parte2[k] = encript[i];
			k++;

		}else{

			parte1[j] = encript[i];
			j++;i++;
			parte2[k] = encript[i];
			k++;i++;
			parte3[l] = encript[i];
			l++;i++;
			parte4[m] = encript[i];
			m++;
		}

	}

	console.log("parte1 desencript: " + parte1);
	console.log("parte2 desencript: " + parte2);

	if (codigo.length>6){
		console.log("parte3 desencript: " + parte3);
		console.log("parte4 desencript: " + parte4);
	}

	for (i = 0; i < encript.length; i++){

		if (i<3){

			desencript[i] = parte1[i];

		}else{

			if (i>=3 && i<6){
			
				desencript[i] = parte2[i-3];
			}else{

				if (i>=6 && i<9){	
				
					desencript[i] = parte3[i-6];
					

				}else{

					desencript[i] = parte4[i-9];
				}
			}
		}

	}
	desencript = desencript.join(""); 
	console.log("codigo desencriptado: " + desencript);
}