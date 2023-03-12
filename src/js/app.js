const burgerIcon = document.querySelector(".cmp-header__container-icon");
const headerMenu = document.querySelector(".cmp-header__container-menu");

burgerIcon.addEventListener("click", () => {
    headerMenu.classList.toggle("cmp-header__container-menu--active");
})


$('.cmp-clients__logo-carousel-js').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
        {
          breakpoint: 5000,
          settings: "unslick"
        },
        {
          breakpoint:900,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });