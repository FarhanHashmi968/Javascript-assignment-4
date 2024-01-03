// Q1 Find the number of digits
// Take a number from the user and print the count of digits in that number.

let a = parseInt(prompt("Enter a no. less than 10000 to find its no. of digits"));
let count = 0;
if (a <= 10000) {
    for (i = a; i > 0; i = Math.floor(i / 10)) {
        count++;
    }
    console.log(count)
}
else {
    console.log("Please enter no. less than 10000")
}




// Q2 Find the Fives
// Among all the digits from 0−9, PrepBuddy likes number 5. He has a number and wants you to find out the number of times 5 occurred in the given number.

// let a = parseInt(prompt("Enter a no. less than 10000000 to calculate 5's in its digit."));
// let count = 0;
// console.log(a)
// if (a <= 10000000) {
//     for (let i = a; i > 0; i = Math.floor(i / 10)) {
//         if (i % 10 == 5) {
//             count++;
//         }
//     }
//     console.log(count)
// }
// else {
//     console.log("Please Enter a no. less than 10000000")
// }




// Q3 Find Sum of even integers till the no.
// You are given an integer N, and your task is to find the sum of all the even integers starting from 1 upto N (N inclusive).

// let count = 0;
// let a = parseInt(prompt("Enter a value to get its sum of even no's till the digit"));
// if(a<=500){
//     for (let i = 1; i <= a; i++) {
//         if (i % 2 == 0) {
//             count = count + i;
//         }
//     }
//     console.log(count)
// }
// else{
//     console.log("Please Enter no. less than 500")
// }




// Q4 Find the sum of the digits of a given number.
// Write a program that takes a number from the user and get the sum of the digits present in the number.

// let a = parseInt(prompt("Enter a value to find the sum of its digits"));
// let count = 0;
// let b;

// if (a <= 10000) {
//     for (let i = a; i > 0; i = Math.floor(i / 10)) {
//         b = i % 10;
//         count = count + b;
//     }
//     console.log(count);
// }
// else {
//     console.log("Please Enter no. less than 10000")
// }




// Q5 Print the Odds
// Write a program which takes a number from user and print all odd numbers in between 2 and N, but print 2 first.

// let a = parseInt(prompt("Enter a no."));
// if (a <= 100) {
//     console.log(2);
//     for (let i = 2; i <= a; i++) {
//         if (i % 2 != 0) {
//             console.log(i)
//         }
//     }
// }
// else {
//     console.log("Please enter no. less than 100")
// }





// Q6 Print the Pattern.
// Write a program which ask user for no of lines and print a pattern using an asterik .

// let star = "";
// let a = parseInt(prompt("Enter a no. to print the * pattern."));
// if(a<=100){
//     for (let i = 1; i <= a; i++) {
//         star = star + "*"
//         console.log(star)
//     }
// }
// else{
//     console.log("Please enter no. less than 100")
// }





// Q7 Check whether a Number is a prime or not.
// Write a program which takes a number from user and check whether number is prime number or not a prime number.

// let a = parseInt(prompt("Enter a no. to check whether it is prime or not."))
// let res;

// if (a <= 1) {
//     console.log("1 and -ve values are neither prime nor composite no..")
// }
// else if (a > 1 && a <= 10000) {
//     for (let i = 2; i < a; i++) {
//         if (a % i == 0) {
//             res = "It is not a prime no.";
//             break;
//         }
//         else {
//             res = "It is a prime no."
//         }
//     }
//     console.log(res);
// }
// else {
//     console.log("Please enter a valid no.")
// }


// Q8 Print Numbers
// You are given an integer N, and your task is to print all the integers starting from 1 till N (N inclusive).

// let a = parseInt(prompt("Enter a No."))
// for (let i = 1; i <= a; i++) {
//     console.log(i)
// }




// Q9 Print the Table.
// Write a program which takes a number from user and print the table.

// let a = parseInt(prompt("Enter a No. to get the table of it"));
// for (let i = 1; i <= 10; i++) {
//     console.log(a + "*" + i + "=" + a * i)
// }

