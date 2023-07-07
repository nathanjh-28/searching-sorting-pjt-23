console.log('sanity check')

/*

Bubble Sort

Here we will see bubble sort. The bubble sort method starts at the beginning of an unsorted array and 'bubbles up' unsorted values towards the end, iterating through the array until it is completely sorted. It does this by comparing adjacent items and swapping them if they are out of order. The method continues looping through the array until no swaps occur at which point the array is sorted.

This method requires multiple iterations through the array and for average and worst cases has quadratic time complexity. While simple, it is usually impractical in most situations.

- Freecodecamp

*/

function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
    return arr;
}

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

/*
Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list. It then starts at the second position, selects the smallest value in the remaining list, and swaps it with the second element. It continues iterating through the list and swapping elements until it reaches the end of the list. Now the list is sorted. Selection sort has quadratic time complexity in all cases.
*/

function selectionSort(array) {
    let sortedLength = 0;
    let currentMin = Infinity
    let currentMinIdx = -1
    while (sortedLength < array.length - 1) {
        for (let i = sortedLength; i < array.length; i++) {
            if (array[i] < currentMin) {
                currentMin = array[i]
                currentMinIdx = i;
            }
        }
        swap(array, sortedLength, currentMinIdx)
        currentMin = Infinity
        currentMinIdx = -1
        sortedLength++
    }

    return array;
}