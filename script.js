let navigetion = document.querySelector('.navigetion');
document.querySelector('.toggle').onclick = function (){
    this.classList.toggle('active')
    navigetion.classList.toggle('active')
}
// start carousel slide
$('.carousel').carousel({
    interval: 2000
  })
  //End carousel slide
  
  