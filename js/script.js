// const txtElement = ["Web Developer", "Software Tester"];
const txtElement = ["Web Developer"];
let count = 0;
let txtIndex = 0;
let currentTxt = "";
let words = "";

(function ngetik() {
  // console.log(txtElement[0]);
  if (count == txtElement.length) {
    count = 0;
  }
  currentTxt = txtElement[count];

  words = currentTxt.slice(0, ++txtIndex);
  // console.log(words)

  document.querySelector(".efek-ngetik").textContent = words;

  if (words.length == currentTxt.length) {
count++;  
txtIndex=0;

}

  setTimeout(ngetik, 500);
})();



// Teks
const namaElement = document.querySelector('#nama a');
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let colorIndex = 0;

    function changeColor() {
      namaElement.style.color = colors[colorIndex];
      colorIndex = (colorIndex + 1) % colors.length;
      setTimeout(changeColor, 500); // Change color every 500ms
    }

    changeColor();