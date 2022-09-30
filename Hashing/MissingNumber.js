function massingNumber(array,n){
  array.sort(function (a, b) {  return a - b;  })
  console.log(array)
  let j = 1
  for (let i=0;i<n;i++){
    if (array[i]!=j){
      return console.log(j)
    }
    j++
  }
}



massingNumber([1,2,3,4,5,6,7,8,15],10)
