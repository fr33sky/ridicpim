$ ->
  if $('.pagination').length && $('#all-sales_receipts').length
    $(window).scroll ->
      url = $('.pagination .next_page').attr('href')
      if url && $(window).scrollTop() > $(document).height() - $(window).height() - 50
        $('.pagination').html('<i class="fa fa-spinner fa-spin"></i>');
        $.getScript(url)
    $(window).scroll()
