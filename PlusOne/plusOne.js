function plusOne(inputArray) {

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

    if (inputArray[0] > 9) {
        let newArray = inputArray[0];

        newArrayElement = newArray.toString().split("");

        for (let k = 0; k < newArrayElement.length; k++) {
            newArrayElement[k] = Number(newArrayElement[k]);
        }

        for (let j = 1; j < inputArray.length; j++) {
            newArrayElement.push(inputArray[j]);
        }
    }
    else {
        newArrayElement = inputArray;
    }

    return newArrayElement;
}
