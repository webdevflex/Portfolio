//printed text
const t = [
    'Andrey Lubenko',
    
];

function typeText(){
    let line = 0; //начальная Линия текста
    let count = 0;//изначальный счетчик позиции
    let out = '';
    let htmlOut = document.querySelector('.header-text')

    function typeLine(){
        //рисуем строку
        let interval = setTimeout(function(){
         out += t[line][count];
         htmlOut.innerHTML = out + '|';
         count++;//увеличеваем на один

         //проверки
         //не закончилась ли строка

            if(count >= t[line].length){
                count = 0;
                line++;
                if(line == t.length){
                    clearTimeout(interval);//ОСТАНОВИЛ ТАЙМАУТ
                    htmlOut.innerHTML = out;//убираем вертикальную черту
                    return true;
                }
            }

            typeLine();

        },getRandomInt(getRandomInt(250*3.5))); //задаем время вывода текста "200мс",разный интервал вывода  
    }
    typeLine();
}
typeText();
//Интервал вывода текста
function getRandomInt(max){
    return Math.floor(Math.random()* Math.floor(max));
}
//задержка текста
let headText =document.querySelector('.header-sub-text')
setTimeout(function() {
    headText.style.display = 'block';
 }, 3000);

 //задержка меню
 let headmenu =document.querySelector('.header-menu-list')
setTimeout(function() {
    headmenu.style.display = 'block';
 }, 3000);



 //skills bar
 var circleBar = new ProgressBar.Circle('.skills-item', {
    strokeWidth:7,//7
    trailWidth: 10,//10
    trailColor: " rgba(0, 0, 0, 0.664)",
    easing: "bounce",
    from: { color: "#EB4242", width: 3 },//цвет и ширина трекера в начале
    to: { color: "#50C878", width: 7 },//цвет и ширина трекера в конце
    text: {
      value: '0',
      className: 'skills-procent',//класс который отвечает за содержимое текста (внутри круга)
    },
    step: (state, shape) => {
      shape.path.setAttribute("stroke", state.color);
      shape.path.setAttribute("stroke-width", state.width);
      shape.setText(Math.round(shape.value() * 100) + ' %');
    }
  });

  // circleBar.animate(0.85, {
  //   duration: 3000,//время за которое выполниться анимация 
  // });

//   $(".skills-item").waypoint(function(){
//     circleBar.animate(1.0);  // Number from 0.0 to 1.0
//  }, {offset: "50%"})

//  $(".skills-item").waypoint(function(){
//   circleBar.animate(0.85,{duration: 3000});  // Number from 0.0 to 1.0
// }, {offset: "50%"})



  // circleBar.animate(0.85, {
  //   duration: 3000//время за которое выполниться анимация 
  // });
// var bar = new ProgressBar.Line('.skills-item', {
//   strokeWidth: 5,
//   easing: 'easeInOut',
//   duration: 1400,
//   color: '#FFEA82',
//   trailColor: '#eee',
//   trailWidth: 2,
// });









  var circleBar2 = new ProgressBar.Circle('.skills-item2', {
    strokeWidth: 7,
    trailWidth: 10,
    trailColor: " rgba(0, 0, 0, 0.664)",
    easing: "easeInOut",
    from: { color: "#EB4242", width: 3 },//цвет и ширина трекера в начале
    to: { color: "#50C878", width: 7 },//цвет и ширина трекера в конце

    text: {
      value: '0',
      className: 'skills-procent',//класс который отвечает за содержимое текста (внутри круга)
    },
    step: (state, shape) => {
      shape.path.setAttribute("stroke", state.color);
      shape.path.setAttribute("stroke-width", state.width);
      shape.setText(Math.round(shape.value() * 100) + ' %');
    }
  });

  // circleBar.animate(0.60, {
  //   duration: 1500
  // });

  var circleBar3 = new ProgressBar.Circle('.skills-item3', {
    strokeWidth: 7,
    trailWidth: 10,
    trailColor: " rgba(0, 0, 0, 0.664)",
    easing: "easeInOut",
    from: { color: "#EB4242", width: 3 },//цвет и ширина трекера в начале
    to: { color: "#50C878", width: 7 },//цвет и ширина трекера в конце
    text: {
      value: '0',
      className: 'skills-procent',//класс который отвечает за содержимое текста (внутри круга)
    },
    step: (state, shape) => {
      shape.path.setAttribute("stroke", state.color);
      shape.path.setAttribute("stroke-width", state.width);
      shape.setText(Math.round(shape.value() * 100) + ' %');
    }
  });


  $('.skills-item').waypoint(function(){
    circleBar.animate(0.85,{duration: 3000});  // Number from 0.0 to 1.0
 }, {offset: "30%"})

 $('.skills-item2').waypoint(function(){
  circleBar2.animate(0.60,{duration: 3000});  // Number from 0.0 to 1.0
}, {offset: "30%"})

$('.skills-item3').waypoint(function(){
  circleBar3.animate(0.45,{duration: 3000});  // Number from 0.0 to 1.0
}, {offset: "30%"})




// lineskills
var lineeBar = new ProgressBar.Line( '.line-skills-item', {
  strokeWidth:1,//7
  trailWidth: 4,//10
  trailColor: " rgba(0, 0, 0, 0.664)",
  easing: "easeInOut",
  from: { color: "#EB4242", width: 3 },//цвет и ширина трекера в начале
  to: { color: "#50C878", width: 7 },//цвет и ширина трекера в конце
  text: {
    value: '0',
    className: 'line-procent',//класс который отвечает за содержимое текста (внутри круга)
  },
  step: (state, shape) => {
    shape.path.setAttribute("stroke", state.color);
    shape.path.setAttribute("stroke-width", state.width);
    shape.setText(Math.round(shape.value() * 100) + ' %');
  }
});
$('.line-skills-item').waypoint(function(){
  lineeBar.animate(0.45,{duration: 3000});  // Number from 0.0 to 1.0
}, {offset: "50%"})

var lineeBar2 = new ProgressBar.Line( '.line-skills-item2', {
  strokeWidth:1,//7
  trailWidth: 4,//10
  trailColor: " rgba(0, 0, 0, 0.664)",
  easing: "easeInOut",
  from: { color: "#EB4242", width: 3 },//цвет и ширина трекера в начале
  to: { color: "#50C878", width: 7 },//цвет и ширина трекера в конце
  text: {
    value: '0',
    className: 'line-procent',//класс который отвечает за содержимое текста (внутри круга)
  },
  step: (state, shape) => {
    shape.path.setAttribute("stroke", state.color);
    shape.path.setAttribute("stroke-width", state.width);
    shape.setText(Math.round(shape.value() * 100) + ' %');
  }
});

var lineeBar3 = new ProgressBar.Line( '.line-skills-item3', {
  strokeWidth:1,//7
  trailWidth: 4,//10
  trailColor: " rgba(0, 0, 0, 0.664)",
  easing: "easeInOut",
  from: { color: "#EB4242", width: 3 },//цвет и ширина трекера в начале
  to: { color: "#50C878", width: 7 },//цвет и ширина трекера в конце
  text: {
    value: '0',
    className: 'line-procent',//класс который отвечает за содержимое текста (внутри круга)
  },
  step: (state, shape) => {
    shape.path.setAttribute("stroke", state.color);
    shape.path.setAttribute("stroke-width", state.width);
    shape.setText(Math.round(shape.value() * 100) + ' %');
  }
});



$('.line-skills-item2').waypoint(function(){
  lineeBar2.animate(0.90,{duration: 3000});  // Number from 0.0 to 1.0
}, {offset: "50%"})

$('.line-skills-item3').waypoint(function(){
  lineeBar3.animate(0.90,{duration: 3000});  // Number from 0.0 to 1.0
}, {offset: "50%"})

//Slick Slider
$('.my-work-slider').slick({
  accessibility: false,
  responsive: [
    {
      breakpoint: 750,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '60px',
       
        
      }
    }]
});

//scroll link
$(document).on('click', '.header-menu-list li a', function() {
  var linkID = $(this).attr('href');
  $('html, body').animate({ 
    scrollTop: $(linkID).offset().top 
  }, 1000);
});

//copy text
function copytext(el) {
  var $tmp = $("<textarea>");
  $("body").append($tmp);
  $tmp.val($(el).text()).select();
  document.execCommand("copy");
  $tmp.remove();
  }


