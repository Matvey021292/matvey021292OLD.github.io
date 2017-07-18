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

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

// Normal Clicks
$(function() {
  $('#responsrightTitle').click(function() {
    $('#show').toggleClass('show-nav');
     return false;
  });

  
});


// Toggle with hitting of ESC
$(document).keyup(function(e) {
  if (e.keyCode == 27) {
   $('body').removeClass('show-nav');
  }
});
$(function() {
  $('#responsleftTitle').click(function() {
    $('#show_block').toggleClass('show_block');
     return false;
  });
 
  
});


// Toggle with hitting of ESC
$(document).keyup(function(e) {
  if (e.keyCode == 27) {
   $('body').removeClass('show_block');
  }
});










