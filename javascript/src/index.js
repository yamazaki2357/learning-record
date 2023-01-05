// import "./style.css"


const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value
  document.getElementById("add-text").value = "";

  const ul = document.createElement("ul");
  ul.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // ulタグの子要素に各要素を設定
  ul.appendChild(li);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(ul);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

