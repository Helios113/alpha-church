$(document).ready(function() {
  if ($("#player").length) {
    const player = new Plyr('#player', {settings: ['speed']});
  }
});