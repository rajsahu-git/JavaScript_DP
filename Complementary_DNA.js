function DNAStrand(dna){
  //your code here
  a = ''
  for (i=0; i<dna.length; i++){
    if (dna[i]=="A"){
        a+="T"
    }
    else if(dna[i]=="T"){
      a+="A"
    }
    else if(dna[i]=="G"){
        a+="C"
    }
    else if(dna[i]=="C"){
      a+="G"
    }
  }
  return a
}

console.log(DNAStrand("AAAAA"))

