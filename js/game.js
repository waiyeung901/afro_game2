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
            "text":"第二朝，你不省人事<br/>斷晒片，唔記得發生咩事<br/>發現袋内嘅銀包電話俾人<br/>偷咗而且個客已經走埋<br/>知多啲！<br/>可以點樣保護自己？",
            "type":1,//0:conversation, 1:transition
            "transition_next":-1,// for transition only, -1 means last screen
            "background":"bg-02.jpg",
            "popupImage":[2],
            "fadeOut":7000
    
        }


    ]
},{
    id:2,
    "stages":[
        {
            "order":0,
            "text":"ur place? my place?",
            "type":0,//0:conversation, 1:transition , 2: popup action
            "answers":[{
                "choice_text": "ur place",
                "next":1
            },{
                "choice_text": "my place",
                "next":2
            }]
    
        },
        {
            "order":1,
            "text":"Yr Place...",
            "type":1,//0:conversation, 1:transition
            "transition_next":5,// for transition only
            "background":"bg-02.jpg"
    
        },
        {
            "order":2,
            "text":"My Place...",
            "type":1,//0:conversation, 1:transition
            "transition_next":4,// for transition only
            "background":"bg-04.jpg"
    
        },
        {
            "order":3,
            "text":"搞嘢中...<br/>客：想唔想留低回憶？<br/>你會：",
            "type":2,//0:conversation, 1:transition
            "answers":[{
                "choice_text": "拍下都冇所謂！",
                "next":7
            },{
                "choice_text": "唔想",
                "next":7
            }],
            "background":"bg-17.jpg"
    
        },

        {
            "order":4,
            "text":"客：有咩plan?<br/>你:",
            "type":2,//0:conversation, 1:transition
            "answers":[{
                "choice_text": "半套",
                "next":16
            },{
                "choice_text": "全套",
                "next":99
            },{
                "choice_text": "全套+後花園",
                "next":99        
            }],
            "background":"bg-04.jpg"
    
        },
        {
            "order":5,
            "text":"客屋企搞嘢中...發現有光閃下閃下，懷疑被偷拍<br/>你會：",
            "type":2,//0:conversation, 1:transition , 2: popup action
            "background":"bg-02.jpg",
            "answers":[{
                "choice_text": "即時喝止",
                "next":6
            },{
                "choice_text": "有懷疑但唔敢問",
                "next":7
            },{
                "choice_text": "唔理，繼續搞嘢",
                "next":3               
            }]
    
        },
        {
            "order":6,
            "text":"發現偷拍工具，<br/>客人拒絕承認，你會：",
            "type":2,//0:conversation, 1:transition , 2: popup action
            "background":"bg-02.jpg",
            "answers":[{
                "choice_text": "要求delete",
                "next":8
            },{
                "choice_text": "要求馬上付款離去",
                "next":11
            }]
    
        },
        {
            "order":7,
            "text":"完事，客：你去沖涼先，<br/>你會：",
            "type":2,//0:conversation, 1:transition , 2: popup action
            "background":"bg-02.jpg",
            "answers":[{
                "choice_text": "肯",
                "next":12
            },{
                "choice_text": "唔肯",
                "next":13
            }]
    
        },
        {
            "order":8,
            "text":"客唔肯，<br/>你會：",
            "type":2,//0:conversation, 1:transition , 2: popup action
            "background":"bg-02.jpg",
            "answers":[{
                "choice_text": "報警",
                "next":9
            },{
                "choice_text": "搶走並破壞偷拍工具",
                "next":10
            }]
    
        },
        {
            "order":9,
            "text":"遇到有懷疑<br/>最好即刻停落黎。<br/>而家香港法例暫時未能<br/>處理私人地方內嘅偷拍<br/>行為，咁可以點？",
            "type":1,//0:conversation, 1:transition
            "transition_next":-1,// for transition only, -1 means last screen
            "background":"bg-02.jpg",
            "popupImage":[4,5,6],
            "fadeOut":7000
        },
        {
            "order":10,
            "text":"雙方打鬥受傷<br/>你報警反被告刑事毀壞<br/>咁可以點？",
            "type":1,//0:conversation, 1:transition
            "transition_next":-1,// for transition only, -1 means last screen
            "background":"bg-13.jpg",
            "popupImage":[4,5,6],
            "fadeOut":7000
        },
        {
            "order":11,
            "text":"客唔肯...<br/>爭執並禁錮你...<br/>幾日後發現女屍",
            "type":1,//0:conversation, 1:transition
            "transition_next":-1,// for transition only, -1 means last screen
            "background":"bg-11.jpg",
            "popupImage":[5,6,7,8],
            "fadeOut":7000
        },
        {
            "order":12,
            "text":"沖完涼...<br/>客：我已copy晒你<br/>啲資料，唔想俾人知就<br/>之後記住聽我話",
            "type":1,//0:conversation, 1:transition
            "transition_next":14,// for transition only
            "background":"bg-02.jpg"
    
        },
        {
            "order":13,
            "text":"離開",
            "type":1,//0:conversation, 1:transition
            "transition_next":15,// for transition only
            "background":"bg-02.jpg"
    
        },
        {
            "order":14,
            "text":"長期被勒索<br/>後來偷拍片流出<br/>唔想咁，可以點？",
            "type":1,//0:conversation, 1:transition
            "transition_next":-1,// for transition only
            "background":"bg-13.jpg",
            "popupImage":[4,9],
    
        },
        {
            "order":15,
            "text":"客人以偷拍片段威脅",
            "type":1,//0:conversation, 1:transition
            "transition_next":14,// for transition only
            "background":"bg-02.jpg"
    
        },

        {
            "order":16,
            "text":"你取出口交套<br/>客人拒絕：<br/>口唔使用啦，環保啲<br/>唔會傳染嘅",
            "type":2,//0:conversation, 1:transition
            "answers":[{
                "choice_text": "真嘅？信你一次啦！",
                "next":17
            },{
                "choice_text": "唔好啦！口都可以傳染㗎！出嚟玩都玩得安心啲!",
                "next":18
            }],
            "background":"bg-04.jpg"
    
        },
        {
            "order":17,
            "text":"過一段時間後",
            "type":1,//0:conversation, 1:transition
            "transition_next":-1,// for transition only
            "background":"bg-13.jpg",
            "link": "https://www.afrohealth.org.hk/what-is-venereal-disease",
            "fadeInMsg":"口出疱疹"
    
        },
        {
            "order":18,
            "type":1,//0:conversation, 1:transition, 2:popup action
            "transition_next":-1,// for transition only
            "popupImage":[10],
            "popup_next":19,
            "background":"bg-13.jpg"
    
        },
        {
            "order":19,
            "text":"知多啲！",
            "type":1,//0:conversation, 1:transition, 2:popup action, 3: popup with next btn
            "transition_next":-1,// for transition only
            "background":"bg-13.jpg",
            "text_link": "https://www.afrohealth.org.hk/what-is-venereal-disease"
            

    
        },
    ]
},{
    id:3,
    "stages":[
    ]
},{
    id:4,
    "stages":[
    ]
}]

$(function(){
    $("#start_btn").click(function(){
        $("#start_screen").hide();
        //showIntro();
        updateScenario(2,18);
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
            if(stageObj.text){
                $("#transition").css("background-image","url('src/assets/"+stageObj.background+"')");
                if(stageObj.text_link){
                    $("#transition_text").html("<a href='"+stageObj.text_link+"' target='_blank'>"+stageObj.text+"</a>");
                }else{
                    $("#transition_text").html(stageObj.text);
                }

                $("#transition").css("display","flex");
            }

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
                            if(stageObj.popup_next){
                                $("#popupImage_container").append("<div class='popup_next_btn object' data-next="+stageObj.popup_next+">NEXT</div>")
                                $(".popup_next_btn").click(function(){
                                    $(".popup_next_btn").css("pointer-events","none");
                                    var next = $(this).data("next");
                                    setTimeout(function(){
                                        $("#popupImage_container").removeClass("fadedIn");
                                        setTimeout(function(){
                                            $("#popupImage_container").hide();
                                        },500)
                                        updateScenario(scenario,next);
                                    },response)
                                })
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
