function plusOne(inputArray) {

    // if (inputArray.length = 1 && inputArray[0] === 9) {
    //     inputArray[0] += 1;
    //     newArrayElement = inputArray.toString().split("");
    //     for (let m = 0; m < newArrayElement.length; m++) {
    //         newArrayElement[m] = Number(newArrayElement[m]);
    //     }
    // }
    // else {


    let carry = 0;
    let newArrayElement = [];

    for (let i = inputArray.length - 1; i >= 0; i--) {
        if (i === inputArray.length - 1) {
            inputArray[i] += 1;
        }
        if (i !== 0) {
            if (inputArray[i] > 9) {
                inputArray[i] = 0;
                carry = 1
                inputArray[i - 1] += carry;
            }
        }
    }
    // }

    if (inputArray[0] > 9) {
        let newArray = inputArray[0];
        console.log("newArray", newArray);

        newArrayElement = newArray.toString().split("");

        for (let k = 0; k < newArrayElement.length; k++) {
            newArrayElement[k] = Number(newArrayElement[k]);
        }

        console.log("newArrayElement", newArrayElement);
        /* for single digit */
        //     if (inputArray.length > 1) {
        for (let j = 1; j < inputArray.length; j++) {
            newArrayElement.push(inputArray[j]);
        }
        // } 
    }
    else {
        newArrayElement = inputArray;
    }

    console.log("output", inputArray);
    console.log("final output", newArrayElement);

    return newArrayElement;
}

plusOne([1, 2, 9, 9]);