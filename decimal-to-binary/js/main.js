const submit = document.getElementById("submit");
const result = document.getElementById("result");

function binary(e) {
  e.preventDefault();

  const number = document.getElementById("number").value;

  if (number === "") {
    alert("Please enter a Value");
  } else if (number < 0) {
    alert("Please Enter positive Number");
  } else {
    result.style.visibility = "visible";
  }

  const binaryNumber = Number(number).toString(2);
  result.innerHTML = binaryNumber;
}

submit.addEventListener("click", binary);
