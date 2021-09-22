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
let svg = document.querySelectorAll(".svg-menu");

svg.forEach((element) =>{
    element.addEventListener('click',(e)=>{
        element.parentElement.classList.toggle('active-menu'); 
        element.parentElement.classList.toggle('svg-red');
    });    
});

btns.forEach((element) =>{
    element.addEventListener('click',(e)=>{
        e.target.classList.toggle('svg-red');       
        e.target.classList.toggle('active-menu');

    },false) 

});




let hdrUser = document.querySelector(".header__user");
let hdrUserLogo = document.querySelector(".header__user-logo");
let hdrUserName = document.querySelector(".header__user-name");
let hdrUserStatus = document.querySelector(".header__user-status");

hdrUserLogo.addEventListener('click',(e)=>{
    hdrUser.classList.toggle('active-menu');
});
hdrUserStatus.addEventListener('click',(e)=>{
    hdrUser.classList.toggle('active-menu');
});
let basketItem = document.querySelectorAll('.basket__item-bell');
let basketItemImg = document.querySelectorAll('.basket__item-bell-imgbell');

basketItem.forEach((element) =>{
    element.addEventListener('click',(e)=>{
        basketItemImg.classList.toggle('active');
    });
});
// basketItemImg.forEach((element) =>{
//     element.addEventListener('click',(e)=>{
//         element.classList.toggle('active');
//     });
// });