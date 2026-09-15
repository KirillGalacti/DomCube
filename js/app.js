// Моадльное на просмотр дома
$( document ).ready(function() {
  $('.btn_slider').on('click', function() {
      $('.modal-wrapper').toggleClass('open');
      $('.slider_button').toggleClass('blur-it');
      return false;
  });
  $('.head').on('click', function (){
      $('.modal-wrapper').removeClass('open');
  })
});

$( document ).ready(function() {
  $('.btn_choose').on('click', function() {
      $('.modal-wrapper').toggleClass('open');
      $('.button_choose').toggleClass('blur-it');
      return false;
  });
  $('.head').on('click', function (){
      $('.modal-wrapper').removeClass('open');
  })
});

$( document ).ready(function() {
  $('#js_btnn').on('click', function() {
      $('.modal-wrapper').toggleClass('open');
      $('.btn_layout').toggleClass('blur-it');
      return false;
  });
  $('.head').on('click', function (){
      $('.modal-wrapper').removeClass('open');
  })
});

//Модальное на каталог

$(document).ready(function() {
  $('.form_sub').click(function(){
      $.ajax({
          type: "POST", //указываем что метод отправки POST
          url:"/sendform.php", // указываем адрес обработчика
          data:$('.form_modal_window').serialize(), //указываем данные которые будут передаваться обработчику
        /* Мы указываем id формы - $('#callbacks'), и методом serialize() забираем значения всех полей. */
          error:function(){$('#erconts').html("Введите данные!");},
        /* если произойдет ошибка в элементе с id erconts выведется сообщение*/
          beforeSend: function() {
              $('#erconts').html("<p style='color: orangered;'>Отправляем данные...</p>");
              $('.form_sub').prop("disabled", true);
          },
          success: function(msg){
            /* В случае удачной обработки и отправки выполнится следующий код*/
              $(".form_sub").prop("disabled", true);
              window.location.href = $('.thank_url').val();
              $('.modal-wrapper').fadeOut();
              $('form').trigger('reset')
          }
      });
      return false;
  });
});

$("#phone").mask("+7 (999) 999-99-99")

// jQuery(document).ready(function($) {
//   $(".navbar-toggler").click(function(){
//    $(".img_header").fadeOut();
//     });
//  });

document.addEventListener("DOMContentLoaded", hiddenCloseclick());
  document.getElementById('navbar-toggler').addEventListener("click", hiddenCloseclick);
	function hiddenCloseclick() {
	let x = document.getElementById('img_header');
      if (x.style.display == "block"){
	  x.style.display = "none";
	  } else {
	 x.style.display = "block"}
    };
