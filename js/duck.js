$(document).ready(function(){
    //첫화면 fade슬라이드
    const slide = setInterval(fade,2000);
    let i = 3;
    function fade(){
        i--;
        if(i==0){
            i=3;
            $('#index main img').fadeIn(1000);
        }else{
            $('#index main img').eq(i).fadeOut(1000);
        }
    }
    //상단높이 감지하기
    const header = $('#header').contentWindow.document;
    const h = $('#logo').height();
    alrer(h);//151.484 / 123.625
});