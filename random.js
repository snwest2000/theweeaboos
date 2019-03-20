function randomDiv() {
  for (var i = 0; i < 5; i++) {
    $('.divRandom').append('<div class="divBox"></div>');
  }
  $( '.divBox' ).each(function( index ) {
    $(this).css({
      left : ((Math.random() * $('.divRandom').width())),
      top : ((Math.random() * $('.divRandom').height()))
    });
  });
}
