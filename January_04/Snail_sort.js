/*
Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]


NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].
 */


snail = function(array) {
    // enjoy

    let traverse_matrix = [];

    while(array.length) {

        if(array.length === 0) return array;
        if(array.length === 1) return array[0];

        //add the first row of the matrix
        traverse_matrix.push(...array.shift());

        //adding the last element of every row
        for (let j = 0; j < array.length; j++) {
            if(array.length){
                traverse_matrix.push(array[j].pop());
            }
        }

        //adding the last row reversed
        if(array.length) {
            traverse_matrix.push(...array.pop().reverse());
        }

        // adding the remaining first elements on every row
        for(let i=array.length-1; i>=0; i--){
            if(array.length){
                traverse_matrix.push(array[i].shift());
            }
        }

        return traverse_matrix;
    }
}

const array1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(snail(array1)); // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]