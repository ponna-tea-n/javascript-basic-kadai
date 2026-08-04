/*console.log(document.head);
*/

const text = document.querySelector("#text");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  text.textContent = "ボタンをクリックしました";
});

/*
btn.addEventListener("click", () => {
  if (text.textContent === "ボタンをクリックしてください") {
    text.textContent = "ボタンをクリックしました";
  } else {
    text.textContent = "ボタンをクリックしてください";
  }
});
*/

