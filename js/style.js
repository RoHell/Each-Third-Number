$(function() {
	var $numbersList = $('#numbersList');

	for (var i = 1; i <= 100; i++) {
		if (i % 3 == 0) {
			$numbersList.append('<li class="third">' + i + '</li>');
			$('.third').on('click', function() {
				$(this).css('color', 'green');
			});	
		} 
		else {
			$numbersList.append('<li>' + i + '</li>');
		}					
	};

});



