$(document).ready(function(){
			$("#myform").on('submit', function(event){
				var text = $("#mytext").val(); //contenido del textarea
				event.preventDefault();
				$("#board").append( //agregar notas dinamicamente con el boton
					'<div class="note">'
					+ '<div class="pin">'
					+ '</div>'
					+ text
					+ '</div>')					
			});

			//$('.pin').on('click', function(){ >>sin delegacion
			$('#board').on('click', '.pin', function(){
				event.stopPropagation(); //no se propaga toggleclass strike
				$(this).parent().fadeOut(900);
			})

			$('#board').on('click', '.note', function(){
				$(this).toggleClass('strike');
			});

});