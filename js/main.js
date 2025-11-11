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
  document.querySelector(".placeholder").textContent =
    "Du kan tjene lidt penge sidst på måneden, og det er lige for næsen af dig. Nemlig i dit skab.";

  document.querySelector("#efficiency").innerHTML = `<h3>Ryd ud i skabet</h3>
<p>Find dit gamle tøj frem, som du alligevel ikke får brugt. Det kan være alt fra din gamle festtop, til et par jeans der sad dårligt eller en kjole du havde på for fire år siden.</p>`;

  document.querySelector(
    "#requirement"
  ).innerHTML = `<h3>Sæt det til salg online</h3>
<p>Efter du har fundet dit gamle tøj frem, kan du sætte det til salg på Vinted. Nu skal du bare vente, og før du ved af det har du penge til at shoppe for!</p>`;
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

  document.querySelector(".info-text > h2").textContent = "Lån fra din veninde";
  document.querySelector(".placeholder").textContent =
    "Du har sikkert en veninde eller to som har den vildeste stil. De kender nok selv til følelsen af trangen til nyt tøj. Spørg om i ikke skal bytte?";

  document.querySelector("#efficiency").innerHTML = `<h3>Lav en aftale</h3>
<p>I kan aftale at i sidst på måneden, hvis shoppelysten ikke kan slukkes, kan bytte tøj med hinanden.</p>`;

  document.querySelector(
    "#requirement"
  ).innerHTML = `<h3>Tøjet forsvinder ikke helt</h3>
<p>Hvis du er i tvivl om du har lyst til at give helt slip på et stykke tøj… er det en god mulighed at bytte med en veninde, for du kan altid bytte tilbage.</p>`;
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

  document.querySelector(".info-text > h2").textContent =
    "Find tålmodigheden frem";
  document.querySelector(".placeholder").textContent =
    "Der er kun to dage tilbage i måneden. Lige om lidt kommer der løn og SU. Du kan godt finde tålmodigheden frem og holde ud.";

  document.querySelector("#efficiency").innerHTML = `<h3>Skab overblik</h3>
<p>Sæt en stopper for at bruge penge på nyt tøj. Du kan  lave en ønskeliste på fx Ønskeskyen. Så har du et overblik over hvad du vil købe næste måned, som ligger lige rundt om hjørnet.</p>`;

  document.querySelector("#requirement").innerHTML = `<h3>Vinduesshop</h3>
<p>Hvis det ikke er nok online, så tag ud selv eller med en veninde og kig i butikker. Måske gør det efter lukketid, så du kun har mulighed for at kigge og ikke købe.</p>`;
}

/************fade in function ***************/

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
