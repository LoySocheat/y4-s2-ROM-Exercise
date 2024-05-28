//1. Merge 2 array below into one single array
// - arr1 = [0, 1, 2, 3, 4]
// - arr2 = [5, 6, 7, 8, 9]
// - Expect outcome: mergedArr = [0, 1, 2, 3, 4, 5 , 6, 7, 8, 9]

const arr1 = [0, 1, 2, 3, 4];
const arr2 = [5, 6, 7, 8, 9];

const mergedArr = arr1.concat(arr2);
console.log("Merged Array:", mergedArr);

//2. Create a program to display shape below
function displayShape() {
    for (let i = 5; i > 0; i--) {
        let row = '';
        for (let j = 0; j < i; j++) {
            row += '* ';
        }
        console.log(row);
    }
}

displayShape();