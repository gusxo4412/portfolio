$(document).ready(function(){
    // 메뉴 접기
    $("aside .aside_list .mid").click(function(){
        if($("aside .aside_list .bot").is(":visible")){
            $("aside .aside_list .bot").css("display","none");
            $("aside .aside_list .mid svg").addClass("right");
        }
        else{
            $("aside .aside_list .bot").css("display","block");
            $("aside .aside_list .mid svg").removeClass("right");
        }
    });

    // 탭 메뉴
    $("aside .aside_list .bot div, .container nav ul > li").click(function(){
        $(".container nav .main, .container main").removeClass("on");

        var idx = $(this).index();

        $("aside .aside_list .bot div").removeClass("on");
        $("aside .aside_list .bot div").eq(idx).addClass("on");

        $(".container section").removeClass("on");
        $(".container section").eq(idx).addClass("on");

        $(".container nav ul > li").removeClass("on");
        $(".container nav ul > li").eq(idx).addClass("on");
    });

    $(".container nav .main").click(function(){
        $(".container nav .main, .container main").addClass("on");

        $("aside .aside_list .bot div, .container section, .container nav ul > li").removeClass("on");
    });

    $(".container main .main_btns button.main_about").click(function(){
        $("aside .aside_list .bot div").eq(0).addClass("on");
        $(".container section").eq(0).addClass("on");
        $(".container nav ul > li").eq(0).addClass("on");

        $(".container nav .main, .container main").removeClass("on");
    });

    $(".container main .main_btns button.main_projects").click(function(){
        $("aside .aside_list .bot div").eq(1).addClass("on");
        $(".container section").eq(1).addClass("on");
        $(".container nav ul > li").eq(1).addClass("on");

        $(".container nav .main, .container main").removeClass("on");
    });


    // 타이핑 애니메이션
    const $text = document.querySelector(".text");

    // 글자 모음
    const letters = [
    "발전하는 웹 퍼블리셔입니다 !",
    "성장하는 웹 퍼블리셔입니다 !", 
    "비상하는 웹 퍼블리셔입니다 !"
    ];

    // 글자 입력 속도
    const speed = 100;
    let i = 0;

    // 타이핑 효과
    const typing = async () => {  
    const letter = letters[i].split("");
    
    while (letter.length) {
        await wait(speed);
        $text.innerHTML += letter.shift(); 
    }
    
    // 잠시 대기
    await wait(800);
    
    // 지우는 효과
    remove();
    }

    // 글자 지우는 효과
    const remove = async () => {
    const letter = letters[i].split("");
    
    while (letter.length) {
        await wait(speed);
        
        letter.pop();
        $text.innerHTML = letter.join(""); 
    }
    
    // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
    i = !letters[i+1] ? 0 : i + 1;
    typing();
    }

    // 딜레이 기능 ( 마이크로초 )
    function wait(ms) {
    return new Promise(res => setTimeout(res, ms))
    }

    // 초기 실행
    setTimeout(typing, 1500);

});