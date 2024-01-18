function printLetterTriples(n) {

    const numberOfLetters = Number(n);


    for (let i = 0; i < numberOfLetters; i++) {
        for (let j = 0; j < numberOfLetters; j++) {
            for (let k = 0; k < numberOfLetters; k++) {
                let firstLetter = String.fromCharCode('a'.charCodeAt(0) + i);
                let secondLetter = String.fromCharCode('a'.charCodeAt(0) + j);
                let thirdLetter = String.fromCharCode('a'.charCodeAt(0) + k);
                console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
            }
        }
    }
}



printLetterTriples(3);