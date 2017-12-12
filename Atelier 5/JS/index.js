var classList;
var classListIndexList;
var swapTime = 5000;
var classListIndex = 0;
var indexListindex = 0;
var cellCount = 0;
var usedCell;

var interval;

var windowWidth = 1920;
$(document).ready(function(){
	$("header .button").on ("click", function() {
		$("header").toggleClass("active");
	});
	GetWindowSize();

	$('#Slider').slick({
		dots: true,
		arrows: true,
  		infinite: true,
    	slidesToShow: 1,
    	slidesToScroll: 1,
		dotsClass : 'bulles',
  		adaptiveHeight: true,
		responsive : [
			{
				breakpoint: 1000,
      			settings: {
        			slidesToShow: 1,
			    	slidesToScroll: 1,
        			infinite: true,
					arrows: false,
					dotsClass : 'slick-dots'
      			}
    		}]
  	});

	createPortfolioCarousel();

	$('#presse .slider').slick({
		dots: true,
		arrows: true,
  		infinite: true,
    	slidesToShow: 3,
    	slidesToScroll: 3,
		variableWidth: true,
		autoplay: false,
		prevArrow: '<button type="button" class="arrow left"><div class="arrow-bubble"></div></button>',
		nextArrow: '<button type="button" class="arrow right"><div class="arrow-bubble"></div></button>',
		responsive : [
			{
				breakpoint: 1600,
      			settings: {
        			slidesToShow: 2,
			    	slidesToScroll: 2,
        			infinite: true,
					arrows: false,
        			dots: true
      			}
    		},
		    {
		      	breakpoint: 1200,
		      	settings: {
		      		slidesToShow: 2,
			    	slidesToScroll: 1,
        			infinite: true,
					arrows: false,
					autoplay: true,
        			dots: true
				}
			},
		    {
		      	breakpoint: 900,
		      	settings: {
		      		slidesToShow: 1,
			    	slidesToScroll: 1,
        			infinite: true,
					autoplay: true,
					arrows: false,
        			dots: true
				}
			}
		]
  	});

	$('#portfolio nav > div').on("click", function () {
		PortfolioCarouselSwap();
		clearInterval(interval);
		interval = setInterval(PortfolioCarouselSwap, swapTime);
	})
});

function createPortfolioCarousel (){
	classList = CreateclassList();
	InsertFirstTransition();
	interval = setInterval(PortfolioCarouselSwap, swapTime);
}

function CreateclassList (){
	var list = new Array();
	for (var i = 0; i < 20; i++) {
		if (i < 4)
			list.push("card");
		else if (i < 8)
			list.push("fall");
		else if (i < 12)
			list.push("overlap");
		else if (i < 16)
			list.push("run-you-fool");
		else
			list.push("barell-roll");
	}
	ShuffleList(list);
	return list;
}

function ShuffleList ( list ){
	for (var i = 0; i < 50; i++){
		let firstRandomclassListIndex = Math.floor(Math.random() * list.length);
		let SecondRandomclassListIndex = Math.floor(Math.random() * list.length);
		let swap = list[firstRandomclassListIndex];
		list[firstRandomclassListIndex] = list[SecondRandomclassListIndex];
		list[SecondRandomclassListIndex] = swap;
	}
}

function PortfolioCarouselSwap () {
	DeletePreview ();
	FindCellCount();
	AddNext();
}

function InsertFirstTransition() {
	// var currentBox = classList[classListIndex];
	// var box = $("#portfolio .creations " + currentBox);
	// box.append($("#portfolio .waiting-list").children().first().detach());
	// box.children().first().addClass("preview");
	// box.children().last().addClass("next");
	AddNext();
}

function DeletePreview () {
	var currentBox = classList[classListIndex];
	usedCell.removeClass(currentBox);
	usedCell.children().first().removeClass("preview");
	usedCell.children().last().removeClass("next");
	usedCell.children().first().detach().appendTo("#portfolio .waiting-list");
}

function AddNext () {
	classListIndex = (classListIndex + 1) % classList.length;
	var currentBox = classList[classListIndex];
	GetRandomContainer();
	usedCell.addClass(currentBox);
	usedCell.append($("#portfolio .waiting-list").children().first().detach());
	usedCell.children().first().addClass("preview");
	usedCell.children().last().addClass("next");
}

function GetRandomContainer () {
	indexListindex = Math.floor(Math.random() * cellCount);
	switch (indexListindex) {
		case 0:
			usedCell = $("#portfolio .creations .left .small-creation-container").first();
			break;
		case 1:
			usedCell = $("#portfolio .creations .left .small-creation-container").last();
			break;
		case 2:
			usedCell = $("#portfolio .creations .right .small-creation-container").first();
			break;
		case 3:
			usedCell = $("#portfolio .creations .right .small-creation-container").last();
			break;
		case 4:
			usedCell = $("#portfolio .creations .left + div");
			break;
		default:

	}
}

function FindCellCount() {
	if (windowWidth >= 1560)
		cellCount = 5;
	else if (windowWidth >= 1130)
		cellCount = 4;
	else if (windowWidth >= 700)
		cellCount = 2;
	else
		cellCount = 1;
}

function GetWindowSize() {
    windowWidth = $(window).width();
}

$(window).resize(function() {
  	GetWindowSize();
});
