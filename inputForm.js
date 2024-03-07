const Input = function (initialValue = "", placeholder = "주문 요청사항을 입력해주세요", disabled = false, maxlength = 500) {
    this.value = initialValue;
    this.initialValue = initialValue;
    this.placeholder = placeholder;
    this.disabled = disabled;
    this.maxlength = maxlength;
    this.form = document.createElement("form");
    this.form.className = "input_form";

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

    input.addEventListener("input", this.updateValue.bind(this));

    const letterCount = document.createElement("span");
    letterCount.className = "letter_count";
    letterCount.innerText = this.maxlength - this.value.length;

    const button = document.createElement("button");
    button.setAttribute("type", "button");
    button.innerText = "Save";
    button.className = "save_button";
    button.style.display = "none";
    
    this.form.appendChild(input);
    this.form.appendChild(letterCount);
    this.form.appendChild(button);
}

Input.prototype.updateValue = function(e) {
    this.value = e.currentTarget.value;
    const letterCount = e.currentTarget.nextElementSibling;
    letterCount.innerText = this.maxlength - this.value.length;
    const button = letterCount.nextElementSibling;
    if (this.value !== this.initialValue) {
        e.currentTarget.style.width = "90%";
        letterCount.style.right = "120px";
        button.style.display = "block";
    } else {
        e.currentTarget.style.width = "100%";
        letterCount.style.right = "15px";
        button.style.display = "none";
    }
}

const inputContainer = document.getElementById("inputContainer");
const inputTitle = document.createElement("h2");
inputTitle.innerText = "Input Form";

const input = new Input("초기값");

inputContainer.appendChild(inputTitle);
inputContainer.appendChild(input);
