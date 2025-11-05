/******** toejBunke*/
document
  .querySelector("#hotspotToejbunke")
  .addEventListener("mouseover", mouseOverHead);
document
  .querySelector("#hotspotToejbunke")
  .addEventListener("mouseout", mouseOut);
document
  .querySelector("#hotspotToejbunke")
  .addEventListener("click", clickHead);

function mouseOverHead() {
  console.log("mouseOverHead");
  document.querySelector("#hotspotToejbunke").style.fill =
    "var(--color-head-bg)";
}

function mouseOut() {
  console.log("mouseOut");
  document.querySelector("#hotspotToejbunke").style.fill = "red";
}

function clickHead() {
  console.log("clickHead");

  animateBoxes();

  document.querySelector(".info-text > h2").textContent = "Sælg ud";
  document.querySelector(".placeholder").textContent = "blah blah blah";

  document.querySelector("#efficiency").innerHTML = `<h3>Caro</h3>
<p>hej med dig</p>`;

  document.querySelector("#requirement").innerHTML = `<h3>wow</h3>
<p>køb en masse</p>`;
}

/********hotspotBFF */
document
  .querySelector("#hotspotBFF")
  .addEventListener("mouseover", mouseOverBff);
document.querySelector("#hotspotBFF").addEventListener("mouseout", mouseBff);
document.querySelector("#hotspotBFF").addEventListener("click", clickBff);

function mouseOverBff() {
  console.log("mouseOverHead");
  document.querySelector("#hotspotBFF").style.fill = "var(--color-head-bg)";
}

function mouseBff() {
  console.log("mouseOut");
  document.querySelector("#hotspotBFF").style.fill = "red";
}

function clickBff() {
  console.log("clickHead");

  animateBoxes();

  document.querySelector(".info-text > h2").textContent = "Sælg ud";
  document.querySelector(".placeholder").textContent = "blah blah blah";

  document.querySelector("#efficiency").innerHTML = `<h3>Caro</h3>
<p>hej hej hej</p>`;

  document.querySelector("#requirement").innerHTML = `<h3>wow</h3>
<p>køb</p>`;
}
/********hotspotKalender */

document
  .querySelector("#hotspotKalender")
  .addEventListener("mouseover", mouseOverKalender);
document
  .querySelector("#hotspotKalender")
  .addEventListener("mouseout", mouseKalender);
document
  .querySelector("#hotspotKalender")
  .addEventListener("click", clickKalender);

function mouseOverKalender() {
  console.log("mouseOverHead");
  document.querySelector("#hotspotKalender").style.fill =
    "var(--color-head-bg)";
}

function mouseKalender() {
  console.log("mouseOut");
  document.querySelector("#hotspotKalender").style.fill = "red";
}

function clickKalender() {
  console.log("clickHead");

  animateBoxes();

  document.querySelector(".info-text > h2").textContent = "Sælg ud";
  document.querySelector(".placeholder").textContent = "blah blah blah";

  document.querySelector("#efficiency").innerHTML = `<h3>Caro</h3>
<p>hej med dig og farvel</p>`;

  document.querySelector("#requirement").innerHTML = `<h3>wow</h3>
<p>køb en masse lolern</p>`;
}

function animateBoxes() {
  document.querySelector("#efficiency").classList.remove("hide");
  document.querySelector("#efficiency").classList.add("fadeIn");
  document.querySelector("#requirement").classList.remove("hide");
  document.querySelector("#requirement").classList.add("fadeIn");

  document
    .querySelector("#requirement")
    .addEventListener("animationend", cleanup);
}

function cleanup() {
  console.log("cleanup");

  document
    .querySelector("#requirement")
    .removeEventListener("animationend", cleanup);

  document.querySelector("#efficiency").classList.remove("fadeIn");
  document.querySelector("#requirement").classList.remove("fadeIn");
}
