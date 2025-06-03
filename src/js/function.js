$(function () {
	$('#fncBodyBtn').click(function () {
		alert($(this).text());
	});
	$('#fncBodyBtnGoto').click(function () {
		window.location.href = '/about.html';
	})
	// 템플릿 읽어오기
	var source = $('#list-template').html();
	var template = Handlebars.compile(source);
	// Ajax 호출
	$.ajax({
		url: 'https://jsonplaceholder.typicode.com/posts', // 예시 URL (실제 API URL로 변경)
		method: 'GET',
		success: function (data) {
			// list.hbs는 items 배열을 기대하므로, { items: data } 형태로 전달
			var html = template({ items: data });
			console.log(html)
			$('#list-container').html(html);
		},
		error: function (err) {
			console.error('Ajax 호출 실패', err);
		}
	});
})