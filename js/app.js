$(document).ready(function(){
    $('select').material_select();
    $('.button-collapse').sideNav({
      menuWidth: 250, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );

  $('#open-search').click(function(){
    $('#search-box').removeClass('hide');
    $('body').addClass('no-scroll');
  });

  $('#close-search').click(function(){
    $('#search-box').addClass('hide');
    $('body').removeClass('no-scroll');
  });

  $('#activate-femme-drop').mouseover(function(){
    $('#femme-drop').removeClass('hide');
  });
  $('#femme-drop').mouseleave(function(){
    $('#femme-drop').addClass('hide');
  });
});