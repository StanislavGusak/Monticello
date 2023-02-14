const modules = {
  news:
    $('.news__block').slick({
      dots: true,
      arrows:true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,

      prevArrow: "<button type='button' class='btn__slick-prev btn btn-slider'><svg class='icon'><use xlink:href='./images/sprite/svg_sprite.svg#prev'></use></svg></button>",
      nextArrow: "<button type='button' class='btn__slick-next btn btn-slider'><svg class='icon'><use xlink:href='./images/sprite/svg_sprite.svg#next'></use></svg></button>",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            touchMove: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false,
            autoplay: true,
            touchMove: true,
          }
        },
      ],
    }),

  banner:
    $('.slider').slick({
      dots: true,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
    }),

  scrollToSections:
    $(document).ready(function () {
      $('#menu').on('click', 'a', function (event) {
        event.preventDefault();
        let id = $(this).attr('href');
        let top = $(id).offset().top;
        $('html, body').animate({ scrollTop: top }, 1500);
      });
    }),

  scroll:
    $('.btn-banner').click(() => {
      $('html, body').animate({
        scrollTop: $('.project').offset().top
      }, 1000);
    })
};


Fancybox.bind('[data-fancybox="gallery"]', {
  Toolbar: false,
  animated: false,
  dragToClose: false,
  showClass: false,
  hideClass: false,
  closeButton: "top",

  Image: {
    click: "close",
    wheel: "slide",
    zoom: false,
    fit: "cover",
  },

  Thumbs: {
    minScreenHeight: 0,
  },
});


let menuBtn = document.querySelector('.mobile__btn');
let menu = document.querySelector('.mobile__menu');

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
})
