const getRatingElement = function (rating) {
    const rateDiv = document.createElement("div");
    rateDiv.className = "card_rating";

    for (let i = 0; i < rating; i++) {
        const star = document.createElement("span");
        star.className = "star filled_star";
        rateDiv.appendChild(star);
    }

    for (let i = 0; i < 5 - rating; i++) {
        const star = document.createElement("span");
        star.className = "star empty_star";
        rateDiv.appendChild(star);
    }

    return rateDiv;
}

function VerticalCard (imgSrc, label, title, highlight, crossOut, rating = null, text = null) {
    this.container = document.createElement("div");
    this.container.className = "vertical_card";
    this.imgSrc = imgSrc;
    this.label = label;
    this.title = title;
    this.highlight = highlight;
    this.crossOut = crossOut;
    this.rating = rating;
    this.text = text;

    this.setupCard();
}

VerticalCard.prototype.setupCard = function() {
    const img = document.createElement("img");
    img.src = this.imgSrc;
    this.container.appendChild(img);

    const main = document.createElement("div");
    main.className = "vertical_card_main";

    const label = document.createElement("span");
    label.className = "vertical_card_label";
    label.innerText = this.label;
    main.appendChild(label);

    const title = document.createElement("span");
    title.className = "vertical_card_title";
    title.innerText = this.title;
    main.appendChild(title);

    const highlightGroup = document.createElement("div");
    highlightGroup.className = "vertical_card_highlist_group";

    const highlight = document.createElement("span");
    highlight.className = "vertical_card_highlight";
    highlight.innerText = this.highlight;
    const crossOut = document.createElement("span");
    crossOut.className = "vertical_card_crossout";
    crossOut.innerText = this.crossOut;  
    highlightGroup.appendChild(highlight);
    highlightGroup.appendChild(crossOut);
    main.appendChild(highlightGroup);

    this.container.appendChild(main);

    if (this.rating) {
        const detailContainer = document.createElement("div");
        detailContainer.className = "card_detail";
        const rating = getRatingElement(this.rating);
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

function HorizontalCard (imgSrc, title, name, rating, text) {
    this.container = document.createElement("div");
    this.container.className = "horizontal_card"
    this.imgSrc = imgSrc;
    this.title = title;
    this.name = name;
    this.rating = rating;
    this.text = text;

    this.setupCard();
}

HorizontalCard.prototype.setupCard = function() {
    const img = document.createElement("img");
    img.src = this.imgSrc;
    img.className = "horizontal_card_img"
    this.container.appendChild(img);

    const main = document.createElement("div");
    main.className = "horizontal_card_main";

    const title = document.createElement("span");
    title.className = "horizontal_card_title";
    title.innerText = this.title;
    main.appendChild(title);

    const text = document.createElement("p");
    text.className = "horizontal_card_text";
    text.innerText = this.text;
    main.appendChild(text);

    const bottomRow = document.createElement("div");
    bottomRow.className = "horizontal_bottom_row";

    const rating = getRatingElement(this.rating);
    bottomRow.appendChild(rating);

    const name = document.createElement("span");
    name.className = "card_name";
    name.innerText = this.name;
    bottomRow.appendChild(name);

    main.appendChild(bottomRow)

    this.container.appendChild(main);
}

const cardContainer = document.getElementById("cardContainer");
const title = document.createElement("h2");
title.innerText = "Card";

const verticalDefault = new VerticalCard("logo_primary.png", "Card Label", "Card Title", "Hilight", "crossOut", 3, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
const verticalRating = new VerticalCard("logo_primary.png", "Card Label", "Card Title", "Hilight", "crossOut", 2);
const verticalNoDetail = new VerticalCard("logo_primary.png", "Card Label", "Card Title", "Hilight", "crossOut");

const horizontalCard = new HorizontalCard("logo_primary.png", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "John Doe", 3,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

cardContainer.appendChild(title);
cardContainer.appendChild(verticalDefault.container);
cardContainer.appendChild(verticalRating.container);
cardContainer.appendChild(verticalNoDetail.container);
cardContainer.appendChild(horizontalCard.container);
