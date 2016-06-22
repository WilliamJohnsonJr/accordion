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

newDiv.innerHTML = "<div class=\"imgContainerBig\"><div class=\"leftArrow button\">Previous</div><div class=\"imgContainer\"></div><div class=\"rightArrow button\">Next</div></div>";

var image0 = "<img class=\"img0\" src=\""+images[0] + "\">";
var image1 = "<img class=\"img1\" src=\""+images[1] + "\">";
var image2 = "<img class=\"img2\" src=\""+images[2] + "\">";
var image3 = "<img class=\"img3\" src=\""+images[3] + "\">";
var image4 = "<img class=\"img4\" src=\""+images[4] + "\">";
var image5 = "<img class=\"img5\" src=\""+images[5] + "\">";
var image6 = "<img class=\"img6\" src=\""+images[6] + "\">";
var imgArray = [image0, image1, image2, image3, image4, image5, image6];

$(".imgContainer").html(image0);

var cycleImg = function (event) {
  var target = event.target;
  console.log(target);
  if ($(target).hasClass("leftArrow")){
    if ($(".imgContainer").html() == image0){
        $(".imgContainer").html(image6);
    } else if ($(".imgContainer").html() == image1){
        $(".imgContainer").html(image0);
    } else if ($(".imgContainer").html() == image2){
        $(".imgContainer").html(image1);
    } else if ($(".imgContainer").html() == image3){
        $(".imgContainer").html(image2);
    } else if ($(".imgContainer").html() == image4){
        $(".imgContainer").html(image3);
    } else if ($(".imgContainer").html() == image5){
        $(".imgContainer").html(image4);
    } else if ($(".imgContainer").html() == image6){
        $(".imgContainer").html(image5);
    }
  } else if ($(target).hasClass("rightArrow")){
    if ($(".imgContainer").html() == image0){
        $(".imgContainer").html(image1);
    } else if ($(".imgContainer").html() == image1){
        $(".imgContainer").html(image2);
    } else if ($(".imgContainer").html() == image2){
        $(".imgContainer").html(image3);
    } else if ($(".imgContainer").html() == image3){
        $(".imgContainer").html(image4);
    } else if ($(".imgContainer").html() == image4){
        $(".imgContainer").html(image5);
    } else if ($(".imgContainer").html() == image5){
        $(".imgContainer").html(image6);
    } else if ($(".imgContainer").html() == image6){
        $(".imgContainer").html(image0);
    }
  }
};

$(".button").on('click', cycleImg);
