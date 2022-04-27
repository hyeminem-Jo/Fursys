$('.showroom-btn .btn').click(function() {
  $(this).addClass('is-active')
  $(this).siblings('li').removeClass('is-active')

  var tab = $(this).attr('data-alt')
  $('#' + tab).addClass('is-active')
  $('#' + tab).siblings('li').removeClass('is-active')
})