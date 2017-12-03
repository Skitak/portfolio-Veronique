var portfolioCarouselList;
var portfolioCarouselSwapTime = 5000;
var portfolioCarouselIndex = 0;
$(document).ready(function(){

	$('#Slider').slick({
		dots: true,
		arrows: true,
  		infinite: true,
    	slidesToShow: 1,
    	slidesToScroll: 1,
		dotsClass : 'bulles'
  	});

	createPortfolioCarousel();

	$('#presse .slider').slick({
		dots: true,
		arrows: true,
  		infinite: true,
    	slidesToShow: 3,
    	slidesToScroll: 3,
		variableWidth: true,
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
        			dots: false
				}
			},
		    {
		      	breakpoint: 900,
		      	settings: {
		      		slidesToShow: 1,
			    	slidesToScroll: 1,
        			infinite: true,
					arrows: false,
        			dots: false
				}
			}
		]
  	});
});

function createPortfolioCarousel (){
	// var smallItems = $("#portfolio .creations .small article");
	// var bigItem = $("#portfolio .creations .big article");
	// var waitingItemsSmall = $("#portfolio .waiting-list .small article");
	// var waitingItemsBig = $("#portfolio .waiting-list .big article");
	portfolioCarouselList = CreatePortfolioCarouselList();
	InsertFirstTransition();
	setInterval(PortfolioCarouselSwap, portfolioCarouselSwapTime);
}

function CreatePortfolioCarouselList (){
	var list = new Array();
	for (var i = 0; i < 20; i++) {
		if (i < 4)
			list.push(".card");
		else if (i < 8)
			list.push(".fall");
		else if (i < 12)
			list.push(".overlap");
		else if (i < 16)
			list.push(".run-you-fool");
		else
			list.push(".barell-roll");
	}
	ShuffleList(list);
	return list;
}

function ShuffleList ( list ){
	for (var i = 0; i < 50; i++){
		let firstRandomIndex = Math.floor(Math.random() * list.length);
		let SecondRandomIndex = Math.floor(Math.random() * list.length);
		let swap = list[firstRandomIndex];
		list[firstRandomIndex] = list[SecondRandomIndex];
		list[SecondRandomIndex] = swap;
	}
}

function PortfolioCarouselSwap () {
	DeletePreview ();
	//add next and add classes
	AddNext();
}

function InsertFirstTransition(){
	var currentBox = portfolioCarouselList[portfolioCarouselIndex];
	var box = $("#portfolio .creations " + currentBox);
	box.append($("#portfolio .waiting-list").children().first().detach());
	box.children().first().addClass("preview");
	box.children().last().addClass("next");
}

function DeletePreview (){
	var currentBox = portfolioCarouselList[portfolioCarouselIndex];
	var preview = $("#portfolio .creations " + currentBox);
	preview.children().first().removeClass("preview");
	preview.children().last().removeClass("next");
	preview.children().first().detach().appendTo("#portfolio .waiting-list");
}

function AddNext (){
	portfolioCarouselIndex = (portfolioCarouselIndex + 1) % portfolioCarouselList.length;
	var currentBox = portfolioCarouselList[portfolioCarouselIndex];
	var next = $("#portfolio .creations " + currentBox);
	next.append($("#portfolio .waiting-list").children().first().detach());
	next.children().first().addClass("preview");
	next.children().last().addClass("next");
}
