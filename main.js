
var magicAppear = function(event) {
	var target = event.target;
	console.log(target);
	if ($(target).hasClass("section1Header")){
		if ($("section1Text").hasClass("disappear")){
				$(".section1Text").addClass("appear").removeClass("disappear");
				if ($(".section2Text").hasClass("appear")){
					$(".section2Text").addClass("disappear").removeClass("appear");
				}
				if ($(".section3Text").hasClass("appear")){
					$(".section3Text").addClass("disappear").removeClass("appear");
				}	
			} else {
				$(".section1Text").addClass("disappear").removeClass("appear");
			}
	} else if ($(target).hasClass("section2Header")){
		if ($("section2Text").hasClass("disappear")){
				$(".section2Text").addClass("appear").removeClass("disappear");
				if ($(".section1Text").hasClass("appear")){
					$(".section1Text").addClass("disappear").removeClass("appear");
				}
				if ($(".section3Text").hasClass("appear")){
					$(".section3Text").addClass("disappear").removeClass("appear");
				}	
			} else {
				$(".section2Text").addClass("disappear").removeClass("appear");
			}
	} else if ($(target).hasClass("section3Header")){
		if ($("section3Text").hasClass("disappear")){
				$(".section3Text").addClass("appear").removeClass("disappear");
				if ($(".section1Text").hasClass("appear")){
					$(".section1Text").addClass("disappear").removeClass("appear");
				}
				if ($(".section2Text").hasClass("appear")){
					$(".section2Text").addClass("disappear").removeClass("appear");
				}	
			} else {
				$(".section3Text").addClass("disappear").removeClass("appear");
			}
	}
};

$(".sectionHead").on('click', magicAppear);

// $("class").addClass("appear").removeClass("disappear") - will cause the accordeon to open the way you want.