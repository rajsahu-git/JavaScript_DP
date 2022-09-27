i = 0
function printNos(N){
    if(N<1){
        return
    }
    i++
    console.log(i)
    printNos(N-1)
}
printNos(10)


