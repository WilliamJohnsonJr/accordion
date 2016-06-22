
var magicAppear = function(event) {
	var target = event.target;
	console.log(target);
	if ($(target).hasClass("section1Header")){
		if ($(".section2").hasClass("section2Open")){
		$(".section2").toggleClass("section2Open");
		}
		if ($(".section3").hasClass("section3Open")){
			$(".section3").toggleClass("section3Open");
		}
	} else if ($(target).hasClass("section2Header")){
		if (!$(".section2").hasClass("section2Open")){
		$(".section2").toggleClass("section2Open");
		}
		if ($(".section3").hasClass("section3Open")){
			$(".section3").toggleClass("section3Open");
		} 
	} else if ($(target).hasClass("section3Header")){
		if (!$(".section3").hasClass("section3Open")){
		$(".section3").toggleClass("section3Open");
		}
		if (!$(".section2").hasClass("section2Open")){
			$(".section2").toggleClass("section2Open");
		}
	}
};
$(".sectionHead").on('click', magicAppear);