function VerticalCard(imgSrc, label, title, highlight, crossOut, rating, text) {
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
  return this.container;
}

var getRatingElement = function (rating) {
  var rateDiv = document.createElement("div");
  rateDiv.className = "card_rating";

  for (var i = 0; i < rating; i++) {
    var star = document.createElement("span");
    star.className = "star filled_star";
    rateDiv.appendChild(star);
  }

  for (var i = 0; i < 5 - rating; i++) {
    var star = document.createElement("span");
    star.className = "star empty_star";
    rateDiv.appendChild(star);
  }

  return rateDiv;
};

VerticalCard.prototype.setupCard = function () {
  var img = document.createElement("img");
  img.src = this.imgSrc;
  this.container.appendChild(img);

  var main = document.createElement("div");
  main.className = "vertical_card_main";

  var label = document.createElement("span");
  label.className = "vertical_card_label";
  label.innerText = this.label;
  main.appendChild(label);

  var title = document.createElement("span");
  title.className = "vertical_card_title";
  title.innerText = this.title;
  main.appendChild(title);

  var highlightGroup = document.createElement("div");
  highlightGroup.className = "vertical_card_highlist_group";

  var highlight = document.createElement("span");
  highlight.className = "vertical_card_highlight";
  highlight.innerText = this.highlight;
  var crossOut = document.createElement("span");
  crossOut.className = "vertical_card_crossout";
  crossOut.innerText = this.crossOut;
  highlightGroup.appendChild(highlight);
  highlightGroup.appendChild(crossOut);
  main.appendChild(highlightGroup);

  this.container.appendChild(main);

  if (this.rating) {
    var detailContainer = document.createElement("div");
    detailContainer.className = "card_detail";
    var rating = getRatingElement(this.rating);
    detailContainer.appendChild(rating);

    if (this.text) {
      var text = document.createElement("p");
      text.className = "card_text";
      text.innerText = this.text;
      detailContainer.appendChild(text);
    }

    this.container.appendChild(detailContainer);
  }
};

function HorizontalCard(imgSrc, title, name, rating, text) {
  this.container = document.createElement("div");
  this.container.className = "horizontal_card";
  this.imgSrc = imgSrc;
  this.title = title;
  this.name = name;
  this.rating = rating;
  this.text = text;

  this.setupCard();
  return this.container;
}

HorizontalCard.prototype.setupCard = function () {
  var img = document.createElement("img");
  img.src = this.imgSrc;
  img.className = "horizontal_card_img";
  this.container.appendChild(img);

  var main = document.createElement("div");
  main.className = "horizontal_card_main";

  var title = document.createElement("span");
  title.className = "horizontal_card_title";
  title.innerText = this.title;
  main.appendChild(title);

  var text = document.createElement("p");
  text.className = "horizontal_card_text";
  text.innerText = this.text;
  main.appendChild(text);

  var bottomRow = document.createElement("div");
  bottomRow.className = "horizontal_bottom_row";

  var rating = getRatingElement(this.rating);
  bottomRow.appendChild(rating);

  var name = document.createElement("span");
  name.className = "card_name";
  name.innerText = this.name;
  bottomRow.appendChild(name);

  main.appendChild(bottomRow);

  this.container.appendChild(main);
};

var verticalDefault = new VerticalCard(
  "logo_primary.png",
  "Card Label",
  "Card Title",
  "Hilight",
  "crossOut",
  3,
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
);
var verticalRating = new VerticalCard(
  "logo_primary.png",
  "Card Label",
  "Card Title",
  "Hilight",
  "crossOut",
  2
);
var verticalNoDetail = new VerticalCard(
  "logo_primary.png",
  "Card Label",
  "Card Title",
  "Hilight",
  "crossOut"
);

const horizontalCard = new HorizontalCard(
  "logo_primary.png",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "John Doe",
  3,
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
);

var cardContainer = document.getElementById("cardContainer");
var title = document.createElement("h2");
title.innerText = "Card";

cardContainer.appendChild(title);
cardContainer.appendChild(verticalDefault);
cardContainer.appendChild(verticalRating);
cardContainer.appendChild(verticalNoDetail);
cardContainer.appendChild(horizontalCard);
