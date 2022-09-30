function Element(n){
    t = 0
    for (let i = 0; i<n.length; i++){
        for (let j = i+1;j<n.length;j++){
            if (n[i]==n[j]){
                t = t+j
                console.log(n[i], t)
            }
        }
    }
    console.log()
}

Element([10,5,10,15,10,5])