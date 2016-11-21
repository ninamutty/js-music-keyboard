$(document).ready( function() {
  // your code here
  // Target the audio tag

  $('.instrument').on('click', 'button', function() {
    var myclass = this.className.slice(-1);
    id = myclass + 'Audio';
    var note = document.getElementById(id);

    note.play();
    note.currentTime = 0;
  });


  $('body').keydown(function(event) {
    var myclass = event.key.toLowerCase();
    id = myclass + 'Audio';
    var note = document.getElementById(id);

    note.play();
    note.currentTime = 0;
  });

});
