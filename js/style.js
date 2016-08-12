$(function() {
	var $numbersList = $('#numbersList');

	for (var i = 1; i <= 100; i++) {
		if (i % 3 == 0) {
			$numbersList.append('<button class="third">' + i + '</button>');			
		} 
		else {
			$numbersList.append('<button>' + i + '</button>');
		}					
	};

	function smile() {
		$(this).css({
			color: '#fff',
			backgroundColor: '#333',
		})
			.text(':)')
			.on('click', number);
	}

	function number() {
		var $index = $('.third').index(this) * 3 + 3;
		$(this).css({
			color: '#000',
			backgroundColor: '#ccc'
		})
			.text($index)
			.on('click', smile)
			.removeAttr('style');
	}

	$('.third').on('click', smile);
});



