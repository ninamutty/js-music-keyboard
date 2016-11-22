$(document).ready( function() {
  $('.instrument').on('click', 'button', function() {
    var myclass = this.className.slice(-1);

    // Without jQuery
    // var id = myclass + 'Audio';
    // var note = document.getElementById(id);
    // note.play();
    // note.currentTime = 0;

    // With jQuery
    var id = "#" + myclass + 'Audio';
    $(id)[0].play();
    $(id)[0].currentTime = 0;
  });


  $('body').keydown(function(event) {
    var myclass = event.key.toLowerCase();

    // Without jQuery
    // id = myclass + 'Audio';
    // var note = document.getElementById(id);
    // note.play();
    // note.currentTime = 0;

    // With jQuery
    var id = "#" + myclass + 'Audio';
    $(id)[0].play();
    $(id)[0].currentTime = 0;
  });

});
