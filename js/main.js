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
  $('html, body').stop().animate({
    scrollTop: 0
  }, 1000)
})

// 퀵 메뉴 열기
$('.quick-menu-btn').click(function () {
  $(this).siblings().toggleClass('is-open')
})

// 서브페이지에 header, footer 연결
$('.header-include').load('header.html')
$('.footer-include').load('footer.html')

// lnb 탭 활성화
$('.lnb-list').click(function () {
  $(this).addClass('is-active')
  $(this).siblings().removeClass('is-active')
  $(this).children('ul').stop().slideDown()
  $(this).siblings().children('ul').stop().slideUp()
})

// stock 탭 활성화
$('.stock .tab li').click(function () {
  $(this).addClass('is-active')
  $(this).siblings().removeClass('is-active')

  var tab = $(this).attr('data-alt')
  $('.stock #' + tab).addClass('is-active')
  $('.stock #' + tab).siblings('li').removeClass('is-active')
})

// title 슬라이드
$(function () {
  var $slide = $('.title-content-list'),
      $firstSlide = $slide.find('li').first()
      .stop(true).animate({'opacity':1, 'z-index':2},200);
      $lastSlide = $slide.find('li').last()
      .stop(true).animate({'opacity':0, 'z-index':0},200);
  var interval

  function prevSlide() {
    stopSlide()
    startSlide()
    var $lastSlide = $slide.find('li').last()
    $lastSlide.prependTo($slide)
    var $secondSlide = $slide.find('li').eq(1)
    $secondSlide.stop(true).animate({'opacity': 0, 'z-index':0}, 400)
    $firstSlide = $slide.find('li').first()
    .stop(true).animate({'opacity': 1, 'z-index':2}, 400)
    $lastSlide = $slide.find('li').last()
    .stop(true).animate({'opacity': 0, 'z-index':0}, 400)
  }

  function nextSlide() {
    stopSlide()
    startSlide()
    $firstSlide = $slide.find('li').first().appendTo($slide)
    var $lastSlide = $slide.find('li').last()
    $lastSlide.stop(true).animate({'opacity': 0, 'z-index':0})
    $firstSlide = $slide.find('li').first().stop(true).animate({
      'opacity': 1, 'z-index':2
    }, 400)
  }

  startSlide();

  function startSlide() {
    interval = setInterval(nextSlide, 5000)
  }

  function stopSlide() {
    clearInterval(interval)
  }

  $('.btn-prev').click(function () {
    prevSlide();
  })

  $('.btn-next').on('click', function(){ 
    nextSlide();
  });
})

// quick 버튼 및 메뉴 등장
var mainOffset = $('main').offset()
$(window).scroll(function () {
  if ($(window).scrollTop() > mainOffset.top) {
    $('.quick-btns, .quick-menu').removeClass('is-hide')
  } else if ($(window).scrollTop() <= mainOffset.top) {
    $('.quick-btns, .quick-menu').addClass('is-hide')
  }
})

// title heading 애니메이션 제거
setTimeout(() => {
  $('.title-heading h2>span, h3>span, a').removeClass('is-active')
}, 2000)