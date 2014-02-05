function init() {
  var $toggleLinks = $('.detail_toggle');
  $toggleLinks.click(function(ev) {
    var $detail = $(this).siblings('.detail');
    $detail.toggleClass('hidden');
    ev.preventDefault();
  });

}

$(function() {
  init();
});
