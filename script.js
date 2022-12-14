"use strict";

const ham = $("#js-hamburger");
const nav = $("#js-nav");
ham.on("click", function () {
  ham.toggleClass("active");
  nav.toggleClass("active");
});

//画像の設定

var windowwidth =
  window.innerWidth || document.documentElement.clientWidth || 0;
if (windowwidth > 768) {
  var responsiveImage = [
    //PC用の画像
    { src: "images/top1.jpg" },
    { src: "images/top2.jpg" },
    { src: "images/top4.jpg" },
    { src: "images/top5.jpg" },
  ];
} else {
  var responsiveImage = [
    //タブレットサイズ（768px）以下用の画像
    { src: "images/top1.jpg" },
    { src: "images/top2.jpg" },
    { src: "images/top4.jpg" },
    { src: "images/top5.jpg" },
  ];
}

//Vegas全体の設定
$("#slider").vegas({
  transition: "blur",
  transitionDuration: 20, //切り替わりのアニメーション時間をミリ秒単位で設定
  delay: 6000, //スライド間の遅延をミリ秒単位で。
  animationDuration: 6000, //スライドアニメーション時間をミリ秒単位で設定
  animation: "kenburns",
  slides: responsiveImage,
});

function removeattr() {
  let box = document.getElementById("slider");
  box.removeAttr("style");
}

ScrollReveal().reveal(".leftin", {
  duration: 2400,
  viewFactor: 0.5,
  origin: "left",
  distance: "100px",
  reset: false,
});

ScrollReveal().reveal(".rightin", {
  duration: 2400,
  viewFactor: 0.5,
  origin: "right",
  distance: "100px",
  reset: false,
});

ScrollReveal().reveal(".fadeIn", {
  duration: 1200,
  viewFactor: 0.5,
  origin: "bottom",
  distance: "100px",
  reset: false,
});

ScrollReveal().reveal(".appear", {
  duration: 3000,
  viewFactor: 0.5,
  opacity: 0,
  reset: false,
});

//アコーディオンをクリックした時の動作
$(".question__item-title").on("click", function () {
  var findElm = $(this).next(".question__item-answer");
  $(findElm).slideToggle();

  if ($(this).hasClass("close")) {
    $(this).removeClass("close");
  } else {
    $(this).addClass("close");
  }
});

//ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
$(window).on("load", function () {
  $(".accordion-area li:first-of-type div").addClass("open");
  $(".open").each(function (index, element) {
    var Title = $(element).children("..question__item-title");
    $(Title).addClass("close");
    var Box = $(element).children(".question__item-answer");
    $(Box).slideDown(500);
  });
});

// slideの高さを取得
let sliderHeight = document.getElementById("slider").clientHeight;
let breakPoint = sliderHeight - 60;

// headerのscroll処理
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const siteTitle = document.querySelector(".site-title");
  const hamburger = document.querySelector(".hamburger");
  const navItems = document.querySelectorAll(".nav-items__item");
  header.classList.toggle("scroll-header", window.scrollY > breakPoint);
  siteTitle.classList.toggle("scroll-site-title", window.scrollY > breakPoint);
  hamburger.classList.toggle("scroll-hamburger", window.scrollY > breakPoint);
  navItems.forEach((navItem) => {
    navItem.classList.toggle("scroll-nav-item", window.scrollY > breakPoint);
  });
});
