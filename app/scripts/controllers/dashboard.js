'use strict';

$(".show-more").on('click', function(event) {
  $(event.target).next('.more').fadeToggle();
});
