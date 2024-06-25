/*
1
print_1_to_255()
Print all the integers from 1 to 255. 
*/

function print_1_to_255() {
    for (let i = 1; i <= 255; i++) {
        console.log(i);
    }
}

console.log("Running print_1_to_255:");
// Call the function
print_1_to_255();
console.log("Finished print_1_to_255");
console.log("\n");

/*
2
print_odds_1_to_255()
Print all odd integers from 1 to 255
*/
function print_odds_1_to_255() {
    for (let i = 1; i <= 255; i++) {
        if (i % 2 !==0) {
            console.log(i)
        }
    }
}

console.log("Running print_odds_1_to_255:");
// Call the function
print_odds_1_to_255();
console.log("Finished print_odds_1_to_255");
console.log("\n");

/*
3
print_ints_and_sum_0_to_255()
Print integers from 0 to 255, and with each integer print the sum so far 
*/

function print_ints_and_sum_0_to_255() {
    let sum = 0;
    for (let i = 0; i <= 255; i++) {
        sum += i;
        console.log("Integer: " + i + ", Sum so far: " + sum);
    }
}

console.log("Running print_ints_and_sum_0_to_255:");
// Call the function
print_ints_and_sum_0_to_255();
console.log("Finished print_ints_and_sum_0_to_255:");
console.log("\n");

/*
4
print_list_vals(lst)
Iterate through a given list, printing each value. 
*/

function print_list_vals(lst) {
    for (let i = 0; i < lst.length; i++) {
        console.log(lst[i])
    }
}

console.log("Running print_list_vals(lst):");
const exampleList = [1,2,3,4,5];
// Call the function
print_list_vals(exampleList);
console.log("Finished print_list_vals(lst):");
console.log("\n");

/*
5
print_max_of_list(lst)
Given a list, find and print its largest element.
*/

function print_max_of_list(lst) {
    if (lst.length === 0) {
        console.log("List is empty");
        return;
    }

    let max = lst[0]; // Maybe the first element is the maximum

    // Iterate through the list to find the maximum element
    for (let i = 1; i < lst.length; i++) {
        if (lst[i] > max) {
            max = lst[i]; // max updates if current element is larger
        }
    }

    // Print the max element
    console.log("The largest element in the list is:", max);
}

let exampleList2 = [5, 7, 3, 9, 3, 10];
console.log("Running print_max_of_list(lst):");
// Call the function
print_max_of_list(exampleList2);
console.log("Finished print_max_of_list(lst):");
console.log("\n");

/*
6
print_average_of_list(lst)
Analyze a list’s values and print the average.
*/

function print_average_of_list(lst) {
    if (lst.length === 0) {
        console.log("List is empty.)");
        return;
    }

    let sum = 0;
    // Find sum of all elements in the list
    for (let i = 0; i < lst.length; i++)
        sum += lst[i];
}

// Calculate avaerage
let average = sum / lst.length;

// Print the average
console.log("The average of the list elements is:", average);

/*
7
return_odds_list_1_to_255()
Create a list with all the odd integers between 1 and 255 (inclusive).
*/

function return_odds_list_1_to_255(){

}

/*
8
square_list_vals(lst)
Square each value in a given list, returning that same list with changed values. 
*/

function square_list_vals(lst) {

}

/*
9
greater_than_val(lst, val)
Given a list and a value, count and print the number of list values greater than val.
*/

function greater_than_val(lst, val) {

}

/*
10
zero_out_list_negatives(lst)
Return the given list, after setting any negative values to zero. 
*/

function zero_out_list_negatives(lst) {

}

/*
11
max_min_average(lst)
Given a list, print the max, min and average values for that list.
*/

function max_min_average(lst) {

}

/*
12
shift_list_vals_left(lst)
Given a list, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the list.
*/

function shift_list_vals_left(lst) {

}

/*
13
swap_string_for_negatives(lst)
Given a list of integers or floats, replace any negative values with the string 'Dojo'.
*/

function swap_string_for_negatives(lst) {

}