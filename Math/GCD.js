//Brute force
n = [4,8]
p = Math.min(...n)
while(p){
    if (n[0] % p == 0 && n[1] % p == 0){
        console.log(p)
        break
    }
    p--
}

