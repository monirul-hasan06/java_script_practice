/*Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:

['orange', 'yellow', 'green', 'blue', 'red'] */

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

const result = [];

for (let i = 0; i < colors.length; i++) {
    result.unshift(colors[i]);
}

console.log(result);

