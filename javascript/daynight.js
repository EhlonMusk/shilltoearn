const dayNightToggle = () => {
  const bodyColor = document.querySelector("body");
  bodyColor.classList.toggle("toggle");

  const moonBtn = document.querySelector(".daynight");
  moonBtn.classList.toggle("toggle");

  const launchBtn = document.querySelector(".launchBtn");
  launchBtn.classList.toggle("toggle");

  const aboutBorder = document.querySelector(".aboutBorderContainer");
  aboutBorder.classList.toggle("toggle");

  const backgroundChange = document.querySelector(".background");
  backgroundChange.classList.toggle("toggle");

  const header = document.querySelector(".headerContainer");
  header.classList.toggle("toggle");

  const docsBtn = document.querySelector(".docslogo");
  docsBtn.classList.toggle("toggle");

  const xBtn = document.querySelector(".xlogo");
  xBtn.classList.toggle("toggle");

  const aColor = document.querySelectorAll("a");
  aColor.forEach((a) => {
    a.classList.toggle("toggle");
  });

  const h1Color = document.querySelectorAll("h1");
  h1Color.forEach((h1) => {
    h1.classList.toggle("toggle");
  });

  const h2Color = document.querySelectorAll("h2");
  h2Color.forEach((h2) => {
    h2.classList.toggle("toggle");
  });

  const greenChange = document.querySelectorAll(".greenText");
  greenChange.forEach((change) => {
    change.classList.toggle("toggle");
  });

  const box = document.querySelectorAll(".box");
  box.forEach((box) => {
    box.classList.toggle("toggle");
  });

  const summary = document.querySelectorAll("summary");
  summary.forEach((summary) => {
    summary.classList.toggle("toggle");
  });
};

document.querySelector(".daynight").onclick = () => {
  dayNightToggle();
};
