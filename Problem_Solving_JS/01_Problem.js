const arr = [2, 7, 11, 5];

const target = 13;

function findSumOfNumber(array, target) {
    for (let i = 0; i < array.length; i++) {
        const num1 = array[i];
        for (let j = i+1; j < array.length; j++) {
            const num2 = array[j];
            if (num1 + num2 === target) {
                return [num1, num2];
            }

        }

    }
    return null;
}

const output=findSumOfNumber(arr, target)

console.log(`final target value ${output}` , output);