$(document).ready(() => {
    const getWords = async () => {
        const res = await fetch("https://random-word-api.herokuapp.com/word?number=1");
        if (!res.ok) {
            throw new Error(`HTTP Error! status: ${res.status}`);
        } else {
            return await res.text();
        }
    };

    const extractWordString = (arrayString) => {
        let splitArray = arrayString.split('"');
        console.log("arrayString: ", splitArray[1]);
        return splitArray[1];
    };

    let words = getWords().then((res) => extractWordString(res));

    console.log("words: ", words);

    const inout = $("#guess");

    input.on("change", function () {
        console.log("e: ", e);
    });
});
