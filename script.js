$(document).ready(function() {
	var current = 1; //capture position of what page its on
	var itemLength = $('.cards_container .item').length;
	
	$('.total_slides').text(itemLength);

	$('.cardSlider .btn_prev').on("click",function() {
		if(current > 1) {
			current = current - 1;
			showSlider(current);
		}else{
			current = itemLength;
			showSlider(current);
			
		}
	});
	$('.cardSlider .btn_next').on("click",function() {
		if(current !== itemLength) {
			current = current + 1;
			showSlider(current);
		}else{
			current = 1;
			showSlider(current);
		}

	});
	function showSlider() {
		$('.cards_container .item').removeClass('active');//remove everything
		$('div[data-id="' + current + '"]').addClass('active');//look through all divs and find the one with data id attribute
		
		$('.current_slide').text(current);
	}

});