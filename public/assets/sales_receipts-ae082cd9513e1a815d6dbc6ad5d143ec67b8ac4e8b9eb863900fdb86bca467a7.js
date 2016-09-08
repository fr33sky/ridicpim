(function() {
  $(function() {
    if ($('.pagination').length && $('#all-sales_receipts').length) {
      $(window).scroll(function() {
        var url;
        url = $('.pagination .next_page').attr('href');
        if (url && $(window).scrollTop() > $(document).height() - $(window).height() - 50) {
          $('.pagination').html('<i class="fa fa-spinner fa-spin"></i>');
          return $.getScript(url);
        }
      });
      return $(window).scroll();
    }
  });

}).call(this);
