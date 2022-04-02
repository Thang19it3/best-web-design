const sr =ScrollReveal({
	duration: 1000
});
sr.reveal('.noibat',{
	origin:'bottom',
	distance: '25rem',
	delay: 100
	
});
sr.reveal('#sale',{
	origin:'bottom',
	distance: '25rem',
	delay: 100
	
});
sr.reveal('.jj',{
	origin:'bottom',
	distance: '25rem',
	delay: 100
	
});
sr.reveal('.moinhat',{
	origin:'bottom',
	distance: '0rem',
	delay: 100
	
});
sr.reveal('.noibat',{
	origin:'bottom',
	distance: '0rem',
	delay: 100
	
});
sr.reveal('.jj',{
	origin:'bottom',
	distance: '0rem',
	delay: 100
	
});
sr.reveal('#poster',{
	origin:'bottom',
	distance: '0rem',
	delay: 100
	
});
sr.reveal('.gioithieu',{
	origin:'bottom',
	distance: '0rem',
	delay: 100
	
});
sr.reveal('.pro',{
	origin:'bottom',
	distance: '0rem',
	delay: 100
	
});
sr.reveal('.giaohang',{
	origin:'bottom',
	distance: '0rem',
	delay: 100
	
});
sr.reveal('#dv',{
	origin:'left',
	distance: '10rem',
	delay: 300
	
});
sr.reveal('.a1',{
	origin:'left',
	distance: '10rem',
	delay: 300
	
});
sr.reveal('.dk',{
	origin:'right',
	distance: '0rem',
	delay: 200
	
});
sr.reveal('.at2',{
	origin:'right',
	distance: '0rem',
	delay: 200
	
});


var countDate = new Date("July 30, 2020 00:00:00").getTime();

function newYear(){
	var now = new Date().getTime();
	gap = countDate-now;

	var second = 1000;
	var minute = second * 60;
	var hour = minute * 60;
	var day = hour *24;

	var d = Math.floor(gap /(day));
	var h = Math.floor((gap % (day)) / (hour));
	var m = Math.floor((gap % (hour)) / (minute));
	var s = Math.floor((gap % (minute)) / (second));

	document.getElementById('day').innerText = d;
	document.getElementById('hour').innerText = h;
	document.getElementById('minute').innerText = m;
	document.getElementById('second').innerText = s;
}

setInterval(function(){
	newYear();
},1000)
$(window).on("scroll",function() {
  		// body...
  		if ($(window).scrollTop()) {
  			$('nav').addClass('black1');
  		}
  	})

$(function(){
					let $elm_value = $(".value");
					$('.increase').click(function(){
						let $value_increase = parseInt($elm_value.text());
						if($value_increase <= 1){
							return false;
						}
						$elm_value.text($value_increase -1);
					})
					$('.reduction').click(function(){
						let $value_increase = parseInt($elm_value.text());
						$elm_value.text($value_increase +1);
					})
				})
$(document).ready(function(){
	$("#s1").click(function(){
		
		$("#s1").css("color","yellow");
	});
	$("#s2").click(function(){
		
		$("#s1,#s2").css("color","yellow");
	});
	$("#s3").click(function(){
		
		$("#s1,#s2,#s3").css("color","yellow");
	});
	$("#s4").click(function(){
		
		$("#s1,#s2,#s3,#s4").css("color","yellow");
	});
	$("#s5").click(function(){
		
		$(".fa-star").css("color","yellow");
	});
});
var mybutton = document.getElementById("myBtn");

$(document).on('click', '.btn-buy', function(e){
			e.preventDefault();
			if( $(this).hasClass('disable') ){
				return false;
			}
			$(document).find('.btn-buy').addClass('disable');

			var self = $(this);
			var parent = $(this).parents('.product-grid');
			var cart = $(document).find('#text6');
			var src = parent.find('img').attr('src');
			
			var parTop = parent.offset().top;
			var parLeft = parent.offset().left;

			$('<img />', {
				class: 'img-fly',
				src: src
			}).appendTo('body').css({
				'top'	: parTop,
				'left'	: parseInt(parLeft) + parseInt(parent.width()) - 50
			});

			setTimeout(function(){
				$(document).find('.img-fly').css({
					'top' 	: cart.offset().top,
					'left'	: cart.offset().left
				});

				setTimeout(function(){
					$(document).find('.img-fly').remove();
				
					$(document).find('.btn-buy').removeClass('disable');
				}, 1000);

			}, 500);

		});


var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

