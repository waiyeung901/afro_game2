var scenario = 0;
var stage = 0;
var current = 0; //0:question, 1:answer
var transitionFadeOut =3000;
var response = 2000;
var scenarios = [{
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
            "text":"食完飯去開房?",
            "type":0,//0:conversation, 1:transition

            "answers":[{
                "choice_text": "笑而不語",
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
            "text":"唔用套啦，我想舒服啲!",
            "type":0,//0:conversation, 1:transition
            "answers":[{
                "choice_text": "嗯...好啦！",
                "next":99
            },{
                "choice_text": "唔戴唔得喎！",
                "next":99      
            },{
                "choice_text": "笑而不語",
                "next":99     
            }]
    
        },         
        {
            "order":4,
            "text":"咁不如去飲杯嘢？",
            "type":0,//0:conversation, 1:transition
            "answers":[{
                "choice_text": "好喎!",
                "next":99
            },{
                "choice_text": "唔喇，我都係想早啲返屋企！",
                "next":99      
            }]
    
        },    

    ]
}]

$(function(){
    $("#start_btn").click(function(){
        $("#start_screen").hide();
        updateScenario(scenarios[scenario].stages[stage]);
    })
  

})

function updateScenario(stage){
    if(stage.type){//transition
        $("#transition").css("background-image","url('src/assets/"+stage.background+"')");
        $("#transition_text").html(stage.text)
        $("#transition").css("display","flex");
        stage = stage.transition_next;
        setTimeout(function(){
            $("#game_conversation").html("");
            $("#game_conversation_choices").html("");
            updateScenario(scenarios[scenario].stages[stage]);
            $("#transition").fadeOut();
        },transitionFadeOut)
    }else{
        console.log("conversation");
        $("#game_conversation").append("<div class='question'>"+stage.text+"</div>");
        for(var i=0;i<stage.answers.length;i++){
            $("#game_conversation_choices").append("<div class='choices' data-next="+stage.answers[i].next+">"+stage.answers[i].choice_text+"</div>");
        }
        $(".choices").click(function(){
            $("#game_conversation").append("<div class='answer'>"+$(this).text()+"</div>");
            var next = $(this).data("next");
            setTimeout(function(){
                updateScenario(scenarios[scenario].stages[next]);
            },response)

        })
        
    }
 
}
