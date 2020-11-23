function permAlone(str) {
  
    // find permutations
    const findPerm = (str) =>{
        if(str.length < 2){
          return str;
        }
  
        let permutationArr = [];
  
        for(let index = 0; index < str.length; index++){
          let letter = str[index];
          let remainingLetters =  str.slice(0, index) + str.slice(index + 1, str.length);
  
          for(let permutation of findPerm(remainingLetters)){
            permutationArr.push(letter + permutation);
          }
        }
  
        return permutationArr;
    }
  
    //find no repeats
    let nonRepeats = [];
    let isRepeat;
    let permArr = findPerm(str);
  
    for(let index = 0; index < permArr.length; index++){
      isRepeat = false;
      for (let i = 0; i < permArr[index].length; i++){
        if(permArr[index][i] == permArr[index][i + 1]){
          isRepeat = true;
          break;
        }
      }
  
      if(!isRepeat){
        nonRepeats.push(permArr[index]);
      }
    }
  
    return nonRepeats.length;
  }
  
  console.log(permAlone('abcdefa'));
  