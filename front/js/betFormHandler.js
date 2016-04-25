var button = document.getElementById('calculateButton');

$('#calculateButton').on('click', function() {
	var params = {
		'bank1': $('#bank1').val(),
		'bank2': $('#bank2').val(),
		'bank3': $('#bank3').val(),
		'bet1': $('#bet1').val(),
		'bet2': $('#bet2').val(),
		'bet3': $('#bet3').val(),
		'bet4': $('#bet4').val(),
		'bet5': $('#bet5').val(),
		'bet6': $('#bet6').val(),
		'bet7': $('#bet7').val(),
		'individualBet': $('#individualBet').val(),
		'betType': $('#betType').val()
	};
	$.post('/bet', params, function(data) {
		$('.betResult').html('<br>The results calculated are: ' + data.betResults);
	});
});