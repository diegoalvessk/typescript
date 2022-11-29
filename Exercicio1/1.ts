let array : number[]
array = [1, 2, 3, 4, 5, 7, 8, 9, 10]
let indexPar = 0
let arrayPar : number[]
let indexImpar = 0
arrayPar = []
let arrayImpar : number[]
arrayImpar = []

for (let index = 0; index < array.length; index++) {
    if(array[index] % 2 == 0){
        arrayPar[indexPar] = array[index]
        indexPar++
    }else{
        arrayImpar[indexImpar] = array[index]
        indexImpar++
    }
}

console.log(arrayImpar)
console.log(arrayPar)