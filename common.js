$(function(){

    //nav
   /*  $(".nav").slide({
        type:"menu", //效果类型
        titCell:".m", // 鼠标触发对象
        targetCell:".sub", // 效果对象，必须被titCell包含
        delayTime:0, // 效果时间
        triggerTime:0, //鼠标延迟触发时间
        returnDefault:true,  //返回默认状态
        defaultIndex:-100,
        mainCell:"#menu"
    }); */

    //banner

    //index news
    $(".tab-head").slide({
        titCell:".tab-nav a",
        mainCell:".bd",
        effect:"fold",
        trigger:"click",
        autoPlay:false,
        interTime:5000
    });
   
    //table
   
    
    /* $(".submain .menu-id-2 a").hover(function(){
        $(this).css("background","url('./wb.png') no-repeat 70% -65px");
    }) */
});
