// $('.video-list').addClass('mobile-list hide');

function showList() {
  var windowWidth = $(window).width();
  
  if (windowWidth >= 1200) {
      $('.video-list').removeClass('mobile-list hide');
    } else if (windowWidth < 1200) {
      $('.video-list').addClass('mobile-list hide');
    }
}


// Initialize video player

function initPlayer() {
  
  // set to no autoplay
  var autoplay = 0;

  // Autoplay toggle function
  $('.autoplay-toggle').on('click', function() {
    // toggle circle
    $(this).toggleClass('autoplay-toggle-on');
    // if autoplay == yes
    if ($('.autoplay-toggle').hasClass('autoplay-toggle-on')) {
      // Change autoplay toggle color
      $('.autoplay-select h2').css({
        'color' : '#fff'
      });
      // Change autoplay in player
      autoplay = 1;
    } else {
      // reset color to original
      $('.autoplay-select h2').css({
        'color' : '#A7FFEB'
      });
      // Reset autoplay in player
      autoplay = 0;
    } 
  });
  
  
 
  // Get the data-url attribute in the first li
  var video = $('.video-list li').first().attr('data-url');
  // Set the player to the first video in the li
  $('.video-frame').attr('src', video + '?autoplay=' + autoplay + '&rel=0&amp;showinfo=0');

  // Function for clicking a menu/list item
  $('.video-list li').on('click', function() {
    var $this = $(this);
    var video = $this.attr('data-url');
    // Set player to clicked video url
    $('.video-frame').attr('src', video + '?autoplay=' + autoplay + '&rel=0&amp;showinfo=0');
    // Set active class on clicked element
    $('.video-list li').removeClass('active-video');
    $this.addClass('active-video');
  });
  
  showList();
  
}

// initialize player on page load
initPlayer();






// Function to control mobile menu/list trigger
$('.video-list-trigger').on('click', function() {
  $('.video-list').toggleClass('hide');
});

$('.mobile-list').on('click', function() {
  $('.video-list').addClass('hide');
});