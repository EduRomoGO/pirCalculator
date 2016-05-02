var button = document.getElementById('calculateButton'),
		data = {
			'answers': []
		},
		count = 0;

function editData() {
	var question = $('.question').val(),
			answer = $('.answer').val();

	// console.log(question);
	// console.log(answer);

	data.answers.forEach(function (ans) {
		console.log(ans);
		console.log(ans.question == question);
		if (ans.question == question) ans.answer = parseInt(answer, 10);
	});
}

$('#answer').on('keyup', function() {
	var answer = $('#answer').val(),
			res;

	$('#answer').val('');
	// console.log(answer);

	count++;

	res = {
		'question': count,
		'answer': parseInt(answer, 10)
	};

	data.answers.push(res);
	// console.log(data.answers);
	$('.answers').html(JSON.stringify(data.answers, null, 2));
});

$('#calculateButton').on('click', function() {
	// console.log('data.answers');
	// console.log(data.answers);
	var params = { 'answers': data.answers };
	$.post('/getResults', params, function(resData) {
		$('.results').html('<br>The results calculated are: ' + resData.resultsString);
	});
});

$('#removeButton').on('click', function() {
	data.answers.pop();
	count--;
	$('.answers').html(JSON.stringify(data.answers, null, 2));
});

$('#editButton').on('click', function() {
	editData();
	$('.answers').html(JSON.stringify(data.answers, null, 2));
});

