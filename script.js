"use strict";

// const menuBtn = document.getElementById("menu-btn");

// menuBtn.onclick = function (e) {
//   e.preventDefault();

//   document.getElementById("gnavi").classList.toggle("open");

//   this.classList.toggle("close");
// };
const ham = $("#js-hamburger");
const nav = $("#js-nav");
ham.on("click", function () {
  //ハンバーガーメニューをクリックしたら
  ham.toggleClass("active"); // ハンバーガーメニューにactiveクラスを付け外し
  nav.toggleClass("active"); // ナビゲーションメニューにactiveクラスを付け外し
});

//画像の設定

var windowwidth =
  window.innerWidth || document.documentElement.clientWidth || 0;
if (windowwidth > 768) {
  var responsiveImage = [
    //PC用の画像
    { src: "images/top1.jpg" },
    { src: "images/top2.jpg" },
    { src: "images/top3.jpg" },
    { src: "images/top4.jpg" },
    { src: "images/top5.jpg" },
  ];
} else {
  var responsiveImage = [
    //タブレットサイズ（768px）以下用の画像
    { src: "images/top1.jpg" },
    { src: "images/top2.jpg" },
    { src: "images/top3.jpg" },
    { src: "images/top4.jpg" },
    { src: "images/top5.jpg" },
  ];
}

//Vegas全体の設定

$("#slider").vegas({
  overlay: true, //画像の上に網線やドットのオーバーレイパターン画像を指定。
  transition: "blur", //切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
  transitionDuration: 800, //切り替わりのアニメーション時間をミリ秒単位で設定
  delay: 10000, //スライド間の遅延をミリ秒単位で。
  animationDuration: 8000, //スライドアニメーション時間をミリ秒単位で設定
  animation: "kenburns", //スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
  slides: responsiveImage, //画像設定を読む
  //timer:false,// プログレスバーを非表示したい場合はこのコメントアウトを外してください
});

ScrollReveal().reveal(".fadeIn", {
  duration: 1200,
  viewFactor: 0.5,
  origin: "bottom",
  distance: "100px",
  reset: true,
});

//アコーディオンをクリックした時の動作
$(".question__item-title").on("click", function () {
  //タイトル要素をクリックしたら
  var findElm = $(this).next(".question__item-answer"); //直後のアコーディオンを行うエリアを取得し
  $(findElm).slideToggle(); //アコーディオンの上下動作

  if ($(this).hasClass("close")) {
    //タイトル要素にクラス名closeがあれば
    $(this).removeClass("close"); //クラス名を除去し
  } else {
    //それ以外は
    $(this).addClass("close"); //クラス名closeを付与
  }
});

//ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
$(window).on("load", function () {
  $(".accordion-area li:first-of-type div").addClass("open"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加
  $(".open").each(function (index, element) {
    //openクラスを取得
    var Title = $(element).children("..question__item-title"); //openクラスの子要素のtitleクラスを取得
    $(Title).addClass("close"); //タイトルにクラス名closeを付与し
    var Box = $(element).children(".question__item-answer"); //openクラスの子要素boxクラスを取得
    $(Box).slideDown(500); //アコーディオンを開く
  });
});
