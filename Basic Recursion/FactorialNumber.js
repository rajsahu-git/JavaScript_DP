a = 1
function sumOfNumber(n){
    if (n != 0){
        a = a*n
        sumOfNumber(n-1)
    }
    return a 
    
}



console.log(sumOfNumber(6))
