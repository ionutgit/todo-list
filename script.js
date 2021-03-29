// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function() {
// 	console.log("click");
// });

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
 	li.appendChild(document.createTextNode(input.value));
 	ul.appendChild(li);
 	input.value="";
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

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// 1 preiau elementele care ma intereseaza
// cel mai bine, dupa id
// CACHING data in vars

// 2. adaug evenimentul (addEventListener) pt click

// 3.1 creeam un element html li

// 3.2 atasam un copil la elementul li cu functia appendChild
// functia createTextNode - creaza un text pt elementul html li

// 4. adugam valoarea din input (input.value)

// 5. verificam daca input-ul este gol
// pt ca sa nu introducem o valoare empty

// 6. resetam valoarea input-ului, dupa fiecare
// actiune a evenimentului (input.value = "")

// 7. dorim sa reactionam la apasarea unei taste
// event - keypress
// IMPORTANT: oridecateori adaugam un eveniment,
// parametrul 2 e o functie caruia i se transmite in mod automat
// un parametru care descrie evenimentul
// UNDE ai adaugat event-ul (sa nu te astepti sa mearga pe INPUT,
/// si tu ai pus pe BUTTON)

// 8.DRY, REFFACTORING
// codul duplicat il trecem  in functii separate
// functile anonime le trecem in functii separate

