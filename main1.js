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

let carts = document.querySelectorAll('.add-cart');

		let products = [
			{
				name : 'Xoài',
				tag : 'xoai',
				price : 17,
				inCart : 0
			},
			{
				name : 'Chuối',
				tag : 'chuoi',
				price : 15,
				inCart : 0
			},
			{
				name : 'Lựu',
				tag : 'luu',
				price : 35,
				inCart : 0
			},
			{
				name : 'a',
				tag : 'a.b',
				price : 45,
				inCart : 0
			}
		];

		for (let i = 0; i < carts.length; i++) {
			carts[i].addEventListener('click', () => {
				cartNumbers(products[i]);
				totalCost(products[i]);
			})
		}

		function onLoadCartNumbers() {
			let productNumbers = localStorage.getItem('cartNumbers');

			if( productNumbers ) {
				document.querySelector('.cart sup').textContent = productNumbers;
			}
		}

		function cartNumbers(product) {
			
			let productNumbers = localStorage.getItem('cartNumbers');
			

			productNumbers = parseInt(productNumbers);
			
			if( productNumbers ) {

				localStorage.setItem('cartNumbers', productNumbers + 1);
				document.querySelector('.cart sup').textContent = productNumbers + 1;
				
			} else {
				localStorage.setItem('cartNumbers', 1);
				document.querySelector('.cart sup').textContent = 1;
			}

			setItems(product);
		}

		function setItems(product) {
			let cartItems = localStorage.getItem('productsInCart');
			cartItems = JSON.parse(cartItems);
			
			if( cartItems != null) {

				if(cartItems[product.tag] == undefined) {
					cartItems = {
						...cartItems,
						[product.tag] : product
					}
				}
				cartItems[product.tag].inCart += 1;
			} else {
				product.inCart = 1;

				cartItems = {
					[product.tag]: product
				}
			}
			localStorage.setItem("productsInCart", JSON.stringify(cartItems));
		}

		function totalCost(product) {
			
			let cartCost = localStorage.getItem('totalCost');
			
			console.log("cost is", cartCost);

			if(cartCost != null) {
				cartCost = parseInt(cartCost);
				localStorage.setItem("totalCost", cartCost + product.price);
			} else {
				localStorage.setItem("totalCost", product.price);
			}
		}

		function displayCart() {
			let cartItems = localStorage.getItem("productsInCart");
			cartItems = JSON.parse(cartItems);
			let productContainer = document.querySelector(".products");
			let cartCost = localStorage.getItem('totalCost');

			if(cartItems && productContainer) {
				productContainer.innerHTML = '';
				Object.values(cartItems).map(item => {
					productContainer.innerHTML += `

					<div class="product bt">
						<img src="images/${item.tag}.jpg" class="img-product">
						<span class="product-name">${item.name}</span>
					</div>

					<div class="price bt">
						<span class="product-price">${item.price}.000đ</span>
					</div>

					<div class="quantity bt">
						<span class="dc"><button onclick="decrease()" class="quantity-dc">-</button></span>
						<span class="product-quantity">${item.inCart}</span>
						<span class="ic"><button onclick="increase()" class="quantity-ic">+</button></span>
					</div>

					<div class="total bt">
						<span class="product-total">${item.inCart * item.price}.000đ</span>
					</div>

					`

				});

				productContainer.innerHTML += `
					<div class="sum">
						<h4 class="tongcong">Thành tiền : </h4>
						<h4 class="totalprice">${cartCost}.000đ</h4>
					</div>
					
					<div class="">
						<button class="btn btn-success btn-pay">Tiến hành đặt hàng</button>
					</div>

				`

			}
		}

		onLoadCartNumbers();
		displayCart();


