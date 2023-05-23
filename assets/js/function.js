$(".responsive").slick({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});

$(".main-slider").slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: false,
  prevArrow: '<button type="button" class="slick-prev slick-arrow" role="button" aria-label="Предыдущий" title="Предыдущий"><svg class="svg-icon"><use href="#arrow-left-short"></use></svg></button>',
  nextArrow: '<button type="button" class="slick-next slick-arrow" role="button" aria-label="Следующий" title="Следующий"><svg class="svg-icon"><use href="#arrow-right-short"></use></svg></button>',  
});
  