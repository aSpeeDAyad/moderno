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



let hdrUserMenu = document.querySelector(".header__user-menu");
let hdrUser = document.querySelector(".header__user");
let hdrUserLogo = document.querySelector(".header__user-logo");
let hdrUserName = document.querySelector(".header__user-name");
let hdrUserStatus = document.querySelector(".header__user-status");





document.addEventListener('click',(e)=>{
    e.stopPropagation();
    if(e.target.matches('.angle-right a, .header__user-menu ul, .header__user-menu, .angle-right')){
        e.preventDefault();
    }
    else if(e.target.matches('.header__user-name')){
        e.stopPropagation();
        hdrUser.classList.toggle('active-menu');
    }
    
    else if(e.target.matches('.header__user-logo')){
        e.stopPropagation();
        hdrUser.classList.toggle('active-menu');
    }
    else if(e.target.matches('.header__user-status')){
        e.stopPropagation();
        hdrUser.classList.toggle('active-menu');
    }
    
    else{
        hdrUser.classList.remove('active-menu');
    }
});



let basketItem = document.querySelectorAll('.basket__item-bell');
let basketItemImg = document.querySelectorAll('.basket__item-bell-imgbell');

basketItem.forEach((element) =>{
    element.addEventListener('click',(e)=>{
       element.lastElementChild.classList.toggle('active');
    },{once:true});
});

let btns = document.querySelectorAll(".header__btn-basket");
let svg = document.querySelectorAll(".svg-menu");
let svgPatch = document.querySelectorAll(".svg-menu patch");

// svg.forEach((element) =>{
//     element.addEventListener('click',(e)=>{
//         element.parentElement.classList.toggle('active-menu'); 
//         element.parentElement.classList.toggle('svg-red');
//     });    
// });



// btns.forEach((element) =>{
//     element.addEventListener('click',(e)=>{
//         e.target.classList.toggle('svg-red');       
//         e.target.classList.toggle('active-menu');
//     }) 

// });

document.addEventListener('click',(e)=>{
    e.stopPropagation();
    let target = e.target;
    if(target.classList.contains('header__btn-basket')){
        btns.forEach((btn) =>{
            if(target==btn){
                if(!btn.classList.contains('active-menu','svg-red')){
                    btns.forEach((item)=>{
                        item.classList.remove('active-menu','svg-red')
                    });
                    btn.classList.add('active-menu','svg-red');
                }
                else{
                    btn.classList.remove('active-menu','svg-red');
                }
            }
              
        })
    }
    else{
         if(!target.classList.contains('close')){
            btns.forEach((item)=>{
                item.classList.remove('active-menu','svg-red')
            });
        }
    } 
});

