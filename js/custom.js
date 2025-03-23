/* 

 * File Description: Initializations of plugins 

 */

$(document).on("scroll", function () {
    if ($(document).scrollTop() > 120) {
        $("nav").addClass("small");
        $(".main_menu_bg").css("background-color", "#dcdcdc");
    } else {
        $("nav").removeClass("small");
        $(".main_menu_bg").css("background-color", "#dcdcdc");
    }
});

$(window).on("load", function () {
             $('.isotope-container').isotope({
                    itemSelector: '.isotope-item',
                    layoutMode: 'masonry',
                    transitionDuration: '0.6s',
                    filter: ".Solid"
            });
            $('#main-menu2').smartmenus({
                    subMenusSubOffsetX: 1,
                    subMenusSubOffsetY: -8
                });

                if ($('#map-enquiry.modal').length>0) {
                if (sessionStorage.getItem('map-popup') !== 'true')  {
                            setTimeout(function () {
                            $('#map-enquiry').modal('show'); //modal show
                        }, 8000);
                } else {
                    $('#map-enquiry').modal('hide');
                }
            }
    });
    
(function($){
    //document.onselectstart = new Function("return false");
    if (window.sidebar) {
        document.onmousedrag = disableselect;
        document.onclick = reEnable;
    }
    document.onkeydown = function(e) {
            if (e.ctrlKey &&
                (e.keyCode === 67 ||
                 e.keyCode === 86 ||
                 e.keyCode === 85 ||
                 e.keyCode === 117 ||
                 e.keyCode === 123)) {
                return false;
            } else {
                return true;
            }
    };

    $(document).keypress("u",function(e) {
      if(e.ctrlKey)
      {
    return false;
    }
    else
    {
    return true;
    }
    });

    $('#end-to-end-solutions').contextmenu(function() {
        return false;
    });

     document.addEventListener('keyup', (e) => {
        if (e.key == 'PrintScreen') {

        }
    });

    $(window).on("load", function () {       
        function GetURLParameter(sParam)
        {
            var sPageURL = window.location.search.substring(1);
            var sURLVariables = sPageURL.split('&');
            for (var i = 0; i < sURLVariables.length; i++) 
            {
                var sParameterName = sURLVariables[i].split('=');
                if (sParameterName[0] == sParam) 
                {
                    return sParameterName[1];
                }
            }
        }

        if ($('#map-enquiry.modal').length>0) {
        if (window.location.href.indexOf("msg") > -1) {
            var msgpara = GetURLParameter('msg');
            if(msgpara=="success"){
                sessionStorage.setItem('map-popup','true');
                if (sessionStorage.getItem('map-popup') !== 'true') {
                        console.log("0");
                        $('#map-enquiry').modal('show'); /*modal show */
                    }
                    else {
                        console.log("1");
                        sesioninfo = sessionStorage.getItem("map-popup");
                        console.log(sesioninfo);
                        $('body').removeClass('modal-open');
                        $('body').css({ 'overflow': 'auto'});
                        $('#map-enquiry').modal('hide');  
                    }
        } else{
          /*  setTimeout(function () {*/
                console.log("las");
                $('#map-enquiry').modal('show');
                $('body').css({ 'overflow': 'hidden'});
              /*  }, 2000);
               $('#map-enquiry').modal({backdrop: 'static', keyboard: false});*/
        }
        } else{
            if (sessionStorage.getItem('map-popup') !== 'true') {
                    console.log("2");
                    setTimeout(function () {
                        $('#map-enquiry').modal('show'); /* modal show */
                    }, 2000);
                 }
                 else {
                     console.log("3");
                     sesioninfo = sessionStorage.getItem("map-popup");
                     console.log(sesioninfo);
                  $('#map-enquiry').modal('hide'); 
                  $('body').removeClass('modal-open');
                 }
             } 
         }
    });

	$(document).ready(function(){
            if ($('.popup').length>0) {
           if (sessionStorage.getItem('popup') !== 'true') {
               setTimeout(function () {
                $('.popup').show();
                $('.popup-cover').show();
                $('body').css({ 'overflow': 'hidden'});
                },5000);
            }
            else {
                $('.popup').css({ 'display': 'none'});
                $('.popup-cover').css({ 'display': 'none'}) ; 
                $('body').css({ 'overflow': 'auto'});
            }
         }

/*         setTimeout(function () {
*                      if (sessionStorage.getItem('map-popup') === 'true') {
*                          $('#map-enquiry').modal('hide'); 
*                        } 
*                    }, 1000); */

if ($('#map-enquiry.modal').length>0) {
            if (sessionStorage.getItem('map-popup') !== 'true')  {
                        console.log("4");
/*                        $('#map-enquiry').modal('show'); //modal show */
                     }
                     else {
                         console.log("5");
                         sesioninfo = sessionStorage.getItem("map-popup");
                         $('body').css({ 'overflow': 'auto'});
                         $('#map-enquiry').modal('hide');
                     }
                 }

                $(".btn-close").click(function(){  
                    sessionStorage.setItem('popup','true');
                    $(".popup").css({'display': 'none'});  
                    $("body").removeClass('overflow-hidden');
                  });

                   $(".popup .btn-close").click(function() {
                       console.log('close the window...');
                       sessionStorage.setItem('popup','true');
                       $('body').css({ 'overflow': 'auto'});
/*                   window.location.href = "index.php";*/
		});

                $(".popup .popup-body").click(function() {
                      console.log('close the window...');
                       sessionStorage.setItem('popup','true');
                       $('body').css({ 'overflow': 'auto'});
		});

            var delay3=400,delay4=500, setTimeoutConst,setTimeoutConst2;
            var headerHeight = $("header.header.fixed").outerHeight();
		if ((Modernizr.mq('only all and (min-width: 768px)') && !Modernizr.touch) || $("html.ie8").length>0) {
			$('.sm.sm-blue .has-mega-menu').hover(
			function(){
				setTimeoutConst = setTimeout(function(){
                                        $(".blackscreen").css("opacity", "1");
                                         $(".blackscreen").css("z-index", "200");
                                        $(".blackscreen").css("top",+headerHeight+'px');
/*                                        $(".blackscreen").addClass('header-screen'); */
				}, delay3);
			},	function(){ 
				clearTimeout(setTimeoutConst );
				setTimeoutConst2 = setTimeout(function(){
                                    $(".blackscreen").css("opacity", "0"); 
                                     $(".blackscreen").css("z-index", "-1");
/*                                 $(".blackscreen").removeClass('header-screen'); */
                                }, delay4);
			});
		};

                var delay100=100, setTimeoutConst;
                $('.solution').hover(
			function(){
				var $this = $(this);
				setTimeoutConst = setTimeout(function(){
					$this.addClass('open');
                                        $('.industry').removeClass('open');
                                        $('.offerings-megamenu').removeClass('industryback');
                                        $('.offerings-megamenu').addClass('solutionback');
                                        $("#solution").css("display", "block");
                                        $("#industry").css("display", "none");
				}, delay100);
			});                        

                        $('.industry').hover(
			function(){
				var $this = $(this);
				setTimeoutConst = setTimeout(function(){
					$this.addClass('open');
                                        $('.solution').removeClass('open');
                                        $('.offerings-megamenu').removeClass('solutionback');
                                        $('.offerings-megamenu').addClass('industryback');
                                        $("#solution").css("display", "none");
                                        $("#industry").css("display", "block");             
				}, delay100);
			});
  
                /* SmartMenus init */             
                $('#main-menu').smartmenus({
                    subMenusSubOffsetX: 1,
                    subMenusSubOffsetY: -8
                });
                    $('#main-menu').bind({
                        'show.smapi': function(e, menu) {
                        $(menu).removeClass('hide-animation').addClass('show-animation');
                        },
                        'hide.smapi': function(e, menu) {
                        $(menu).removeClass('show-animation').addClass('hide-animation');
                        }
                    }).on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', 'ul', function(e) {
                        $(this).removeClass('show-animation hide-animation');
                        e.stopPropagation();
                    });

                /* SmartMenus mobile menu toggle button */

                var $mainMenuState = $('#main-menu-state');
                if ($mainMenuState.length) {
                    /* animate mobile menu */
                    $mainMenuState.change(function(e) {
                    var $menu = $('#main-menu');
                    if (this.checked) {
                        $menu.hide().slideDown(250, function() {$menu.css('display', '');});
                    } else {
                        $menu.show().slideUp(250, function() {$menu.css('display', '');});
                    }
                    });

                    /* hide mobile menu beforeunload */

                    $(window).bind('beforeunload unload', function() {
                    if ($mainMenuState[0].checked) {
                        $mainMenuState[0].click();
                    }
                    });
                }

                $('nav#ham-menu').mmenu({
                    "extensions": [
                        "fx-panels-zoom",
                        "position-right"
                    ],
                    dropdown 		: true
                    });

		/* Owl carousel */

		/* ----------------------------------------------- */

		if ($('.owl-carousel').length>0) {
                       $(".slider-wrapper").owlCarousel({
                            loop: true,
                            items: 1,
                            autoplay: true,
                            nav: true,
                            fluidSpeed:3000,
                            autoplayspeed:1000,
                            autoplayHoverPause:true,
                            touchmove:false,
                            navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                            dots: false
                        }); /* Home Version Slider End */

                        $(".home-slider-wrapper").owlCarousel({
                            loop: true,
                            items: 1,
                            autoplay: false,
                            nav: true,
                            navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                            dots: true
                        }); /* Home Version Slider End */

                         $(".owl-carousel.1970").owlCarousel({
				autoPlay: false,
                                margin: 64,
                                loop: false,
                                autoHeight: true,
                                dots:false,
				navigation: true,
				navigationText: false,
				pagination: true,
                                navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                                responsive:{
                                    0:{     
                                        items:1, 
                                        nav:true 
                                    },  
                                    600:{ 
                                        items:2,  
                                        nav:true    
                                    },   
                                    1000:{ 
                                        items:2, 
                                        nav:true
                                    }
                                }
			});                     

                      $(".owl-carousel.1980").owlCarousel({
				autoPlay: false,
                                margin: 64,
                                loop: false,
                                autoHeight: true,
                                 dots:false,
				navigation: true,
				navigationText: false,
				pagination: true,
                                navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                                responsive:{
                                    0:{     
                                        items:1, 
                                        nav:true 
                                    },  
                                    600:{ 
                                        items:2,  
                                        nav:true    
                                    },   
                                    1000:{ 
                                        items:2,  
                                        nav:true
                                    }
                                }
			});  

                        $(".owl-carousel.1990").owlCarousel({
                            autoPlay: false,
                            margin: 64,
                            loop: false,
                            autoHeight: true,
                            dots:false,                         
                            navigation: true,
                            navigationText: false,
                            pagination: true,
                            navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                                responsive:{
                                    0:{     
                                        items:1, 
                                        nav:true 
                                    },  
                                    600:{ 
                                        items:2,  
                                        nav:true    
                                    },   
                                    1000:{ 
                                        items:2,  
                                        nav:true
                                    }
                                }
			});  

                        $(".owl-carousel.2000").owlCarousel({
				autoPlay: false,
                                margin: 64,
                                loop: false,
                                autoHeight: true,
                                 dots:false,
				navigation: true,
				navigationText: false,
				pagination: true,
                                navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                                responsive:{
                                    0:{     
                                        items:1, 
                                        nav:true,
                                        margin:5
                                    },  
                                    600:{ 
                                        items:2,  
                                        nav:true  
                                    },   
                                    1000:{ 
                                        items:2, 
                                        nav:true
                                    }
                                }
			});  

                        $(".owl-carousel.2010").owlCarousel({				

				autoPlay: false,

                                margin: 64,

                                loop: false,

                                autoHeight: true,

                                 dots:false,

				navigation: true,

				navigationText: false,

				pagination: true,

                                navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],

                                responsive:{

                                    0:{     

                                        items:1, 

                                        nav:true 

                                    },  

                                    600:{ 

                                        items:2,  

                                        nav:true    

                                    },   

                                    1000:{ 

                                        items:2,  

                                        nav:true 

                                        

                                    }

                                }

			});  

                        $(".owl-carousel.2020").owlCarousel({				

				autoPlay: false,

                                margin: 64,

                                loop: false,

                                autoHeight: true,

                                 dots:false,

				navigation: true,

				navigationText: false,

				pagination: true,

                                navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],

                                responsive:{

                                    0:{     

                                        items:1, 

                                        nav:true 

                                    },  

                                    600:{ 

                                        items:2,  

                                        nav:true    

                                    },   

                                    1000:{ 

                                        items:2,  

                                        nav:true 

                                        

                                    }

                                }

			});

                        $(".owl-carousel.2020").owlCarousel({				

				autoPlay: false,

                                margin: 64,

                                loop: false,

                                autoHeight: true,

				navigation: true,

                                 dots:false,

				navigationText: false,

				pagination: true,

                                navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],

                                responsive:{

                                    0:{     

                                        items:1, 

                                        nav:true 

                                    },  

                                    600:{ 

                                        items:2,  

                                        nav:true    

                                    },   

                                    1000:{ 

                                        items:2,  

                                        nav:true 

                                        

                                    }

                                }

			});

                        $(".owl-carousel.other-solutions-slider").owlCarousel({				

				autoPlay: false,

                                margin: 58,

                                loop: false,

				navigation: false,

                                dots: true,

				navigationText: false,

				pagination: false,

                                navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],

                                responsive:{

                                    0:{     

                                        items:1, 

                                        nav:true 

                                    },  

                                    600:{ 

                                        items:2,  

                                        nav:false    

                                    },   

                                    1000:{ 

                                        items:4,  

                                        nav:false 

                                        

                                    }

                                }

			});

                    

                    $(".owl-carousel.content-slider-with-controls").owlCarousel({

				singleItem: true,

				autoPlay: false,

				navigation: true,

                                dots:false,

                                autoHeight: false,

				navigationText: false,

				pagination: true,

                                navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],

                                responsive:{

                                    0:{     

                                        items:1, 

                                        nav:true 

                                    },  

                                    600:{ 

                                        items:1,  

                                        nav:true    

                                    },   

                                    1000:{ 

                                        items:1,  

                                        nav:true 

                                        

                                    }

                                }

			});

			

			$(".owl-carousel.content-slider-with-controls-bottom").owlCarousel({

                                loop:false,

                                margin:10,

                                 animateOut: 'fadeOut',

                                 animateIn: 'fadeIn',

                                navigationText: false,

                                responsiveClass:true,

                                navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],

                                responsive:{

                                    0:{     

                                        items:1, 

                                        nav:true 

                                    },  

                                    600:{ 

                                        items:1,  

                                        nav:true    

                                    },   

                                    1000:{ 

                                        items:1,  

                                        nav:true 

                                        

                                    }

                                }



			});

                        $(".main-solution-gallery").owlCarousel({				

				autoPlay: true,

                                autoplayTimeout:2000,

                                loop: true,

				navigation: true,

                                dots:false,

				navigationText: true,

				pagination: true,

                                navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],

                                responsive:{

                                    0:{     

                                        items:1, 

                                        nav:true 

                                    },  

                                    600:{ 

                                        items:1,  

                                        nav:true    

                                    },   

                                    1000:{ 

                                        items:1,  

                                        nav:true,

                                        autoPlay: true,

                                        

                                    }

                                }

			});

                        

                        $(".main-industry-gallery").owlCarousel({				

				autoPlay: true,

                                autoplayTimeout:2000,

                                loop: true,

				navigation: true,

                                dots:false,

				navigationText: true,

				pagination: true,

                                navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],

                                responsive:{

                                    0:{     

                                        items:1, 

                                        nav:true 

                                    },  

                                    600:{ 

                                        items:1,  

                                        nav:true    

                                    },   

                                    1000:{ 

                                        items:1,  

                                        nav:true,

                                        autoPlay: true,

                                        

                                    }

                                }

			});

                        

                        $(".brand-gallery").owlCarousel({				

				autoPlay: true,

                                margin: 28,

                                loop: true,

                                fluidSpeed:3000,                                

				navigation: false,

                                dots:false,

				navigationText: true,

				pagination: true,

                                navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],

                                responsive:{

                                    0:{     

                                        items:1, 

                                        nav:true 

                                    },  

                                    600:{ 

                                        items:3,  

                                        nav:true    

                                    },   

                                    1000:{ 

                                        items:4,  

                                        nav:true,

                                        autoPlay: true

                                        

                                    }

                                }

			});

                        

                        $("#home_featured_carousel.owl-carousel.owl-theme").owlCarousel({

                                loop:true,

                                margin:10,

                                navigationText: false,

                                responsiveClass:true,

                                navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],

                                responsive:{

                                    0:{     

                                        items:1, 

                                        nav:true 

                                    },  

                                    600:{ 

                                        items:1,  

                                        nav:true    

                                    },   

                                    1000:{ 

                                        items:1,  

                                        nav:true 

                                        

                                    }

                                }



			});

                          $(".image-carousel.owl-carousel.owl-theme").owlCarousel({

                                loop:true,

                                margin:10,

                                autoPlay: true,

                                navigationText: false,

                                responsiveClass:true,

                                navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],

                                responsive:{

                                    0:{     

                                        items:1, 

                                        nav:true 

                                    },  

                                    600:{ 

                                        items:1,  

                                        nav:false    

                                    },   

                                    1000:{ 

                                        items:1,  

                                        nav:false 

                                        

                                    }

                                }



			});

                        $('.owl-carousel').owlCarousel({

                                items: 1,

                                loop: false,

                                center: true,

                                margin: 10,

                                callbacks: true,

                                dots: true,

                                autoHeight: true,

                                animateOut: 'fadeOut',

                                navigationText: false,

                                URLhashListener: true,

                                autoplayHoverPause: true,

                                startPosition: 'URLHash',

                                autoplayHoverPause:false,

                                navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],

                                responsive:{

                                                    0:{     

                                                        items:1, 

                                                        nav:true 

                                                    },  

                                                    600:{ 

                                                        items:1,  

                                                        nav:true    

                                                    },   

                                                    1000:{ 
                                                        items:1,  
                                                        nav:true 
                                                    }
                                                }
                                });
		};                               

                

            

		/* ---------------------- Animations ------------------------- */

		if (($("[data-animation-effect]").length>0) && !Modernizr.touch) {
			$("[data-animation-effect]").each(function() {
				var item = $(this),
				animationEffect = item.attr("data-animation-effect");
				if(Modernizr.mq('only all and (min-width: 768px)') && Modernizr.csstransitions) {
					item.appear(function() {
						if(item.attr("data-effect-delay")) item.css("effect-delay", delay + "ms");
						setTimeout(function() {
							item.addClass('animated object-visible ' + animationEffect);
						}, item.attr("data-effect-delay"));
					}, {accX: 0, accY: -130});
				} else {
					item.addClass('object-visible');
				}
			});
		};
		/* ------------------------Isotope filters------------------------ */

		if ($('.isotope-container').length>0 ||$('.blog-wrapper').length>0 || $('.masonry-grid').length>0 || $('.masonry-grid-fitrows').length>0) {

			

				$('.masonry-grid').isotope({

					itemSelector: '.masonry-grid-item',

					layoutMode: 'masonry'

				});

				$('.masonry-grid-fitrows').isotope({

					itemSelector: '.masonry-grid-item',

					layoutMode: 'fitRows'

				});

				$('.isotope-container').fadeIn();

				var $container = $('.isotope-container').isotope({

					itemSelector: '.isotope-item',

					layoutMode: 'masonry',

					transitionDuration: '0.6s',

					filter: ".Solid"

				});

                                

                                var $container2 = $('.blog-wrapper');

                                        $container2.isotope({

                                                itemSelector: '.blog-item',

                                                layoutMode: 'fitRows'

                                        });

                                

                                

				// filter items on button click

				$('.filters').on( 'click', 'ul.nav li a', function() {

					var filterValue = $(this).attr('data-filter');

					$(".filters").find("li.active").removeClass("active");

					$(this).parent().addClass("active");

					$container.isotope({filter: filterValue});

					return false;

				});

                                

                                $('.filters2').on( 'click', 'ul.nav li a', function() {

					var filterValue = $(this).attr('data-filter');

					$(".filters2").find("li.active").removeClass("active");

					$(this).parent().addClass("active");

					$container.isotope({filter: filterValue});

					return false;

				});

			

		};

                

                                

                                 $(".ec-list > .expanded > a").click(function() {

                                    var e = $(this).next(".sub-menu")

                                      , a = ".ec-list > li.expanded > .sub-menu";

                                    0 === $(".page-sidebar-minified").length && ($(a).not(e).slideUp(function() {

                                      $(this).closest("li").removeClass("open");

                                     

                                    }),

                                    $(e).slideToggle(function() {

                                      var e = $(this).closest("li");

                                      $(e).hasClass("open") ? $(e).removeClass("open") : $(e).addClass("open");

                                       $(this).children(':first-child').addClass('active');

                                    }))

                                  }),

                                  $(".ec-list > .expanded .sub-menu li.expanded > a").click(function() {

                                    if (0 === $(".page-sidebar-minified").length) {

                                      var e = $(this).next(".sub-menu");

                                      $(e).slideToggle()

                                    }

                                  });



                

                $(window).scroll(function() {

                   

                });

                function viewcheck() {

                    var e = r.height(),

                        t = r.scrollTop(),

                        n = t + e;

                    $.each(o, function() {

                        var e = $(this),

                            i = e.outerHeight(),

                            o = e.offset().top,

                            r = o + i;

                        r >= t && n >= o ? e.addClass("in-view") : e.removeClass("in-view")

                    })

                }

                var o = $(".animation-elemens"),

                        r = $(window);

                    r.on("scroll resize", viewcheck), r.trigger("scroll")

                    







		// Fixed header

		//-----------------------------------------------

		var	headerHeight = $("header.header.fixed").outerHeight();

		$(window).scroll(function() {

                    

			if (($(".header.fixed").length > 0)) { 

				if(($(this).scrollTop() > headerHeight) && ($(window).width() > 767)) {

					$("body").addClass("fixed-header-on");

					$(".header.fixed").addClass('animated object-visible fadeInDown');

                                        $(".industry-food-machine-navigation").addClass('animated object-visible fadeInDown');

                                        $(".industry-food-machine-navigation").css("top",(headerHeight)+"px");

					if (!($(".header.transparent").length>0)) {

						if ($(".banner:not(.header-top)").length>0) {

							$(".bannerd").css("marginTop", (headerHeight)+"px");

                                                       

						} else if ($(".page-intro").length>0) {

							$(".page-intro").css("marginTop", (headerHeight)+"px");

						} else if ($(".page-top").length>0) {

							$(".page-top").css("marginTop", (headerHeight)+"px");

						} else {

							$("section.main-container").css("marginTop", (headerHeight)+"px");

						}

					}

				} else {

					$("body").removeClass("fixed-header-on");

					$("section.main-container").css("marginTop", (0)+"px");

					$(".banner").css("marginTop", (0)+"px");

					$(".page-intro").css("marginTop", (0)+"px");

					$(".page-top").css("marginTop", (0)+"px");

					$(".header.fixed").removeClass('animated object-visible fadeInDown');

                                         $(".industry-food-machine-navigation").removeClass('animated object-visible fadeInDown');

                                         $(".industry-food-machine-navigation").css("top",(0)+"px");

				}

			};

		});

                

                

                if ((Modernizr.mq('only all and (min-width: 768px) and (max-width:991px)') && !Modernizr.touch) || $("html.ie8").length>0) {

                    

                    

                };

                var $window = $(window);

                $window.resize(function() {

                    

                    if(($window.width() >= 768)&&($window.width() <= 991)) {

                    var	bannerheight = $(".pace .hidden-lg").outerHeight();

                    $(".pace").css("height", (bannerheight)+"px");

                    

                    

                    } else {

                        $(".pace").removeAttr("style");

                        

                    }

                });





		// Contact forms validation

		//-----------------------------------------------		

		if($("#contact-form").length>0) {
			$("#contact-form").validate({
				// debug: true,
				errorPlacement: function(error, element) {
					error.insertBefore( element );
				},
				onkeyup: false,
				onclick: false,
				rules: {
					name: {
						required: true,
						minlength: 2
					},
                                        phone: {
						required: true,
						number: true
					},
					email: {
						required: true,
						email: true
					},
					company: {
						required: true
					},
					message: {
						required: true,
						minlength: 10
					}
				},
				messages: {
					name: {
						required: "Please specify your name",
						minlength: "Your name must be longer than 3 characters"
					},
                                        phone: {
						required: "Please specify your phone no"
					},

					email: {
						required: "We need your email address to contact you",
						email: "Please enter a valid email address e.g. name@domain.com"
					},
					company: {
						required: "Please enter a company name"
					},
					message: {
						required: "Please enter a message",
						minlength: "Your message must be longer than 10 characters"
					}
				},
				errorElement: "span",
				highlight: function (element) {
					$(element).parent().removeClass("has-success").addClass("has-error");
					$(element).siblings("label").addClass("hide"); 
				},
				success: function (element) {
					$(element).parent().removeClass("has-error").addClass("has-success");
					$(element).siblings("label").removeClass("hide"); 
				}
			});
		};

                

                    $("#career-form2").validate({
                        submitHandler: function(form) {
                            $('#career-submit').button("loading");
$('#pleasewait').removeClass('d-none').addClass('d-inline-block');
                            $('#career-submit').attr('disabled','disabled');
                            var formData = new FormData(form);
                                $.ajax({
                                    type: $(form).attr('method'),
                                    url: $(form).attr('action'),
                                    data: formData,
                                    contentType: false,
                                    cache: false,
                                    processData:false,
                                    dataType : 'json',
                                    mimeType: "multipart/form-data",
                                    success: function (data) {
                                             if(data.error == 1) {
                                                $('#applynow .alert-danger').removeClass('d-none').addClass('d-block').html(data['msg']);
 $('#career-submit').removeAttr('disabled');
                                                $('#pleasewait').removeClass('d-inline-block').addClass('d-none');
                                                } else {
                                                    $('#applynow .alert-success').removeClass('d-none').addClass('d-block').html(data['msg']);
$('#applynow .alert-danger').removeClass('d-block').addClass('d-none').html(data['msg']);
                                                    console.log(data);
                                                    $("#career-form2").trigger("reset");
                                                    $('#career-submit').removeAttr('disabled');
$("#selectedfile").html("No File Selected");
                                                    $('#applynow form.form-horizontal').addClass('d-none');
$('#pleasewait').removeClass('d-inline-block').addClass('d-none');
                                                }
                                            }
                                        });
                                    },
				errorPlacement: function(error, element) {
					error.insertBefore( element );
				},
				onkeyup: false,
				onclick: false,
				rules: {
					nameapl: {
						required: true,
						minlength: 2
					},
                                        contact: {
						required: true,
						number: true,
                                                minlength: 10
					},
					email: {
						required: true,
						email: true
					},
                                        cv: {
						required: true
					}
				},
				messages: {
					nameapl: {
						required: "Please specify your name",
						minlength: "Your name must be longer than 2 characters"
					},
                                        contact: {
						required: "Please specify your phone no",
                                                minlength: "Please enter at least 10"
					},
					email: {
						required: "We need your email address to contact you",
						email: "Please enter a valid email address e.g. name@domain.com"
					},
                                        cv: {
						required: "Please Select CV"
					}
				},
				errorElement: "span",
				highlight: function (element) {
					$(element).parent().removeClass("has-success").addClass("has-error");
					$(element).siblings("label").addClass("hide"); 
				},
				success: function (element) {
					$(element).parent().removeClass("has-error").addClass("has-success");
					$(element).siblings("label").removeClass("hide"); 
				}
			});

                    $('.slider-for').slick({

                    slidesToShow: 1,

                    slidesToScroll: 1,

                    arrows: false,

                    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",

                                nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",

                    fade: true,

                    asNavFor: '.slider-nav'

                    });

                    $('.slider-nav').slick({   

                    slidesToShow: 10,

                    slidesToScroll: 1,

                    infinite: false,

                    asNavFor: '.slider-for',

                    dots: false,

                    centerMode: true,

                    centerPadding: '60px',

                    focusOnSelect: true,

                    responsive: [

                        {

                        breakpoint: 1400,

                        settings: {

                            arrows: false,

                            centerMode: true,

                            centerPadding: '40px',

                            slidesToShow: 8

                        }

                        },

                        {

                        breakpoint: 1000,

                        settings: {

                            arrows: false,

                            centerMode: true,

                            centerPadding: '40px',

                            slidesToShow: 5

                        }

                        },

                        {

                        breakpoint: 768,

                        settings: {

                            arrows: false,

                            centerMode: true,

                            centerPadding: '5px',

                            slidesToShow: 4

                        }

                        },

                        {

                        breakpoint: 480,

                        settings: {

                            arrows: true,

                            centerMode: true,

                            centerPadding: '5px',

                            slidesToShow: 3

                        }

                        }

                    ]

                    });

                    



                    $(".scrollDown").on('click', function(event) {

                        $("body,html").animate({scrollTop:200},800);

                    });

  



		//Scroll Spy

		//-----------------------------------------------

		if($(".scrollspy").length>0) {

			$("body").addClass("scroll-spy");

			if($(".fixed.header").length>0) {

				$('body').scrollspy({ 

					target: '.scrollspy',

					offset: 85

				});

			} else {

				$('body').scrollspy({ 

					target: '.scrollspy',

					offset: 20

				});

			}

		}



		//Scroll totop

		//-----------------------------------------------

		$(window).scroll(function() {

			if($(this).scrollTop() != 0) {

				$(".scrollToTop").fadeIn();	

                               

			} else {

				$(".scrollToTop").fadeOut();

			}

		});

		

		$(".scrollToTop").click(function() {

			$("body,html").animate({scrollTop:0},800);

		});

		

		if($(".modal").length>0) {

			$(".modal").each(function() {

				$(".modal").prependTo( "body" );

			});

		}



		$(".btn-remove").click(function() {

			$(this).closest(".remove-data").remove();

		});



		$('.header-top .dropdown-menu input').click(function(e) {

			e.stopPropagation(); 

		});

                

                $(window).on('hashchange', function() {                    

                $('html, body').animate({

                    scrollTop: $(window.location.hash).offset().top-150 + 'px'

                }, 800);

                console.log("Haschange");

            });

            

            

            

                if(window.location.hash){

                $('html, body').animate({

                        scrollTop: $(window.location.hash).offset().top-210 + 'px'

                    }, 800, 'swing');

                    console.log("Haschange Ready");  

                }

                

                $(".applynow").click(function () {

                    $("body").addClass("modal-open");

                    $("#myModal").addClass("in");

                    $("#myModal").css('display', 'block');

								

                   

               });

               $("#myModal .modal-header .close").click(function () {

                    $("body").removeClass("modal-open");

                    $("#myModal").removeClass("in");

                    $("#myModal").css('display', 'none');                                       

               });                               





		if ($("#offcanvas").length>0) {

			$('#offcanvas').offcanvas({

				disableScrolling: false,

				toggle: false

			});

		};



		if ($("#offcanvas").length>0) {

			$('#offcanvas [data-toggle=dropdown]').on('click', function(event) {

			// Avoid following the href location when clicking

			event.preventDefault(); 

			// Avoid having the menu to close when clicking

			event.stopPropagation(); 

			// close all the siblings

			$(this).parent().siblings().removeClass('open');

			// close all the submenus of siblings

			$(this).parent().siblings().find('[data-toggle=dropdown]').parent().removeClass('open');

			// opening the one you clicked on

			$(this).parent().toggleClass('open');

			});

		};   

                

                var hash = window.location.hash;

                    hash && $('ul.nav a[href="' + hash + '"]').tab('show');



                    $(window).on('hashchange', function() {

                        var hash = window.location.hash;

                    hash && $('ul.nav a[href="' + hash + '"]').tab('show');

                    });

                    

                                    $("#get-spare-quote").validate({

                    submitHandler: function(form) { 

                        $('.quote-button').button("loading");

                            $.ajax({

                                    type: "POST",

                                    url: "get-spare-quote.php",

                                    data: {

                                            "name": $("#get-spare-quote #name").val(),

                                            "company": $("#get-spare-quote #company").val(),

                                            "email": $("#get-spare-quote #email").val(),

                                            "phone": $("#get-spare-quote #phone").val(),                                                       

                                            "message": $("#get-spare-quote #message").val()

                                    },

                                    dataType: "json",

                                    success: function (data) {

                                             if(data.error == 1) {

                                                $('.spare-alerts .alert-danger').removeClass('d-none').addClass('d-block').html(data['msg']);

                                                } else {

                                                $('.spare-alerts .alert-success').removeClass('d-none').addClass('d-block').html(data['msg']);

                                                console.log(data);

                                                $("#get-spare-quote").trigger("reset");

                                                }

                                    }

                            });

                    },



                    // debug: true,

                    errorPlacement: function(error, element) {

                            error.insertBefore( element );

                    },

                    onkeyup: false,

                    onclick: false,

                    rules: {

                            name: {

                                    required: true,

                                    minlength: 4

                            },

                            phone: {

                                    required: true,

                                    number: true

                            },

                            email: {

                                    required: true,

                                    email: true

                            },                            

                            company: {

                                    required: true

                            },                            

                            message: {

                                    required: true,

                                    minlength: 50

                            }

                    },

                    messages: {

                            name: {

                                    required: "Please specify your name",

                                    minlength: "Your name must be longer than 4 characters"

                            },

                            phone: {

                                    required: "Please specify your phone no"

                            },

                            email: {

                                    required: "We need your email address to contact you",

                                    email: "Please enter a valid email address e.g. name@domain.com"

                            },                            

                            company: {

                                    required: "Please enter a company"

                            },                            

                            message: {

                                    required: "Please enter a message",

                                    minlength: "Your message must be longer than 50 characters"

                            }				

                    },

                    errorElement: "span",

                    highlight: function (element) {

                            $(element).parent().removeClass("has-success").addClass("has-error");

                            $(element).siblings("label").addClass("hide"); 

                    },

                    success: function (element) {

                            $(element).parent().removeClass("has-error").addClass("has-success");

                            $(element).siblings("label").removeClass("hide"); 

                    }

            });

          

                

                $("#emf-form2").validate({
                    /* debug: true,*/
                    errorPlacement: function(error, element) {
                            error.insertBefore( element );
                    },
                    onkeyup: false,
                    onclick: false,
                    rules: {
                            CompanyName: {
                                    required: true,
                                    minlength: 4
                            },
                            ContactPerson:{
                                required:true
                            },
                            City: {
                              required: true  
                            },
                            Country: {
                                required:true
                            },
                            MobileNo: {
                                    required: true,
                                    number: true
                            },
                            Email: {
                                    required: true,
                                    email: true
                            },
                            ProductName: {
                                    required: true
                            },    
                            Quantity:{
                                required:true

                            },

                            OtherInformation: {

                                    required: true,

                                    minlength: 50

                            }

                    },

                    messages: {
                            CompanyName: {
                                    required: "Please specify your company name",
                                    minlength: "Your name must be longer than 4 characters"
                            },
                            ContactPerson:{
                                required: "Please specify contact person"
                            },
                            City: {
                              required: "Please specify your city"
                            },
                            Country: {
                                required:"Please specify your country"
                            },
                            MobileNo: {
                                    required: "Please specify your phone no"
                            },
                            Email: {
                                    required: "We need your email address to contact you",
                                    email: "Please enter a valid email address e.g. name@domain.com"
                            },
                            ProductName: {
                                    required: "Please specify product name"
                            },  
                            Quantity: {
                                required:"Please Enter Quantity"
                            },
                            OtherInformation: {
                                    required: "Please enter a message",
                                    minlength: "Your message must be longer than 50 characters"
                            },
                            captcha:{
                                required:"Please enter correct captcha"
                            }
                    },
                    errorElement: "span",
                    highlight: function (element) {
                            $(element).parent().removeClass("has-success").addClass("has-error");
                            $(element).siblings("label").addClass("hide"); 
                    },
                    success: function (element) {
                            $(element).parent().removeClass("has-error").addClass("has-success");
                            $(element).siblings("label").removeClass("hide"); 
                    }
            });

             $("#map-form").validate({



                    // debug: true,

                    errorPlacement: function(error, element) {

                            error.insertBefore( element );

                    },

                    onkeyup: false,

                    onclick: false,

                    rules: {                            

                            ContactPerson:{

                                required:true

                            },

                            MobileNo: {

                                    required: true,

                                    number: true

                            },

                            Email: {

                                    required: true,

                                    email: true

                            }

                    },

                    messages: {

                            ContactPerson:{

                                required: "Please specify contact person"

                            },
                            MobileNo: {
                                    required: "Please specify your phone no"
                            },
                            Email: {
                                    required: "We need your email address to contact you",
                                    email: "Please enter a valid email address e.g. name@domain.com"
                            }
                    },
                    errorElement: "span",
                    highlight: function (element) {
                            $(element).parent().removeClass("has-success").addClass("has-error");
                            $(element).siblings("label").addClass("hide"); 
                    },
                    success: function (element) {
                            $(element).parent().removeClass("has-error").addClass("has-success");
                            $(element).siblings("label").removeClass("hide"); 
                    }
            });

            $('.applyopenings').click(function(){    
                var positionname= $(this).attr('jobname');
                $('#applynow').modal('show');
                $('#applynow form.form-horizontal').removeClass('d-none');
                $('#applynow #jobposition').val(positionname);
                $('#jobpositionhead').html(positionname);
$("#MessageSent").removeClass('d-block').addClass('d-none');
$("#MessageNotSent").removeClass('d-block').addClass('d-none');
$("#career-form2").trigger("reset");
                $("#career-form2 .error").remove();
                $('.has-error').removeClass("has-error");
$("#selectedfile").html("No File Selected");
            });
	}); // End document ready        

})(this.jQuery);