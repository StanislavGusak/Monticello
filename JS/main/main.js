const modules = {
  news:
    $('.news__block').slick({
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      autoplay: true,
      autoplaySpeed: 4000,
      prevArrow: "<button type='button' class='btn__slick-prev btn btn-slider'><svg class='icon'><use xlink:href='./images/sprite/svg_sprite.svg#prev'></use></svg></button>",
      nextArrow: "<button type='button' class='btn__slick-next btn btn-slider'><svg class='icon'><use xlink:href='./images/sprite/svg_sprite.svg#next'></use></svg></button>",
    }),

  banner:
    $('.slider').slick({
      dots: true,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
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
