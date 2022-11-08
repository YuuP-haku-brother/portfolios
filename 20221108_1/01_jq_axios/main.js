console.log("main.js!!");
// Ready
$(document).ready(()=>{
	console.log("Ready!!");

	const option = {responseType: "blob"};
	axios.get("data.json" , option).then(res=>{
		// 通信が成功した場合
		console.log('通信OK');
		console.log(res) //データそのもの
		res.data.text().then(str=>{
			let arr = JSON.parse(str);
			console.log(arr);
		}); //データ確認
	}).catch(err=>{
		// 通信が失敗した場合
		console.log('ぶっぶー！はいダメー！');
		console.log(err); //エラー内容
	});

});