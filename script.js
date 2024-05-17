//here we create a new variable and select them throught the id or classname
let taskbtn = document.getElementById("task");
let inputbar = document.getElementsByClassName("input-bar");
//here we apply the addEventListener function on click and apply some styles on the element where we want
taskbtn.addEventListener("click", function () {
  inputbar[0].style.transform = "scaleY(1)";
  inputbar[0].style.opacity = "1";
});
// here we select the form and ul
var form = document.querySelector("form");
var itemlist = document.querySelector("#itemlist");

function addItem(e) {
  //this preventDefault() is used to stop the processing of submition
  e.preventDefault();
  //here we get the value of input
  var newItem = document.querySelector("#itemInput").value;

  // now we create the new element li

  var li = document.createElement("li");
  // textcontent method is use to text inside the element
  li.textContent = newItem;
  // here we create new element button
  var deletebtn = document.createElement("button");
  // write some content by using textcontent method
  deletebtn.textContent = "X";
  //here we gave a classname to the created element with the help of createelement method
  deletebtn.className = "deletebtn";
  //here we append the delete button inside the li
  li.appendChild(deletebtn);
  //similarly we append the li inside the ul which id is itemlist
  itemlist.appendChild(li);
  //here we clear the input
  document.querySelector("#itemInput").value = "";
}

function removeItem(e) {
  if (e.target.classList.contains("deletebtn")) {
    if (confirm("Are You Sure You Want To Delete This Items?")) {
      const li = e.target.parentElement;
      itemlist.removeChild(li);
    }
  }
}
form.addEventListener("submit", addItem);
itemlist.addEventListener("click", removeItem);
