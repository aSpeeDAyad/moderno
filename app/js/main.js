$(function(){

    var mixer = mixitup('.products__inner-box');

    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: false
      });

      $(".product-slider__inner").slick({
       dots:true,
       arrows:false, 
       slidesToShow:4,
       slidesToScroll:4
      });
      $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        
        prefix:"$"
    });
    $(".icon-th-list").on('click', function(){
        $(".products__item-new").toggleClass("list");
        $(".icon-th-list").toggleClass("active");
        $(".icon-th-large").toggleClass("active");
        

    });
    $(".icon-th-large").on('click', function(){
        $(".products__item-new").toggleClass("list");
        $(".icon-th-list").toggleClass("active");
        $(".icon-th-large").toggleClass("active");
        

    }); 
  
    
}); 
let btns = document.querySelectorAll(".header__btn-basket");
btns.forEach((element) =>{
    element.addEventListener('click',()=>{
        element.classList.toggle('active-menu');
    })
});
document.querySelectorAll(".header__user").forEach((element) =>{
    element.addEventListener('click',()=>{
        element.classList.toggle('active-menu');
    })
});

