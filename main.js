
var magicAppear = function(event) {
	var target = event.target;
	console.log(target);
	if ($(target).hasClass("section1Header")){
			$(".section1Text").toggleClass("disappear").toggleClass("appear");
			if("")
		}
};
$(".sectionHead").on('click', magicAppear);

// $("class").addClass("appear").removeClass("disappear") - will cause the accordeon to open the way you want.