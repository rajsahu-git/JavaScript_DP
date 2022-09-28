 function fibonacci(n){
    let a = 0
    let b = 1
    let c
    console.log(0)
    console.log(1)

    for (let i = 2; i<n; i++){
        c = a + b
        console.log(c)
        a = b
        b = c
    }
}
fibonacci(15) 
// 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377



