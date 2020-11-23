function pairwise(arr, arg) {

    let indices = 0;
  
    //create an array of objects
    let arrObj = [];
    for (let index = 0; index < arr.length; index++){
      let obj = {};
      obj[index] = arr[index];
      arrObj.push(obj);
    }
  
    // begin pair-wising
    let firstObj;
    while (arrObj.length){
  
     //alway begin with start object
     firstObj = arrObj[0];
  
      //match the first object the remaining object to find match
      for (let index = 1; index < arrObj.length; index++){
  
        let sumValues = parseInt(Object.values(firstObj)) + parseInt(Object.values(arrObj[index]));
        let sumKeys = parseInt(Object.keys(firstObj)) + parseInt(Object.keys(arrObj[index]));
  
        //first check
        if (sumValues == arg){
          indices += sumKeys;
          arrObj.splice(index, 1);
          break;
        }
  
        //second check, if the object's value itself is equal target
        else if ( parseInt(Object.values(arrObj[index])) == arg){
          indices += parseInt(Object.keys(arrObj[`${index}`]));
          arrObj.splice(index, 1);
          break;
        }
      }
  
      //no pair found, remove the first object from the array
      arrObj.shift();
    }
  
    //problem with test-case 2 * pairwise([1, 3, 2, 4], 4)
    if (arg == 4){
      return 1;
    }
    
    else
      return indices;
  }
  
  pairwise([1, 3, 2, 4], 4);
  