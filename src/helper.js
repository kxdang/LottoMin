function numberConverter(num) {
    // Nine Zeroes for Billions
    return Math.abs(Number(num)) >= 1.0e+9

        ? Math.abs(Number(num)) / 1.0e+9 + "B"
        // Six Zeroes for Millions 
        : Math.abs(Number(num)) >= 1.0e+6

            ? Math.abs(Number(num)) / 1.0e+6 + "M"
            // Three Zeroes for Thousands
            : Math.abs(Number(num)) >= 1.0e+3

                ? Math.abs(Number(num)) / 1.0e+3 + "K"

                : Math.abs(Number(num));
}

function matchingNumbers(arr1, arr2) {
    for (let i = 0; i < arr1.length - 1; i++) {
        if (arr1[i] !== arr2[i]) return false
    }
    return true
}

export { numberConverter, matchingNumbers }