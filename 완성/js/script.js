$(function(){

    $(".main>li").hover(function(){
        // $(this).find(".sub").stop().slideDown();
        $(this).children(".sub").stop().slideDown();
    }, function(){
        $(".sub").stop().slideUp();
    })//hover


    // $(".main>li").mouseover(function(){
    //     $(this).children(".sub").stop().slideDown();
    // })//over
    // $(".main>li").mouseout(function(){
    //     $(".sub").stop().slideUp();
    // })//out


    // var n = 0;

    // setInterval(function(){
    //     n = (n+1) % 3;
    //     //     or
    //     // if(n == 2){
    //     //     n=0
    //     // }else{
    //     //     n++
    //     // }

    //     console.log(n);

    //     $(".left_move").animate({left : n * (-100) + "%"}, 500)

    // }, 3000)

    setInterval(function(){
        $(".left_move").animate({left: "-100%"}, 500, function(){
            $(".left_move").append($(".left_move li").eq(0))
            $(".left_move").css({left: "0"})
        })
    }, 2500)

    $(".p_click").click(function(){
        $(".modal, .popup").fadeIn();
    })
    
    $(".close").click(function(){
        $(".modal, .popup").fadeOut();
    })

})//jquery
