$(document).ready( function() {
  // your code here
  // Target the audio tag

  $('.instrument').on('click', 'button', function(note = null) {
    if ($(this).hasClass('c') == true) {
      note = document.getElementById('cAudio');
    } else if ($(this).hasClass('d') == true) {
      note = document.getElementById('dAudio');
    } else if ($(this).hasClass('e') == true) {
      note = document.getElementById('eAudio');
    } else if ($(this).hasClass('f') == true) {
      note = document.getElementById('fAudio');
    } else if ($(this).hasClass('g') == true) {
      note = document.getElementById('gAudio');
    } else if ($(this).hasClass('a') == true) {
      note = document.getElementById('aAudio');
    } else if ($(this).hasClass('b') == true) {
      note = document.getElementById('bAudio');
    }
    return note.play();
  });


  $('body').keydown(function(event) {
    var note = null;
    switch (event.key) {
      case 'c':
      case 'C':
        note = document.getElementById('cAudio');
        break;
      case 'd':
      case 'D':
        note = document.getElementById('dAudio');
        break;
      case 'e':
      case 'E':
        note = document.getElementById('eAudio');
        break;
      case 'f':
      case 'F':
        note = document.getElementById('fAudio');
        break;
      case 'g':
      case 'G':
        note = document.getElementById('gAudio');
        break;
      case 'a':
      case 'A':
        note = document.getElementById('aAudio');
        break;
      case 'b':
      case 'B':
        note = document.getElementById('bAudio');
        break;
    }
    return note.play();
  });

});
