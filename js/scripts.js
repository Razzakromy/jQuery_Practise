// js
// Scroll
$(window).scroll(function () {
    var wintop = $(window).scrollTop(), docheight =
        $(document).height(), winheight = $(window).height();
    var scrolled = (wintop / (docheight - winheight)) * 100;
    $('.scroll-line').css('width', (scrolled + '%'));
});
// owl
var owl = $('.owl-carousel');
      owl.owlCarousel({
        margin: 10,
        loop: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 3
          }
        }
      })

// AOS
AOS.init({
    easing: 'ease-in-out-sine',
});

setInterval(addItem, 300);

var itemsCounter = 1;
var container = document.getElementById('aos-demo');

function addItem() {
    if (itemsCounter > 42) return;
    var item = document.createElement('div');
    item.classList.add('aos-item');
    item.setAttribute('data-aos', 'fade-up');
    item.innerHTML = '<div class="aos-item__inner"><h3>' + itemsCounter + '</h3></div>';
    container.appendChild(item);
    itemsCounter++;
}

// Parallax
/* init Jarallax */
  
jarallax(document.querySelectorAll(".jarallax"));

jarallax(document.querySelectorAll(".jarallax-keep-img"), {
    keepImg: true,
});


