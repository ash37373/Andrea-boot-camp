/* const button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function () {
  console.log("CLICK!!!!");
});
 */

const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");

// 하드코딩
/* 
button.addEventListener("click", function () {
  //   console.log("click is working");
  if (input.value.length > 0) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = ""; //리스트 추가하고 인풋값 비우는방법
  } 
});

input.addEventListener("keypress", function (event) {
  //   console.log(event);
  if (input.value.length > 0 && event.which === 13) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = ""; //리스트 추가하고 인풋값 비우는방법
  }
});
 */

// 코드 재사용
/* 
function inputLength() {
  return input.value.length;
}

function createListElements() {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

button.addEventListener("click", function () {
  if (inputLength() > 0) {
    createListElements();
  }
});

input.addEventListener("keypress", function (event) {
  //   console.log(event);
  if (inputLength() > 0 && event.which === 13) {
    createListElements();
  }
});
 */

// 조금더 풀면
function inputLength() {
  return input.value.length;
}

function createListElements() {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElements();
  }
}
function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.which === 13) {
    createListElements();
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
