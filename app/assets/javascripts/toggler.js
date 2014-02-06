var toggler = {
  linkSelector: ".detail_toggle",
  detailSelector: ".detail",
  hiddenClass: "hidden",
  hideText: "Hide Details",
  showText: "Show Details",
  init: function() {
    var self = this;
    $(this.linkSelector).on("click", function(event) {
      self.toggleOnClick(event)
    });
  },
  toggleOnClick: function(event) {
    this.$link = $(event.target);
    this.$link.text(this.isDetailHidden() ? this.hideText : this.showText); this.detailElement().toggleClass(this.hiddenClass); event.preventDefault();
  },
  detailElement: function() {
    return this.$link.parent().find(this.detailSelector);
  },
  isDetailHidden: function() {
    return this.detailElement().hasClass(this.hiddenClass);
  }
};

$(function() {
  toggler.init();
});

// function init() {
//   var $toggleLinks = $('.detail_toggle');
//   $toggleLinks.click(function(ev) {
//     var $detail = $(this).siblings('.detail');
//     $detail.toggleClass('hidden');
//     if($detail.hasClass('hidden')) {
//       $(this).text('Show Details');
//     } else {
//       $(this).text('Hide Details');
//     }
//     ev.preventDefault();
//   });

// }
