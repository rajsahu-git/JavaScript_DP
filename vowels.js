function getCount(str) {
  let vowels = ["a","e","i","o","u"]
  let count = 0
  for (let i = 0; i <str.length; i++){
    for (let j = 0; j< vowels.length;j++){
      if (str[i] === vowels[j])
        count+=1
    }
  }
  return count
}

console.log(getCount("pear tree"))