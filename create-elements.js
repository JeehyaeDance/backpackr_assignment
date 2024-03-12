function createImageTag(src, alt) {
  var img = document.createElement("img");
  img.src = src;
  img.setAttribute("alt", alt);
  return img;
}

function createDivTag(className) {
  var div = document.createElement("div");
  div.className = className;
  return div;
}

function createSpanTag(attrs) {
  var span = document.createElement("span");
  if (attrs && attrs.id) {
    span.setAttribute("id", attrs.id);
  }
  if (attrs && attrs["aria-hidden"]) {
    span.setAttribute("aria-hidden", attrs["aria-hidden"]);
  }
  if (attrs && attrs.classes) {
    span.className = attrs.classes.join(" ");
  }
  if (attrs && attrs.innerText) {
    span.innerText = attrs.innerText;
  }

  return span;
}

function createPTag(className, innerText) {
  var p = document.createElement("p");
  p.className = className;
  p.innerText = innerText;
  return p;
}

function createButtonTag(attrs) {
  var button = document.createElement("button");
  if (attrs && attrs.classes) {
    button.className = attrs.classes.join(" ");
  }

  if (attrs && attrs.innerText) {
    button.innerText = attrs.innerText;
  }

  if (attrs && attrs.id) {
    button.setAttribute("id", attrs.id);
  }

  if (attrs && attrs.type) {
    button.setAttribute("type", attrs.type);
  } else {
    button.setAttribute("type", "button");
  }

  if (attrs && attrs.style) {
    var keys = Object.keys(attrs.style);
    for (var i = 0; i < keys.length; i++) {
      var value = attrs.style[keys[i]];
      button.style[keys[i]] = value;
    }
  }

  return button;
}

function createFormTag(attrs) {
  var form = document.createElement("form");
  if (attrs && attrs.classes) {
    form.className = attrs.classes.join(" ");
  }
  if (attrs && attrs.children) {
    for (var i = 0; i < attrs.children.length; i++) {
      form.appendChild(attrs.children[i]);
    }
  }

  return form;
}

function createTextareaTag(attrs) {
  var textarea = document.createElement("textarea");

  if (attrs && attrs.innerText) {
    textarea.innerText = attrs.innerText;
  }

  if (attrs && attrs.placeholder) {
    textarea.setAttribute("placeholder", attrs.placeholder);
  }

  if (attrs && attrs.cols) {
    textarea.setAttribute("cols", attrs.cols);
  }

  if (attrs && attrs.classes) {
    textarea.className = attrs.classes.join(" ");
  }

  if (attrs && attrs["aria-describedby"]) {
    textarea.setAttribute("aria-describedby", attrs["aria-describedby"]);
  }

  if (attrs && attrs.name) {
    textarea.setAttribute("name", attrs.name);
  }

  if (attrs && attrs.maxLength) {
    textarea.setAttribute("maxlength", attrs.maxLength);
  }

  if (attrs && attrs.onInput) {
    textarea.addEventListener("input", attrs.onInput);
  }

  return textarea;
}

// removes the hidden class and adds the block class
function displayBlock(oldClasses) {
  var newClasses = [];
  for (var i = 0; i < oldClasses.length; i++) {
    if (oldClasses[i] !== "hidden") {
      newClasses.push(oldClasses[i]);
    }
  }

  var classList = newClasses.join(" ");
  return classList + " block";
}

// removes the block class and adds the hidden class
function displayHidden(oldClasses) {
  var newClasses = [];
  for (var i = 0; i < oldClasses.length; i++) {
    if (oldClasses[i] !== "block") {
      newClasses.push(oldClasses[i]);
    }
  }

  var classList = newClasses.join(" ");
  return classList + " hidden";
}
