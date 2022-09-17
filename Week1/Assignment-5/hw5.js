function count(input) {
    let count = {};
    for(let i = 0; i<input.length; i++){
        if(count.hasOwnProperty(input[i])){
            count[input[i]] += 1;
        } else{
            count[input[i]] = 1;
        }
    }
    return count;
}

let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1)); 
// should print {a:3, b:1, c:2, x:1}

function groupByKey(input) {
    let sum = {};
    for(let i = 0; i<input.length; i++){
        let key = input[i].key;
        let value = input[i].value;
        if(sum.hasOwnProperty(key)){
            sum[key] += value;
        } else{
            sum[key] = value;
        }
    }
    return sum;
}

let input2 = [
    { key: "a", value: 3 },
    { key: "b", value: 1 },
    { key: "c", value: 2 },
    { key: "a", value: 3 },
    { key: "c", value: 5 },
];
console.log(groupByKey(input2));