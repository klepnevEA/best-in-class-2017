		$(function(){

			/*popups*/
			var ev = 'mouseup touchend'

			$('.btn_popup').on(ev, popopOpen);
			$('.close_popup').on(ev, popopClose);


			/*цвет ссылок*/

			$('body').on(ev, colorLinck);
		});


		function popopOpen() {
			var popup = $(this).data('popup');
			$('#' + popup).addClass('active');
		}

		function popopClose() {
			var popup = $(this).data('popup');
			setTimeout(function() {$('#' + popup).removeClass('active')}, 300);
			$('.data_nav').removeClass('active');			
		}		





		function colorLinck(e) {
			if(e.target.dataset.num) {
				var page = e.target.dataset.num;
				console.log(page);

				if(e.target.dataset.num) {
					$('.btn_nav').removeClass('active');
					$('.btn_' + page).addClass('active');                     

					var event = new Event("click");  

					setTimeout(function() {document.getElementById('btn_' + page).dispatchEvent(event)}, 500);		    	

				}
			}
		}



