// showroom 탭 활성화
$('.showroom-btn .btn').click(function () {
  $(this).addClass('is-active')
  $(this).siblings('li').removeClass('is-active')

  var tab = $(this).attr('data-alt')
  $('#' + tab).addClass('is-active')
  $('#' + tab).siblings('li').removeClass('is-active')
})

// 최상단 스크롤
$('.btn-top').click(function () {
  $('html, body').stop().animate({scrollTop: 0}, 1000)
})

// 퀵 메뉴 열기
$('.quick-menu-btn').click(function() {
  $(this).siblings().toggleClass('is-open')
})

// 서브페이지에 header, footer 연결
$('.header-include').load('header.html')
$('.footer-include').load('footer.html')

// lnb 탭 활성화
$('.lnb-list').click(function() {
  $(this).addClass('is-active')
  $(this).siblings().removeClass('is-active')
  $(this).children('ul').stop().slideDown()
  $(this).siblings().children('ul').stop().slideUp()
})

// stock 탭 활성화
$('.stock .tab li').click(function() {
  $(this).addClass('is-active')
  $(this).siblings().removeClass('is-active')

  var tab = $(this).attr('data-alt')
  $('.stock #' + tab).addClass('is-active')
  $('.stock #' + tab).siblings('li').removeClass('is-active')
})