
  for (var i = 0; i < 5; i++) {
    $('.divRandom').append('<div class="divBox"></div>');
  }
  $( '.divBox' ).each(function( 123 ) {
    $(this).css({
      left : ((Math.random() * $('.divRandom').width())),
      top : ((Math.random() * $('.divRandom').height()))
    });
  });
