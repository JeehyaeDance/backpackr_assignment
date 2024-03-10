function createImageTag(src) {
  var img = document.createElement("img");
  img.src = src;
  return img;
}

function createDivTag(className) {
  var div = document.createElement("div");
  div.className = className;
  return div;
}

function createSpanTag(className, innerText) {
  var span = document.createElement("span");
  span.className = className;
  span.innerText = innerText;
  return span;
}

function createPTag(className, innerText) {
  var p = document.createElement("p");
  p.className = className;
  p.innerText = innerText;
  return p;
}

function Hilight(primary, secondary) {
  var container = createDivTag("hilight-container");
  var primary = createSpanTag("hilight", primary);
  var secondary = createSpanTag("crossout", secondary);

  this.hilight = container;
  this.hilight.appendChild(primary);
  this.hilight.appendChild(secondary);

  return this.hilight;
}

function Rating(count) {
  if (!count) {
    throw Error("Count parameter is missing");
  }

  var container = createDivTag("rating");

  for (var i = 0; i < 5; i++) {
    var star;
    if (i < count) {
      star = createSpanTag("star filled_star", "");
    } else {
      star = createSpanTag("star empty_star", "");
    }
    container.appendChild(star);
  }

  return container;
}

function Review(review, isFull) {
  this.review = createDivTag("review-container");

  if (isFull && review.text) {
    var reviewText = createPTag("text", review.text);
    this.review.appendChild(reviewText);
  }

  var rating = new Rating(review.count);
  this.review.appendChild(rating);

  if (!isFull && review.text) {
    var reviewText = createPTag("text", review.text);
    this.review.appendChild(reviewText);
  }

  if (review.author) {
    var reviewAuthor = createSpanTag("author", review.author);
    this.review.appendChild(reviewAuthor);
  }

  return this.review;
}

function Card(type, title) {
  var imageSrc = "logo_primary.png";

  this.card = createDivTag("card " + type);
  this.imgContainer = createDivTag("imgContainer");
  this.img = createImageTag(imageSrc);
  this.content = createDivTag("content");
  this.title = createSpanTag("title", title);

  this.imgContainer.appendChild(this.img);
  this.card.appendChild(this.imgContainer);
  this.content.appendChild(this.title);
  this.card.appendChild(this.content);
}

Card.prototype.display = function () {
  var wrapper = document.getElementById("cards");

  if (!wrapper) {
    throw Error("Missing card container");
  }

  wrapper.appendChild(this.card);
};

function VerticalCard(title, label, review) {
  Card.call(this, "vertical", title, label);

  this.label = createSpanTag("label", label);
  this.content.insertBefore(this.label, this.title);

  this.hilight = new Hilight("Hilight", "Cross Out");
  this.content.appendChild(this.hilight);

  if (review && review.count) {
    this.card.appendChild(new Review(review, false));
  }
}

VerticalCard.prototype = Object.create(Card.prototype);

function HorizontalCard(title, review) {
  Card.call(this, "horizontal", title);
  if (review && review.count) {
    this.content.appendChild(new Review(review, true));
  }
}

HorizontalCard.prototype = Object.create(Card.prototype);

var vCard1 = new VerticalCard("Card Title", "Card Label", {
  count: 3,
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
});
vCard1.display();

var vCard2 = new VerticalCard("Card Title", "Card Label", {
  count: 3,
});
vCard2.display();

var vCard3 = new VerticalCard("Card Title", "Card Label");
vCard3.display();

var hCard = new HorizontalCard(
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  {
    count: 3,
    author: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  }
);
hCard.display();

// function VerticalCard(img) {
//   Card.call(this, img, "vertical_card");
// }

// VerticalCard.prototype = Object.create(Card.prototype);

// var card1 = new VerticalCard("logo_primary.png");
// card1.display();

/**
 *
 * var fullCard = new VerticalCard()
 * var noTextCard = new VerticalCard()
 * var noReviewCard = new VerticalCard()
 *
 * fullCard.addToDOM("#cardContainer")
 * noTextCard.addToDOM("#cardContainer")
 * noReviewCard.addToDOM("#cardContainer")
 *
 *
 */

// function VerticalCard(imgSrc, label, title, highlight, crossOut, rating, text) {
//   this.container = document.createElement("div");
//   this.container.className = "vertical_card";
//   this.imgSrc = imgSrc;
//   this.label = label;
//   this.title = title;
//   this.highlight = highlight;
//   this.crossOut = crossOut;
//   this.rating = rating;
//   this.text = text;

//   this.setupCard();
//   return this.container;
// }

// function getRatingElement(rating) {
//   var rateDiv = document.createElement("div");
//   rateDiv.className = "card_rating";

//   for (var i = 0; i < rating; i++) {
//     var star = document.createElement("span");
//     star.className = "star filled_star";
//     rateDiv.appendChild(star);
//   }

//   for (var i = 0; i < 5 - rating; i++) {
//     var star = document.createElement("span");
//     star.className = "star empty_star";
//     rateDiv.appendChild(star);
//   }

//   return rateDiv;
// }

// VerticalCard.prototype.setupCard = function () {
//   var img = document.createElement("img");
//   img.src = this.imgSrc;
//   this.container.appendChild(img);

//   var main = document.createElement("div");
//   main.className = "vertical_card_main";

//   var label = document.createElement("span");
//   label.className = "vertical_card_label";
//   label.innerText = this.label;
//   main.appendChild(label);

//   var title = document.createElement("span");
//   title.className = "vertical_card_title";
//   title.innerText = this.title;
//   main.appendChild(title);

//   var highlightGroup = document.createElement("div");

//   var highlight = document.createElement("span");
//   highlight.className = "vertical_card_highlight";
//   highlight.innerText = this.highlight;
//   var crossOut = document.createElement("span");
//   crossOut.className = "vertical_card_crossout";
//   crossOut.innerText = this.crossOut;
//   highlightGroup.appendChild(highlight);
//   highlightGroup.appendChild(crossOut);
//   main.appendChild(highlightGroup);

//   this.container.appendChild(main);

//   if (this.rating) {
//     var detailContainer = document.createElement("div");
//     detailContainer.className = "card_detail";
//     var rating = getRatingElement(this.rating);
//     detailContainer.appendChild(rating);

//     if (this.text) {
//       var text = document.createElement("p");
//       text.className = "card_text";
//       text.innerText = this.text;
//       detailContainer.appendChild(text);
//     }

//     this.container.appendChild(detailContainer);
//   }
// };

// function HorizontalCard(imgSrc, title, name, rating, text) {
//   this.container = document.createElement("div");
//   this.container.className = "horizontal_card";
//   this.imgSrc = imgSrc;
//   this.title = title;
//   this.name = name;
//   this.rating = rating;
//   this.text = text;

//   this.setupCard();
//   return this.container;
// }

// HorizontalCard.prototype.setupCard = function () {
//   var img = document.createElement("img");
//   img.src = this.imgSrc;
//   img.className = "horizontal_card_img";
//   this.container.appendChild(img);

//   var main = document.createElement("div");
//   main.className = "horizontal_card_main";

//   var title = document.createElement("span");
//   title.className = "horizontal_card_title";
//   title.innerText = this.title;
//   main.appendChild(title);

//   var text = document.createElement("p");
//   text.className = "horizontal_card_text";
//   text.innerText = this.text;
//   main.appendChild(text);

//   var bottomRow = document.createElement("div");
//   bottomRow.className = "horizontal_bottom_row";

//   var rating = getRatingElement(this.rating);
//   bottomRow.appendChild(rating);

//   var name = document.createElement("span");
//   name.className = "card_name";
//   name.innerText = this.name;
//   bottomRow.appendChild(name);

//   main.appendChild(bottomRow);

//   this.container.appendChild(main);
// };

// var verticalDefault = new VerticalCard(
//   "logo_primary.png",
//   "Card Label",
//   "Card Title",
//   "Hilight",
//   "crossOut",
//   3,
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
// );
// var verticalRating = new VerticalCard(
//   "logo_primary.png",
//   "Card Label",
//   "Card Title",
//   "Hilight",
//   "crossOut",
//   2
// );
// var verticalNoDetail = new VerticalCard(
//   "logo_primary.png",
//   "Card Label",
//   "Card Title",
//   "Hilight",
//   "crossOut"
// );

// const horizontalCard = new HorizontalCard(
//   "logo_primary.png",
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   "John Doe",
//   3,
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
// );

// var cardContainer = document.getElementById("cardContainer");
// var title = document.createElement("h2");
// title.innerText = "Card";

// cardContainer.appendChild(title);
// cardContainer.appendChild(verticalDefault);
// cardContainer.appendChild(verticalRating);
// cardContainer.appendChild(verticalNoDetail);
// cardContainer.appendChild(horizontalCard);
