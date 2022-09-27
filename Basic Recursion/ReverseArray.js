function reverseArray(n){
    c = []
    for (let i=n.length-1; i>=0;i-- ){
        c = c+ n[i]
    }
    console.log(c)    
}

reverseArray([1,2,3,4,5,6])
