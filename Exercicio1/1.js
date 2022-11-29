var array;
array = [1, 2, 3, 4, 5, 7, 8, 9, 10];
var indexPar = 0;
var arrayPar;
var indexImpar = 0;
arrayPar = [];
var arrayImpar;
arrayImpar = [];
for (var index = 0; index < array.length; index++) {
    if (array[index] % 2 == 0) {
        arrayPar[indexPar] = array[index];
        indexPar++;
    }
    else {
        arrayImpar[indexImpar] = array[index];
        indexImpar++;
    }
}
console.log(arrayImpar);
console.log(arrayPar);
