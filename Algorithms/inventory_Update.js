function updateInventory(arr1, arr2) {

    let newArr = []; //new array to hold new stock
    let newArrItems = arr1.map(n => n[1]); //get the names of the old stock
    let newArrValues = arr1.map(n => n[0]); //get the values of the old stock 

    let sortedArr = []; //sorted arr

    //update the stock
    arr2.forEach(n =>{
        if (newArrItems.includes(n[1])){
            newArr.push([(n[0] + newArrValues[newArrItems.indexOf(n[1])]), n[1]])
        }
        else{
            newArr.push(n);
        }
    });

    // add the items not included in arr2 to newArr
    arr1.forEach(n =>{
        if (!arr2.map(n => n[1]).includes(n[1])){
            newArr.push(n);
        }
    });

    //sort the array by item
    [...newArr].map(n => n[1]).sort().forEach(n =>{
        sortedArr.push([newArr[[...newArr].map(n => n[1]).indexOf(n)][0], n]);
    });

    return sortedArr;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);


