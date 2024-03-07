const Input = function (initialValue = "", placeholder = "주문 요청사항을 입력해주세요", disabled = false, maxlength = 500, label = null) {
    this.value = initialValue;
    this.placeholder = placeholder;
    this.disabled = disabled;
    this.maxlength = maxlength;
    this.label = label;
    this.form = document.createElement("form");

    this.setupInput();

    return this.form;
}

Input.prototype.setupInput = function() {
    const input = document.createElement("textarea");
    input.className = "inputbox";
    input.setAttribute("name", "requestText");
    input.setAttribute("maxlength", this.maxlength);
    input.innerText = this.value;
    input.setAttribute("placeholder", this.placeholder);
    input.setAttribute("cols", "250");

    input.addEventListener("input", this.updateValue.bind(this))

    if (this.label) {
        const label = document.createElement("label");
        label.innerText = this.label;
        label.setAttribute("for", "requestText");
        this.form.appendChild(label);
    }

    const letterCount = document.createElement("span");
    letterCount.className = "letter_count";
    letterCount.innerText = this.maxlength - this.value.length;

    this.form.appendChild(input);
    this.form.appendChild(letterCount);
}

Input.prototype.updateValue = function(e) {
    this.value = e.currentTarget.value;
    const letterCount = e.currentTarget.nextElementSibling;
    letterCount.innerText = this.maxlength - this.value.length;
}

const inputContainer = document.getElementById("inputContainer");
const inputTitle = document.createElement("h2");
inputTitle.innerText = "Input Form";

const input = new Input("초기값");

inputContainer.appendChild(inputTitle);
inputContainer.appendChild(input);

