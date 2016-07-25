$(document).ready(function () {
  // Escribe tu código aquí

  $('#tab1').show()

  /*

  $('.tabs > li:nth-child(1)').click(function(){ $('#tab2').hide(); $('#tab3').hide(); $('#tab1').show();  $('.tabs > li:nth-child(1)').addClass('active'); $('.tabs > li:nth-child(2)').removeClass('active'); $('.tabs > li:nth-child(3)').removeClass('active'); });

  $('.tabs > li:nth-child(2)').click(function(){ $('#tab1').hide(); $('#tab3').hide(); $('#tab2').show();  $('.tabs > li:nth-child(2)').addClass('active'); $('.tabs > li:nth-child(1)').removeClass('active'); $('.tabs > li:nth-child(3)').removeClass('active'); });

  $('.tabs > li:nth-child(3)').click(function(){ $('#tab2').hide(); $('#tab1').hide(); $('#tab3').show();  $('.tabs > li:nth-child(3)').addClass('active'); $('.tabs > li:nth-child(1)').removeClass('active'); $('.tabs > li:nth-child(2)').removeClass('active'); });
  */

  $('.tabs > li').click(function(){ 
    console.log(this);
    $('.tabs > li').removeClass('active'); 
    $(this).addClass('active');  
    $('.tab').hide(); 
    id = $(this).children().attr('href');
    $(id).show();
  });

});
