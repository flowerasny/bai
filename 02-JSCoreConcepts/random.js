console.log("-----Task 7-----")

let fillInWithTenRandomNumbers = (arr) => {
    for (let i = 1; i <= 10; i++){
        console.log(i);
        arr.push(getRandomNumber());
    }

    return arr;
}

let getRandomNumber = () => 5 + Math.floor((15) * Math.random());

let printTable = (arr) => console.log(arr);

let array = [];

printTable(fillInWithTenRandomNumbers(array))