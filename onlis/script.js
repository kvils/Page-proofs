$(document).ready(function(){
      $('.top_slider').slick({
        
      });

      $('.team_slider').slick({
      	infinite: true,
  		slidesToShow: 3,
  		slidesToScroll: 1,
  		//arrows: false,
  		appendArrows: '.arrows'	
      });
    });