var slideIndex = 1;
autoSlide();

function currentSlider(n) {
	showSlides (slideIndex = n)
}

function autoSlide(){
	showSlides(slideIndex);
	slideIndex++;
	setTimeout(autoSlide, 5000);
}

function showSlides(n) {
	var i;
	var slaiders = document.getElementsByClassName("slider");
	var dots = document.getElementsByClassName("dot");
	if (n > slaiders.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slaiders.length}
	for (i = 0; i < slaiders.length; i++) {
		slaiders[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].classList.remove("active");
	}	
	slaiders[slideIndex-1].style.display = "block";
	dots[slideIndex-1].classList.add("active");
}

