$(document).ready(() => {
    // helper function that remopves any duplicates from an array
    function unique(arr) {
        const result = Array.from(new Set(arr));
        return result;
    }

    // this causes issues by being a promise needs to be resolved before you can use it

    // const getWords = async () => {
    //     const res = await fetch("https://random-word-api.herokuapp.com/word?number=1");
    //     if (!res.ok) {
    //         throw new Error(`HTTP Error! status: ${res.status}`);
    //     } else {
    //         return await res.text();
    //     }
    // };

    // const extractWordString = (arrayString) => {
    //     let splitArray = arrayString.split('"');
    //     console.log("arrayString: ", splitArray[1]);
    //     return splitArray[1];
    // };

    // let words = getWords().then((res) => extractWordString(res));

    // placeholder word goes here
    const words = "dave";

    // counting the guesses that have been made
    let correctGuesses = [];
    let wrongGuesses = [];

    // when the user presses a key, check if they are right or wrong.
    $("#guess").on("keyup", function (e) {
        const letter = e.target.value;

        if (words.includes(letter)) {
            // happy path
            // find the location of the guess in the answer
            const letterLocation = words.indexOf(letter);

            //add letter to the array of correct guesses in the correct position
            correctGuesses.splice(letterLocation, 0, letter);
            // revove any duplicates from the array
            const stripedarray = unique(correctGuesses);
            correctGuesses = stripedarray;
            let guessedWordString = correctGuesses.toString();

            // display the array in the browser
            $(".word").text(guessedWordString);
            // reset the input
            $("#guess").val("");

            // deal with win criteria
            if (correctGuesses.length === words.length) {
                setTimeout(() => {
                    alert("you win!");
                }, 0);
            }
        } else {
            // sad path
            //  add the letter to the array of wrong guesses
            wrongGuesses.push(letter);

            // construct id of next stick
            let stickIdNumber = wrongGuesses.length + 1;
            let stickId = `#stick${stickIdNumber}`;
            // show next stick
            $(stickId).addClass("visible");
            // reset the input
            $("#guess").val("");
            // deal with loose criterie
            if (wrongGuesses.length === 10) {
                setTimeout(() => {
                    alert("you loose!");
                }, 0);
            }
        }
    });
});
