/*-------------------------------------  
	    
Project:	i-Fact
Version:	1.0.0
Author:     Webstrot
Copyright © 2019-20

---------------------------------------*/
(function($) {
    "use strict";
    var tpj = jQuery;
    var revapi24;

  	// preloader js //
	jQuery(window).on('load', function() {
        jQuery("#status").fadeOut();
        jQuery("#preloader").delay(350).fadeOut("slow");
    });


    // on ready function
    jQuery(document).ready(function($) {	
	
	document.documentElement.className="js";var supportsCssVars=function(){var e,t=document.createElement("style");return t.innerHTML="root: { --tmp-var: bold; }",document.head.appendChild(t),e=!!(window.CSS&&window.CSS.supports&&window.CSS.supports("font-weight","var(--tmp-var)")),t.parentNode.removeChild(t),e};supportsCssVars()||alert("Please view this demo in a modern browser that supports CSS Variables.");
		
	// scroll funtion
	
	(function() {
			function getRandomInt(min, max) {
				return Math.floor(Math.random() * (max - min + 1)) + min;
			}

			[].slice.call(document.querySelectorAll('.isolayer')).forEach(function(el) {
				new IsoGrid(el, {
					type : 'scrollable',
					transform : 'translateX(17vw) translateY(550px) rotateX(42deg) rotateZ(0deg)',
					stackItemsAnimation : {
						properties : function(pos) {
							return {
								translateZ: (pos+1) * 50,
								rotateZ: getRandomInt(-3, 3)
							};
						},
						options : function(pos, itemstotal) {
							return {
								type: dynamics.bezier,
								duration: 500,
								points: [{"x":0,"y":0,"cp":[{"x":0.2,"y":1}]},{"x":1,"y":1,"cp":[{"x":0.3,"y":1}]}],
								//delay: (itemstotal-pos-1)*40
							};
						}
					},
					onGridLoaded : function() {
						classie.add(document.body, 'grid-loaded');
					}
				});
			});
		})();

	
	// land	  
				  
	$('.landing-item-inner').hover(function()
	{
		var $img = $(this).find('img'),
		imgHtoAnimate = $img.height() - $(this).height();
		$(this).find('img').stop().animate({marginTop: -(imgHtoAnimate)}, 5000);
	},
	function()
	{
		$(this).find('img').stop().animate({marginTop: 0},2500);
	});
	
 });

})(jQuery);	