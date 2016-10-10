
var loop = prompt ("Introdueix el numero de voltes que vol que dongui el bule");

fibonacci = [];

fibonacci[0] = 0;
fibonacci[1] = 1;

var result = 0;

var i = 2;

bol = false;

console.log(fibonacci[0] + ", pos " + fibonacci[0]);

console.log(fibonacci[1] + ", pos " + fibonacci[1]);


while (bol == false){

	result = fibonacci[i-1] + fibonacci [i-2];
	fibonacci [i] = result;
	console.log(result + ", pos " + i);

	i++;

	if (i > loop){
		bol = true;
	}
}