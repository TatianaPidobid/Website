$(document).on('scroll', function () {

  const windowHeight = $(window).height()
  const scrollValue = $(this).scrollTop();
  // console.log(scrollValue);


  
  const $art2 = $('.art2');
  const art2FromTop = $art2.offset().top
  // console.log(art2FromTop);
  const art2Height = $art2.outerHeight()
  // console.log(art2Height);

  const $art3 = $('.art3');
  const art3FromTop = $art3.offset().top
  const art3Height = $art3.outerHeight()

  const $art4 = $('.art4');
  const art4FromTop = $art4.offset().top
  const art4Height = $art4.outerHeight()

  if (scrollValue > art2FromTop + art2Height - windowHeight) {
    console.log("art 2");
    $art2.addClass('active');
  }

  if (scrollValue > art3FromTop + art3Height - windowHeight) {
    console.log("art 3");
    $art3.addClass('active');
  }

  if (scrollValue > art4FromTop + art4Height - windowHeight) {
    console.log("art 4");
    $art4.addClass('active');
  }

  
  const $op1 = $('.op1');
  const $op2 = $('.op2');

  const op1FromTop = $op1.offset().top;
  const op2FromTop = $op2.offset().top;

  const op1Height = $op1.height();
  const op2Height = $op2.height();

  if (scrollValue > op1FromTop + op1Height / 2 - windowHeight) {
    $op1.addClass('active');
    console.log('animation op1');
  }

  if (scrollValue > op2FromTop + op2Height / 2 - windowHeight) {
    $op2.addClass('active');
    console.log('animation op2');
  }

  
  if (scrollValue < 100) {
    $('article').removeClass('active');
  }
})

//Options
let activeElement = 0;
const timeChange = 4000;
// We collect 4 elements on which we work
const colorImgHtml = document.querySelector('.color');
const grayImgHtml = document.querySelector('.gray');
const h1Html = document.querySelector('.member h1');
const h2Html = document.querySelector('.member h2');

//Information in tables with replaced elements
const colorImages = ['img/s1.png', 'img/s2.png', 'img/s3.png'];
const grayImages = ['img/s1a.png', 'img/s2a.png', 'img/s3a.png'];
const names = ['Tetiana Pidobid', 'John Doe', 'John Doel'];
const professions = ['Front-End Developer', 'UX i UI Designer', 'Programmer JavaScript'];

function changeElement() {
 console.log("automatic calling")
 activeElement++;
 if (activeElement == colorImages.length) {
  activeElement = 0;
 }
 colorImgHtml.src = colorImages[activeElement];
 grayImgHtml.src = grayImages[activeElement];
 h1Html.textContent = names[activeElement];
 h2Html.textContent = professions[activeElement];

}

setInterval(changeElement, timeChange);
