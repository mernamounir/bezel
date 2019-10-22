
//jquery nav
$("nav a").click(function(){
    
    let hrefNav =$(this).attr("href");
    let navN =$(hrefNav).offset().top;
      $("html,body").animate({scrollTop:navN-100} , 2000);
})

checkTest();
$(window).scroll(function(){
    if($(window).width() >=1224 )
       {
  var aboutNav=$("#about").offset().top;
 var winLink=$(window).scrollTop();
    
    if (winLink > aboutNav-300)
        {  
            $(".nav-home").css("backgroundColor","white");
              $("nav a").css("color","rgba(0,0,0,0.8)");
              $("navbar-toggler-icon").css("color","black");
            $("#imgLogo").attr("src","images/logo-dark.png");
        }  
      else
          {
                $(".nav-home").css("backgroundColor","transparent");
             $("nav a").css("color","rgba(255,255,255,1)"); 
               $("navbar-toggler-icon").css("color","white");
               $("#imgLogo").attr("src","images/logo-light.png"); //tbdel sora bdl sora 
          }
}   
})
function checkTest(){
     if($(window).width() <= 990)
        {
             $(".nav-home").css("backgroundColor","white");
              $("nav a").css("color","rgba(0,0,0,0.8)");
              $("navbar-toggler").css("color","black");
            $("#imgLogo").attr("src","images/logo-dark.png");
        }
}


var textLink="mission";
 console.log(textLink);
var tab1=document.getElementById("tab1");
var missionlink=document.getElementsByClassName("link1");

for( var i=0; i<missionlink.length;i++)
    {
       
        missionlink[i].addEventListener("click",function(e){
            
             textLink=e.target.innerHTML;
            console.log(textLink);
            if (textLink === "Mission")
            {
                
               $("#tab1").css("opacity",0); 
                
                
                
            }
            
            
        })
    }
var $svg = $('svg').drawsvg();

$svg.drawsvg('animate');

new WOW().init();
 
