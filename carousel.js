var carouselImages = [
  {
    image_url: 'http://desktopography.net/media/exhibition/2006/hushed/large.jpg',
    title: 'Hushed',
    photographer_id: 'Michael Withers'
  },
  {
    image_url: 'http://desktopography.net/media/exhibition/2006/dndln/large.jpg',
    title: 'Dndln',
    photographer_id: 'Carlos'
  },
  {
    image_url: 'http://desktopography.net/media/exhibition/2007/open_source/large.jpg',
    title: 'Open Source',
    photographer_id: 'Jerico Santander'
  },
  {
    image_url: 'http://desktopography.net/media/exhibition/2007/treehugger/large.jpg',
    title: 'Treehugger',
    photographer_id: 'Pete Harrison'
  },
  {
    image_url: 'http://desktopography.net/media/exhibition/2007/dsn/large.jpg',
    title: 'DSN',
    photographer_id: 'Marius Bauer'
  },
  {
    image_url: 'http://desktopography.net/media/exhibition/2008/blue_moon/large.jpg',
    title: 'Blue Moon',
    photographer_id: 'Microbot'
  },
  {
    image_url: 'http://desktopography.net/media/exhibition/2009/fight_for_alpha/large.jpg',
    title: 'Fight for Alpha',
    photographer_id: 'Space Jump'
  }
];


var imgSplicer = function (carousel){
  return carousel.map(function(object){
    return object.image_url;
  });
};

var authTitleSplicer = function(carousel){
  return carousel.map(function(object){
    return object.title + " by " +object.photographer_id;
  });
};

var images = imgSplicer(carouselImages);

var authTitles = authTitleSplicer(carouselImages);

var div = document.createElement("div");

$("body").append(div);

var newDiv = $("div")[4];

newDiv.innerHTML = "<div class=\"imgContainerBig\"><div class=\"leftArrow button\">\<\<</div><div class=\"imgContainer\"></div><div class=\"rightArrow button\">\>\></div></div>";

var image0 = "<img class=\"imgimg img0 appear\" src=\""+images[0] + "\">";
var image1 = "<img class=\"imgimg img1 hide\" src=\""+images[1] + "\">";
var image2 = "<img class=\"imgimg img2 hide\" src=\""+images[2] + "\">";
var image3 = "<img class=\"imgimg img3 hide\" src=\""+images[3] + "\">";
var image4 = "<img class=\"imgimg img4 hide\" src=\""+images[4] + "\">";
var image5 = "<img class=\"imgimg img5 hide\" src=\""+images[5] + "\">";
var image6 = "<img class=\"imgimg img6 hide\" src=\""+images[6] + "\">";
var imgArray = [image0, image1, image2, image3, image4, image5, image6];

// var title0 = "<span class=\"title0 titles\">"+authTitles[0]+"</span>";
// var title1 = "<span class=\"title1 titles\">"+authTitles[1]+"</span>";
// var title2 = "<span class=\"title2 titles\">"+authTitles[2]+"</span>";
// var title3 = "<span class=\"title3 titles\">"+authTitles[3]+"</span>";
// var title4 = "<span class=\"title4 titles\">"+authTitles[4]+"</span>";
// var title5 = "<span class=\"title5 titles\">"+authTitles[5]+"</span>";
// var title6 = "<span class=\"title6 titles\">"+authTitles[6]+"</span>";

// $(".imgContainer").html(image0+image1+image2+image3+image4+image5+image6+title0+title1+title2+title3+title4+title5+title6);


$(".imgContainer").html(image0+image1+image2+image3+image4+image5+image6);

var cycleImg = function (event) {
  var target = event.target;
  console.log(target);
  if ($(target).hasClass("leftArrow")){
    if ($(".img0").hasClass("appear")){
        $(".img0").toggleClass("appear").toggleClass("hide");
        $(".img6").toggleClass("appear").toggleClass("hide");
    } else if ($(".img1").hasClass("appear")){
        $(".img1").toggleClass("appear").toggleClass("hide");
        $(".img0").toggleClass("appear").toggleClass("hide");
    } else if ($(".img2").hasClass("appear")){
        $(".img2").toggleClass("appear").toggleClass("hide");
        $(".img1").toggleClass("appear").toggleClass("hide");
    } else if ($(".img3").hasClass("appear")){
        $(".img3").toggleClass("appear").toggleClass("hide");
        $(".img2").toggleClass("appear").toggleClass("hide");
    } else if ($(".img4").hasClass("appear")){
        $(".img4").toggleClass("appear").toggleClass("hide");
        $(".img3").toggleClass("appear").toggleClass("hide");
    } else if ($(".img5").hasClass("appear")){
        $(".img5").toggleClass("appear").toggleClass("hide");
        $(".img4").toggleClass("appear").toggleClass("hide");
    } else if ($(".img6").hasClass("appear")){
        $(".img6").toggleClass("appear").toggleClass("hide");
        $(".img5").toggleClass("appear").toggleClass("hide");
    }
  } else if ($(target).hasClass("rightArrow")){
    if ($(".img0").hasClass("appear")){
        $(".img0").toggleClass("appear").toggleClass("hide");
        $(".img1").toggleClass("appear").toggleClass("hide");
    } else if ($(".img1").hasClass("appear")){
        $(".img1").toggleClass("appear").toggleClass("hide");
        $(".img2").toggleClass("appear").toggleClass("hide");
    } else if ($(".img2").hasClass("appear")){
        $(".img2").toggleClass("appear").toggleClass("hide");
        $(".img3").toggleClass("appear").toggleClass("hide");
    } else if ($(".img3").hasClass("appear")){
        $(".img3").toggleClass("appear").toggleClass("hide");
        $(".img4").toggleClass("appear").toggleClass("hide");
    } else if ($(".img4").hasClass("appear")){
        $(".img4").toggleClass("appear").toggleClass("hide");
        $(".img5").toggleClass("appear").toggleClass("hide");
    } else if ($(".img5").hasClass("appear")){
        $(".img5").toggleClass("appear").toggleClass("hide");
        $(".img6").toggleClass("appear").toggleClass("hide");
    } else if ($(".img6").hasClass("appear")){
        $(".img6").toggleClass("appear").toggleClass("hide");
        $(".img0").toggleClass("appear").toggleClass("hide");
    }
  }
};

$(".button").on('click', cycleImg);
