
var numero = prompt ("Introduce un numero para calcular el factorial");
var resultado =1;
console.log (numero);

while (numero>0) {

	resultado *= numero;
	numero --;
	console.log  (resultado);
}

alert ("El resultado es: " + resultado);