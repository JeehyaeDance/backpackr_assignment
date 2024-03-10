// function Input(initialValue, type, placeholder, maxlength) {
//   this.value = initialValue || "";
//   this.initialValue = initialValue;
//   this.placeholder = placeholder || "주문 요청사항을 입력해주세요";
//   this.type = type || "default";
//   this.maxlength = maxlength || 500;
//   this.form = document.createElement("form");
//   this.form.className = "input_form";

//   this.setupInput();

//   return this.form;
// }

// Input.prototype.setupInput = function () {
//   var input = document.createElement("textarea");
//   input.className = "inputbox";
//   input.setAttribute("name", "requestText");
//   input.setAttribute("maxlength", this.maxlength);
//   input.innerText = this.value;
//   input.setAttribute("placeholder", this.placeholder);
//   input.setAttribute("cols", "250");

//   input.addEventListener("input", this.updateValue.bind(this));

//   var letterCount = document.createElement("span");
//   letterCount.className = "letter_count";
//   letterCount.innerText = this.maxlength - this.value.length;

//   var button = document.createElement("button");
//   button.setAttribute("type", "button");
//   button.innerText = "Save";
//   button.className = "save_button";
//   button.style.display = "none";

//   if (this.type === "disabled") {
//     input.setAttribute("disabled", true);
//     this.form.appendChild(input);
//     this.form.appendChild(letterCount);
//   } else if (this.type === "readonly") {
//     input.setAttribute("readonly", true);
//     this.form.appendChild(input);
//   } else if (this.type === "default") {
//     this.form.appendChild(input);
//     this.form.appendChild(letterCount);
//     this.form.appendChild(button);
//   }
// };

// Input.prototype.updateValue = function (e) {
//   this.value = e.currentTarget.value;
//   var letterCount = e.currentTarget.nextElementSibling;
//   if (letterCount) {
//     letterCount.innerText = this.maxlength - this.value.length;
//     var button = letterCount.nextElementSibling;
//     if (this.value !== this.initialValue) {
//       e.currentTarget.style.width = "90%";
//       letterCount.style.right = "120px";
//       button.style.display = "block";
//     } else {
//       e.currentTarget.style.width = "100%";
//       letterCount.style.right = "15px";
//       button.style.display = "none";
//     }
//   }
// };

// var inputContainer = document.getElementById("inputContainer");
// var inputTitle = document.createElement("h2");
// inputTitle.innerText = "Input Form";

// var defaultInput = new Input("초기값");
// var disabledInput = new Input("", "disabled", "주문 요청사항을 입력해주세요");
// var readonlyInput = new Input(
//   "readonly 상태입니다",
//   "readonly",
//   "주문 요청사항을 입력해주세요",
//   500
// );

// inputContainer.appendChild(inputTitle);
// inputContainer.appendChild(defaultInput);
// inputContainer.appendChild(disabledInput);
// inputContainer.appendChild(readonlyInput);
