function sym(args) {

  let arrays = Object.values(arguments); //get the array of arrays

  let arr1 = args; //get the first array
  let arr2 = arrays[1]; //get the second array
  let symArr = []; //symmetric set(initially)

  // helper function to find the symmetric set
  const helperSymm = (firstArr, secondArr, arr) =>{
    firstArr.forEach(n =>{
      if (!secondArr.includes(n) && !arr.includes(n)){
        arr.push(n);
      }
    });
  };

  //find a symmetric set from the first 2 arrays
  helperSymm(arr1, arr2, symArr);
  helperSymm(arr2, arr1, symArr);

  //remove the first two arrays
  arrays.shift();
  arrays.shift();

  //repeat the operation while the are more arrays to look
  while (arrays.length){
    arr1 = symArr;
    arr2 = arrays[0];
    symArr = []; // reset symmetric set for each iteration

    helperSymm(arr1, arr2, symArr);
    helperSymm(arr2, arr1, symArr);

    arrays.shift(); //remove the 0th array
  }

  //return a sorted array
  return symArr.sort((a, b)=>{ return a-b});

}

const arr = sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);


