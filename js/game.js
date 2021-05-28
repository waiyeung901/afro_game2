var scenario = 0;
var stage = 0;
var current = 0; //0:question, 1:answer
var transitionFadeOut = 3000;
var response = 2000;
var changedLocation = false;

var scenarios = [{
        "id": 0,
        "stages": [{
                "order": 0,
                "text": "Hi!你喺邊度做呀？<i class='emoji'>😉</i>",
                "type": 0,
                "answers": [{
                    "choice_text": "街",
                    "display_text": "喺街啊",
                    "next": 1
                }, {
                    "choice_text": "K",
                    "display_text": "喺K房啊",
                    "next": 1
                }, {
                    "choice_text": "桑拿",
                    "display_text": "喺桑拿啊",
                    "next": 1
                }, {
                    "choice_text": "一樓一",
                    "display_text": "喺一樓一啊",
                    "next": 1
                }, {
                    "choice_text": "足浴",
                    "display_text": "喺足浴啊",
                    "next": 1
                }, {
                    "choice_text": "ptgf",
                    "next": 1
                }]

            },
            {
                "order": 1,
                "text": "有咩玩?<i class='emoji'>😜</i>",
                "type": 0,
                "answers": [{
                    "choice_text": "食飯行街",
                    "display_text": "<i class='emoji'>😌</i> 食飯行街啊",
                    "next_scenario": 1
                }, {
                    "choice_text": "ML",
                    "display_text": "<i class='emoji'>😌</i> ML啊",
                    "next_scenario": 2
                }, {
                    "choice_text": "DUP",
                    "display_text": "<i class='emoji'>😌</i> DUP啊",
                    "next_scenario": 3
                }, {
                    "choice_text": "猜枚劈酒唱K",
                    "display_text": "<i class='emoji'>😌</i> 猜枚劈酒唱K啊",
                    "next_scenario": 4
                }, ]

            },



        ]
    },
    {
        "id": 1,
        "stages": [{
                "order": 0,
                "text": "食飯中...",
                "type": 1, //0:conversation, 1:transition
                "transition_next": 1, // for transition only
                "background": "bg-01.jpg"

            },
            {
                "order": 1,
                "text": "食完飯去開房?<i class='emoji'>😉</i>",
                "type": 0, //0:conversation, 1:transition

                "answers": [{
                        "choice_text": "<i class='emoji'>😊</i>",
                        "next": 2
                    }, {
                        "choice_text": "好啊！",
                        "next": 2
                    }, {
                        "choice_text": "嗯...我哋都唔係識咗好耐...",
                        "next": 4
                    }]
                    //"transition_next":2// for transition only

            },
            {
                "order": 2,
                "text": "房...",
                "type": 1, //0:conversation, 1:transition
                "transition_next": 3, // for transition only
                "background": "bg-02.jpg"

            },
            {
                "order": 3,
                "text": "唔用套啦，我想舒服啲!<i class='emoji'>😜</i>",
                "type": 0, //0:conversation, 1:transition
                "answers": [{
                    "choice_text": "嗯...好啦！<i class='emoji'>😰</i>",
                    "next": 5
                }, {
                    "choice_text": "唔戴唔得喎！",
                    "next": 6
                }, {
                    "choice_text": "<i class='emoji'>😊</i>",
                    "next": 7
                }]

            },
            {
                "order": 4,
                "text": "咁不如去飲杯嘢？",
                "type": 0, //0:conversation, 1:transition
                "answers": [{
                    "choice_text": "好喎!",
                    "next": 10
                }, {
                    "choice_text": "唔喇，我都係想早啲返屋企！",
                    "next": 9
                }]

            },
            {
                "order": 5,
                "text": "過一段時間後唔舒服",
                "type": 1, //0:conversation, 1:transition
                "transition_next": -1, // for transition only, -1 means last screen
                "background": "bg-03.jpg",
                "link": "https://www.afrohealth.org.hk/what-is-venereal-disease",
                "fadeInMsg": "知多d！<br/>健康d！"

            },
            {
                "order": 6,
                "text": "加$?",
                "type": 0, //0:conversation, 1:transition
                "answers": [{
                    "choice_text": "嗯...一次咁多啦！",
                    "next": 5
                }, {
                    "choice_text": "加錢都唔得！",
                    "next": 8
                }]

            },
            {
                "order": 7,
                "text": "對方以為你同意，過一段時間後唔舒服",
                "type": 1, //0:conversation, 1:transition
                "transition_next": -1, // for transition only, -1 means last screen
                "background": "bg-03.jpg",
                "link": "https://www.afrohealth.org.hk/what-is-venereal-disease",
                "fadeInMsg": "知多d！<br/>健康d！"

            },
            {
                "order": 8,
                "text": "知多d!<br/>遇到咁嘅情況唔知點算好？<br/>可以學下佢點回應",
                "type": 1, //0:conversation, 1:transition
                "transition_next": -1, // for transition only, -1 means last screen
                "background": "bg-03.jpg",
                "popupImage": [1]

            },
            {
                "order": 9,
                "text": "扮咩上菜，都係想加錢啫，我加多$1000去開房",
                "type": 0, //0:conversation, 1:transition
                "answers": [{
                    "choice_text": "嗯...一次咁多啦！",
                    "next": 2
                }, {
                    "choice_text": "講咩啊你，加錢唔係大晒㗎！",
                    "next": 11
                }]

            },
            {
                "order": 10,
                "text": "Bar内, 數杯後微醉...<br/>你決定<br/>",
                "type": 2, //0:conversation, 1:transition , 2: popup action
                "background": "bg-01.jpg",
                "answers": [{
                    "choice_text": "繼續飲",
                    "next": 12
                }, {
                    "choice_text": "離開",
                    "next": 13
                }]

            },
            {
                "order": 11,
                "text": "不歡而散，完",
                "type": 1, //0:conversation, 1:transition
                "transition_next": -1, // for transition only, -1 means last screen
                "background": "bg-01.jpg",
                "popupImage": [3, 19, 20]

            },
            {
                "order": 12,
                "text": "房...",
                "type": 1, //0:conversation, 1:transition
                "transition_next": 14, // for transition only, -1 means last screen
                "background": "bg-02.jpg"

            },
            {
                "order": 13,
                "text": "記住任何時間都要<br/>保持清醒啊！",
                "type": 1, //0:conversation, 1:transition
                "transition_next": -1, // for transition only, -1 means last screen
                "background": "bg-01.jpg",
                "popupImage": [2],
            },
            {
                "order": 14,
                "text": "第二朝，你不省人事<br/>斷晒片，唔記得發生咩事<br/>發現袋内嘅銀包電話俾人<br/>偷咗而且個客已經走埋<br/>知多啲！<br/>可以點樣保護自己？",
                "type": 1, //0:conversation, 1:transition
                "transition_next": -1, // for transition only, -1 means last screen
                "background": "bg-02.jpg",
                "popupImage": [2],
                "fadeOut": 7000

            }


        ]
    }, {
        id: 2,
        "stages": [{
                "order": 0,
                "text": "ur place? my place?",
                "type": 0, //0:conversation, 1:transition , 2: popup action
                "answers": [{
                    "choice_text": "ur place",
                    "next": 1
                }, {
                    "choice_text": "my place",
                    "next": 2
                }]

            },
            {
                "order": 1,
                "text": "ur place...",
                "type": 1, //0:conversation, 1:transition
                "transition_next": 5, // for transition only
                "background": "bg-02.jpg"

            },
            {
                "order": 2,
                "text": "My Place...",
                "type": 1, //0:conversation, 1:transition
                "transition_next": 4, // for transition only
                "background": "bg-04.jpg"

            },
            {
                "order": 3,
                "text": "搞嘢中...",
                "type": 1, //0:conversation, 1:transition
                "background": "bg-17.jpg",
                "transition_next": 37, // for transition only

            },

            {
                "order": 4,
                "text": "有咩plan?",
                "type": 0, //0:conversation, 1:transition
                "answers": [{
                    "choice_text": "半套",
                    "next": 16
                }, {
                    "choice_text": "全套",
                    "next": 20
                }, {
                    "choice_text": "全套+後花園",
                    "next": 27
                }],
                "background": "bg-04.jpg"

            },
            {
                "order": 5,
                "text": "客屋企搞嘢中...發現有光閃下閃下，懷疑被偷拍<br/>你會：",
                "type": 2, //0:conversation, 1:transition , 2: popup action
                "background": "bg-02.jpg",
                "answers": [{
                    "choice_text": "即時喝止",
                    "next": 6
                }, {
                    "choice_text": "有懷疑但唔敢問",
                    "next": 7
                }, {
                    "choice_text": "唔理，繼續搞嘢",
                    "next": 3
                }]

            },
            {
                "order": 6,
                "text": "發現偷拍工具，<br/>客人拒絕承認，你會：",
                "type": 2, //0:conversation, 1:transition , 2: popup action
                "background": "bg-02.jpg",
                "answers": [{
                    "choice_text": "要求delete",
                    "next": 8
                }, {
                    "choice_text": "要求馬上付款離去",
                    "next": 11
                }]

            },
            {
                "order": 7,
                "text": "完事，客：你去沖涼先，<br/>你會：",
                "type": 2, //0:conversation, 1:transition , 2: popup action
                "background": "bg-02.jpg",
                "answers": [{
                    "choice_text": "肯",
                    "next": 12
                }, {
                    "choice_text": "唔肯",
                    "next": 13
                }]

            },
            {
                "order": 8,
                "text": "客唔肯，<br/>你會：",
                "type": 2, //0:conversation, 1:transition , 2: popup action
                "background": "bg-02.jpg",
                "answers": [{
                    "choice_text": "報警",
                    "next": 9
                }, {
                    "choice_text": "搶走並破壞偷拍工具",
                    "next": 10
                }]

            },
            {
                "order": 9,
                "text": "遇到有懷疑<br/>最好即刻停落黎。<br/>而家香港法例暫時未能<br/>處理私人地方內嘅偷拍<br/>行為，咁可以點？",
                "type": 1, //0:conversation, 1:transition
                "transition_next": -1, // for transition only, -1 means last screen
                "background": "bg-02.jpg",
                "popupImage": [4, 5, 6],
                "fadeOut": 7000
            },
            {
                "order": 10,
                "text": "雙方打鬥受傷<br/>你報警反被告刑事毀壞<br/>咁可以點？",
                "type": 1, //0:conversation, 1:transition
                "transition_next": -1, // for transition only, -1 means last screen
                "background": "bg-13.jpg",
                "popupImage": [4, 5, 6],
                "fadeOut": 7000
            },
            {
                "order": 11,
                "text": "客唔肯...<br/>爭執並禁錮你...<br/>幾日後發現女屍",
                "type": 1, //0:conversation, 1:transition
                "transition_next": -1, // for transition only, -1 means last screen
                "background": "bg-11.jpg",
                "popupImage": [5, 6, 7, 8],
                "fadeOut": 7000
            },
            {
                "order": 12,
                "text": "沖完涼...<br/>客：我已copy晒你<br/>啲資料，唔想俾人知就<br/>之後記住聽我話",
                "type": 1, //0:conversation, 1:transition
                "transition_next": 14, // for transition only
                "background": "bg-02.jpg"

            },
            {
                "order": 13,
                "text": "離開",
                "type": 1, //0:conversation, 1:transition
                "transition_next": 15, // for transition only
                "background": "bg-02.jpg"

            },
            {
                "order": 14,
                "text": "長期被勒索<br/>後來偷拍片流出<br/>唔想咁，可以點？",
                "type": 1, //0:conversation, 1:transition
                "transition_next": -1, // for transition only
                "background": "bg-13.jpg",
                "popupImage": [4, 9],

            },
            {
                "order": 15,
                "text": "客人以偷拍片段威脅",
                "type": 1, //0:conversation, 1:transition
                "transition_next": 14, // for transition only
                "background": "bg-02.jpg"

            },

            {
                "order": 16,
                "text": "你取出口交套 客人拒絕",
                "type": 1, //0:conversation, 1:transition
                "transition_next": 38,
                "background": "bg-18.jpg"

            },
            {
                "order": 17,
                "text": "過一段時間後",
                "type": 1, //0:conversation, 1:transition
                "transition_next": -1, // for transition only
                "background": "bg-13.jpg",
                "link": "https://www.afrohealth.org.hk/what-is-venereal-disease",
                "fadeInMsg": "口出疱疹"

            },
            {
                "order": 18,
                "type": 1, //0:conversation, 1:transition, 2:popup action
                "transition_next": -1, // for transition only
                "popupImage": [10],
                "popup_next": 19,

                "fadeOut": 1

            },
            {
                "order": 19,
                "text": "知多啲！",
                "type": 1, //0:conversation, 1:transition, 2:popup action, 3: popup with next btn
                "transition_next": -1, // for transition only
                "background": "bg-13.jpg",
                "text_link": "https://www.afrohealth.org.hk/what-is-venereal-disease"



            },
            {
                "order": 20,
                "text": "準備搞嘢客戴兩個套，你：",
                "type": 2, //0:conversation, 1:transition
                "answers": [{
                    "choice_text": "由佢",
                    "next": 21
                }, {
                    "choice_text": "阻止佢",
                    "next": 25
                }],
                "background": "bg-22.jpg"

            },
            {
                "order": 21,
                "text": "做做吓穿套",
                "type": 1, //0:conversation, 1:transition
                "transition_next": 22, // for transition only
                "background": "bg-22.jpg"

            },
            {
                "order": 22,
                "text": "你想換套，客唔肯<br/>格硬嚟，你表示唔好<br/>完事後你會：",
                "type": 2, //0:conversation, 1:transition
                "answers": [{
                    "choice_text": "報警",
                    "next": 23
                }, {
                    "choice_text": "覺得自己都有責任，息事寧人算數",
                    "next": 24
                }],
                "background": "bg-22.jpg"

            },
            {
                "order": 23,
                "text": "性暴力/强姦刑事罪行條例",
                "type": 1, //0:conversation, 1:transition
                "transition_next": -1, // for transition only
                "background": "bg-22.jpg",
                "text_link": "https://www.afrohealth.org.hk/what-is-venereal-disease",

            },
            {
                "order": 24,
                "text": "意外懷孕/ 安全避孕指南(事後丸)/性病",
                "type": 1, //0:conversation, 1:transition
                "transition_next": -1, // for transition only
                "background": "bg-22.jpg",
                "text_link": "https://www.afrohealth.org.hk/what-is-venereal-disease",

            },
            {
                "order": 25,
                "text": "安全啲喎！一個穿咗仲有另外一個頂住！",
                "type": 0, //0:conversation, 1:transition
                "answers": [{
                    "choice_text": "真嘅？信你一次啦！",
                    "next": 21
                }, {
                    "choice_text": "唔好啦！你估裝橙咩！安全套係乳膠做㗎，兩個互相摩擦仲易穿啊！",
                    "next": 26
                }],
                "background": "bg-22.jpg"

            },
            {
                "order": 26,
                "text": "客人接受，完成交易",
                "type": 1, //0:conversation, 1:transition
                "transition_next": -1, // for transition only
                "text_link": "https://www.afrohealth.org.hk/what-is-venereal-disease",
                "background": "bg-22.jpg"

            },
            {
                "order": 27,
                "text": "準備後花園...",
                "type": 1, //0:conversation, 1:transition
                "transition_next": 28, // for transition only
                "background": "bg-16.jpg"

            },
            {
                "order": 28,
                "text": "你拎套出嚟...",
                "type": 1, //0:conversation, 1:transition
                "transition_next": 39,
                "background": "bg-18.jpg"

            },
            {
                "order": 29,
                "text": "你準備搽潤滑劑，客制止，<br/>你會：",
                "type": 2, //0:conversation, 1:transition
                "answers": [{
                    "choice_text": "知高風險但無奈接受",
                    "next": 30
                }, {
                    "choice_text": "扮去廁所用針筒打潤滑劑入去",
                    "next": 40
                }, {
                    "choice_text": "堅決拒絕",
                    "next": 46
                }],
                "background": "bg-19.jpg"

            },
            {
                "order": 30,
                "text": "過程痛苦，之後發現流血",
                "type": 1, //0:conversation, 1:transition
                "transition_next": 31, // for transition only
                "background": "bg-20.jpg"

            },
            {
                "order": 31,
                "text": "唔好啦，你怕咪之後啷下個口殺菌囉！",
                "pre_conversation": [{
                        "from": 1,
                        "text": "好痛吖，唔搞喇！"
                    },
                    {
                        "from": 0,
                        "text": "吓...咁我點算啊？"
                    }
                ],
                "type": 0, //0:conversation, 1:transition
                "answers": [{
                    "choice_text": "幫你用手打出嚟啦！",
                    "next": 32
                }, {
                    "choice_text": "唔得喇！我真係好痛！",
                    "next": 34
                }],
                "background": "bg-20.jpg"

            },
            {
                "order": 32,
                "text": "客：唔好啦，你怕咪之後啷下個口殺菌囉！<br/>你：",
                "type": 2, //0:conversation, 1:transition
                "answers": [{
                    "choice_text": "都可以嘅...",
                    "next": 17
                }, {
                    "choice_text": "咪傻啦！呢啲邊可以殺菌，唔做就係唔做，你要就搵其他女仔啦！",
                    "next": 33
                }],
                "background": "bg-20.jpg"

            },
            {
                "order": 33,
                "text": "冷知識Q19",
                "type": 1, //0:conversation, 1:transition
                "transition_next": -1, // for transition only
                "background": "bg-20.jpg",
                "text_link": "https://www.afrohealth.org.hk/what-is-venereal-disease",

            },
            {
                "order": 34,
                "text": "客無奈接受，離開。",
                "type": 1, //0:conversation, 1:transition
                "transition_next": -1, // for transition only
                "next_btn": 35,
                "background": "bg-20.jpg"

            },
            {
                "order": 35,
                "text": "肛門冇分泌㗎！唔想受傷就要落潤滑劑喇！",
                "type": 1, //0:conversation, 1:transition
                "transition_next": -1, // for transition only
                "next_btn": 36,
                "background": "bg-20.jpg"

            },
            {
                "order": 36,
                "text": "潤滑劑",
                "type": 1, //0:conversation, 1:transition
                "transition_next": -1, // for transition only
                "background": "bg-20.jpg",
                "text_link": "https://www.afrohealth.org.hk/safe-sex/lubricant",

            },
            {
                "order": 37,
                "text": "想唔想留低回憶？",
                "type": 0, //0:conversation, 1:transition
                "background": "bg-17.jpg",
                "answers": [{
                    "choice_text": "拍下都冇所謂！",
                    "next": 7
                }, {
                    "choice_text": "唔想",
                    "next": 7
                }]

            },
            {
                "order": 38,
                "text": "口唔使用啦，環保啲，唔會傳染嘅",
                "type": 0, //0:conversation, 1:transition
                "background": "bg-17.jpg",
                "answers": [{
                    "choice_text": "真嘅？信你一次啦！",
                    "next": 17
                }, {
                    "choice_text": "唔好啦！口都可以傳染㗎！出嚟玩都玩得安心啲!",
                    "next": 18
                }],

            },
            {
                "order": 39,
                "text": "唔使用啦，又唔會有BB",
                "type": 0, //0:conversation, 1:transition
                "background": "bg-18.jpg",
                "answers": [{
                    "choice_text": "又係喎！",
                    "next": 29
                }, {
                    "choice_text": "No",
                    "next": 47
                }]

            },
            {
                "order": 40,
                "text": "肛交完，準備陰道性交",
                "type": 1, //0:conversation, 1:transition
                "transition_next": 41, // for transition only
                "background": "bg-19.jpg"

            },
            {
                "order": 41,
                "text": "唔用套啦，我想舒服啲！",
                "type": 0, //0:conversation, 1:transition
                "answers": [{
                    "choice_text": "嗯...好啦！",
                    "next": 42
                }, {
                    "choice_text": "唔戴唔得喎！",
                    "next": 43
                }, {
                    "choice_text": "<i class='emoji'>😊</i>",
                    "next": 45
                }],
                "background": "bg-17.jpg"

            },
            {
                "order": 42,
                "text": "過一段時間後唔舒服",
                "type": 1, //0:conversation, 1:transition
                "transition_next": -1, // for transition only, -1 means last screen
                "background": "bg-03.jpg",
                "link": "https://www.afrohealth.org.hk/what-is-venereal-disease",
                "fadeInMsg": "知多d！<br/>健康d！"

            },
            {
                "order": 43,
                "text": "加$?",
                "type": 0, //0:conversation, 1:transition
                "answers": [{
                    "choice_text": "嗯...一次咁多啦！",
                    "next": 5
                }, {
                    "choice_text": "加錢都唔得！",
                    "next": 44
                }],
                "background": "bg-17.jpg"

            },
            {
                "order": 44,
                "text": "知多d!<br/>遇到咁嘅情況唔知點算好？<br/>可以學下佢點回應",
                "type": 1, //0:conversation, 1:transition
                "transition_next": -1, // for transition only, -1 means last screen
                "popupImage": [1],
                "background": "bg-17.jpg"

            },
            {
                "order": 45,
                "text": "完事，對方以為你同意，<br/>過一段時間後唔舒服",
                "type": 1, //0:conversation, 1:transition
                "transition_next": -1, // for transition only, -1 means last screen
                "background": "bg-03.jpg",
                "link": "https://www.afrohealth.org.hk/what-is-venereal-disease",
                "fadeInMsg": "知多d！<br/>健康d！"

            },
            {
                "order": 46,
                "text": "你：唔可以，後面冇水㗎！<br/>你想痛死我咩，你都唔舒服啦！<br/>客接受...肛交完，準備陰道性交",
                "type": 1, //0:conversation, 1:transition
                "transition_next": 41, // for transition only
                "background": "bg-19.jpg"

            },
            {
                "order": 47,
                "text": "你：唔得，唔係驚有冇 BB, 係驚有咩病啊！<br/>客：我好乾淨㗎，冇病嘅<br/>你：冇樣睇㗎！大家都唔知大家有冇事，我慣咗個個客都要戴㗎，大家安心啲！<br/>客聽完乖乖戴套...",
                "type": 1, //0:conversation, 1:transition
                "transition_next": 48, // for transition only
                "background": "bg-18.jpg"

            },
            {
                "order": 48,
                "text": "",
                "type": 1, //0:conversation, 1:transition
                "transition_next": 49, // for transition only
                "background": "bg-16.jpg"

            },
            {
                "order": 49,
                "text": "客人準備陰道性交...你會：",
                "type": 2, //0:conversation, 1:transition
                "background": "bg-17.jpg",
                "answers": [{
                    "choice_text": "迎合客人",
                    "next": 50
                }, {
                    "choice_text": "制止要求客人換套",
                    "next": 51
                }],
            },
            {
                "order": 50,
                "text": "做小一步，可以好大件事，慳咩都好就係唔可以慳個套！",
                "type": 1, //0:conversation, 1:transition
                "transition_next": -1, // for transition only, -1 means last screen
                "background": "bg-17.jpg",
                "link": "https://www.afrohealth.org.hk/what-is-venereal-disease",
                "fadeInMsg": "知多d！"

            },
            {
                "order": 51,
                "text": "客：咁麻煩，咩 mood 都冇晒喇！你：",
                "type": 2, //0:conversation, 1:transition
                "background": "bg-17.jpg",
                "answers": [{
                    "choice_text": "覺得風險唔大，順從要求",
                    "next": 50
                }, {
                    "choice_text": " 拒絕並解釋",
                    "next": 52
                }],

            },
            {
                "order": 52,
                "text": "你：咁唔衞生！<br/>慳咩都好就係唔可以慳個套！",
                "type": 1, //0:conversation, 1:transition
                "transition_next": -1, // for transition only, -1 means last screen
                "background": "bg-17.jpg",
                "link": "https://www.afrohealth.org.hk/what-is-venereal-disease",
                "fadeInMsg": "知多d！"

            },
        ]
    }, {
        id: 3,
        "stages": [{
                "order": 0,
                "text": "按摩房内按摩中...",
                "type": 1, //0:conversation, 1:transition
                "transition_next": 1, // for transition only
                "background": "bg-06.jpg"

            },
            {
                "order": 1,
                "text": "有冇其他服務？",
                "type": 0, //0:conversation, 1:transition
                "answers": [{
                    "choice_text": "你想玩咩？😁",
                    "next": 2
                }, {
                    "choice_text": "我哋唔可以係呢度做呢啲嘢㗎！",
                    "next": 11
                }, {
                    "choice_text": "摸而不語",
                    "next": 24
                }],
                "background": "bg-06.jpg"

            },
            {
                "order": 2,
                "text": "我想你幫我用口...",
                "type": 0, //0:conversation, 1:transition
                "answers": [{
                    "choice_text": "加多小小吖！",
                    "next": 3
                }, {
                    "choice_text": "幫你用手打出嚟啦！",
                    "next": 9
                }],
                "background": "bg-06.jpg"

            },
            {
                "order": 3,
                "text": "OK!",
                "type": 0, //customer ans and transition
                "next": 4

            },
            {
                "order": 4,
                "text": "你取出口交套，客人拒絕",
                "type": 1, //0:conversation, 1:transition
                "transition_next": 5, // for transition only
                "background": "bg-18.jpg"

            },
            {
                "order": 5,
                "text": "口唔使用啦，環保啲，唔會傳染嘅",
                "type": 0, //0:conversation, 1:transition
                "answers": [{
                    "choice_text": "真嘅？信你一次啦!",
                    "next": 6
                }, {
                    "choice_text": "唔好啦，口都可以傳染㗎！出嚟玩都玩得安心啲！",
                    "next": 7
                }],
                "background": "bg-18.jpg"

            },
            {
                "order": 6,
                "text": "過一段時間後",
                "type": 1, //0:conversation, 1:transition
                "transition_next": -1, // for transition only, -1 means last screen
                "background": "bg-13.jpg",
                "link": "https://www.afrohealth.org.hk/what-is-venereal-disease",
                "fadeInMsg": "口出疱疹"

            },
            {
                "order": 7,
                "type": 1, //0:conversation, 1:transition, 2:popup action
                "transition_next": -1, // for transition only
                "popupImage": [10],
                "popup_next": 8,
                "background": "bg-18.jpg"

            },
            {
                "order": 8,
                "text": "知多啲！",
                "type": 1, //0:conversation, 1:transition, 2:popup action, 3: popup with next btn
                "transition_next": -1, // for transition only
                "background": "bg-18.jpg",
                "text_link": "https://www.afrohealth.org.hk/what-is-venereal-disease"



            },
            {
                "order": 9,
                "text": "唔好啦，你怕咪之後啷下個口殺菌囉！",
                "type": 0, //0:conversation, 1:transition
                "answers": [{
                    "choice_text": "都可以嘅...",
                    "next": 6
                }, {
                    "choice_text": "呢啲邊可以殺菌，唔做就係唔做，你要就搵其他女仔啦！",
                    "next": 10
                }],
                "background": "bg-06.jpg"

            },
            {
                "order": 10,
                "text": "冷知識Q19",
                "type": 1, //0:conversation, 1:transition
                "transition_next": -1, // for transition only
                "background": "bg-06.jpg",
                "text_link": "https://www.afrohealth.org.hk/what-is-venereal-disease",

            },
            {
                "order": 11,
                "text": "咁不如去飲杯嘢？",
                "type": 0, //0:conversation, 1:transition
                "answers": [{
                    "choice_text": "好喎！",
                    "next": 12
                }, {
                    "choice_text": "唔嘞，我都係想早啲返屋企！",
                    "next": 16
                }],
                "background": "bg-06.jpg"

            },
            {
                "order": 12,
                "text": "Bar内, 數杯後微醉...<br/>你決定<br/>",
                "type": 2, //0:conversation, 1:transition , 2: popup action
                "background": "bg-01.jpg",
                "answers": [{
                    "choice_text": "繼續飲",
                    "next": 13
                }, {
                    "choice_text": "離開",
                    "next": 14
                }]

            },
            {
                "order": 13,
                "text": "房...",
                "type": 1, //0:conversation, 1:transition
                "transition_next": 15, // for transition only, -1 means last screen
                "background": "bg-02.jpg"

            },
            {
                "order": 14,
                "text": "記住任何時間都要<br/>保持清醒啊！",
                "type": 1, //0:conversation, 1:transition
                "transition_next": -1, // for transition only, -1 means last screen
                "background": "bg-01.jpg",
                "popupImage": [2],
            },
            {
                "order": 15,
                "text": "第二朝，你不省人事<br/>斷晒片，唔記得發生咩事<br/>發現袋内嘅銀包電話俾人<br/>偷咗而且個客已經走埋<br/>知多啲！<br/>可以點樣保護自己？",
                "type": 1, //0:conversation, 1:transition
                "transition_next": -1, // for transition only, -1 means last screen
                "background": "bg-02.jpg",
                "popupImage": [2],
                "fadeOut": 7000

            },
            {
                "order": 16,
                "text": "扮咩上菜，都係想加錢啫，我加多$1000去開房",
                "type": 0, //0:conversation, 1:transition
                "answers": [{
                    "choice_text": "嗯...一次咁多啦！",
                    "next": 18
                }, {
                    "choice_text": "講咩啊你，加錢唔係大晒㗎！",
                    "next": 17
                }]

            },
            {
                "order": 17,
                "text": "不歡而散，完",
                "type": 1, //0:conversation, 1:transition
                "transition_next": -1, // for transition only, -1 means last screen
                "background": "bg-15.jpg",
                "popupImage": [3, 19, 20]

            },
            {
                "order": 18,
                "text": "房...",
                "type": 1, //0:conversation, 1:transition
                "transition_next": 19, // for transition only
                "background": "bg-02.jpg"

            },
            {
                "order": 19,
                "text": "唔用套啦，我想舒服啲!<i class='emoji'>😜</i>",
                "type": 0, //0:conversation, 1:transition
                "answers": [{
                    "choice_text": "嗯...好啦！<i class='emoji'>😰</i>",
                    "next": 20
                }, {
                    "choice_text": "唔戴唔得喎！",
                    "next": 21
                }, {
                    "choice_text": "<i class='emoji'>😊</i>",
                    "next": 23
                }]

            },
            {
                "order": 20,
                "text": "過一段時間後唔舒服",
                "type": 1, //0:conversation, 1:transition
                "transition_next": -1, // for transition only, -1 means last screen
                "background": "bg-13.jpg",
                "link": "https://www.afrohealth.org.hk/what-is-venereal-disease",
                "fadeInMsg": "知多d！<br/>健康d！"

            },
            {
                "order": 21,
                "text": "加$?",
                "type": 0, //0:conversation, 1:transition
                "answers": [{
                    "choice_text": "嗯...一次咁多啦！",
                    "next": 20
                }, {
                    "choice_text": "加錢都唔得！",
                    "next": 22
                }]

            },
            {
                "order": 22,
                "text": "知多d!<br/>遇到咁嘅情況唔知點算好？<br/>可以學下佢點回應",
                "type": 1, //0:conversation, 1:transition
                "transition_next": -1, // for transition only, -1 means last screen
                "background": "bg-02.jpg",
                "popupImage": [1]

            },
            {
                "order": 23,
                "text": "對方以為你同意，過一段時間後唔舒服",
                "type": 1, //0:conversation, 1:transition
                "transition_next": -1, // for transition only, -1 means last screen
                "background": "bg-02.jpg",
                "link": "https://www.afrohealth.org.hk/what-is-venereal-disease",
                "fadeInMsg": "知多d！<br/>健康d！"

            },
            {
                "order": 24,
                "text": "準備搞嘢...",
                "type": 1, //0:conversation, 1:transition
                "transition_next": 25, // for transition only
                "background": "bg-06.jpg"

            },
            {
                "order": 25,
                "text": "準備搞嘢...",
                "type": 1, //0:conversation, 1:transition
                "transition_next": 26, // for transition only
                "background": "bg-06.jpg"

            },
            {
                "order": 26,
                "text": "唔使啦，唔好咁麻煩",
                "type": 0, //0:conversation, 1:transition
                "pre_conversation": [{
                    "from": 1,
                    "text": "我出去洗洗手轉頭返"
                }],
                "answers": [{
                    "choice_text": "乜你咁心急㗎！",
                    "next": 27
                }, {
                    "choice_text": "嗯...好啦！",
                    "next": 33
                }]
            },
            {
                "order": 27,
                "text": "戴套前，發現用開嘅dom 唔啱size，你：",
                "type": 2, //0:conversation, 1:transition , 2: popup action
                "background": "bg-18.jpg",
                "answers": [{
                    "choice_text": "直接話佢知唔啱size,幫佢用手打出嚟",
                    "next": 28
                }, {
                    "choice_text": "搏一搏照用",
                    "next": 29
                }, {
                    "choice_text": "索性唔用，叫個客外射",
                    "next": 32
                }]

            },
            {
                "order": 28,
                "text": "客勉強答應，完成交易",
                "type": 1, //0:conversation, 1:transition
                "transition_next": -1, // for transition only
                "text_link": "https://www.afrohealth.org.hk/safe-sex/condom-types",
                "background": "bg-18.jpg"

            },
            {
                "order": 29,
                "text": "做到中間穿咗，你想換套先繼續，客格硬嚟，你大嗌但客冇理繼續至完事，你：",
                "type": 2, //0:conversation, 1:transition
                "answers": [{
                    "choice_text": "報警",
                    "next": 30
                }, {
                    "choice_text": "覺得自己都有責任，息事寧人算數",
                    "next": 31
                }],
                "background": "bg-17.jpg"

            },
            {
                "order": 30,
                "text": "性暴力/强姦刑事罪行條例",
                "type": 1, //0:conversation, 1:transition
                "transition_next": -1, // for transition only
                "background": "bg-17.jpg",
                "text_link": "https://www.afrohealth.org.hk/what-is-venereal-disease",

            },
            {
                "order": 31,
                "text": "意外懷孕/事後藥/性病",
                "type": 1, //0:conversation, 1:transition
                "transition_next": -1, // for transition only
                "background": "bg-17.jpg",
                "text_link": "https://www.afrohealth.org.hk/what-is-venereal-disease",

            },
            {
                "order": 32,
                "text": "知多啲！外射真係唔會出事？",
                "type": 1, //0:conversation, 1:transition, 2:popup action, 3: popup with next btn
                "transition_next": -1, // for transition only
                "background": "bg-18.jpg",
                "text_link": "https://www.afrohealth.org.hk/what-is-venereal-disease"



            },
            {
                "order": 33,
                "text": "吓？都係滑嘅嘢啫，點會啊，嚟啦...",
                "type": 0, //0:conversation, 1:transition, 2:popup action, 3: popup with next btn
                "pre_conversation": [{
                    "from": 1,
                    "text": "唔得，手上面仲有按摩油會整穿個套"
                }],
                "answers": [{
                    "choice_text": "又好似係喎...",
                    "next": 27
                }, {
                    "choice_text": "梗係唔係啦！滑嘢都有好多隻！",
                    "next": 34
                }],
                "background": "bg-06.jpg",



            },
            {
                "order": 34,
                "text": "客：哦，原來係咁嘅....",
                "type": 1, //0:conversation, 1:transition, 2:popup action, 3: popup with next btn
                "transition_next": -1,
                "background": "bg-06.jpg",
                "text_link": "https://www.afrohealth.org.hk/what-is-venereal-disease"



            },

        ]
    }, {
        id: 4,
        "stages": [{
                "order": 0,
                "text": "K 房内猜枚劈酒唱K中...",
                "type": 1, //0:conversation, 1:transition
                "transition_next": 1, // for transition only
                "background": "bg-08.jpg"

            },
            {
                "order": 1,
                "text": "客上下其手，<br/>你唔想所以借尿遁...<br/>你：吖吔，飲得太多，去一去廁所先...<br/>返到 K 房後，客人遞杯酒俾你，<br/>客：再嚟！飲！<br/>你會：",
                "type": 2, //0:conversation, 1:transition
                "background": "bg-23.jpg",
                "answers": [{
                    "choice_text": "接咗嚟飲",
                    "next": 2
                }, {
                    "choice_text": " 我飲唔到咁多喇！",
                    "next": 6
                }],

            },
            {
                "order": 2,
                "text": "飲完覺得迷迷糊糊咁...<br/>你會：",
                "type": 2, //0:conversation, 1:transition
                "background": "bg-23.jpg",
                "answers": [{
                    "choice_text": "行出房搵人求救",
                    "next": 3
                }, {
                    "choice_text": " 留係房入面休息",
                    "next": 5
                }],

            },
            {
                "order": 3,
                "text": "最後有人扶你去休息室休息",
                "type": 1, //0:conversation, 1:transition
                "transition_next": 4, // for transition only
                "background": "bg-23.jpg"

            },
            {
                "order": 4,
                "text": "知多d!<br/>慎防加料！唔好飲一啲離開咗視線範圍嘅嘢飲啊！",
                "type": 1, //0:conversation, 1:transition
                "transition_next": -1, // for transition only, -1 means last screen
                "popupImage": [11, 12, 13, 14, 15],
                "background": "bg-17.jpg"

            },
            {
                "order": 5,
                "text": "片刻清醒後，<br/>發現自己衣衫不整，<br/>房淨係得返自己一個，<br/>斷晒片",
                "type": 1, //0:conversation, 1:transition
                "transition_next": 4, // for transition only
                "background": "bg-24.jpg"

            },
            {
                "order": 6,
                "text": "客繼續上下其手，想除你件衫<br/>你會：",
                "type": 2, //0:conversation, 1:transition
                "background": "bg-25.jpg",
                "answers": [{
                    "choice_text": "你係咪會俾家用我先？",
                    "next": 7
                }, {
                    "choice_text": " 不如我哋出去吖，有得沖埋涼添！",
                    "next": 11
                }],

            },
            {
                "order": 7,
                "text": "客：你話點就點啦<br/>(係銀包拎錢)",
                "type": 1, //0:conversation, 1:transition
                "transition_next": 8, // for transition only
                "background": "bg-25.jpg"

            },
            {
                "order": 8,
                "text": "昏暗中，睇唔清楚客人做緊啲咩... ",
                "type": 1, //0:conversation, 1:transition
                "transition_next": 9, // for transition only
                "background": "bg-25.jpg"

            },
            {
                "order": 9,
                "text": "完咗客人走咗之後，<br/>你發現地下有個冇精液嘅安全套",
                "type": 1, //0:conversation, 1:transition
                "transition_next": 10, // for transition only
                "background": "bg-25.jpg"

            },
            {
                "order": 10,
                "text": "發現下面唔舒服<br/>知多d!<br/>唔建議係唔理想（如光線/空間不足，衞生條件較差）嘅地方進行性交易",
                "type": 1, //0:conversation, 1:transition
                "transition_next": -1, // for transition only, -1 means last screen
                "background": "bg-07.jpg",
                "text_link": "https://www.afrohealth.org.hk/what-is-venereal-disease"

            },
            {
                "order": 11,
                "text": "客帶你出街<br/>你會：",
                "type": 2, //0:conversation, 1:transition
                "background": "bg-25.jpg",
                "answers": [{
                    "choice_text": "先問媽咪拎定幾個套徬身",
                    "next": 12
                }, {
                    "choice_text": " 諗住客人有，又驚袋住係身有警察剿到會有麻煩，到時先算",
                    "next": 13
                }],

            },
            {
                "order": 12,
                "text": "今日平安度過一日！<br/>知多d!",
                "type": 1, //0:conversation, 1:transition
                "transition_next": -1, // for transition only, -1 means last screen
                "popupImage": [16, 17],
                "background": "bg-25.jpg"

            },
            {
                "order": 13,
                "text": "真唔真？",
                "type": 1, //0:conversation, 1:transition
                "transition_next": -1, // for transition only, -1 means last screen
                "popupImage": [18],
                "background": "bg-25.jpg"

            },
        ]
    }
]

$(function() {
    $("#start_btn").click(function() {
        $("#start_screen").hide();
        //showIntro();
        updateScenario(0, 0);
    })


})

function adjustAnswersPosition() {
    var scrollWidth = $("#game_conversation_choices >div >div")[0].scrollWidth;
    var widthOnScreen = $("#game_conversation_choices >div >div").width();
    if (scrollWidth <= widthOnScreen) {
        $("#game_conversation_choices > div > div").css("justify-content", "center");
        $("#game_conversation_choices > div").css("margin-left", 0);
        $("#game_conversation_choices > div").css("margin-right", 0);
        $(".choices").css("margin-left", "10px");
        $(".choices").css("margin-right", "10px");

    } else {
        $("#game_conversation_choices > div > div").css("justify-content", "inherit");
        $("#game_conversation_choices > div").css("margin-left", "20px");
        $("#game_conversation_choices > div").css("margin-right", "20px");
        $(".choices").css("margin-right", "20px");
        $(".choices").css("margin-left", 0);

    }
}

function changeLocation() {
    $("#game_conversation_top").hide();
    $("#game_conversation_input").hide();
    $("#game_conversation").addClass("noBackground");
    $("#game_screen_wrapper").addClass("wrapperWithBackground");

}

function updateScenario(scenario, stage) {
    //common
    console.log("updateScenraio:" + scenario + "," + stage);
    stageObj = scenarios[scenario].stages[stage];
    $("#game_conversation_choices > div > div").html("");
    switch (stageObj.type) {
        case 0:
            console.log("conversation");
            setTimeout(function() {
                $("#transition").removeClass("fadedIn");
                if (stageObj.background) {
                    $("#game_screen_wrapper").css("background-image", "url('src/assets/" + stageObj.background + "')");
                }
                setTimeout(function() {
                    $("#transition").hide();
                }, 500)
                if (stageObj.pre_conversation) {
                    for (var i = 0; i < stageObj.pre_conversation.length; i++) {
                        if (stageObj.pre_conversation[i].from == 0) {
                            $("#game_conversation").append("<div class='question'><div>" + stageObj.pre_conversation[i].text + "</div></div><div class='clearBoth'></div>");
                        } else {
                            $("#game_conversation").append("<div class='answer'><div>" + stageObj.pre_conversation[i].text + "</div></div><div class='clearBoth'></div>");
                        }
                    }
                }
                $("#game_conversation").append("<div class='question'><div>" + stageObj.text + "</div></div>");
                if (stageObj.next) {
                    setTimeout(function() {
                        updateScenario(scenario, stageObj.next);
                    }, response)
                }
                for (var i = 0; i < stageObj.answers.length; i++) {
                    if (stageObj.answers[i].next) { //general
                        if (stageObj.answers[i].display_text) {
                            $("#game_conversation_choices > div > div").append("<div class='choices' data-display_text='" + stageObj.answers[i].display_text + "' data-next=" + stageObj.answers[i].next + ">" + stageObj.answers[i].choice_text + "</div>");
                        } else {
                            $("#game_conversation_choices > div > div").append("<div class='choices' data-next=" + stageObj.answers[i].next + ">" + stageObj.answers[i].choice_text + "</div>");
                        }

                    } else if (stageObj.answers[i].next_scenario) { //intro
                        $("#game_conversation_choices > div > div").append('<div class="choices" data-display_text="' + stageObj.answers[i].display_text + '" data-next_scenario=' + stageObj.answers[i].next_scenario + '>' + stageObj.answers[i].choice_text + '</div>');
                    }
                    adjustAnswersPosition();
                }
                $(".choices").css("pointer-events", "auto");
                $(".choices").click(function() {
                    var next = $(this).data("next");
                    var next_scenario = $(this).data("next_scenario");
                    var display_text = $(this).data("display_text");
                    $(".choices").css("pointer-events", "none");
                    if (display_text) {
                        $("#game_conversation").append("<div class='answer'><div>" + display_text + "</div></div><div class='clearBoth'></div>");
                    } else {
                        $("#game_conversation").append("<div class='answer'><div>" + $(this).html() + "</div></div><div class='clearBoth'></div>");
                    }


                    setTimeout(function() {
                        if (next) { //general
                            updateScenario(scenario, next);
                        } else if (next_scenario) { //intro
                            scenario = next_scenario;
                            updateScenario(next_scenario, 0);
                            console.log("Intro - chose scenario " + scenario);
                        }
                    }, response)

                })
            }, 100)
            break;
        case 1:
            console.log("transition");

            $("#transition").css("background-image", "url('src/assets/" + stageObj.background + "')");
            if (stageObj.text) {
                if (stageObj.text_link) {
                    $("#transition_text").html("<a href='" + stageObj.text_link + "' target='_blank'>" + stageObj.text + "</a>");
                } else {
                    $("#transition_text").html(stageObj.text);
                }
                $("#transition_text").show();
            } else {
                $("#transition_text").hide();
                $("#transition_text").html("");
            }


            $("#transition").css("display", "flex");

            if (stageObj.next_btn) {
                $("#transition").append("<div class='next_btn object fadeObject' data-next=" + stageObj.next_btn + "></div>")
                $(".next_btn").show();
                setTimeout(function() {
                    $(".next_btn").addClass("fadedIn")
                    $(".next_btn").click(function() {
                        $(".next_btn").css("pointer-events", "none");
                        $(this).hide();
                        var next = $(this).data("next");
                        setTimeout(function() {
                            updateScenario(scenario, next);
                        }, response)
                    })
                }, 100)

            }

            setTimeout(function() {
                $("#transition").addClass("fadedIn");
                stage = stageObj.transition_next;
                setTimeout(function() {
                    if (stage != -1) { //not ending screen
                        if (!changedLocation) {
                            changeLocation();
                        }
                        $("#game_screen_wrapper").css("background-image", "url('src/assets/" + stageObj.background + "')");
                        $("#game_conversation").html("");
                        updateScenario(scenario, stage);
                        //
                    } else {
                        if (stageObj.fadeInMsg && stageObj.link) { //Ending with fadeIn msg
                            $("#transition_text").append("<br/><div class='fadeInText fadeObject'><a href='" + stageObj.link + "' target='_blank'>" + stageObj.fadeInMsg + "</a></div>");
                            $("#replay_btn").show();
                            setTimeout(function() {
                                $(".fadeInText").addClass("fadedIn");

                                $("#replay_btn").addClass("fadedIn");
                            }, 100)

                        } else if (stageObj.text_link && stageObj.text) {
                            $("#replay_btn").show();
                            setTimeout(function() {
                                $(".fadeInText").addClass("fadedIn");

                                $("#replay_btn").addClass("fadedIn");
                            }, 100)
                        } else if (stageObj.popupImage && stageObj.popupImage.length > 0) {
                            $("#popupImage_container").show();
                            for (i = stageObj.popupImage.length - 1; i >= 0; i--) {
                                $("#popupImage_container").append("<div class='page popupImage fadeObject' id='popupImage-" + i + "' style='background-image:url(src/assets/Images/Image" + stageObj.popupImage[i] + ".jpg)'></div>")
                            }
                            if ($(".popupImage").length > 1) {
                                $("#popup_next_btn").show();
                                setTimeout(function() {
                                    $("#popup_next_btn").addClass("fadedIn");
                                }, 100)
                            }
                            if (stageObj.popup_next) {
                                $("#popupImage_container").append("<div class='next_btn object fadeObject' data-next=" + stageObj.popup_next + "></div>")
                                $(".next_btn").show();
                                setTimeout(function() {
                                    $(".next_btn").addClass("fadedIn")
                                    $(".next_btn").click(function() {
                                        $(".next_btn").css("pointer-events", "none");
                                        var next = $(this).data("next");
                                        setTimeout(function() {
                                            $("#popupImage_container").removeClass("fadedIn");
                                            setTimeout(function() {
                                                $("#popupImage_container").hide();
                                            }, 500)
                                            updateScenario(scenario, next);
                                        }, response)
                                    })
                                })

                            }

                            setTimeout(function() {
                                if ($(".popupImage").length == 1 && !stageObj.popup_next) {
                                    $("#replay_btn").show();
                                    setTimeout(function() {
                                        $("#replay_btn").addClass("fadedIn");
                                    }, 100)
                                }
                                $("#popupImage_container").addClass("fadedIn");
                                $("#popup_next_btn").click(function() {
                                    if ($(".popupImage").length > 1) {
                                        var image = $(".popupImage").last();
                                        setTimeout(function() {
                                            image.addClass("fadeOut");
                                            setTimeout(function() {
                                                image.remove();
                                                if ($(".popupImage").length == 1) {
                                                    $("#popup_next_btn").removeClass("fadedIn");

                                                    $("#replay_btn").show();
                                                    setTimeout(function() {
                                                        $("#popup_next_btn").hide();
                                                    }, 500)
                                                    setTimeout(function() {
                                                        $("#replay_btn").addClass("fadedIn");

                                                    }, 100)
                                                }
                                            }, 500)
                                        }, 100)
                                    } else {
                                        console.log("This is the last popup Image");


                                    }


                                })
                            }, 100)
                        }
                    }

                }, stageObj.fadeOut ? stageObj.fadeOut : transitionFadeOut)
            }, 100)
            break;
        case 2:
            console.log("popup action")
            $("#transition").css("background-image", "url('src/assets/" + stageObj.background + "')");
            $("#transition_text").html(stageObj.text);
            $("#transition_text").show();
            for (i = 0; i < stageObj.answers.length; i++) {
                $("#transition_text").append("<div class='choices' data-next=" + stageObj.answers[i].next + ">" + stageObj.answers[i].choice_text + "</div>");
            }
            $(".choices").css("pointer-events", "auto");
            $(".choices").click(function() {
                $(".choices").css("pointer-events", "none");
                var next = $(this).data("next");
                setTimeout(function() {
                    updateScenario(scenario, next);
                }, response)
            })


            $("#transition").css("display", "flex");
            setTimeout(function() {
                $("#transition").addClass("fadedIn");
            }, 100)

            break;
        default:
            console.log("No match type");
    }


}