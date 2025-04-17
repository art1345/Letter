console.log("HELP");
$(function() {
  $("#git_photo").on({
    mouseenter: function() {
      $(this).attr('src', 'img/letter_p.png');
    },
    mouseleave: function() {
      $(this).attr('src', 'img/letter.png');
    }
  });

  $("#bash_photo").on({
    mouseenter: function() {
      $(this).attr('src', 'img/letter_p.png');
    },
    mouseleave: function() {
      $(this).attr('src', 'img/letter.png');
    }
  });

  $("#github_photo").on({
    mouseenter: function() {
      $(this).attr('src', 'img/letter_p.png');
    },
    mouseleave: function() {
      $(this).attr('src', 'img/letter.png');
    }
  });
});