$('.pofol_box > li > a').on('mouseover focus', function(){
    $(this).children('figure').addClass('pofol_hover');
  });

  $('.pofol_box > li > a').on('mouseleave', function(){
    $(this).children('figure').removeClass('pofol_hover');
  });
