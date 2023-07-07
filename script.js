console.log('sanity check')

/*

Bubble Sort

Here we will see bubble sort. The bubble sort method starts at the beginning of an unsorted array and 'bubbles up' unsorted values towards the end, iterating through the array until it is completely sorted. It does this by comparing adjacent items and swapping them if they are out of order. The method continues looping through the array until no swaps occur at which point the array is sorted.

This method requires multiple iterations through the array and for average and worst cases has quadratic time complexity. While simple, it is usually impractical in most situations.

- Freecodecamp

*/

function bubbleSort(array) {

    let sortedLength = 0;

    while (sortedLength < array.length) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1] && i !== (array.length - 1)) {
                swap(array, i, i + 1)
            }
        }
        sortedLength++;
    }

    return array;
}

function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
    return arr;
}