function Input(type, attrs) {
  if (attrs === null || attrs === undefined) {
    attrs = {};
  }

  var INPUT_MAX_LENGTH = Number(attrs.maxLength) || 500;
  var INNER_TEXT = attrs.defaultValue || "";

  this.element = createTextareaTag({
    placeholder: "주문 요청사항을 입력해주세요",
    classes: ["inputbox"],
    innerText: INNER_TEXT, // text area doesn't accept a "defaultValue"
    cols: Math.floor(INPUT_MAX_LENGTH / 2),
    name: "requestText",
    "aira-describedby": "char-counter",
    onInput: this.onInputTextarea.bind(this),
    maxLength: INPUT_MAX_LENGTH,
  });

  this.visibleLetterCount = createSpanTag({
    id: "counter-target",
    "aria-hidden": "true",
    classes: ["letter-count"],
    innerText: String(INPUT_MAX_LENGTH - INNER_TEXT.length),
  });

  this.hiddenLetterCount = createSpanTag({
    id: "char-counter",
    role: "status",
    classes: ["hidden"],
    innerText:
      String(INPUT_MAX_LENGTH - INNER_TEXT.length) + " characters remaining",
  });

  this.value = INNER_TEXT;
  this.defaultValue = INNER_TEXT;

  var formChildren = [this.element];
  if (type === "disabled") {
    formChildren.push(this.visibleLetterCount);
    formChildren.push(this.hiddenLetterCount);
  } else if (type === "default") {
    formChildren.push(this.visibleLetterCount);
    formChildren.push(this.hiddenLetterCount);

    this.button = createButtonTag({
      classes: ["save-button", "hidden"],
      innerText: "Save",
      id: "save-button",
    });

    formChildren.push(this.button);
  }

  this.form = createFormTag({
    classes: ["input-form"],
    children: formChildren,
  });

  if (type === "disabled") {
    this.element.setAttribute("disabled", "true");
  } else if (type === "readonly") {
    this.element.setAttribute("readonly", "true");
  }
}

Input.prototype.display = function () {
  var wrapper = document.getElementById("inputs");

  if (!wrapper) {
    throw Error("Missing input container");
  }

  wrapper.appendChild(this.form);
};

Input.prototype.onInputTextarea = function (e) {
  this.value = e.currentTarget.value;
  let maxLength = Number(e.currentTarget.getAttribute("maxlength"));

  if (this.visibleLetterCount && this.hiddenLetterCount) {
    var count = maxLength - this.value.length;
    // update character count
    this.visibleLetterCount.innerText = count;
    // update character count for screen readers
    this.hiddenLetterCount.innerText = String(count) + " characters remaining";
  }

  // 1. hide or unhide button
  // 2. adjust textarea width
  // 3. pull character count to the right
  if (this.button) {
    if (this.value !== this.defaultValue) {
      this.button.className = displayBlock(this.button.classList);
      e.currentTarget.style.width = "90%";
      this.visibleLetterCount.style.right = "120px";
    } else {
      this.button.className = displayHidden(this.button.classList);
      e.currentTarget.style.width = "100%";
      this.visibleLetterCount.style.right = "15px";
    }
  }
};

var defaultInput = new Input("default", {
  defaultValue: "기본값",
  maxLength: 300,
});
defaultInput.display();

var disabledInput = new Input("disabled");
disabledInput.display();

var readonlyInput = new Input("readonly", {
  defaultValue: "readonly상태 입니다",
});
readonlyInput.display();
