const imgBox = document.querySelector(".imgBox");
const whiteBoxes = document.getElementsByClassName("whiteBox");
imgBox.addEventListener("dragstart", (e) => {
  e.target.className += " hold";
  setTimeout(() => {
    e.target.className = +" hide";
  }, 0);
});
imgBox.addEventListener("dragend", (e) => {
  e.target.className = "imgBox";
});

for (const whiteBox of whiteBoxes) {
  whiteBox.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  whiteBox.addEventListener("dragenter", (e) => {
    e.target.className += " dashed";
  });
  whiteBox.addEventListener("dragleave", (e) => {
    e.target.className = " whiteBox";
  });
  whiteBox.addEventListener("drop", (e) => {
    e.target.append(imgBox);
  });
}
