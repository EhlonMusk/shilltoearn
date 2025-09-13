document.addEventListener("click", function (event) {
  const distributionBox = event.target.closest(".distributionInfoBox");

  if (distributionBox) {
    distributionBox.classList.toggle("expanded");
  }
});
