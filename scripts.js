console.log("Ready");

let flippedCards = [];

for (let i = 0; i < 4; i++) {
    const idString = `card-${i}`;
    idString;
    const card = document.getElementById(idString);

    card.addEventListener("click", function (e) {
        this.classList.toggle("clicked-card");

        if (this.classList.contains("clicked-card")) {
            flippedCards.push(this.id);
        } else {
            const location = flippedCards.indexOf(this.id);

            flippedCards.splice(location, 1);
        }

        console.log(flippedCards);
    });
}
