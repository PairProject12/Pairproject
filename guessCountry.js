function guessfrance() {
  var x = document.getElementById("input1").value;
  
  if(x=="france"){
   document.getElementById("result5").innerHTML = "yes that's true";
}
else {document.getElementById("result5").innerHTML = "nope that's false";
}
}
function guesstunisia() {
  var x = document.getElementById("input2").value;
  if(x=="tunisia"){
  document.getElementById("result4").innerHTML = "yes that's true";
}else document.getElementById("result4").innerHTML = "nope that's false";
}
function guessitaly() {
  var x = document.getElementById("input3").value;
  if(x=="italy"){
  document.getElementById("result3").innerHTML = "yes that's true";
}else document.getElementById("result3").innerHTML = "nope that's false";
}
function guessbrazil() {
  var x = document.getElementById("input4").value;
  if(x=="brazil"){
  document.getElementById("result2").innerHTML = "yes that's true";
}else document.getElementById("result2").innerHTML = "nope that's false";
}