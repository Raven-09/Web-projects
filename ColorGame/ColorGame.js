//document.addEventListener('DOMContentLoaded', init, false);
var noOfSquares = 6
var colors = generateRandomColors(noOfSquares); 

var squares = document.querySelectorAll(".square");
var len = squares.length;
var pickedColor = pickColor(colors);
var reset = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var messageDisplay = document.querySelector("#messageDisplay");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	noOfSquares = 3;
	colors = generateRandomColors(noOfSquares);
	pickedColor = pickColor(colors);
	messageDisplay.textContent = pickedColor;

	for(var i = 0 ; i < len ; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}

});

hardBtn.addEventListener("click" , function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    noOfSquares = 6;
    colors = generateRandomColors(noOfSquares);
	pickedColor = pickColor(colors);
	messageDisplay.textContent = pickedColor;

	for(var i = 0 ; i < len ; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
	}
});

document.querySelector("#colorDisplay").textContent = pickedColor;

reset.addEventListener("click", function(){
	colors = generateRandomColors(noOfSquares);
	for(var i = 0 ; i < 6 ; i++){
      squares[i].style.backgroundColor = colors[i]; 
	}
     pickedColor = pickColor(colors);
	document.querySelector("#colorDisplay").textContent = pickedColor;
	h1.style.backgroundColor = steelblue;
	messageDisplay.textContent = "";
	this.textContent = "New Colors"
})

for(var  i = 0; i < len; i++){
	squares[i].style.backgroundColor = colors[i];  
	squares[i].addEventListener('click', function(){
		var clickedColor = this.style.backgroundColor;
		 if (clickedColor === pickedColor) {

		 	messageDisplay.textContent = "Correct!!";
		 	h1.style.backgroundColor = clickedColor;
		 	reset.textContent = "Play Again?"

		 	for(var j = 0 ; j < len ; j++){
		 		squares[j].style.backgroundColor = clickedColor;
		 	}

		 }
		    else{

		  messageDisplay.textContent = "Wrong!!";
          this.style.backgroundColor = "#232323"; 
        }
	});
}

function generateRandomColors(num){

	  var arr = [];

	for(var j = 0 ; j < num ; j++){
		arr.push(randomColor());
	}

	return arr;
}

function randomColor(){

  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";

}

function pickColor() {
	var index = Math.floor(Math.random() * 6);
	return colors[index];
}

//Not turning to steel blue
//Easy color boxes sometimes not getting correct