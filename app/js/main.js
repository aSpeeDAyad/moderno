$(function(){

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
    var mixer = mixitup('.products__inner-box');

}); 
let btnHeaderMenu = document.querySelector(".menu__btn");
let listHeaderMenu = document.querySelector(".menu__list");
let listHeaderMenuLi = document.querySelectorAll(".menu__list li ");


btnHeaderMenu.addEventListener('click',()=>{
    if(listHeaderMenu.style.display=='block'){
        listHeaderMenu.style.display='none';
        console.log('ppp');
    }
    else{
        listHeaderMenu.style.display='block';
        listHeaderMenu.style.position='absolute';

        listHeaderMenuLi.forEach((item)=>{
            item.style='display:block';
        }); 
        console.log('uuu'); 
    }
    console.log('jjj'); 
});


let hdrUserMenu = document.querySelector(".header__user-menu");
let hdrUser = document.querySelector(".header__user");
let hdrUserLogo = document.querySelector(".header__user-logo");
let hdrUserName = document.querySelector(".header__user-name");
let hdrUserStatus = document.querySelector(".header__user-status");
let hdrBsktMenu = document.querySelector(".header__basket-block-menu");





document.addEventListener('click',(e)=>{
    
    
    if(e.target.matches('.angle-right a, .header__user-menu ul, .header__user-menu, .angle-right')){
        e.preventDefault();
    }
    
    else if(e.target.matches('.header__user-logo, .header__user-status, .header__user-name')){
        
        hdrUser.classList.toggle('active-menu');
    }
   
    else{
        if(hdrUser){
           hdrUser.classList.remove('active-menu'); 
        }
        
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

document.addEventListener('click',(e)=>{
   
    let target = e.target;
    if(target.matches('.header__btn-basket')){
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

