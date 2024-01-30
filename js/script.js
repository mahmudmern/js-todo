
let inputBx = document.querySelector("#inputBx");
let list = document.querySelector("#list");

inputBx.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) { // Use event.keyCode to check for Enter key
    addItem(this.value);
    this.value = "";
  }
});

let addItem = (inputText) => {
  let listItem = document.createElement("li");
  listItem.innerHTML = `${inputText}<i></i>`; // Correct the HTML tag
  listItem.addEventListener("click", function(){
    this.classList.toggle('done');
  })


  listItem.querySelector("i").addEventListener("click",function(){
    listItem.remove();
  })

  list.appendChild(listItem); // Append the listItem to the list
};
