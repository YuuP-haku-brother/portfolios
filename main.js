console.log("main.js!!");

const URL = "https://www.jma.go.jp/bosai/forecast/data/forecast/210000.json";


// Ready
$(document).ready(()=>{
	console.log("Ready!!");
	// Axiosを使ってみる!!
	const option = {responseType: "blob"};
//------------------------------------------------ メモ＆変数
let weathercodes

	// 210000 岐阜
	axios.get("https://www.jma.go.jp/bosai/forecast/data/forecast/210000.json", option).then(res=>{
		// 通信が成功した場合
		console.log("通信成功!!");
//------------------------------------------------ データ
		console.log(res);// データそのもの
		res.data.text().then(str=>{
			let arr = JSON.parse(str);
			console.log(arr);// データ確認
//------------------------------------------------ text
			$("#basho1").text(arr[0]["timeSeries"][0]["areas"][0]["area"]["name"] + "の天気"); // 地名の表示
			$("#mino_saikou").text("最高気温: " + arr[0]["timeSeries"][2]["areas"][0]["temps"][1]); // 最高気温
			$("#mino_saitei").text("最低気温: " + arr[0]["timeSeries"][2]["areas"][0]["temps"][0]); // 最低気温
			weathercodes = (arr[0]["timeSeries"][0]["areas"][0]["weatherCodes"][1]); 
			$("#basho1").after((`<img src="./svg/`) + weathercodes + (`.svg">`)); // 天気予報の画像表示

			$("#basho2").text(arr[0]["timeSeries"][0]["areas"][1]["area"]["name"] + "の天気"); // 地名の表示
			$("#hida_saikou").text("最高気温: " + arr[0]["timeSeries"][2]["areas"][1]["temps"][1]); // 最高気温
			$("#hida_saitei").text("最低気温: " + arr[0]["timeSeries"][2]["areas"][1]["temps"][0]); // 最低気温
			weathercodes = (arr[0]["timeSeries"][0]["areas"][1]["weatherCodes"][1]); 
			$("#basho2").after((`<img src="./svg/`) + weathercodes + (`.svg">`)); // 天気予報の画像表示
		});


	}).catch(err=>{
		// 通信が失敗した場合
		console.log("通信失敗...");
		console.log(err);// エラー内容
	});
});

// Ready
$(document).ready(()=>{
	console.log("Ready!!");
	// Axiosを使ってみる!!
	const option = {responseType: "blob"};
//------------------------------------------------ メモ＆変数
let weathercodes

	// 210000 岐阜
	axios.get("https://www.jma.go.jp/bosai/forecast/data/forecast/230000.json", option).then(res=>{
		// 通信が成功した場合
		console.log("通信成功!!");
//------------------------------------------------ データ
		console.log(res);// データそのもの
		res.data.text().then(str=>{
			let arr = JSON.parse(str);
			console.log(arr);// データ確認
//------------------------------------------------ text
			$("#basho3").text(arr[0]["timeSeries"][0]["areas"][0]["area"]["name"] + "の天気"); // 地名の表示
			$("#seibu_saikou").text("最高気温: " + arr[0]["timeSeries"][2]["areas"][0]["temps"][1]); // 最高気温
			$("#seibu_saitei").text("最低気温: " + arr[0]["timeSeries"][2]["areas"][0]["temps"][0]); // 最低気温
			weathercodes = (arr[0]["timeSeries"][0]["areas"][0]["weatherCodes"][1]); 
			$("#basho3").after((`<img src="./svg/`) + weathercodes + (`.svg">`)); // 天気予報の画像表示

			$("#basho4").text(arr[0]["timeSeries"][0]["areas"][1]["area"]["name"] + "の天気"); // 地名の表示
			$("#toubu_saikou").text("最高気温: " + arr[0]["timeSeries"][2]["areas"][1]["temps"][1]); // 最高気温
			$("#toubu_saitei").text("最低気温: " + arr[0]["timeSeries"][2]["areas"][1]["temps"][0]); // 最低気温
			weathercodes = (arr[0]["timeSeries"][0]["areas"][1]["weatherCodes"][1]); 
			$("#basho4").after((`<img src="./svg/`) + weathercodes + (`.svg">`)); // 天気予報の画像表示
		});


	}).catch(err=>{
		// 通信が失敗した場合
		console.log("通信失敗...");
		console.log(err);// エラー内容
	});
});

// Ready
$(document).ready(()=>{
	console.log("Ready!!");
	// Axiosを使ってみる!!
	const option = {responseType: "blob"};
//------------------------------------------------ メモ＆変数
let weathercodes

	// 210000 岐阜
	axios.get("https://www.jma.go.jp/bosai/forecast/data/forecast/240000.json", option).then(res=>{
		// 通信が成功した場合
		console.log("通信成功!!");
//------------------------------------------------ データ
		console.log(res);// データそのもの
		res.data.text().then(str=>{
			let arr = JSON.parse(str);
			console.log(arr);// データ確認
//------------------------------------------------ text
			$("#basho5").text(arr[0]["timeSeries"][0]["areas"][0]["area"]["name"] + "の天気"); // 地名の表示
			$("#hokutyuubu_saikou").text("最高気温: " + arr[0]["timeSeries"][2]["areas"][0]["temps"][1]); // 最高気温
			$("#hokutyuubu_saitei").text("最低気温: " + arr[0]["timeSeries"][2]["areas"][0]["temps"][0]); // 最低気温
			weathercodes = (arr[0]["timeSeries"][0]["areas"][0]["weatherCodes"][1]); 
			$("#basho5").after((`<img src="./svg/`) + weathercodes + (`.svg">`)); // 天気予報の画像表示

			$("#basho6").text(arr[0]["timeSeries"][0]["areas"][1]["area"]["name"] + "の天気"); // 地名の表示
			$("#nanbu_saikou").text("最高気温: " + arr[0]["timeSeries"][2]["areas"][1]["temps"][1]); // 最高気温
			$("#nanbu_saitei").text("最低気温: " + arr[0]["timeSeries"][2]["areas"][1]["temps"][0]); // 最低気温
			weathercodes = (arr[0]["timeSeries"][0]["areas"][1]["weatherCodes"][1]); 
			$("#basho6").after((`<img src="./svg/`) + weathercodes + (`.svg">`)); // 天気予報の画像表示
		});


	}).catch(err=>{
		// 通信が失敗した場合
		console.log("通信失敗...");
		console.log(err);// エラー内容
	});
});
