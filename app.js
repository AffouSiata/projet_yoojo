// $('.boite').slick({
//   centreMode:true,
//   autoplay:true,
//   infinite: false,
//   arrows:true,
//   slidesToShow: 4,
//   slidesToScroll: 1,
// });


$('.boite').slick({
  slidesToScroll:1,
  slidesToShow:4,
  autoplay:true,
  
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
   {
     breakpoint: 600,
     settings: {
       slidesToShow: 2,
       slidesToScroll: 1,
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
})

$('.cartes').slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 2,

});

let prev =document.querySelectorAll(".slick-prev")
let next =document.querySelectorAll(".slick-next")


for (let i = 0; i < prev.length; i++) {
  const element = prev[i];
  element.innerHTML=`<i class='fas fa-chevron-circle-left'></i>`
}
for (let i = 0; i < next.length; i++) {
  const element = next[i];
  element.innerHTML=innerHTML=`<i class="fas fa-chevron-circle-right"></i></i>` 
}
