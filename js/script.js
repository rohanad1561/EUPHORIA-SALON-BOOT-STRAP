$("documetn").ready(() =>{
    $(".navbar-toggler").click(() =>{
        $(".navbar-toggler").toggleClass("active-show");

    })

})

let splide = new Splide( '#image-carousel', {
  type   : 'loop',
  perPage: 4,
  perMove: 1,
  gap: 20,
  breakpoints: {
    768: {
      perPage: 2,
      gap    : '.7rem',
      
    },
    576: {
      perPage: 1,
      gap    : '.7rem',
     
    },
  },
} );

splide.mount();

 let splideb = new Splide('#card-carousel', {
    type: 'loop',
    perPage: 4,
    perMove: 1,
    gap: '20px',
    breakpoints: {
      768: {
        perPage: 2,
        gap: '0.7rem',
      },
      576: {
        perPage: 1,
        gap: '0.7rem',
      },
    },
  });

  splideb.mount();

 let splidet = new Splide('#t-card-slider', {
    type: 'loop',
    perPage: 1,
    perMove: 1,
    gap: '20px',
    breakpoints: {
      768: {
        perPage: 1,
        gap: '0.7rem',
      },
      576: {
        perPage: 1,
        gap: '0.7rem',
      },
    },
  });

  splidet.mount();


let splidea = new Splide( '#auto', {
  type   : 'loop',
  drag   : 'free',
  focus  : 'center',
  perPage: 3,
  autoScroll: {
    speed: 2,
  },
   breakpoints: {
    1200: {
      perPage: 2,
      gap    : '.7rem',
      
    },
    950: {
      perPage: 1,
      gap    : '.7rem',
     
    },
  },
} );

splidea.mount( window.splide.Extensions);