# 퍼시스 (Fursys)
> 퍼시스 가구 사이트를 클론한 웹사이트 프로젝트 입니다. 메인 페이지 이외에 서브페이지로 회사소개 페이지, 고객서비스 페이지로 구성되어있습니다.

![image](https://user-images.githubusercontent.com/83049523/169755056-0c6f9234-39ef-4b31-bfa2-bab45a26296f.png)


## 개요
본 프로젝트는 디자인, 스크립트 등 전반적으로 새로운 기획을 거쳐 리뉴얼되었습니다. 본인 만의 방식으로 마크업 및 css 를 작성하였으며 여러 기능들을 제이쿼리로 하드코딩하여 작업 해보았습니다.

### 사용된 언어 및 플러그인
- html / css / jQuery


## 주요 기능

### 1. title section 슬라이드
플러그인의 사용 없이 슬라이드 기능을 구현해보고자 제이쿼리로 하드코딩 작업을 해보았습니다. 


``` javascript
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
```

---

### 2. Showroom 탭메뉴

제이쿼리를 활용하여 Showroom 탭메뉴를 하드코딩 해보았습니다.

![image](https://user-images.githubusercontent.com/83049523/169755859-1b57b0a3-b324-4140-b2c0-85058442df46.png)

``` javascript
$('.showroom-btn .btn').click(function () {
  $(this).addClass('is-active')
  $(this).siblings('li').removeClass('is-active')

  var tab = $(this).attr('data-alt')
  $('#' + tab).addClass('is-active')
  $('#' + tab).siblings('li').removeClass('is-active')
})
```
---

### 3. 서브페이지(1) - 회사소개 

회사를 소개하는 서브페이지 입니다. 통이미지로 되어있던 부분을 전부 html, css 로 다시 스타일링 해보았으며, 회사에 대한 정보가 더 눈에 잘 들어오게 디자인을 리뉴얼 시켰습니다.

![image](https://user-images.githubusercontent.com/83049523/169758100-5e2ddfb1-f9fe-4c73-b100-a1d335a05aac.png)

**3-1.** lnb 아코디언 형식 탭 메뉴

제이쿼리를 활용하여 lnb 탭메뉴를 하드코딩 해보았습니다.

![image](https://user-images.githubusercontent.com/83049523/169756313-4b08952f-12e9-4c5a-a4e6-4f62604982d4.png)

``` javascript
$('.lnb-list').click(function () {
  $(this).addClass('is-active')
  $(this).siblings().removeClass('is-active')
  $(this).children('ul').stop().slideDown()
  $(this).siblings().children('ul').stop().slideUp()
})
```

**3-2.** stock 탭 메뉴

table 태그를 사용했으며, 제이쿼리를 활용하여 stock 탭메뉴를 하드코딩 해보았습니다.

![image](https://user-images.githubusercontent.com/83049523/169758877-11edc019-8c45-4e5c-a9d9-9efe7bcd985a.png)

``` javascript
$('.stock .tab li').click(function () {
  $(this).addClass('is-active')
  $(this).siblings().removeClass('is-active')

  var tab = $(this).attr('data-alt')
  $('.stock #' + tab).addClass('is-active')
  $('.stock #' + tab).siblings('li').removeClass('is-active')
})
```

### 4. 서브페이지(2) - 고객서비스

form, input 태그를 사용하여 고객 상담 신청서를 구현해보았습니다.

![image](https://user-images.githubusercontent.com/83049523/169759097-47f6b8a2-40a8-4191-9c66-b3a6bc9db64b.png)

---

## 프로젝트 의의
본 프로젝트는 다른 프로젝트들과 달리 메인페이지 부분만 작업하기 보다 더 다양한 형태의 페이지를 제작해보았습니다. 서브페이지와 메인페이지에 위치한 header 와 footer 부분은 동일하기 때문에 이에 대한 해결책으로 제이쿼리의 include 라는 메서드를 사용해보았습니다. 컴포넌트 단위로 작업하는 모듈화에 대한 개념과 이를 통해 더 효율적인 작업이 가능하다는 장점을 배우게 된 점에서 의의가 있었습니다.
