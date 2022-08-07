"use strict";

const menuBtn = document.getElementById("menu-btn");

menuBtn.onclick = function (e) {
  e.preventDefault();

  document.getElementById("gnavi").classList.toggle("open");

  this.classList.toggle("close");
};
