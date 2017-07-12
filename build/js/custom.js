	$( document ).ready(function() { 
		//$( ".hsldr-container" ).hslider("navBar:false"); // create slider
		$( ".hsldr-container" ).hslider({
		  navBar: true,
		  auto: true,
		  delay: 4000
		});


	});	

	(function(){

		var getTriggerElement = function(el){
			var isCollapse = el.getAttribute('data-collapse');

			if(isCollapse!== null){
				return el;
			}else{
				var isParrentCollapse = el.parentNode.getAttribute('data-collapse');

				return(isParrentCollapse !== null) ? el.parentNode : undefined;
			}
		};
		var collapseClickHundler = function(event){

			var triggerEl = getTriggerElement(event.target);

			if(triggerEl === undefined){

				return false;

			}else{
				event.preventDefault();
			}


			var targetEl = document.querySelector(triggerEl.getAttribute('data-target'));
		if (targetEl) {

			triggerEl.classList.toggle('-active');
			targetEl.classList.toggle('-on');
		}
		};

			document.addEventListener('click',collapseClickHundler,false);
	})(document,window);


$(document).ready(function(){
    $(".button a").click(function(){
        $(".overlay").fadeToggle(200);
       $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
});
$('.overlay').on('click', function(){
    $(".overlay").fadeToggle(200);   
    $(".button a").toggleClass('btn-open').toggleClass('btn-close');
    open = false;
});