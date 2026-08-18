/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
let ticketPrice = 800;
let age = 22;
let student = true;
// for Children it's free.
if(age < 10){
    ticketPrice = 0;
    console.log("ticket price : ");
    console.log(ticketPrice);
}
// Student get 50% discount
else if(student){
    ticketPrice = ticketPrice /2;
    console.log("ticket price : ");
    console.log(ticketPrice);
}
//Senior citizens (age >= 60) gets a 15% Discount
else if(age>=60){
    ticketPrice = ticketPrice + (ticketPrice * 15/100) ;
    console.log("ticket price : ");
    console.log(ticketPrice);
}
//Otherwise Regular ticket fare 800 tk
else{
    console.log("ticket price : ");
    console.log(ticketPrice);
}
