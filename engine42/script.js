// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.0
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_fade(c,a,b){var e=jQuery,g=e(this),d=e(".ws_list",b),h={position:"absolute",left:0,top:0,width:"100%",height:"100%",maxHeight:"none",maxWidth:"none",transform:"translate3d(0,0,0)"},f=e("<div>").addClass("ws_effect ws_fade").css(h).css("overflow","hidden").appendTo(b);this.go=function(i,j){var k=e(a.get(i)),m={width:k.width(),height:k.height()};k=k.clone().css(h).css(m).appendTo(f);if(!c.noCross){var l=e(a.get(j)).clone().css(h).css(m).appendTo(f);wowAnimate(l,{opacity:1},{opacity:0},c.duration,function(){l.remove()})}wowAnimate(k,{opacity:0},{opacity:1},c.duration,function(){g.trigger("effectEnd");k.remove()})}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.0
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container42").wowSlider({effect:"fade",prev:"",next:"",duration:20*100,delay:20*100,width:1366,height:768,autoPlay:true,autoPlayVideo:false,playPause:true,stopOnHover:false,loop:false,bullets:1,caption:false,captionEffect:"parallax",controls:true,controlsThumb:["data42/images/1.jpg", "data42/images/2.jpg", "data42/images/3.jpg", "data42/images/4.jpg", "data42/images/5.jpg", "data42/images/6.jpg", "data42/images/7.jpg", "data42/images/8.jpg", "data42/images/9.jpg", "data42/images/10.jpg", "data42/images/11.jpg", "data42/images/12.jpg", "data42/images/13.jpg", "data42/images/14.jpg", "data42/images/15.jpg", "data42/images/16.jpg", "data42/images/17.jpg", "data42/images/18.jpg", "data42/images/19.jpg", "data42/images/20.jpg", "data42/images/21.jpg"],responsive:3,fullScreen:true,gestures:1,onBeforeStep:0,images:[{src:"./1.jpg",title:"1"},{src:"./2.jpg",title:"2"},{src:"./3.jpg",title:"3"},{src:"./4.jpg",title:"4"},{src:"./5.jpg",title:"5"},{src:"./6.jpg",title:"6"},{src:"./7.jpg",title:"7"},{src:"./8.jpg",title:"8"},{src:"./9.jpg",title:"9"},{src:"./10.jpg",title:"10"},{src:"./11.jpg",title:"11"},{src:"./12.jpg",title:"12"},{src:"./13.jpg",title:"13"},{src:"./14.jpg",title:"14"},{src:"./15.jpg",title:"15"},{src:"./16.jpg",title:"16"},{src:"./17.jpg",title:"17"},{src:"./18.jpg",title:"18"},{src:"./19.jpg",title:"19"},{src:"./20.jpg",title:"20",href:"http://wowslider.com"},{src:"./21.jpg",title:"21"}]});