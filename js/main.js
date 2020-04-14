var slideNow = 1;
var slideCount = $('.slidewrapper').children().length;
var slideInterval = 3000;
var translateWidth = 0;

// Интервал
$(document).ready(function () {
	var switchInterval = setInterval(nextSlide, slideInterval);

	$('.viewport').hover(function () {
		clearInterval(switchInterval);
	}, function () {
		switchInterval = setInterval(nextSlide, slideInterval);
	});

	$('.arrows__next').click(function () {
		nextSlide();
	});

	$('.arrows__prev').click(function () {
		prevSlide();
	});
});

// Следующий слайд
function nextSlide() {
	if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
		$('.slidewrapper').css('transform', 'translate(0, 0)');
		slideNow = 1;
	} else {
		translateWidth = -$('.viewport').width() * (slideNow);
		$('.slidewrapper').css({
			'transform': 'translate(' + translateWidth + 'px, 0)',
			'-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
			'-ms-transform': 'translate(' + translateWidth + 'px, 0)',
		});
		slideNow++;
	}
}
// Предыдущий слайд
function prevSlide() {
	if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
		translateWidth = -$('.viewport').width() * (slideCount - 1);
		$('.slidewrapper').css({
			'transform': 'translate(' + translateWidth + 'px, 0)',
			'-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
			'-ms-transform': 'translate(' + translateWidth + 'px, 0)',
		});
		slideNow = slideCount;
	} else {
		translateWidth = -$('.viewport').width() * (slideNow - 2);
		$('.slidewrapper').css({
			'transform': 'translate(' + translateWidth + 'px, 0)',
			'-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
			'-ms-transform': 'translate(' + translateWidth + 'px, 0)',
		});
		slideNow--;
	}
}