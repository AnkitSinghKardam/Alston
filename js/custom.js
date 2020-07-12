$(document).ready(function(){
    var vid = document.getElementById("video");

    var x1 = $(".score-board > div.first-section:first-child > div:nth-child(2) > span");
    var x2 = $(".score-board > div.first-section:first-child > div:nth-child(1)");
    var x3 = $(".score-board > div.first-section:first-child > div:nth-child(3)");

    var y1 = $(".second-section");
    var y2 = $(".second-section > div > span");
    var y3 = $(".second-section > div");

    vid.ontimeupdate = function(){
      var percentage = ( vid.currentTime / vid.duration ) * 100;
      $("#custom-seekbar span").css("width", percentage+"%");
      console.log(parseInt(percentage));
      //console.log(vid.currentTime);
      if(parseInt(percentage) <= 18){
        console.log("hi 1");
        if(parseInt(percentage) == 18){
            $("#showMainSection").trigger("click");
        }
      }else if(parseInt(percentage) >= 19 && parseInt(percentage) <= 50){
        console.log("hi 6");
        if(parseInt(percentage) == 46){
            $("#teamStateSection").trigger("click");
        }
      }else if(parseInt(percentage) >= 51 && parseInt(percentage) <= 100){
        console.log("hi 10");
        if(parseInt(percentage) == 80){
            $("#allHidden").trigger("click");
        }          
      }
    };
    
    $("#custom-seekbar").on("click", function(e){
        var offset = $(this).offset();
        var left = (e.pageX - offset.left);
        var totalWidth = $("#custom-seekbar").width();
        var percentage = ( left / totalWidth );
        var vidTime = vid.duration * percentage;
        vid.currentTime = vidTime;
        //console.log(vid.currentTime);
    });//click()   

    //Button control
    var x1 = $(".score-board > div.first-section:first-child > div:nth-child(2) > span");
    var x2 = $(".score-board > div.first-section:first-child > div:nth-child(1)");
    var x3 = $(".score-board > div.first-section:first-child > div:nth-child(3)");

    var y1 = $(".second-section");
    var y2 = $(".second-section > div > span");
    var y3 = $(".second-section > div");

    var z1 = $(".third-section");
    var z2 = $(".score-board > div.third-section:last-child > div:first-child");
    var z3 = $(".score-board > div.third-section:last-child > div:nth-child(2)");
    var z4 = $(".score-board > div.third-section:last-child > div:last-child");

    $("#showMainSection").click(function(){
        x1.fadeIn();
        x1.animate({
            opacity:'1',
            letterSpacing:'2px'
        },"slow");
        x2.animate({
            opacity:'1',
            right:'0px'
        },750);
        x3.animate({
            opacity:'1',
            left:'0px'
        },750);   

        y1.fadeIn("slow");
        y1.animate({
            opacity:'1',
            left:'0px'
        },1500);  

        y2.fadeIn(3000);   
        y2.animate({
            opacity:'1',
        },3000); 
    });

    $("#teamStateSection").click(function(){
        y1.animate({
            opacity:'0',
            left:'-130px'
        },2500);      
        z1.css({"transition" : "inherit"});
        z2.css({"transition" : "inherit"});
        z3.css({"transition" : "inherit"});        
        setTimeout(function(){
            z1.fadeIn("slow");
            z1.animate({
                opacity:'1',
                left:'-71px'                
            },1500);
            z2.animate({
                opacity:'1'              
            },2000);
            z3.animate({
                opacity:'1'            
            },2250);
        },1500)
        setTimeout(function(){
            z4.css({"transition" : "inherit"});
            z4.animate({
                left:'0px',
                opacity:'1'            
            },1500);
        },3000);
    });

    $("#allHidden").click(function(){
        z4.css({"transition" : "1.5s ease-in","left" : "-110px","opacity" : "0"});
        setTimeout(function(){
        z1.css({"transition" : "1.5s ease-in","left" : "-213px","opacity" : "0"});           
        z2.css({"transition" : "1.5s ease-in","opacity" : "0"});
        z3.css({"transition" : "1.5s ease-in","opacity" : "0"});
        },1750);

        setTimeout(function(){
            y1.fadeIn("slow");
            y1.animate({
                opacity:'1',
                left:'0px'
            },1500);  
    
            y2.fadeIn(3000);   
            y2.animate({
                opacity:'1',
            },3000); 
        },3000)
    });
})
