


let numbers = [10, 45, 67, 23, 89, 12,54,32,112,75,65,69,96];


function findLargest(arr) {
    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

console.log("Largest number is:", findLargest(numbers));






let str = "GUVI";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}

console.log(reversed);
