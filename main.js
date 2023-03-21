// Get the modal
var modal = document.getElementById("theModal");

// Get the button that opens the modal
var btn = document.getElementById("theButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var firstItem = document.querySelector(".firstItem");

var thirdItem = document.querySelector(".thirdItem")

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
 firstItem.style.zIndex = 0;
 thirdItem.style.zIndex = 0;
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  firstItem.style.zIndex = 9;
  thirdItem.style.zIndex = 9;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    firstItem.style.zIndex = 9;
    thirdItem.style.zIndex = 9;
  }
}