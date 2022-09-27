function reverseString(n){
    s = ''
    a = n
    for(let i = n.length -1; i>=0;i--){
        s = s+n[i]
    }
    if (a == s){
        console.log(a + " is a palindrome ")
    }
    else{
        console.log(a + " is not a palindrome")
    }
    
}
reverseString("ABCDCBA")