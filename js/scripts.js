window.addEventListener("load", start);

function start() {

  let r = document.getElementById("r");
  let g = document.getElementById("g");
  let b = document.getElementById("b");

  r.addEventListener("input", handleChangeRange);
  g.addEventListener("input", handleChangeRange);
  b.addEventListener("input", handleChangeRange);
}

function handleChangeRange(oEvent) {
  var message =
    `Evento com ${oEvent.target.value}`;
  console.log(message); // apenas para demonstração no console.

  changeTextWithValue(oEvent.target.id, oEvent.target.value);
  setBackgroundSquare(r.value, g.value, b.value);
}

function changeTextWithValue(element, value) {
  switch (element) {
    case "r":
      document.getElementById("tr").value = value;
      break;
    case "g":
      document.getElementById("tg").value = value;
      break;
    case "b":
      document.getElementById("tb").value = value;
      break;
  }
}

function setBackgroundSquare(r, g, b) {
  let square = document.getElementById("square");
  square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  setBorderSquare(r, g, b);
}

function setBorderSquare(r, g, b) {

  if (r === "255" && g === "255" && b == "255") {
    let square = document.getElementById("square");
    square.style.borderStyle = 'ridge';
  }
}