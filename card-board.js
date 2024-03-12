function Hilight(primary, secondary) {
  var container = createDivTag("hilight-container");
  var primary = createSpanTag({ classes: ["hilight"], innerText: primary });
  var secondary = createSpanTag({
    classes: ["crossout"],
    innerText: secondary,
  });

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
      star = createSpanTag({ classes: ["star", "filled-star"] });
    } else {
      star = createSpanTag({ classes: ["star", "empty-star"] });
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
    var reviewAuthor = createSpanTag({
      classes: ["author"],
      innerText: review.author,
    });
    this.review.appendChild(reviewAuthor);
  }

  return this.review;
}

function Card(type, title) {
  var imageSrc = "logo_primary.png";

  this.card = createDivTag("card " + type);
  this.imgContainer = createDivTag("img-container");
  this.img = createImageTag(imageSrc, "image for this card");
  this.content = createDivTag("content");
  this.title = createSpanTag({ classes: ["title"], innerText: title });

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

  this.label = createSpanTag({ classes: ["label"], innerText: label });
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
