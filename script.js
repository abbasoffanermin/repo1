//Task 1
//Part 1
const dayOfWeek = "Monday"
let result;
switch (dayOfWeek) {
    case "Monday":
        result = "study javascript"
        break;
    case "Sunday":
        result = " don't study javascript"
        break;
    case "Satunday":
        result = "go work"
        break;
    default:
        result = "sleep"
        break;
}
console.log(result);
//Part2
const numbers = [1, 3, 4, 5, 2];
let sum = 0;
for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
    sum += numbers[index]
}
console.log(sum);
//Part3
const fruits = ['Apple', 'Banana', 'Cherry']
for (let index = 0; index < fruits.length; index++) {
    console.log(index, " ", fruits[index]);

}
//Part4
const student = {
    name: 'Narmin',
    grade: 65
}
if (student.grade >= 60) {
    console.log('Pass');
} else {
    console.log('Fail');
}

//Task2
//Part1
const color = 'Red';
switch (color) {
    case 'Red':
        console.log('Stop');
        break;
    case 'Yellow':
        console.log('Caution');
        break;
    case 'Green':
        console.log('Go');
        break;

    default:
        console.log('Unknow color');
        break;
}

//Part2
const matrix = [[1, 2], [3, 4, 5, 6], [23, 54]]
for (let index = 0; index < matrix.length; index++) {
    if (typeof matrix[index] != 'number') {
        for (let i = 0; i < matrix[index].length; i++) {
            console.log(matrix[index][i]);

        }
    } else {
        console.log(matrix[index]);
    }

}

//Part3
const product = {
    name: "Product1",
    price: 20,
    instock: true
}

for (let prod_name in product) {
    if (product.hasOwnProperty(prod_name)) {
        console.log(prod_name, ': ', product[prod_name]);
    }
}


//Part4
if (product.price < 50 && product.instock == true) {
    console.log('Available');
} else {
    console.log('Unavailable');
}