$(document).ready(() => {
    console.log("Ready");

    // type in to a box and press enter. see the encoded version
    // be able to get back again.

    const Plain = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        " ",
    ];
    const Cipher = [
        "X",
        "Y",
        "Z",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        " ",
    ];

    $("#english").on("keydown", (e) => {
        if (e.keyCode === 13) {
            const encodedString = encodeString(e.target.value.toUpperCase());
            const resultBox = $("#result1");
            resultBox.text(encodedString);
        }
    });

    $("#encoded").on("keydown", (e) => {
        if (e.keyCode === 13) {
            const decodedString = decodeString(e.target.value.toUpperCase());
            const resultBox = $("#result2");
            resultBox.text(decodedString);
        }
    });

    const encodeString = (initialString) => {
        // for each letter add the corresponding letter
        const stringArray = initialString.split("");

        const newStringArray = stringArray.map((letter) => {
            const letterPosition = Plain.indexOf(letter);
            const newLetter = Cipher[letterPosition];
            return newLetter;
        });
        let newString = newStringArray.toString();

        const properString = newString.replace(/,/g, "");
        return properString;
    };

    const decodeString = (initialString) => {
        // for each letter add the corresponding letter
        const stringArray = initialString.split("");

        const newStringArray = stringArray.map((letter) => {
            const letterPosition = Cipher.indexOf(letter);
            const newLetter = Plain[letterPosition];
            return newLetter;
        });

        let newString = newStringArray.toString();

        const properString = newString.replace(/,/g, "");
        return properString;
    };
});
