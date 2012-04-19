// ==UserScript==
// @name           goxi-smartphone-style
// @namespace      http://ino.xrea.jp/
// @description    goxiをスマートフォンスタイルに変更する
// @include        http://goxi.jp/*
// @require        https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js
// ==/UserScript==

// 携帯用metaタグ追加
$("head").append("<meta name='viewport' content='width=device-width,initial-scale=1.0' />");

// スタイルの調整
$(
		"#Header, #Contents, #HeaderContainer, #globalNav, #Container, #ContentsContainer, #LayoutA, #LayoutB, #LayoutC, #Center")
		.css( {
			width : "100%",
			minWidth : "100%",
			ccsFloat : "none",
			margin : "0px"
		});

// localNavの移動
$("#globalNav").after($("#localNav"));

// globalメニューのプルダウン化
$("#Header").css( {
	overflow : "visible"
});
$("#Header H1").css( {
	cssFloat : "none"
});
$("#globalNav").css( {
	position : "absolute",
	"z-index" : "1",
	width : "120px",
	minWidth : "120px",
	"padding-top" : "0px"
});
$("#globalNav li").css( {
	cssFloat : "none",
	"background" : "-moz-linear-gradient(#919dd9, #5066d3)",
	"border-left" : "0px",
	"border-right" : "0px",
});
$("#globalNav li, #globalNav a").css( {
	height : "30px",
	"line-height" : "30px",
});

// localメニューのプルダウン化
$("#localNav").css( {
	"margin-bottom" : "0px",
	"margin-top" : "0px",
	"margin-left" : "120px"
});
$("#localNav").css( {
	position : "absolute",
	"z-index" : "1",
	width : "120px",
	minWidth : "120px"
});
$("#localNav li").css( {
	cssFloat : "none",
	"background" : "-moz-linear-gradient(#919dd9, #5066d3)"
});
$("#localNav ul").css( {
	background : "none"
});
$("#localNav li, #localNav a").css( {
	height : "30px",
	"line-height" : "30px"
});

// メニューの非表示化
$("#globalNav").hide();
$("#localNav").hide();

// メニュータイトルの追加
$("#globalNav").before("<div id='globalNavTitle'>全体メニュー</div>");
$("#globalNav").before("<div id='localNavTitle'>マイメニュー</div>");

// トグルで表示
$('#localNavTitle').click(function() {
	$("#globalNav").hide();
	$('#localNav').slideToggle('fast');
});
$('#globalNavTitle').click(function() {
	$("#localNav").hide();
	$('#globalNav').slideToggle('fast');
});

$("#localNavTitle, #globalNavTitle").css( {
	"text-align" : "-moz-center",
	width : "120px",
	minWidth : "120px",
	color : "#FFFFFF",
	display : "inline-block",
	height : "30px",
	"line-height" : "30px",
	"background" : "-moz-linear-gradient(#919dd9, #5066d3)"
});

// 要素の削除
$(
		"iframe, #freeArea_45, #freeArea_62, #freeArea_49, #Body table:first, #sideBanner, #Footer, #Left, #topBanner")
		.remove();

// css変更
$(".partsHeading").css( {
	"background" : "-moz-linear-gradient(#919dd9, #5066d3)",
	"border-radius" : "5px"
});
$(".articleList li, .activity").css( {
	"background" : "-moz-linear-gradient(#F3F4F5, #C8C9CA)"
});
$(".articleList li a").css( {
	"display" : "block"
});
