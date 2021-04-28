var scenario = 0;
var stage = 0;
var current = 0; //0:question, 1:answer
var transitionFadeOut =3000;
var response = 2000;
var changedLocation = false;

var scenarios = [
    {
        "id":0,
        "stages": [{
            "order":0,
            "text":"Hi!你喺邊度做呀？<i class='emoji'>😉</i>",
            "type":0,
            "answers":[{
                "choice_text": "街",
                "display_text": "喺街啊",
                "next":1
            },{
                "choice_text": "K",
                "display_text": "喺K房啊",
                "next":1       
            },{
                "choice_text": "桑拿",
                "display_text": "喺桑拿啊",
                "next":1      
            },{
                "choice_text": "一樓一",
                "display_text": "喺一樓一啊",
                "next":1      
            },{
                "choice_text": "足浴",
                "display_text": "喺足浴啊",
                "next":1      
            },{
                "choice_text": "ptgf",
                "next":1      
            }]
    
         },
         {
            "order":1,
            "text":"有咩玩?<i class='emoji'>😜</i>",
            "type":0,
            "answers":[{
                "choice_text": "食飯行街",
                "display_text": "<i class='emoji'>😌</i> 食飯行街啊",
                "next_scenario":1
            },{
                "choice_text": "ML",
                "display_text": "<i class='emoji'>😌</i> ML啊",
                "next_scenario":2       
            },{
                "choice_text": "DUP",
                "display_text": "<i class='emoji'>😌</i> DUP啊",
                "next_scenario":3      
            },{
                "choice_text": "猜枚劈酒唱K",
                "display_text": "<i class='emoji'>😌</i> 猜枚劈酒唱K啊",
                "next_scenario":4      
            },]
    
         },
    
          
    
        ]
    },
    {
    "id":1,
    "stages":[
        {
            "order":0,
            "text":"食飯中...",
            "type":1,//0:conversation, 1:transition
            "transition_next":1,// for transition only
            "background":"bg-01.jpg"
    
        },
        {
            "order":1,
            "text":"食完飯去開房?<i class='emoji'>😉</i>",
            "type":0,//0:conversation, 1:transition

            "answers":[{
                "choice_text": "<i class='emoji'>😊</i>",
                "next":2
            },{
                "choice_text": "好啊！",
                "next":2       
            },{
                "choice_text": "嗯...我哋都唔係識咗好耐...",
                "next":4      
            }]
            //"transition_next":2// for transition only

        },
        {
            "order":2,
            "text":"房...",
            "type":1,//0:conversation, 1:transition
            "transition_next":3,// for transition only
            "background":"bg-02.jpg"
    
        },     
        {
            "order":3,
            "text":"唔用套啦，我想舒服啲!<i class='emoji'>😜</i>",
            "type":0,//0:conversation, 1:transition
            "answers":[{
                "choice_text": "嗯...好啦！<i class='emoji'>😰</i>",
                "next":5
            },{
                "choice_text": "唔戴唔得喎！",
                "next":6      
            },{
                "choice_text": "<i class='emoji'>😊</i>",
                "next":7     
            }]
    
        },         
        {
            "order":4,
            "text":"咁不如去飲杯嘢？",
            "type":0,//0:conversation, 1:transition
            "answers":[{
                "choice_text": "好喎!",
                "next":10
            },{
                "choice_text": "唔喇，我都係想早啲返屋企！",
                "next":9     
            }]
    
        },    
        {
            "order":5,
            "text":"過一段時間後唔舒服",
            "type":1,//0:conversation, 1:transition
            "transition_next":-1,// for transition only, -1 means last screen
            "background":"bg-03.jpg",
            "link": "https://www.afrohealth.org.hk/what-is-venereal-disease",
            "fadeInMsg":"知多d！<br/>健康d！"
    
        },
        {
            "order":6,
            "text":"加$?",
            "type":0,//0:conversation, 1:transition
            "answers":[{
                "choice_text": "嗯...一次咁多啦！",
                "next":5
            },{
                "choice_text": "加錢都唔得！",
                "next":8
            }]
    
        },
        {
            "order":7,
            "text":"對方以為你同意，過一段時間後唔舒服",
            "type":1,//0:conversation, 1:transition
            "transition_next":-1,// for transition only, -1 means last screen
            "background":"bg-03.jpg",
            "link": "https://www.afrohealth.org.hk/what-is-venereal-disease",
            "fadeInMsg":"知多d！<br/>健康d！"
    
        },
        {
            "order":8,
            "text":"知多d!<br/>遇到咁嘅情況唔知點算好？<br/>可以學下佢點回應",
            "type":1,//0:conversation, 1:transition
            "transition_next":-1,// for transition only, -1 means last screen
            "background":"bg-03.jpg",
            "popupImage":[1]
    
        },
        {
            "order":9,
            "text":"扮咩上菜，都係想加錢啫，我加多$1000去開房",
            "type":0,//0:conversation, 1:transition
            "answers":[{
                "choice_text": "嗯...一次咁多啦！",
                "next":2
            },{
                "choice_text": "講咩啊你，加錢唔係大晒㗎！",
                "next":11
            }]
    
        },
        {
            "order":10,
            "text":"Bar内, 數杯後微醉...<br/>你決定<br/>",
            "type":2,//0:conversation, 1:transition , 2: popup action
            "background":"bg-01.jpg",
            "answers":[{
                "choice_text": "繼續飲",
                "next":12
            },{
                "choice_text": "離開",
                "next":13
            }]
    
        },
        {
            "order":11,
            "text":"不歡而散，完",
            "type":1,//0:conversation, 1:transition
            "transition_next":-1,// for transition only, -1 means last screen
            "background":"bg-01.jpg",
            "popupImage":[3,19,20]
    
        },
        {
            "order":12,
            "text":"房...",
            "type":1,//0:conversation, 1:transition
            "transition_next":14,// for transition only, -1 means last screen
            "background":"bg-02.jpg"
    
        },
        {
            "order":13,
            "text":"記住任何時間都要<br/>保持清醒啊！",
            "type":1,//0:conversation, 1:transition
            "transition_next":-1,// for transition only, -1 means last screen
            "background":"bg-01.jpg",
            "popupImage":[2],
            "fadeOut":7000
        },
        {
            "order":14,
            "text":"第二朝，不省人事<br/>斷晒片，唔記得發生咩事<br/>發現袋内嘅銀包電話俾人偷咗而且個客已經走咗<br/>知多啲！<br/>可以點樣保護自己？",
            "type":1,//0:conversation, 1:transition
            "transition_next":-1,// for transition only, -1 means last screen
            "background":"bg-02.jpg",
            "popupImage":[2],
            "fadeOut":7000
    
        }


    ]
}]

$(function(){
    $("#start_btn").click(function(){
        $("#start_screen").hide();
        //showIntro();
        updateScenario(0,0);
    })
  

})
function adjustAnswersPosition(){
    var scrollWidth = $("#game_conversation_choices >div >div")[0].scrollWidth;
    var widthOnScreen = $("#game_conversation_choices >div >div").width();
    if(scrollWidth <= widthOnScreen){
        $("#game_conversation_choices > div > div").css("justify-content","center");
        $("#game_conversation_choices > div").css("margin-left",0);
        $("#game_conversation_choices > div").css("margin-right",0);
        $(".choices").css("margin-left","10px");
        $(".choices").css("margin-right","10px");

    }else{
        $("#game_conversation_choices > div > div").css("justify-content","inherit");
        $("#game_conversation_choices > div").css("margin-left","20px");
        $("#game_conversation_choices > div").css("margin-right","20px");
        $(".choices").css("margin-right","20px");
        $(".choices").css("margin-left",0);

    }
}
function changeLocation(){
    $("#game_conversation_top").hide();
    $("#game_conversation_input").hide();
    $("#game_conversation").addClass("noBackground");
    $("#game_screen_wrapper").addClass("wrapperWithBackground");
    
}
function updateScenario(scenario,stage){
    //common
    console.log("updateScenraio:"+scenario+","+stage);
    stageObj = scenarios[scenario].stages[stage];
    $("#game_conversation_choices > div > div").html("");
    switch (stageObj.type) {
        case 0:
            console.log("conversation");
            setTimeout(function(){
                $("#transition").removeClass("fadedIn");
                setTimeout(function(){
                    $("#transition").hide();
                },500)
                $("#game_conversation").append("<div class='question'><div>"+stageObj.text+"</div></div>");
                for(var i=0;i<stageObj.answers.length;i++){
                    if(stageObj.answers[i].next){//general
                        if(stageObj.answers[i].display_text){
                            $("#game_conversation_choices > div > div").append("<div class='choices' data-display_text='"+stageObj.answers[i].display_text+"' data-next="+stageObj.answers[i].next+">"+stageObj.answers[i].choice_text+"</div>");
                        }else{
                            $("#game_conversation_choices > div > div").append("<div class='choices' data-next="+stageObj.answers[i].next+">"+stageObj.answers[i].choice_text+"</div>");
                        }

                    }else if(stageObj.answers[i].next_scenario){//intro
                        $("#game_conversation_choices > div > div").append('<div class="choices" data-display_text="'+stageObj.answers[i].display_text+'" data-next_scenario='+stageObj.answers[i].next_scenario+'>'+stageObj.answers[i].choice_text+'</div>');
                    }
                    adjustAnswersPosition();
                }
                $(".choices").css("pointer-events","auto");
                $(".choices").click(function(){
                    var next = $(this).data("next");
                    var next_scenario = $(this).data("next_scenario");
                    var display_text = $(this).data("display_text");
                    $(".choices").css("pointer-events","none");
                    if(display_text){
                        $("#game_conversation").append("<div class='answer'><div>"+display_text+"</div></div><div class='clearBoth'></div>");
                    }else{
                        $("#game_conversation").append("<div class='answer'><div>"+$(this).html()+"</div></div><div class='clearBoth'></div>");
                    }


                    setTimeout(function(){
                        if(next){//general
                            updateScenario(scenario,next);
                        }else if(next_scenario){//intro
                            scenario = next_scenario;
                            updateScenario(next_scenario,0);
                            console.log("Intro - chose scenario "+scenario);
                        }
                    },response)
        
                })
            },100)
            break;
        case 1:
            console.log("transition");
            $("#transition").css("background-image","url('src/assets/"+stageObj.background+"')");

            $("#transition_text").html(stageObj.text);
            $("#transition").css("display","flex");
            setTimeout(function(){
                $("#transition").addClass("fadedIn");
                stage = stageObj.transition_next;
                setTimeout(function(){
                    if(stage != -1){//not ending screen
                        if(!changedLocation){
                            changeLocation();
                        }
                        $("#game_screen_wrapper").css("background-image","url('src/assets/"+stageObj.background+"')");
                        $("#game_conversation").html("");
                        updateScenario(scenario, stage);
                        //
                    }else{
                        if(stageObj.fadeInMsg && stageObj.link){//Ending with fadeIn msg
                            $("#transition_text").append("<br/><div class='fadeInText fadeObject'><a href='"+stageObj.link+"' target='_blank'>"+stageObj.fadeInMsg+"</a></div>");
                            setTimeout(function(){
                                $(".fadeInText").addClass("fadedIn");
                            },100)
        
                        }else if(stageObj.popupImage && stageObj.popupImage.length>0){
                            $("#popupImage_container").show();
                            for(i=stageObj.popupImage.length-1;i>=0;i--){
                                $("#popupImage_container").append("<div class='page popupImage fadeObject' id='popupImage-"+i+"' style='background-image:url(src/assets/Images/Image"+stageObj.popupImage[i]+".jpg)'></div>")
                            }
                            setTimeout(function(){
                                $("#popupImage_container").addClass("fadedIn");
                                $(".popupImage").click(function(){
                                    if($(".popupImage").length >1){
                                        var image = $(this)
                                        setTimeout(function(){
                                         image.addClass("fadeOut");
                                         setTimeout(function(){
                                            image.remove();
                                         },500)
                                        },100)
                                    }else{
                                        console.log("This is the last popup Image");
                                    }
        
          
                                })
                            },100)              
                        }
                    }
        
                },stageObj.fadeOut?stageObj.fadeOut:transitionFadeOut)
            },100)
            break;
        case 2:
            console.log("popup action")
            $("#transition").css("background-image","url('src/assets/"+stageObj.background+"')");
            $("#transition_text").html(stageObj.text);
            for(i=0;i<stageObj.answers.length;i++){
                $("#transition_text").append("<div class='choices' data-next="+stageObj.answers[i].next+">"+stageObj.answers[i].choice_text+"</div>");
            }
            $(".choices").css("pointer-events","auto");
            $(".choices").click(function(){
                $(".choices").css("pointer-events","none");
                var next = $(this).data("next");
                setTimeout(function(){
                    updateScenario(scenario,next);
                },response)
            })
    

            $("#transition").css("display","flex");
            setTimeout(function(){
                $("#transition").addClass("fadedIn");
            },100)

            break;
        default:
            console.log("No match type");
    }

 
}
