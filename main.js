console.log("main.js!!");

tippy('.cap', {//指定した要素にツールチップが出現
	placement: 'top-start',//ツールチップの表示位置⇒top、top-start、top-end、right、right-start、right-end、bottom、bottom-start、bottom-end、left、left-start、left-end。指定をしなくてもtopに表示
	animation: 'shift-toward-subtle',//ツールチップ出現の動き。動きを指定するにはhttps://unpkg.com/browse/tippy.js@5.0.3/animations/から任意の動きを選び内に読み込むことが必要。使用できる動き⇒shift-away、shift-away-subtle、shift-away-extreme、shift-toward、shift-toward-subtle、shift-toward-extreme、scale、scale-subtle、scale-extreme、perspective、perspective-subtle、perspective-extreme。指定をしなくてもfadeで表示
	theme: 'light-border',//ツールチップのテーマの色。色を指定するにはhttps://unpkg.com/browse/tippy.js@5.0.3/themes/からテーマを選び内に読み込んで指定する。テーマの種類⇒light、light-border、material、translucent。指定をしなくても黒色で表示
	duration: 200,//ツールチップの出現の速さをミリ秒単位で指定
}
)

$('.slider').slick({
	autoplay: false,//自動的に動き出すか。初期値はfalse。
	infinite: true,//スライドをループさせるかどうか。初期値はtrue。
	slidesToShow: 3,//スライドを画面に3枚見せる
	slidesToScroll: 3,//1回のスクロールで3枚の写真を移動して見せる
	prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
	nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
	dots: true,//下部ドットナビゲーションの表示
	responsive: [
		{
		breakpoint: 769,//モニターの横幅が769px以下の見せ方
		settings: {
			slidesToShow: 2,//スライドを画面に2枚見せる
			slidesToScroll: 2,//1回のスクロールで2枚の写真を移動して見せる
		}
	},
	{
		breakpoint: 426,//モニターの横幅が426px以下の見せ方
		settings: {
			slidesToShow: 1,//スライドを画面に1枚見せる
			slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
		}
	}
]
});