// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:1
//         }
//     }
// })
 $(document).on('ready', function() {
      $(".vertical-center-4").slick({
        dots: true,
        vertical: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
    

      });

 
      });

 function changeImage(event){
    const thumb = document.querySelector('.slider');
    document.querySelector('.pro-img').src = event.children[0].src

    for(var i=0; i<thumb.length;i++){
        thumb[i].classList.remove('active');
    }
    event.classList.add('active');

 }

 $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:5
        }
    }
})