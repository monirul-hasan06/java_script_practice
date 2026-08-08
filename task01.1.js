/*Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:

['orange', 'yellow', 'green', 'blue', 'red'] */

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
    const rev_colors =[];
    for(let i= 0; i< length.colors; i++){
        rev_colors.unshift(colors[i]);
    }
console.log(rev_colors);