function init() {
  var $toggleLinks = $('.detail_toggle');
  $toggleLinks.click(function(ev) {
    var $detail = $(this).siblings('.detail');
    $detail.toggleClass('hidden');
    if($detail.hasClass('hidden')) {
      $(this).text('Show Details');
    } else {
      $(this).text('Hide Details');
    }
    ev.preventDefault();
  });

}

$(function() {
  init();
});
