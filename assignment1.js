//..1..Implement a map using the Inversion Of Control principle that will perform operations on an array
//such as:
//a.Squaring the elements....
//b.Dividing the element dy 5
//c..The root of the element etc......


function mapOperations(arr,arrOperations){
    let operations = arr.map(arrOperations);
       
    return operations;
}
console.log(mapOperations([1,2,3,4,5],
    num => num * 2
    ))
    console.log(mapOperations([1,2,3,4,5],
        num => num / 5
        ))
        console.log(mapOperations([1,2,3,4,5],
            num => Math.sqrt(num)
            ))


//................................................................................
//..2...Implement a generator that will return Power of 3.......
 

function powerOfThree(arr){
    let res = [];
    for (let  i = 0; i < 10; i++) {
    res.push(  3**arr[i])
      arr[i]++;
    }
    return res;
}

let arr=[1,2,3,4,5,6,7,8,9,10]
console.log(powerOfThree(arr));

//...................................................................
//....3...promise.All and promise.Race

    const promiseAll = [
    new Promise((resolve, reject) => setTimeout(resolve, 1, 'One')),

    new Promise((resolve, reject) => setTimeout(resolve, 2, 'Two')),

    ];

    Promise.all(promiseAll)
    .then(console.log)
    .catch(console.log);

     //..........................................................................


const promiseRace = [
    new Promise((resolve, reject) => setTimeout(resolve, 2, 'apple')),

    new Promise((resolve, reject) => setTimeout(resolve, 1, 'orange')),

    new Promise((resolve, reject) => setTimeout(reject, 3, 'grapes')),

    ];

    Promise.race(promiseRace)
    .then(console.log)
    .catch(console.log);
  
