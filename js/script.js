$("documetn").ready(() =>{
    $(".navbar-toggler").click(() =>{
        $(".navbar-toggler").toggleClass("active-show");

    })

})

let splide = new Splide( '.splide', {
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