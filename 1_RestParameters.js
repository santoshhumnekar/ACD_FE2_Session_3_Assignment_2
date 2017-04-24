let getArraylength = (...arr) => { //Length of Array passed as Rest parameter 
    return arr.length;

}


let sortRestArgs = (...arr) => { //Each element of Array passed as Rest parameter multiplied by two
    return arr.sort((a, b) => {
        return a - b
    });
}

let multiplyByTwo = (...arr) => { // Sorted Array passed as Rest parameter
    let newarr = [];
    arr.reduce((tot, num) => {
        newarr.push(num * 2)
    }, 0)
    return newarr;
}



let mainArrayFunc = (...arr) => {
    let arrayLength = getArraylength(...arr);
    let doubledArray = multiplyByTwo(...arr);
    let sortedargs = sortRestArgs(...arr);

    console.log(`Length of Array : ${arrayLength}`)
    console.log(` Each element of Array multiplied by two: ${doubledArray}`)
    console.log(`Sorted Array : ${sortedargs}`)

}

let number = [4, 1, 2, 5, 3];

mainArrayFunc(...number)