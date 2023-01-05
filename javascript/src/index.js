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

  // button（完了）タグ生成
  const completeButton = document.createElement("button")
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });
  // button（削除）タグ生成
  const deleteButton = document.createElement("button")
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親要素(ul)を未完了リストから削除
    const deleteTaret = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTaret);
  });

  // ulタグの子要素に各要素を設定
  ul.appendChild(li);
  ul.appendChild(completeButton);
  ul.appendChild(deleteButton);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(ul);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

