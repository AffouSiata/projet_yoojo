$('.boite').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1
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