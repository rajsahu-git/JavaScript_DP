n = 123
p=0
while(n!=0){
  d = n%10
  p = p*10+d
  n=Math.floor(n/10)
}

console.log(p)
