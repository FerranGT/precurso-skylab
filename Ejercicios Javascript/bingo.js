
var matrix=[]; // declaramos un array
var num=0;
for (x=0;x<3;x++){
	matrix[x]=[]; // declaramos que en las 3 primeras casillas del array sean tambien arrays
	for (y=0;y<5;y++){ // inicializamos la matriz de arrays 3*5 al valor 0
		matrix[x][y]=0;
		matrix[x][y]=generateNum(); // rellenamos la matriz con numeros aleatorios
	}
}
var bingo=false;
var linea=false;

while (bingo==false) {
	//console.log(matrix); // para seguir una variable console.log();
   	generateBall();
   	if (linea==false) {
    	isLinea();
    	if (linea==true) {
   			alert("LINEA!");
    	}
   	}
   	isBingo();
   	if(bingo==true){
   		alert("BINGO!");
   	}
}



function generateNum(){
	var valid=false;
	while(valid==false){
		num=Math.random(); // generamos un numero aleatorio del tipo 0,243348897231
		num=num*100; // 24,3348897231
		num=Math.round(num); // nos quedamos solo con la parte entera 24
		if (num>0 && num<90) {
			valid=true;
			// Buscamos dentro de matrix a ver si ya existe este numero
			for (i=0;i<matrix.length;i++){ // Como la matriz puede que aun no este del todo creada pq esta funcion se llama dentro del bucle que la matrix[x][y] usamos la funcion length para saber hasta donde tiene que ir el for
				if(matrix[i].indexOf(num)!= -1) {	// Comprobamos que no existe ya este numero en la matriz, si nos devuelve algo diferente a -1, es que ya a encontrado ese valor				
					valid=false;
				}
			}
		}
	}
	   
	return num;
}

function generateBall(){
	var valid=false;
	while(valid==false){ // generamos bola hasta que salga un numero que este registrado en la matriz
		num=Math.random();
		num=num*100;
		num=Math.round(num);
		if (num>0 && num<90) {
			for (i=0;i<matrix.length;i++){
				j=matrix[i].indexOf(num)
				if(j != -1) { // Coindide el valor de la bola con el valor de la casilla de la matriz
					matrix[i][j]='x';
					alert(matrix);	
					valid=true;				
				}
			}
		}
	}	   
}

function isBingo(){
	bingo=true;
	for (i=0;i<matrix.length;i++) {
		for (j=0;j<matrix[i].length;j++) {
			if (matrix[i][j]!='x') {
				bingo=false;
			}
		}		
	}
}

function isLinea(){	
	for (i=0;i<matrix.length;i++) {
		linea=true;
		for (j=0;j<matrix[i].length;j++) {
			if (matrix[i][j]!='x') {
				linea=false;
			}
		}
		if (linea==true) {
			break
		}	
	}
}