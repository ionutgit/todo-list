var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.addEventListener('click', toggleDone);
	ul.appendChild(li);
	var button = document.createElement("button");
	button.appendChild(document.createTextNode('Delete item'));
	button.addEventListener('click', deleteItem);
	ul.appendChild(button);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDone(event) {
	 event.target.classList.toggle("done");
}

function deleteItem(event) {
	event.target.previousSibling.remove();
	event.target.remove();
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

document.querySelectorAll('li').forEach(li => {
  li.addEventListener('click', toggleDone);
});

document.querySelectorAll(".item").forEach(button => {
	button.addEventListener('click', deleteItem);
});
