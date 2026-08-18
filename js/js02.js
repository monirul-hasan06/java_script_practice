/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
let marks = 76;
if(marks>= 90 && marks<=100 ){
    console.log("Your grade is A");
}
else if(marks>= 80 && marks<=89){
    console.log("Your grade is B");
}
else if(marks>= 70 && marks<=79){
    console.log("Your grade is C");
}
else if(marks>= 60 && marks<=69){
    console.log("Your grade is D");
}
else if(marks>= 0 && marks<=59){
    console.log("Your grade is F");
}