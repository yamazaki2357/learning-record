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
    // 押され完了ボタンの親要素(ul)を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // ul以下を初期化
    addTarget.textContent = null;

    // liタグを生成
    const li = document.createElement("li");
    li.innerText = text;

    // buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    // ulタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);

  });
  // button（削除）タグ生成
  const deleteButton = document.createElement("button")
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親要素(ul)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // ulタグの子要素に各要素を設定
  ul.appendChild(li);
  ul.appendChild(completeButton);
  ul.appendChild(deleteButton);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(ul);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
}

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

