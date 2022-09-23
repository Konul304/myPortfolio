AOS.init();
const cards = document.querySelectorAll('.card');

//-----------------------My- Services-------------------------------------
cards.forEach((item)=>{
    item.addEventListener('mouseover',()=>{
        const img = document.querySelector(`#${item.getAttribute('id')} img`);
        img.style.backgroundColor='#220e24';
    })
    item.addEventListener('mouseout',()=>{
        const img = document.querySelector(`#${item.getAttribute('id')} img`);
        img.style.backgroundColor='white';
    })
})

//-----------------------My- Portfolio-Slider-------------------------------------

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  