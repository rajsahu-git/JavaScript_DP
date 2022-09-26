//What are Armstrong Numbers?

//Armstrong Numbers are the numbers having the sum of digits raised to power no. of digits is equal to a given number. Examples- 0, 1, 153, 370, 371, 407, and 1634 are some of the Armstrong Numbers.

n = 370
o = n
temp = 0
l = n.toString().length
for (let i = 0; i<l;i++){
    d = n%10;
    power = Math.pow(d,l)
    temp = temp+power
    n = Math.floor(n/10)
}
if (o == temp){
    console.log(o+ " is the Armstrong number")
}
else{
    console.log(o + " is not Armstrong Number")
}