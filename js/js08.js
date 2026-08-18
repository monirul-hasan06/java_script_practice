const numbers = [ 1, 2, 3, 4, 5];

const reversed = [];

for(i=0; i< numbers.length; i++){
    reversed.unshift(numbers[i]);
}

console.log(reversed);