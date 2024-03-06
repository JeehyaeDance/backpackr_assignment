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

    if (this.rating) {
        const detailContainer = document.createElement("div");
        detailContainer.className = "card_detail";
        const rating = document.createElement("div");
        rating.className = "card_rating";

        for (let i = 0; i < this.rating; i++) {
            const star = document.createElement("span");
            star.className = "star filled_star";
            rating.appendChild(star);
        }

        for (let i = 0; i < 5 - this.rating; i++) {
            const star = document.createElement("span");
            star.className = "star empty_star";
            rating.appendChild(star);
        }
        detailContainer.appendChild(rating);

        if (this.text) {
            const text = document.createElement("p");
            text.className = "card_text";
            text.innerText = this.text;
            detailContainer.appendChild(text);
        }

        this.container.appendChild(detailContainer);
    }
}

const container = document.getElementById("container");
const title = document.createElement("h2");
title.innerText = "Card";

const verticalContainer = new Card("logo_primary.png", "Card Label", "Card Title", "Hilight", "crossOut", 3, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

container.appendChild(title);
container.appendChild(verticalContainer.container);
