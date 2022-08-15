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
  transitionDuration: 800, //切り替わりのアニメーション時間をミリ秒単位で設定
  delay: 6000, //スライド間の遅延をミリ秒単位で。
  animationDuration: 8000, //スライドアニメーション時間をミリ秒単位で設定
  animation: "kenburns",
  slides: responsiveImage,
});

function removeattr() {
  let box = document.getElementById("slider");
  box.removeAttr("style");
}

ScrollReveal().reveal(".fadeIn", {
  duration: 1200,
  viewFactor: 0.5,
  origin: "bottom",
  distance: "100px",
  reset: true,
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
