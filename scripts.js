$(document).ready(() => {
    console.log("Ready");

    const typewriter = (id, interval = 500) => {
        // grab the html element
        const target = document.getElementById(id);
        // know what the word is
        const word = target.innerText;
        // clear the html element
        target.innerText = "";
        // turn it in to an array
        const wordArray = word.split("");
        // set an index to increment
        let index = 0;
        // start an interval
        const timer = setInterval(() => {
            // run code or stop timer based on content length
            if (index < wordArray.length) {
                // what is there now
                const currentTargetValue = target.innerText;
                // add a letter
                const newTargetValue = currentTargetValue + wordArray[index];
                // set the new value
                target.innerText = newTargetValue;
                // increment the index and re start
                index++;
            } else {
                // if it is the end of the word clear the timer.
                clearTimeout(timer);
            }
        }, interval);
    };

    typewriter("typewriter");
    typewriter("version1", 1000);
    typewriter("cool", 250);
});
