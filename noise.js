$(document).ready( function() {
  $('.instrument').on('click', 'button', function() {
    var myclass = this.className.slice(-1);

    var id = "#" + myclass + 'Audio';
    $(id)[0].play();
    $(id)[0].currentTime = 0;
  });


  $('body').keydown(function(event) {
    var myclass = event.key.toLowerCase();

    var id = "#" + myclass + 'Audio';
    $(id)[0].play();
    $(id)[0].currentTime = 0;
  });

});



///////// Without jQuery /////////////

// $(document).ready( function() {
//   $('.instrument').on('click', 'button', function() {
//     var myclass = this.className.slice(-1);
//     // var id = myclass + 'Audio';
//     // var note = document.getElementById(id);
//     // note.play();
//     // note.currentTime = 0;
//   });
//   $('body').keydown(function(event) {
//     var myclass = event.key.toLowerCase();
//     // id = myclass + 'Audio';
//     // var note = document.getElementById(id);
//     // note.play();
//     // note.currentTime = 0;
//   });
// });
