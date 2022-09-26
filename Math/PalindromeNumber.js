n = 14541
s = n
r = 0
while(n!=0){
  d = n%10
  r = r*10+d
  n=Math.floor(n/10)
}
if (s==r){
  console.log(s + " is a palindrome Number")
}
else{
  console.log(s+" is not palindrome number")
}