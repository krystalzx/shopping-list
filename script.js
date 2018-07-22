var enter = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.getElementsByTagName("li");
var dels = document.getElementsByClassName("delete");

for (var i = 0; i < dels.length; i++) {
    dels[i].addEventListener("click", removeParent);
}

function removeParent(event) {
    event.target.parentElement.remove();
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
    // add delete button
    var button = document.createElement("button");
    button.appendChild(document.createTextNode("Delete"));
    button.classList.add("delete");
    li.appendChild(button);
    dels[dels.length] = button;
    button.addEventListener("click", removeParent);
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
	// event.target refers to the clicked <li> element
    event.target.classList.toggle("done");
}

enter.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// toggles done
ul.addEventListener("click", function(event){
	if (event.target.nodeName === "LI") {
		toggleDone(event);
	}
});





