function mergeSort(array) {
    const copyArray = [...array];

    // helper function for merging
    const merge = (subArr1, subArr2, arr) => {
        // variables for looping
        let i = 0;
        let j = 0;
        let k = 0;

        //merging subArr1 and subArr2 into originalArr
        while (i < subArr1.length && j < subArr2.length) {
            if (subArr1[i] < subArr2[j]) {
                arr[k] = subArr1[i];
                i++;
            }
            else {
                arr[k] = subArr2[j];
                j++;
            }
            k++;
        }

        //take care of the remaining elements in either subArr1 or subArr2
        while (i < subArr1.length) {
            arr[k] = subArr1[i];
            k++;
            i++;
        }

        while (j < subArr2.length) {
            arr[k] = subArr2[j];
            k++;
            j++;
        }

    }


    // sort and merge
    const sortMerge = (arr) => {
        const n = arr.length; // size of arr

        //base case
        if (n < 2) {
            return;
        }

        const midIndex = Math.floor(n / 2);

        //create two sub arrays
        const leftArr = [];
        const rightArr = [];

        //copy the first half of arr into leftArr
        for (let index = 0; index < midIndex; index++) {
            leftArr[index] = arr[index];
        }

        //copy the secong half of arr into leftArr
        for (let index = midIndex; index < n; index++) {
            rightArr[index - midIndex] = arr[index];
        }

        // recurse the copying and merge
        sortMerge(leftArr);
        sortMerge(rightArr);
        merge(leftArr, rightArr, arr);
    }

    sortMerge(copyArray);

    console.log(copyArray);

    return copyArray;
}

mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
