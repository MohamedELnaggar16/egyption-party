let currentWidth =  $('.list').outerWidth();
$('.sideBar').css({left:-currentWidth});

$('.openIcon i').click(function(){
   

   if($('.sideBar').css('left')=='0px'){
    $('.sideBar').animate({'left':-currentWidth},1000)
   }
  
   else{
    $('.sideBar').animate({'left':'0px'},1000)
   }
})
$('#exitIcon').click(function(){
    let currentWidth =  $('.list').outerWidth()
    $('.sideBar').animate({'left':-currentWidth},1000)
})
$('.singerHeader').click(function(){

    
    $(this).next().slideToggle(500);
    $(".paragUp").not($(this).next()).slideUp(500);  // close (slide up) all exept this.next

})

function countdown() {
    var now = new Date();
    var eventDate = new Date(2022, 7, 1);
    var currentTiime = now.getTime();
    var eventTime = eventDate.getTime();
    var remTime = eventTime - currentTiime;
    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24) - 30;
  
    h %= 24;
    m %= 60;
    s %= 60;
  
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
  $('.days').html(`<h3>${d}D</h3>`);
  $('.hours').html(`<h3>${h}h</h3>`);
  $('.minutes').html(`<h3>${m}m</h3>`);
  $('.seconds').html(`<h3>${s}s</h3>`);
    setTimeout(countdown, 1000);
  }
  
  countdown();