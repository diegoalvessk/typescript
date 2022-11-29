let arrayA : number[]
let arrayB : number[]
let arrayC : number[]
arrayC = []
let indexC = 0
arrayA = [1, 3, 5, 6, 7, 1, 5, 6, 7, 19]
arrayB = [7, 8, 22, 44, 66, 33, 2, 6, 9, 8]

for (let index = 0; index < arrayA.length; index++) {
    for (let inde2 = 0; inde2 < arrayB.length; inde2++) {
        if(arrayA[index] == arrayB[inde2] && arrayA[index]>5){
            arrayC[indexC] = arrayA[index]
            indexC++
        }        
    }    
}