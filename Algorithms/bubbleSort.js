function bubbleSort(array) {
    //get the copty of the array
    const copyArray = [...array];
  
    //outer loop
    for (let outerIndex = 0; outerIndex < copyArray.length; outerIndex++){
      //inner loop
      for (let innerIndex = 0; innerIndex <= copyArray.length - 1; innerIndex++){
        if (copyArray[outerIndex] < copyArray[innerIndex]){
          //swap by destructuring
          [copyArray[outerIndex], copyArray[innerIndex]] = [copyArray[innerIndex], copyArray[outerIndex]];
        }
  
      }
    }

    return copyArray;
    // Only change code above this line
  }
  
  bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
  