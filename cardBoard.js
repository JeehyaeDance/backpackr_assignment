function Card (imgSrc = "logo_primary.png", label = "Card Label", title = "Card Title", highlight = "Hilight", crossOut = "crossOut", rating = null, text = null) {
    this.container = document.createElement("div");
    this.container.className = "card"
    this.imgSrc = imgSrc;
    this.label = label;
    this.title = title;
    this.highlight = highlight;
    this.crossOut = crossOut;
    this.rating = rating;
    this.text = text;

    this.setupCard();
}

Card.prototype.setupCard = function() {
    const img = document.createElement("img");
    img.src = this.imgSrc;
    this.container.appendChild(img);

    const main = document.createElement("div");
    main.className = "card_main";

    const label = document.createElement("span");
    label.className = "card_label";
    label.innerText = this.label;
    main.appendChild(label);

    const title = document.createElement("span");
    title.className = "card_title";
    title.innerText = this.title;
    main.appendChild(title);

    const highlightGroup = document.createElement("div");
    highlightGroup.className = "card_highlist_group";

    const highlight = document.createElement("span");
    highlight.className = "card_highlight";
    highlight.innerText = this.highlight;
    const crossOut = document.createElement("span");
    crossOut.className = "card_crossout";
    crossOut.innerText = this.crossOut;  
    highlightGroup.appendChild(highlight);
    highlightGroup.appendChild(crossOut);
    main.appendChild(highlightGroup);

    this.container.appendChild(main);
}

const container = document.getElementById("container");
const title = document.createElement("h2");
title.innerText = "Card";

const verticalContainer = new Card();
console.log("here");
console.log(verticalContainer);

container.appendChild(title);
container.appendChild(verticalContainer.container);
