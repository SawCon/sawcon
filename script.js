const observer = new window.IntersectionObserver(([entry]) => {
  if (entry.isIntersecting) {
    $("#small").slideUp(complete=function(){
      $("#small").css("display", "none")
  })
    return
  }
  $("#small").slideDown()
  $("#small").css("display", "flex")
}, {
  root: null,
  threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
})
observer.observe(document.querySelector('#header'));
$('.team-carousel').slick({
  centerMode: true,
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  variableHeight: true,
  dots: true,
  responsive: [
    {
      breakpoint: 426,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    },
  ]
});