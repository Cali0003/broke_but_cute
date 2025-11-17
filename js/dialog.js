const btn_open = document.querySelector("#cta_open1");
const btn_close = document.querySelector("#close_btn");

btn_open.addEventListener("click", openModal1);
btn_close.addEventListener("click", closeModal1);

function openModal1() {
  document.querySelector("#dialog1").classList.add("fadeIn");
  document.querySelector("#dialog1").showModal();
}

function closeModal1() {
  document.querySelector("#dialog1").classList.remove("fadeIn");
  document.querySelector("#dialog1").close();
}

const btn_open2 = document.querySelector("#cta_open2");
const btn_close2 = document.querySelector("#close_btn2");

btn_open2.addEventListener("click", openModal2);
btn_close2.addEventListener("click", closeModal2);

function openModal2() {
  document.querySelector("#dialog2").classList.add("fadeIn");
  document.querySelector("#dialog2").showModal();
}

function closeModal2() {
  document.querySelector("#dialog2").classList.remove("fadeIn");
  document.querySelector("#dialog2").close();
}
