function twoSum(){
let n = [2,6,5,8,11]
let t = 14
for (let i=1; i<=n.length; i++){
    for (let j=1; j<n.length;j++){
        if (t- n[i] == n[j] ){
            return console.log(j,i)
    }
}
}
}

twoSum()