import { lib, game, ui, get, ai, _status } from "../../noname.js";
game.import("extension",function(){
	return {name:"车万符斗祭",content:function(config,pack){
    lib.group.add('fdj');
    lib.translate.fdj = '符';
    lib.translate.fdj2 = '符';
    lib.groupnature.fdj = 'fdj';

},precontent:function(){
    
},help:{},config:{},package:{
    character:{
        character:{
            yuyuko:["female","fdj",3,["yuyuko_pcb","yuyuko_souldrain","yuyuko_pcb_extract","ganjin"],["des:幽冥阁楼的吃货少女 西行寺幽幽子 体力：3。（画师：和茶，CV：VV）","ext:车万符斗祭/yuyuko.jpg","die:ext:车万符斗祭/audio/die/yuyuko.mp3"]],
            daiyousei:["female","fdj",3,["daiyousei_support","daiyousei_moe","ganjin"],["des:全身萌点的保姆 大妖精 体力：3。（画师：渚FUN，CV：简翎）","ext:车万符斗祭/daiyousei.jpg","die:ext:车万符斗祭/audio/die/daiyousei.mp3"]],
            flandre:["female","fdj",4,["flandre_csd","flandre_cs","ganjin"],["des:恶魔之妹 芙兰朵露 体力：4。（画师：月见，CV：shourei小N）","ext:车万符斗祭/flandre.jpg","die:ext:车万符斗祭/audio/die/flandre.mp3"]],
            shinmyoumaru:["female","fdj",4,["shinmyoumaru_venge","shinmyoumaru_mallet","ganjin"],["des:进击的小人 少名针妙丸 体力：4。（画师：六仔OwO，CV：小羽，人物设计：yourccz95）","ext:车万符斗祭/shinmyoumaru.jpg","die:ext:车万符斗祭/audio/die/shinmyoumaru.mp3"]],
            seiga:["female","fdj",4,["seiga_heterodoxy","seiga_extend","ganjin"],["des:僵尸别跑 霍青娥 体力：4。（画师：和茶，CV：小羽）","ext:车万符斗祭/seiga.jpg","die:ext:车万符斗祭/audio/die/seiga.mp3"]],
            "test_1":["female","fdj",2,["flan_sword","seiga_daotai","ganjin"],["ext:车万符斗祭/test_1.jpg","die:ext:车万符斗祭/audio/die/test_1.mp3"]],
            reimu:["female","fdj",4,["reimu_exterminate","reimu_clear","reimu_tribute","reimu_tribute2","ganjin"],["zhu","des:节操满地跑的城管 博丽灵梦 体力：4（画师：和茶，CV：shourei小N）","ext:车万符斗祭/reimu.jpg","die:ext:车万符斗祭/audio/die/reimu.mp3"]],
            kaguya:["female","fdj",3,["kaguya_dilemma","kaguya_inight","ganjin"],["des:永远的公主殿下 蓬莱山辉夜 体力：3。<br>（画师：噗呼噗呼@星の妄想乡，CV：shourei小N）","ext:车万符斗祭/kaguya.jpg","die:ext:车万符斗祭/audio/die/kaguya.ogg"]],
            tenshi:["female","fdj",3,["tenshi_masochist","tenshi_sp","ganjin"],["des:有顶天的大M子 比那名居天子 体力：3。（画师：月见，CV：VV）","ext:车万符斗祭/tenshi.jpg","die:ext:车万符斗祭/audio/die/tenshi.mp3"]],
            koakuma:["female","fdj",4,["koakuma_find","ganjin"],["des:图书管理员 小恶魔 体力：4。（画师：渚FUN/Takibi，CV：VV）","ext:车万符斗祭/koakuma.jpg","die:ext:车万符斗祭/audio/die/koakuma.ogg"]],
            nazrin:["female","fdj",3,["nazrin_treasurehunt","nazrin_agile","ganjin"],["des:探宝的小小大将 纳兹琳 体力：3。（画师：月见，CV：小羽）","ext:车万符斗祭/nazrin.jpg","die:ext:车万符斗祭/audio/die/nazrin.mp3"]],
            shikieiki:["female","fdj",3,["shikieiki_trial","shikieiki_majesty","ganjin"],["des:胸不平何以平天下 四季映姬 体力：3。（画师：和茶，CV：shourei小N）","ext:车万符斗祭/shikieiki.jpg","die:ext:车万符斗祭/audio/die/shikieiki.mp3"]],
            medicine:["female","fdj",3,["medicine_ciguatera","medicine_melancholy","ganjin"],["des:小小的甜蜜毒药 梅蒂欣 体力：3。（画师：和茶，CV：VV）","ext:车万符斗祭/medicine.jpg","die:ext:车万符斗祭/audio/die/medicine.mp3"]],
            yuuka:["female","fdj",4,["yuuka_rs","yuuka_sadist","ganjin"],["des:四季的鲜花之主 风见幽香 体力：4。（画师：霏茶，CV：VV）","ext:车万符斗祭/yuuka.jpg","die:ext:车万符斗祭/audio/die/yuuka.mp3"]],
            tewi:["female","fdj",4,["tewi_lucky","ganjin"],["des:幸运的腹黑兔子 因幡帝 体力：4。（画师：和茶，CV：北斗夜）","ext:车万符斗祭/tewi.jpg","die:ext:车万符斗祭/audio/die/tewi.mp3"]],
            kogasa:["female","fdj",3,["kogasa_surprise","kogasa_jolly","ganjin"],["des:愉快的遗忘之伞 多多良小伞 体力：3。（画师：霏茶，CV：VV）","ext:车万符斗祭/kogasa.jpg","die:ext:车万符斗祭/audio/die/kogasa.ogg"]],
            patchouli:["female","fdj",3,["patchouli_library","patchouli_knowledge","ganjin"],["des:不动的大图书馆 帕秋莉 体力：3。（画师：月见，CV：shourei小N）","ext:车万符斗祭/patchouli.jpg","die:ext:车万符斗祭/audio/die/patchouli.mp3"]],
            youmu:["female","fdj",4,["youmu_mjchz","youmu_nitoryuu","ganjin"],["des:半分虚幻的厨师 魂魄妖梦 体力：4。（画师：霏茶，CV：小羽）","ext:车万符斗祭/youmu.jpg","die:ext:车万符斗祭/audio/die/youmu.ogg"]],
            yugi:["female","fdj",4,["yugi_qiangxi","yugi_fp","ganjin"],["des:人所谈论的怪力乱神 星熊勇仪 体力：4。（画师：渚FUN，CV：北斗夜）","ext:车万符斗祭/yugi.jpg","die:ext:车万符斗祭/audio/die/yugi.ogg"]],
            mokou:["female","fdj",4,["mokou_reborn","mokou_ashes","ganjin"],["des:FFF团资深团员 藤原妹红 体力：4。（画师：六仔OwO，CV：小羽）","ext:车万符斗祭/mokou.jpg","die:ext:车万符斗祭/audio/die/mokou.ogg"]],
        },
        translate:{
            yuyuko:"西行寺幽幽子",
            daiyousei:"大妖精",
            flandre:"芙兰朵露",
            shinmyoumaru:"少名针妙丸",
            seiga:"霍青娥",
            "test_1":"测试武将",
            reimu:"博丽灵梦",
            kaguya:"蓬莱山辉夜",
            tenshi:"比那名居天子",
            koakuma:"小恶魔",
            nazrin:"纳兹琳",
            shikieiki:"四季映姬",
            medicine:"梅蒂欣",
            yuuka:"风见幽香",
            tewi:"因幡帝",
            kogasa:"多多良小伞",
            patchouli:"帕秋莉",
            youmu:"魂魄妖梦",
            yugi:"星熊勇仪",
            mokou:"藤原妹红",
            "车万符斗祭":"车万符斗祭",
        },
    },
    card:{
        card:{
            suwakohat:{
                fullskin:true,
                image:"ext:车万符斗祭/suwakohat.png",
            },
        },
        translate:{
            suwakohat:"青蛙帽",
            "suwakohat_info":"宝物。手牌上限+2。",
            "车万符斗祭":"车万符斗祭",
        },
        list:[],
    },
    skill:{
        skill:{
            "yuyuko_pcb":{
                audio:"ext:车万符斗祭:1",
                enable:"phaseUse",
                usable:1,
                check:function(event,player){
                    var targets=game.filterPlayer(function(current){
                        return current!=player&&current.hp==1;
                    });
                    return targets.length<2;
                },
                filterTarget:function(card,player,target){
                    return target!=player&&target.hp>0;
                },
                content:function(){
                    'step 0'
                    target.loseHp();
                    player.addSkill('yuyuko_pcb_recover');
                    player.markAuto('yuyuko_pcb_recover',[target]);
                    game.log(player,'将',target,'献祭给了西行妖。');
                },
                ai:{
                    order:5,
                    expose:3,
                    result:{
                        player:function (player,target){
                            if(player.countCards('h')<player.hp) return -2;
                            return -0.5;
                        },
                        target:function (player,target){
                            var att=get.attitude(player,target);
                            var num=target.hp-target.hpMax;
                            if(player.countCards('h')<player.hp){
                                num=num+1;
                            }
                            return (num*att);
                        },
                    },
                },
                group:["yuyuko_pcb_unused"],
                subSkill:{
                    unused:{
                        trigger:{
                            player:"phaseEnd",
                        },
                        priority:1,
                        direct:true,
                        audio:"ext:车万符斗祭:1",
                        filter:function(event,player){
                        return !player.getHistory('useSkill',evt=>evt.skill=='yuyuko_pcb').length;
                        },
                        content:function (){
                            "step 0"
                            if(typeof event.count!='number'){
                                // event.count=trigger.cards.length-1;
                                event.count=1;
                            }
                            var recover=0,lose=0,players=game.filterPlayer();
                            for(var i=0;i<players.length;i++){
                                if(players[i].hp<players[i].maxHp){
                                    if(get.attitude(player,players[i])>0){
                                        if(players[i].hp<2){
                                            lose--;
                                            recover+=0.5;
                                        }
                                        lose--;
                                        recover++;
                                    }
                                    else if(get.attitude(player,players[i])<0){
                                        if(players[i].hp<2){
                                            lose++;
                                            recover-=0.5;
                                        }
                                        lose++;
                                        recover--;
                                    }
                                }
                                else{
                                    if(get.attitude(player,players[i])>0){
                                        lose--;
                                    }
                                    else if(get.attitude(player,players[i])<0){
                                        lose++;
                                    }
                                }
                            }
                            var prompt=get.prompt('yuyuko_pcb_unused')+'（剩余'+get.cnNumber(event.count)+'次）';
                            "step 1"
                            player.logSkill('yuyuko_pcb_unused');
                                //event.bool=false;
                                event.num=0;
                                event.players=game.filterPlayer();
                            "step 2"
                            if(event.num<event.players.length){
                                var target=event.players[event.num];
                                if(target.hp<=1&&target!=player){
                                    target.loseHp();
                                }
                                event.num++;
                                event.redo();
                            }
                            "step 4"
                            if(event.count>1){
                                event.count--;
                                event.goto(0);
                            }
                        },
                        sub:true,
                        "_priority":0,
                        sourceSkill:"yuyuko_pcb",
                    },
                    recover:{
                        audio:"ext:车万符斗祭:1",
                        trigger:{
                            player:"phaseJieshuBegin",
                        },
                        forced:true,
                        popup:true,
                        direct:false,
                        content:function(){
                            var targets=player.getStorage('yuyuko_pcb_recover');
                            for(var i=0;i<targets.length;i++){
                                if(targets[i].isAlive()){
                                    targets[i].recover();
                                }
                            }
                            game.log(player,'撤去了西行妖。',targets,'轻松了一点。');
                            delete player.storage.yuyuko_pcb_recover;
                            player.removeSkill('yuyuko_pcb_recover');
                        },
                        sub:true,
                        "_priority":0,
                        sourceSkill:"yuyuko_pcb",
                    },
                },
                "_priority":0,
            },
            "yuyuko_souldrain":{
                audio:"ext:车万符斗祭:1",
                filter:function(event,player){
                return event.player!=player&&_status.currentPhase&&_status.currentPhase==player;
                },
                direct:true,
                trigger:{
                    global:"dyingBegin",
                },
                logTarget:"player",
                content:function(){
                    'step 0'
                    player.logSkill('yuyuko_souldrain');
                    player.draw();
                    'step 1'
                    player.addTempSkill('yuyuko_souldrain_yuyuko_souldrain2');
                },
                subSkill:{
                    "yuyuko_souldrain2":{
                        audio:"ext:车万符斗祭:1",
                        trigger:{
                            global:"dying",
                        },
                        priority:1,
                        filter:function (event,player){
                            return event.player!=player&&event.player.countCards('h')>0;
                        },
                        content:function (){
                            "step 0"
                            game.log(player,"微笑着站在一旁。",trigger.player,"似乎离死亡更近了一点。");
                            player.chooseToCompare(trigger.player);
                            "step 1"
                            if(result.bool){
                                trigger.player.maxHp=1;
                            }
                            else{
                                trigger.player.recover(1-trigger.player.hp)
                            }
                        },
                        ai:{
                            halfneg:true,
                            threaten:3,
                            order:10,
                            result:{
                                target:-1,
                            },
                        },
                        sub:true,
                        "_priority":0,
                        sourceSkill:"yuyuko_souldrain",
                    },
                },
                "_priority":0,
            },
            "yuyuko_pcb_extract":{
                audio:"ext:车万符斗祭:1",
                trigger:{
                    global:"dieAfter",
                },
                forced:true,
                content:function(){
                    'step 0'
            var list=[
            '增加1点体力上限',
            '回复1点体力'
            ];
            player.chooseControl().set('choiceList',list).set('ai',function(){
            if(player.maxHp-player.hp<=1) return 0;
            return 1;
            });
            'step 1'
            if(result.index==0){
            player.gainMaxHp();
            }
            else{
            player.recover();
            }
                },
                group:"yuyuko_pcb_extract_maxhandcardchange",
                subSkill:{
                    maxhandcardchange:{
                        mod:{
                            maxHandcard:function (player, num) {
                                return player.maxHp;
                            },
                        },
                        sub:true,
                        "_priority":0,
                        sourceSkill:"yuyuko_pcb_extract",
                    },
                },
                "_priority":0,
            },
            "daiyousei_support":{
                audio:"ext:车万符斗祭:1",
                enable:"phaseUse",
                filterCard:true,
                position:"he",
                selectCard:[1,Infinity],
                discard:false,
                prepare:"give",
                filterTarget:function (card, player, target) {
                    return player != target;
                },
                check:function (card) {
                    if (ui.selected.cards.length > 2) return 0;
                    if (ui.selected.cards.length && ui.selected.cards[0].name == "du") return 0;
                    if (!ui.selected.cards.length && card.name == "du") return 20;
                    var player = get.owner(card);
                    if (
                        player.hp == player.maxHp ||
                        player.storage.daiyousei_support < 0 ||
                        player.countCards("he") + player.storage.daiyousei_support <= 2
                    ) {
                        if (ui.selected.cards.length) {
                            return -1;
                        }
                        var players = game.filterPlayer();
                        for (var i = 0; i < players.length; i++) {
                            if (
                                players[i].hasSkill("haoshi") &&
                                !players[i].isTurnedOver() &&
                                !players[i].hasJudge("lebu") &&
                                get.attitude(player, players[i]) >= 3 &&
                                get.attitude(players[i], player) >= 3
                            ) {
                                return 11 - get.value(card);
                            }
                        }
                        if (player.countCards("he") > player.hp) return 10 - get.value(card);
                        if (player.countCards("he") > 2) return 6 - get.value(card);
                        return -1;
                    }
                    return 10 - get.value(card);
                },
                content:function () {
                    target.gain(cards, player);
                    if (typeof player.storage.daiyousei_support != "number") {
                        player.storage.daiyousei_support = 0;
                    }
                    if (player.storage.daiyousei_support >= 0) {
                        player.storage.daiyousei_support += cards.length;
                        if (player.storage.daiyousei_support >= 3) {
                            player.recover();
                            player.storage.daiyousei_support = -1;
                        }
                    }
                },
                ai:{
                    order:function (skill, player) {
                        if (
                            player.hp == player.maxHp ||
                            player.storage.daiyousei_support < 0 ||
                            player.countCards("he") + player.storage.daiyousei_support <= 2
                        ) {
                            return 1;
                        }
                        return 10;
                    },
                    result:{
                        target:function (player, target) {
                            if (ui.selected.cards.length && ui.selected.cards[0].name == "du") {
                                return -10;
                            }
                            if (target.hasJudge("lebu")) return 0;
                            var nh = target.countCards("he");
                            var np = player.countCards("he");
                            if (
                                player.hp == player.maxHp ||
                                player.storage.daiyousei_support < 0 ||
                                player.countCards("he") + player.storage.daiyousei_support <= 2
                            ) {
                                if (nh >= np - 1 && np <= player.hp && !target.hasSkill("haoshi")) return 0;
                            }
                            return Math.max(1, 5 - nh);
                        },
                    },
                    effect:{
                        target:function (card, player, target) {
                            if (player == target && get.type(card) == "equip") {
                                if (player.countCards("e", { subtype: get.subtype(card) })) {
                                    var players = game.filterPlayer();
                                    for (var i = 0; i < players.length; i++) {
                                        if (players[i] != player && get.attitude(player, players[i]) > 0) {
                                            return 0;
                                        }
                                    }
                                }
                            }
                        },
                    },
                    threaten:0.8,
                },
                group:"daiyousei_support_0",
                subSkill:{
                    "0":{
                        trigger:{
                            player:"phaseUseBegin",
                        },
                        silent:true,
                        content:async function(event, trigger, player) {
                            player.storage.daiyousei_support = 0;
                        },
                        forced:true,
                        popup:false,
                        sub:true,
                        sourceSkill:"daiyousei_support",
                        "_priority":1,
                    },
                },
                "_priority":0,
            },
            "daiyousei_moe":{
                audio:"ext:车万符斗祭:1",
                forced:true,
                trigger:{
                    player:"phaseDrawBegin2",
                },
                filter:function(event, player) {
                return !event.numFixed;
                },
                content:function() {
                trigger.num += player.getDamagedHp();
                        var chat = ['卖了个萌'].randomGet();
                        player.say(chat);
                        game.log(player,"用手扯开脸颊，向大家做了一个夸张的笑脸，摸了",trigger.num,"张牌跑开了~");
                },
                "_priority":0,
            },
            "seiga_heterodoxy":{
                audio:"ext:车万符斗祭:1",
                enable:"phaseUse",
                filter:function (event, player) {
                    var players = event.seiga_heterodoxy;
                    if (!players || !players.length) return false;
                    var source = player.storage.seiga_heterodoxy_effect;
                    return get.itemtype(source) != "player" || !source.isIn();
                },
                "heterodoxy_wrapKey":function () {
                    var str = "";
                    for (var arg of arguments) {
                        if (arg === null || arg === undefined) {
                            str += arg + "-";
                            continue;
                        }
                        switch (get.itemtype(arg)) {
                            case "player":
                                str += "p:" + arg.playerid;
                                break;
                            case "card":
                                if (arg.cardid) {
                                    str += "c:" + arg.cardid;
                                } else {
                                    str += "c:" + arg.name;
                                }
                                break;
                            default:
                                str += "n:" + arg;
                                break;
                        }
                        str += "-";
                    }
                    return str;
                },
                "heterodoxy_effect":function (target, card, player, viewer) {
                    if (!_status.event) return get.effect(target, card, player, viewer);
                    var key = lib.skill.seiga_heterodoxy.heterodoxy_wrapKey.apply(null, arguments);
                    var effect = _status.event.getTempCache("effect", key);
                    if (effect !== undefined) return effect;
                    effect = get.effect(target, card, player, viewer);
                    _status.event.putTempCache("effect", key, effect);
                    return effect;
                },
                "heterodoxy_canUse":function (player, card, target, arg1, arg2) {
                    if (!_status.event) return player.canUse(card, target, arg1, arg2);
                    var key = lib.skill.seiga_heterodoxy.heterodoxy_wrapKey.apply(null, arguments);
                    var effect = _status.event.getTempCache("canUse", key);
                    if (effect !== undefined) return effect;
                    effect = player.canUse(card, target, arg1, arg2);
                    _status.event.putTempCache("canUse", key, effect);
                    return effect;
                },
                "heterodoxy_effect_use":function (target, card, player, viewer) {
                    if (!_status.event) return get.effect_use(target, card, player, viewer);
                    var key = lib.skill.seiga_heterodoxy.heterodoxy_wrapKey.apply(null, arguments);
                    var effect = _status.event.getTempCache("effect_use", key);
                    if (effect !== undefined) return effect;
                    effect = get.effect_use(target, card, player, viewer);
                    _status.event.putTempCache("effect_use", key, effect);
                    return effect;
                },
                onChooseToUse:function (event) {
                    if (!game.online && event.type == "phase" && !event.seiga_heterodoxy) {
                        var players = game.filterPlayer(function (current) {
                            return current != event.player;
                        });
                        event.set("seiga_heterodoxy",players);
                    }
                },
                filterTarget:function (card, player, target) {
                    var players = _status.event.seiga_heterodoxy;
                    if (!players || !players.length) return false;
                    return players.includes(target);
                },
                content:function () {
                    if (target.isIn()) {
                        player.storage.seiga_heterodoxy_effect = target;
                        player.addTempSkill("seiga_heterodoxy_effect", "phaseUseAfter");
                    }
                },
                ai:{
                    threaten:4,
                    order:12,
                    result:{
                        player:function (player, target) {
                            return player.getCards("hs").reduce(function (eff, card) {
                                return Math.max(eff, lib.skill.seiga_heterodoxy.getUseValue(card, target, player) - lib.skill.seiga_heterodoxy.getUseValue(card, player, player));
                            }, 0);
                        },
                    },
                },
                getUseValue:function (card, player, viewer) {
                    if (typeof card == "string") {
                        card = { name: card, isCard: true };
                    }
                    var key = lib.skill.seiga_heterodoxy.heterodoxy_wrapKey(card, player, viewer);
                    if (_status.event) {
                        var uv = _status.event.getTempCache("getUseValue", key);
                        if (uv !== undefined) {
                            return uv;
                        }
                    }
                    var targets = game.filterPlayer();
                    var value = [];
                    var min = 0;
                    var info = get.info(card);
                    if (!info || info.notarget) {
                        if (_status.event) {
                            _status.event.putTempCache("getUseValue", key, 0);
                        }
                        return 0;
                    }
                    var range;
                    var select = get.copy(info.selectTarget);
                    if (select == undefined) {
                        if (info.filterTarget == undefined) {
                            if (_status.event) {
                                _status.event.putTempCache("getUseValue", key, true);
                            }
                            return true;
                        }
                        range = [1, 1];
                    } else if (typeof select == "number") range = [select, select];
                    else if (get.itemtype(select) == "select") range = select;
                    else if (typeof select == "function") range = select(card, player);
                    if (info.singleCard) range = [1, 1];
                    game.checkMod(card, player, range, "selectTarget", player);
                    if (!range) {
                        if (_status.event) {
                            _status.event.putTempCache("getUseValue", key, 0);
                        }
                        return 0;
                    }
                    for (var i = 0; i < targets.length; i++) {
                        if (lib.skill.seiga_heterodoxy.heterodoxy_canUse(player, card, targets[i], null, true)) {
                            var eff = lib.skill.seiga_heterodoxy.heterodoxy_effect(targets[i], card, player, viewer);
                            value.push(eff);
                        }
                    }
                    value.sort(function (a, b) {
                        return b - a;
                    });
                    for (var i = 0; i < value.length; i++) {
                        if (i == range[1] || (range[1] != -1 && value[i] <= 0)) break;
                        min += value[i];
                    }
                    if (_status.event) {
                        _status.event.putTempCache("getUseValue", key, min);
                    }
                    return min;
                },
                subSkill:{
                    effect:{
                        charlotte:true,
                        priority:null,
                        onremove:true,
                        mark:"character",
                        intro:{
                            content:"下一张牌视为由$使用",
                        },
                        trigger:{
                            player:"useCardBefore",
                        },
                        forced:true,
                        filter:function (event, player) {
                            var source = player.storage.seiga_heterodoxy_effect;
                            return get.itemtype(source) == "player" &&source.isIn();
                        },
                        logTarget:(event, player) => player.storage.seiga_heterodoxy_effect,
                        content:function () {
                            "step 0"
                            trigger.player = player.storage.seiga_heterodoxy_effect;
                            trigger.noai = true;
                            "step 1"
                            if(((trigger.card.name == "sha")&&player.storage.ganjin != 0)&&!player.getEquip('zhuge','rewrite_zhuge')){player.storage.ganjin -= 1;}
                            else 0;
                            player.update();
                            if((trigger.card&&get.type(trigger.card)=='trick')&&trigger.targets.length >= 2){player.chooseBool(`是否跳过此次群体符卡的结算？`, get.attitude(player, trigger.player) < 0);}
                            else event.goto(3);
                            "step 2"
                            if (result.bool) {
                                trigger.targets.remove(player);
                        }
                            "step 3"
                            player.removeSkill("seiga_heterodoxy_effect");
                            game.delay(0.5);
                        },
                        ai:{
                            order:function (card, player, target, current) {
                                if (typeof card != "object") return;
                                var source = player.storage.seiga_heterodoxy_effect;
                                if (!source.isIn() || get.itemtype(source) != "player" || get.itemtype(source.storage.seiga_heterodoxy_effect) == "player") return;
                                return [0, lib.skill.seiga_heterodoxy.heterodoxy_effect_use(target, card, source, player), 0, lib.skill.seiga_heterodoxy.heterodoxy_effect(target, card, source, target)];
                            },
                        },
                        mod:{
                            selectCard:function (card, player, range) {
                                var source = player.storage.seiga_heterodoxy_effect;
                                if (!source.isIn() || get.itemtype(source) != "player" || get.itemtype(source.storage.seiga_heterodoxy_effect) == "player") return;
                                var range,
                                    info = get.info(card);
                                var select = get.copy(info.selectTarget);
                                if (select == undefined) {
                                    if (info.filterTarget == undefined) return [0, 0];
                                    range = [1, 1];    
                                } else if (typeof select == "number") range = [select, select];
                                else if (get.itemtype(select) == "select") range = select;
                                else if (typeof select == "function") range = select(card, source);
                                game.checkMod(card, source, range, "selectTarget", source);
                            },
                            "cardEnabled2":function (card, player, event) {
                                var source = player.storage.seiga_heterodoxy_effect;
                                if (!source.isIn() || get.itemtype(source) != "player" || get.itemtype(source.storage.seiga_heterodoxy_effect) == "player") return;
                                var check = game.checkMod(card, source, event, "unchanged", "cardEnabled2", source);
                                return check;
                            },
                            cardEnabled:function (card, player, event) {
                        if (card.name == "sha"&&(player.storage.ganjin==0)&&!player.getEquip('zhuge','rewrite_zhuge')) return false;
                                var source = player.storage.seiga_heterodoxy_effect;
                                if (!source.isIn() || get.itemtype(source) != "player" || get.itemtype(source.storage.seiga_heterodoxy_effect) == "player") return;
                                if (event === "forceEnable") {
                                    var mod = game.checkMod(card, source, event, "unchanged", "cardEnabled", source);
                                    if (mod != "unchanged") return mod;
                                    return true;
                                } else {
                                    var filter = get.info(card).enable;
                                    if (!filter) return;
                                    var mod = game.checkMod(card, player, source, "unchanged", "cardEnabled", source);
                                    if (mod != "unchanged") return mod;
                                    if (typeof filter == "boolean") return filter;
                                    if (typeof filter == "function") return filter(card, source, event);
                                }
                            },
                            cardUsable:function (card, player, num) {
                                var source = player.storage.seiga_heterodoxy_effect;
                                if (!source.isIn() || get.itemtype(source) != "player" || get.itemtype(source.storage.seiga_heterodoxy_effect) == "player") return;
                                var event = _status.event;
                                if (event.type == "chooseToUse_button") event = event.getParent();
                                if (source != _status.event.player) return true;
                                if (info.updateUsable == "phaseUse") {
                                    if (event.getParent().name != "phaseUse") return true;
                                    if (event.getParent().player != source) return true;
                                }
                                event.addCount_extra = true;
                                var num = info.usable;
                                if (typeof num == "function") num = num(card, source);
                                num = game.checkMod(card, source, num, event, "cardUsable", source);
                                if (typeof num != "number") return true;
                                if (source.countUsed(card) < num) return true;
                                if (
                                    game.hasPlayer(function (current) {
                                        return game.checkMod(card, source, current, false, "cardUsableTarget", source);
                                    })
                                ) {
                                    return true;
                                }
                                return false;
                            },
                            playerEnabled:function (card, player, target) {
                                var source = player.storage.seiga_heterodoxy_effect;
                                if (!source.isIn() || get.itemtype(source) != "player" || get.itemtype(source.storage.seiga_heterodoxy_effect) == "player") return;
                                return lib.filter.targetEnabledx(card, source, target);
                            },
                            targetInRange:function (card, player, target) {
                                var source = player.storage.seiga_heterodoxy_effect;
                                if (!source.isIn() || get.itemtype(source) != "player" || get.itemtype(source.storage.seiga_heterodoxy_effect) == "player") return;
                                return lib.filter.targetInRange(card, source, target);
                            },
                        },
                        sub:true,
                        sourceSkill:"seiga_heterodoxy",
                        "_priority":null,
                    },
                },
                "_priority":0,
            },
            "flandre_csd":{
                forced:true,
                shaRelated:true,
                juedouRelated:true,
                audio:"ext:车万符斗祭:1",
                trigger:{
                    player:"useCardToTargeted",
                },
                check:function(event,player){
                    return get.attitude(player,event.target)<=0;
                },
                filter:function(event,player){
                    return event.card.name=='sha'||event.card.name=='juedou';
                },
                logTarget:"target",
                content:function(){
                        trigger.target.addTempSkill('flandre_csd_block', 'phaseEnd');
                },
                subSkill:{
                    block:{
                        init:function(player, skill) {
                        player.addSkillBlocker(skill);
                        },
                        onremove:function(player, skill) {
                        player.removeSkillBlocker(skill);
                        },
                        charlotte:true,
                        locked:true,
                        skillBlocker:function(skill,player){
                        return skill != 'flandre_csd_block' && !lib.skill[skill].charlotte;
                        },
                        mark:true,
                        marktext:"<img style=width:25px src=extension/车万符斗祭/image/tag/flandre_exterminate.png >",
                        intro:{
                            name:"毁灭",
                            content:"你被芙兰玩坏了，本回合所有技能失效",
                        },
                        sub:true,
                        "_priority":0,
                        sourceSkill:"flandre_csd",
                    },
                },
                "_priority":0,
            },
            ganjin:{
                trigger:{
                    player:"phaseZhunbeiAfter",
                },
                Yx:true,
                direct:true,
                change:function (player, num) {
        if (!player.storage.ganjin) player.storage.ganjin = 0;
        if (!num) return;
        player.storage.ganjin = 1;
        player.markSkill("ganjin");
    },
                content:function () {
        lib.skill.ganjin.change(player, 1);
        game.log(player,'获得了一点干劲。');
    },
                onremove:true,
                mod:{
                    cardUsable:function (card,player,num){
            if(card.name=='sha'&&(player.storage.ganjin==0)&&!player.getEquip('zhuge','rewrite_zhuge')) return 0;
            return Infinity;
        },
                },
                group:["ganjin_hejiu","ganjin_yanhui","ganjin_chongzhu","ganjin_shaAfter","ganjin_tired","ganjin_zhuSkill"],
                subSkill:{
                    hejiu:{
                        mod:{
                            cardUsable:function (card, player) {
                    if (card.name == "jiu" &&! player.isDying()) {
                        return Infinity;
                    }
                },
                            cardSavable:function (card, player) {
                    if (card.name == "jiu") return false;
                },
                        },
                        trigger:{
                            player:"useCardToPlayered",
                        },
                        check:function (event, player) { 
        return player.hp == 1 &&player.countCards('h', 'jiu');
            },
                        filter:function (event, player) {
                return event.card && event.card.name == 'jiu';
            },
                        forced:true,
                        content:function () {
                "step 0"
                delete player.storage.jiu;
                //trigger.getParent().excluded.add(player);
                //game.delay(0.5);
                "step 1"
                player.addSkill('wine');
                game.log(player, "喝醉了。。。" );
            },
                        Yx:true,
                        direct:true,
                        ai:{
                            result:{
                                target:(player, target, card) => {
                        if (!target.hasSkill('wine')) return 2;
                        let usable = target.getCardUsable("sha");
                        if (
                            !usable ||
                            (!player.isMin() &&
                                player.getActCount() + 1 >= player.actcount) ||
                            !target.mayHaveSha(player, "use", card)
                        )
                            return 0;
                    },
                            },
                            order:4,
                        },
                        sub:true,
                        sourceSkill:"ganjin",
                        "_priority":0,
                    },
                    yanhui:{
                        filter:function (event, player) {
                return event.card.name == "taoyuan";
            },
                        trigger:{
                            target:"useCardToTargeted",
                        },
                        Yx:true,
                        direct:true,
                        content:function () {
                if (player.hp == player.maxHp){
                    trigger.getParent().excluded.add(player);
                    player.chooseUseTarget({ name: 'jiu'}, true, false, 'nopopup','noanimate').set('logSkill','nolog');
                    player.addSkill('wine');
                    game.log(player, "喝醉了。。。" );
                }
                    else event.finish();
            },
                        sub:true,
                        sourceSkill:"ganjin",
                        "_priority":0,
                    },
                    chongzhu:{
                        trigger:{
                            player:"equipBefore",
                        },
                        filter:function (event,player) {
                return get.subtype(event.card) == 'equip1' && player.storage.ganjin != 0;
            },
                        direct:true,
                        content:function () {
                "step 0"
                var equipValue = get.equipValue(trigger.card, player);
                player
                .chooseControl("重铸", "继续装备")
                .set("prompt", "装备" + get.translation(trigger.card))
                .set("prompt2","你即将装备" + get.translation(trigger.card) + "，是否重铸该武器并失去一点干劲？")
                     //"是否重铸" + get.translation(trigger.card) + "？或者继续装备" + get.translation(trigger.card)+ "." + "当前值：" + equipValue + "\n")
                .set("ai", function () {
                    var player = _status.event.player;
                    var trigger = _status.event.getTrigger();
                    if (get.equipValue(trigger.card, player) > 1) return "继续装备";
                   return "重铸";
                });
                "step 1"
                if (result.control == "重铸") {
                    trigger.cancel();
                    var card = trigger.card;
                    player.recast(card);
                    player.storage.ganjin -= 1;
                    game.log(player,'失去了一点干劲。');
                    if(player.storage.ganjin == 0){
                    player.addSkill("ganjin_tired");
                    }
                } else {
                    event.finish();    
                }
            },
                        sub:true,
                        sourceSkill:"ganjin",
                        "_priority":0,
                    },
                    shaAfter:{
                        Yx:true,
                        direct:true,
                        trigger:{
                            player:["useCard1"],
                        },
                        filter:function (event, player) {
        return _status.currentPhase == player && event.card.name == 'sha';
            },
                        content:function () {
                if(_status.currentPhase == player&&(player.storage.ganjin != 0)&&!player.getEquip('zhuge','rewrite_zhuge')){
                    player.storage.ganjin -= 1;
                    game.log(player,'失去了一点干劲。');}
                if(player.storage.ganjin == 0){
                    player.addSkill("ganjin_tired");
                }
            },
                        sub:true,
                        sourceSkill:"ganjin",
                        "_priority":0,
                    },
                    tired:{
                        trigger:{
                            player:"phaseEnd",
                        },
                        Yx:true,
                        popup:false,
                        filter:function (event, player) {
                return player.hasSkill("ganjin_tired");
            },
                        charlotte:true,
                        mark:true,
                        marktext:"<img style=width:25px src=extension/车万符斗祭/image/tag/attacked.png >",
                        intro:{
                            content:"没有干劲了。。。",
                        },
                        forced:true,
                        content:function(){
                    player.removeSkill("ganjin_tired");
            },
                        sub:true,
                        sourceSkill:"ganjin",
                        "_priority":0,
                    },
                    zhuSkill:{
                        trigger:{
                            global:"gameDrawBefore",
                        },
                        Yx:true,
                        direct:true,
                        filter:function (event, player) {
                return player.identity == 'zhu'&& game.players.length >= 4;
            },
                        content:function () {
                "step 0"
                var list=["boss_tongchou","boss_xieli","boss_xisheng","boss_yingyuan"];
                player.chooseControl(list).set("prompt","选择并获得一项BOSS技：").set("ai",function(){
                    return list.randomGet();
                });
                "step 1"
                if(result.control == "boss_tongchou"){
                    player.addSkill("boss_tongchou");
                    game.log(player,"获得了BOSS技【","boss_tongchou","】")
                }
                else if(result.control == "boss_xieli"){
                    player.addSkill("boss_xieli");
                    game.log(player,"获得了BOSS技【","boss_xieli","】")
                }
                else if (result.control == "boss_xisheng"){
                    player.addSkill("boss_xisheng");
                    game.log(player,"获得了BOSS技【","boss_xisheng","】")
                }
                else {
                    player.addSkill("boss_yingyuan");
                    game.log(player,"获得了BOSS技【","boss_yingyuan","】")
                }
            },
                        sub:true,
                        sourceSkill:"ganjin",
                        "_priority":0,
                    },
                },
            },
            "干劲描述":{
                "_priority":0,
            },
            "flandre_cs":{
                audio:"ext:车万符斗祭:1",
                trigger:{
                    player:"phaseDrawBegin2",
                },
                check:function(event,player){
                    if(player.skipList.includes('phaseUse')||player.countCards('h')<3) return false;
                    if(!player.hasSha()) return false;
                    return game.hasPlayer(current=>get.attitude(player,current)<0&&player.canUse('sha',current));
                },
                preHidden:true,
                filter:function(event,player){
                    return !event.numFixed&&event.num>0;
                },
                content:async function(event,trigger,player){
                    player.addTempSkill('flandre_cs_1','phaseJieshuBegin');
                    trigger.num--;
                },
                "_priority":0,
            },
            "flandre_cs_1":{
                mod:{
                    cardUsable:function (card, player, num) {
                      if (card.name == 'sha') return Infinity;
                    },
                },
                trigger:{
                    source:"damageBegin1",
                },
                filter:function(event){
                    return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&event.notLink();
                },
                direct:true,
                content:async function(event,trigger,player){
                    trigger.num++;
                },
                ai:{
                    damageBonus:true,
                },
                skillBlocker:function(skill,player){
                return skill != 'flandre_cs' && !lib.skill[skill].charlotte;
                },
                mark:true,
                marktext:"<img style=width:25px src=extension/车万符斗祭/image/tag/flandrecs.png >",
                intro:{
                    name:"狂咲",
                    content:"玩坏你哦",
                },
                group:"flandre_cs_1_targetsha",
                subSkill:{
                    targetsha:{
                        forced:true,
                        trigger:{
                            player:"useCardToPlayered",
                        },
                        "prompt2":"当你使用【杀】指定一名角色为目标后，你本回合内不能再对其使用【杀】",
                        filter:function(event,player){
                        return event.card.name=='sha'&&event.target.countGainableCards(player,'he');
                        },
                        check:function(event,player){
                        return get.effect(event.target,{name:'guohe_copy2'},player,player)>0;
                        },
                        logTarget:"target",
                        content:function(){
                        player.addTempSkill('flandre_cs_1_blocksha');
                        player.markAuto('flandre_cs_1_blocksha',[trigger.target]);
                        },
                        sub:true,
                        "_priority":0,
                        sourceSkill:"flandre_cs_1",
                    },
                    blocksha:{
                        charlotte:true,
                        onremove:true,
                        marktext:"<img style=width:16px src=extension/车万符斗祭/image/tag/flandrecs_1.png >",
                        intro:{
                            content:"不能对$使用【杀】（装备连弩时除外）",
                        },
                        mod:{
                            playerEnabled:function(card,player,target){
                            if(player.getStorage('flandre_cs_1_blocksha').includes(target)&&get.name(card)=='sha'&&!player.getEquip('zhuge','rewrite_zhuge')) return false;
                            },
                        },
                        sub:true,
                        "_priority":0,
                        sourceSkill:"flandre_cs_1",
                    },
                },
                "_priority":0,
            },
            "flan_sword":{
                unique:true,
                mod:{
                    selectTarget:function (card,player,range){
                            //你的普通杀视为火杀
                            if(card.name=='sha'&&!card.nature)card.nature='fire'; 
                    },
                },
                trigger:{
                    source:"damageBegin3",
                },
                filter:function(event,player){
                    var target=event.player&&event.source.hasSkillTag("noDirectDamage");
                    return event.card;
                },
                direct:true,
                logTarget:"player",
                content:function(){
                    'step 0'
                        trigger.num += 1;
                    'step 1'
                    if(player.isHealthy()){
                        player.loseHp(trigger.num);      
                        }
                    else player.loseHp((player.hp)-1); 
                    'step 2'
                    player.recover(trigger.num);
                },
                group:"flan_sword_draw",
                subSkill:{
                    draw:{
                        trigger:{
                            target:"useCardToTargeted",
                        },
                        direct:true,
                        content:function(){
                        if(player.getDamagedHp() > player.countCards('e')){player.draw(player.getDamagedHp()-player.countCards('e'));
                                                                          player.chooseToDiscard('he',true);}
                        else player.draw();
                        },
                        sub:true,
                        "_priority":0,
                        sourceSkill:"flan_sword",
                    },
                },
                "_priority":0,
            },
            "flan_awake":{
                audio:"flandre_cs",
                unique:true,
                derivation:"flan_sword",
                trigger:{
                    player:"dying",
                },
                juexingji:true,
                forced:true,
                skillAnimation:true,
                animationColor:"fire",
                content:function(){
                'step 0'
                if(game.roundNumber>player.maxHp){
                    player.removeSkill('flandre_cs');
                }
                player.awakenSkill('flan_awake');
                'step 1'
                player.draw(game.roundNumber);
                'step 2'
                if(game.roundNumber<player.maxHp){
                    player.recover(Math.max(1-player.hp,player.maxHp-player.hp-game.roundNumber));
                }
                else player.recover(1-player.hp);
                'step 3'
                player.addSkills('flan_sword');
                },
                "_priority":0,
            },
            "shinmyoumaru_mallet":{
                audio:"ext:车万符斗祭:2",
                direct:true,
                trigger:{
                    global:"judge",
                },
                filter:function (event, player) {
                    return player.countCards("he") > 0;
                },
                logTarget:"player",
                content:function(){
                    "step 0";
                    player
                        .chooseCard(get.translation(trigger.player) + "的" + (trigger.judgestr || "") + "判定为" + get.translation(trigger.player.judging[0]) + "，" + get.prompt("shinmyoumaru_mallet"), "he", function (card) {
                        var num0 = _status.event.judging.number;
                            if (num0 == -1) { return false;}
                            else if (get.number(card) > num0) { return true;}
                                return false;
                        })
                        .set("ai", function (card) {
                            var trigger = _status.event.getTrigger();
                            var player = _status.event.player;
                            var judging = _status.event.judging;
                            var result = trigger.judge(card) - trigger.judge(judging);
                            var attitude = get.attitude(player, trigger.player);
                            if (attitude == 0 || result == 0) return 0;
                            if (attitude > 0) {
                                return result;
                            } else {
                                return -result;
                            }
                        })
                        .set("judging", trigger.player.judging[0],"noanimate");
                    "step 1";
                    if (result.bool) {
                        player.respond(result.cards, "highlight");
                    } else {
                        event.finish();
                    }
                    "step 2";
                    if (result.bool) {
                        player.logSkill("shinmyoumaru_mallet");
                        player.$gain2(trigger.player.judging[0]);
                        player.gain(trigger.player.judging[0]);
                        trigger.player.judging[0] = result.cards[0];
                        if (!get.owner(result.cards[0], "judge")) {
                            trigger.position.appendChild(result.cards[0]);
                        }
                        game.log(trigger.player, "的判定牌改为", result.cards[0]);
                    }
                    "step 3";
                    game.delay(2);
                },
                ai:{
                    tag:{
                        rejudge:1,
                    },
                },
                "_priority":0,
            },
            "shinmyoumaru_venge":{
                audio:"ext:车万符斗祭:2",
                trigger:{
                    global:["loseAfter","equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter","addToExpansionAfter"],
                },
                direct:true,
                filter:function (event, player) {
                    if (event.player == player) return false;
                    // var evt=event.getl(player);
                    // return evt&&evt.es&&evt.es.length>0;
                    return game.hasPlayer(p => {
                      var evt = event.getl(p);
                      return evt && evt.es && evt.es.length > 0;
                    }
                    );
                  },
                content:function () {
                    'step 0'
                    event.players = game.filterPlayer(p => {
                      var evt = trigger.getl(p);
                      return evt && evt.es && evt.es.length > 0;
                    });
                    'step 1'
                    event.target = event.players.shift();
                    if (!event.target) {
                      event.finish();
                      return;
                    }
                    var evt = trigger.getl(event.target);
                    event.num = evt && evt.es && evt.es.length;
                    'step 2'
                    if (!event.num) { // next target
                      event.goto(1);
                      return;
                    }
                    --event.num;
                    player.chooseBool(get.prompt2('shinmyoumaru_venge', (player != event.target) ? event.target : undefined))
                      .set('choice', get.attitude(player, event.target) < 0);
                    'step 3'
                    if (result.bool) {
                      player.logSkill('shinmyoumaru_venge', event.target);
                        event.goto(4);
                    } else {
                      event.goto(1);
                    }
                    'step 4'
                    player.judge(function (card) {
                      if (get.number(card) > 8) return 2;
                      return -2;
                    }).judge2 = result => result.bool;
                    'step 5'
                    if (result.bool) {
                      event.target.damage();
                    }
                    event.goto(2);
                  },
                ai:{
                    threaten:2,
                    order:10,
                    result:{
                        target:-1,
                    },
                },
                "_priority":0,
            },
            "seiga_extend":{
                skillAnimation:true,
                animationColor:"fire",
                trigger:{
                    global:"dieAfter",
                },
                filter:function(event,player){
                return _status.currentPhase&&_status.currentPhase==player;
                },
                logTarget:"player",
                content:function(){
                'step 0'
                var list=[];
                var listm=[];
                var listv=[];
                if(trigger.player.name1!=undefined) listm=lib.character[trigger.player.name1][3];
                else listm=lib.character[trigger.player.name][3];
                if(trigger.player.name2!=undefined) listv=lib.character[trigger.player.name2][3];
                listm=listm.concat(listv);
                var func=function(skill){
                    var info=get.info(skill);
                    if(!info||info.charlotte||info.hiddenSkill||info.zhuSkill||info.juexingji||info.limited||info.dutySkill||(info.unique&&!info.gainable)||lib.skill.drlt_duorui.bannedList.includes(skill)) return false;
                    return true;
                };
                for(var i=0;i<listm.length;i++){
                    if(func(listm[i])) list.add(listm[i]);
                }
                event.skills=list;
                'step 1'
                if(event.skills.length>0){
                    player.chooseControl(event.skills).set('prompt','请选择要获得的技能').set('ai',function(){return event.skills.randomGet()});
                }
                else event.finish();
                'step 2'
                player.addTempSkills(result.control,{player:'dieAfter'});
                // player.popup(result.control,'thunder');
                player.storage.drlt_duorui=[result.control];
                player.storage.drlt_duorui_player=trigger.player;
                trigger.player.storage.drlt_duorui=[result.control];
                trigger.player.addTempSkill('drlt_duorui1',{player:'phaseAfter'});
                // game.log(player,'获得了技能','#g【'+get.translation(result.control)+'】')
            'step 3'
            player.awakenSkill('seiga_extend');
                },
                "_priority":0,
            },
            "seiga_daotai_max":{
                audio:"seiga_daotai",
                trigger:{
                    global:"phaseBegin",
                },
                forced:true,
                filter:function (event, player) {
                    return event.player != player && !player.getEquip(2);
                },
                content:function () {
                    player.changeHujia(1, null, true);
                    player.addSkill("seiga_daotai_max_lose");
                },
                subSkill:{
                    lose:{
                        audio:"seiga_daotai_lose",
                        trigger:{
                            player:["phaseUseBegin","damageEnd"],
                        },
                        filter:function (event, player) {
                            return event.player == player;
                        },
                        forced:true,
                        content:function () {
                                    "step 0"
                                    player.recover(player.hujia);
                                    player.draw(player.hujia);
                                    "step 1"
                                    if(_status.currentPhase == player){
                                        player.loseHp();
                                    }
                                    player.changeHujia(-player.hujia);
                                    "step 2"
                                    player.removeSkill("seiga_daotai_max_lose");
                        },
                        sub:true,
                        sourceSkill:"seiga_daotai_max",
                        "_priority":0,
                    },
                },
                "_priority":0,
            },
            "seiga_daotai":{
                audio:"ext:车万符斗祭:1",
                trigger:{
                    global:"phaseBegin",
                },
                forced:true,
                filter:function (event, player) {
                    return event.player != player && !player.getEquip(2);
                },
                content:function () {
                    if(player.hujia<player.maxHp){
                    player.changeHujia(1, null, true);
                    }
                    if(player.hp == player.maxHp){
                        player.loseHp();
                            }
                    player.addSkill("seiga_daotai_lose");
                },
                subSkill:{
                    lose:{
                        audio:"ext:车万符斗祭:1",
                        trigger:{
                            player:["phaseBegin","damageEnd"],
                        },
                        filter:function (event, player) {
                            return event.player == player;
                        },
                        forced:true,
                        content:function () {
                                    "step 0"
                                    if(_status.currentPhase != player && (player.hujia >= player.hp || player.hujia >= (game.countPlayer()-1))){
                                        player.draw(player.hujia);
                                    }
                                    "step 1"
                                    if(_status.currentPhase == player&&player.hp == player.maxHp){
                                        player.storage.ganjin -= 1;
                                    }
                                    if(_status.currentPhase == player&&player.hp < player.maxHp){
                                        player.draw(player.hujia);
                                        if(player.hujia > 0){
                                            player.discardPlayerCard(player,player.hujia,'hej',true);
                                            }
                                    }
                                    player.changeHujia(-player.hujia);
                                    "step 2"
                                    player.removeSkill("seiga_daotai_lose");
                        },
                        sub:true,
                        sourceSkill:"seiga_daotai",
                        "_priority":0,
                    },
                },
                "_priority":0,
            },
            "reimu_exterminate_active":{
                audio:"ext:车万符斗祭:1",
                trigger:{
                    global:"phaseJieshuBegin",
                },
                direct:true,
                priority:15,
                filter:function(event,player){
                    if(event.source==player&&_status.currentPhase==player) return false; 
                    return event.player!=player&&event.player.getStat('damage')>0; 
                },
                logTarget:()=>_status.currentPhase,
                content:function (){
                  player.chooseToUse(function(card,player,event){ 
                        if(get.name(card)!='sha') return false; 
                        return lib.filter.filterCard.apply(this,arguments); 
                    },'是否对'+get.translation(_status.currentPhase)+'使用一张杀？').set('complexSelect',true).set('logSkill','reimu_exterminate_active').set('filterTarget',function(card,player,target){ 
                        if(target!=_status.event.sourcex&&!ui.selected.targets.contains(_status.event.sourcex)) return false; 
                        return lib.filter.targetEnabled.apply(this,arguments); 
                    }).set('sourcex',_status.currentPhase); 
                },
                "_priority":1500,
            },
            "reimu_exterminate_damage":{
                audio:"ext:车万符斗祭:1",
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                priority:15,
                filter:function (event,player){ 
                    if(event.source==player&&_status.currentPhase==player) return false; 
                     
                    return player.canUse({name:'sha'},event.source,false)&&(event.source.isIn()&&player!=_status.currentPhase); 
                },
                content:function (){
                    player.chooseToUse(function(card,player,event){ 
                        if(get.name(card)!='sha') return false; 
                        return lib.filter.filterCard.apply(this,arguments); 
                    },'是否对'+get.translation(trigger.source)+'使用一张杀？').set('complexSelect',true).set('logSkill','reimu_exterminate_damage').set('filterTarget',function(card,player,target){ 
                        if(target!=_status.event.sourcex&&!ui.selected.targets.contains(_status.event.sourcex)) return false; 
                        return lib.filter.targetEnabled.apply(this,arguments); 
                    }).set('sourcex',trigger.source); 
                },
                ai:{
                    maixie:true,
                    "maixie_defend":true,
                    effect:{
                        target:function(card, player, target) {
                        if (player.countCards("h") > 1 ) {
                                if (player.hasSkillTag("jueqing", false, target)) return [1, -1.5];
                                if (get.attitude(target, player) < 0) return [1, 1];
                        }
                        },
                    },
                },
                "_priority":1500,
            },
            "reimu_clear":{
                audio:"ext:车万符斗祭:1",
                trigger:{
                    source:"damageEnd",
                },
                check:function (event, player) { 
                    return get.attitude(player, event.player) < 0 &&player!=_status.currentPhase;
                    return get.attitude(player, event.player) >= 0 &&player==_status.currentPhase ||player.countCards("h") <= 2;
                },
                filter:function(event,player){
                return event.player.isIn()&&event.player!=player
                },
                content:function () {
                    "step 0" 
                    player.draw(); 
                    trigger.player.draw();
                    "step 1"
                    if(player!=_status.currentPhase){
                        "step 0"
                        var cards=Array.from(ui.ordering.childNodes);
                        while(cards.length){
                            cards.shift().discard();}
                        "step 1"
                        var evt=_status.event.getParent('phase');
                        if(evt){
                            game.resetSkills();
                            _status.event=evt;
                            _status.event.untrigger(true);}
                        event.getParent('phaseUse').skipped=true;
                        event.getParent('event').finished;
                        game.log("异变解决了，",player,"邀请了",trigger.player,"一起去参加宴会。");
                    } 
                },
                ai:{
                    halfneg:true,
                    basic:{
                        order:4,
                        useful:5,
                        value:1,
                    },
                    tag:{
                        draw:1,
                    },
                },
                "_priority":0,
            },
            "reimu_tribute":{
                unique:true,
                audio:"ext:车万符斗祭:2",
                global:"reimu_tribute_good",
                zhuSkill:true,
                trigger:{
                    global:"gameStart",
                    player:"enterGame",
                },
                Yx:true,
                direct:true,
                filter:function (event, player) {
                    return player.identity == 'zhu';
                },
                content:function () {
                    player.removeSkill("ganjin_zhuSkill");
                },
                "_priority":0,
            },
            "reimu_tribute_good":{
                enable:"phaseUse",
                discard:false,
                lose:false,
                delay:false,
                line:true,
                prepare:function(cards,player,targets){
                    targets[0].logSkill('reimu_tribute');
                },
                prompt:function(){
                    var player=_status.event.player;
                    var list=game.filterPlayer(function(target){
                        return target!=player&&target.hasZhuSkill('reimu_tribute',player);
                    });
                    var str='将一张手牌交给'+get.translation(list)+'：灵梦充满期待的目光看向你......';
                    if(list.length>1) str+='中的一人';
                    return str;
                },
                filter:function(event,player){
                    if(!game.hasPlayer(function(target){
                        return target!=player&&target.hasZhuSkill('reimu_tribute',player)&&!target.hasSkill('reimu_tribute_ok')&&target.countCards('h')<target.maxHp;
                    })) return false;
                    return player.hasCard(function(card){
                        return lib.skill.reimu_tribute_good.filterCard(card,player);
                    },'h');
                },
                filterCard:function(card,player){
                    return get.name(card,player)!='card_exinwan';
                },
                log:false,
                visible:true,
                filterTarget:function(card,player,target){
                    return target!=player&&target.hasZhuSkill('reimu_tribute',player)&&!target.hasSkill('reimu_tribute_ok');
                },
                content:function(){
                    player.give(cards,target);
                    target.addTempSkill('reimu_tribute_ok','phaseUseEnd');
                    target.addShownCards(cards,"visible_cards");
                },
                ai:{
                    expose:0.3,
                    order:1,
                    result:{
                        target:5,
                    },
                },
                "_priority":0,
            },
            "reimu_tribute2":{
                unique:true,
                audio:"ext:车万符斗祭:1",
                global:"reimu_tribute_bad",
                zhuSkill:true,
                "_priority":0,
            },
            "reimu_tribute_bad":{
                enable:"phaseUse",
                discard:false,
                lose:false,
                delay:false,
                line:true,
                prepare:function(cards,player,targets){
                    targets[0].logSkill('reimu_tribute2');
                },
                prompt:function(){
                    var player=_status.event.player;
                    var list=game.filterPlayer(function(target){
                        return target!=player&&target.hasZhuSkill('reimu_tribute2',player);
                    });
                    var str='将一张恶心丸交给'+get.translation(list)+'：喂！赛钱箱不是垃圾桶啦！';
                    if(list.length>1) str+='中的一人';
                    return str;
                },
                filter:function(event,player){
                    if(!game.hasPlayer(function(target){
                        return target!=player&&target.hasZhuSkill('reimu_tribute',player)&&!target.hasSkill('reimu_tribute_ok')&&target.countCards('h')<target.maxHp;
                    })) return false;
                    return player.hasCard(function(card){
                        return lib.skill.reimu_tribute_bad.filterCard(card,player);
                    },'h');
                },
                filterCard:function(card,player){
                    return get.name(card,player)=='card_exinwan';
                },
                log:false,
                visible:true,
                filterTarget:function(card,player,target){
                    return target!=player&&target.hasZhuSkill('reimu_tribute2',player)&&!target.hasSkill('reimu_tribute_ok');
                },
                content:function(){
                    player.give(cards,target);
                    target.addTempSkill('reimu_tribute_ok','phaseUseEnd');
                    target.addShownCards(cards,"visible_cards");
                },
                ai:{
                    order:8,
                    result:{
                        target:-1,
                    },
                },
                "_priority":0,
            },
            "visible_cards":{
                "_priority":0,
            },
            "reimu_tribute_ok":{
                "_priority":0,
            },
            "reimu_exterminate":{
                audio:"reimu_exterminate_active",
                group:["reimu_exterminate_active","reimu_exterminate_damage"],
                "_priority":0,
            },
            "reimu_saisen":{
                audio:"ext:车万符斗祭:1",
                trigger:{
                    player:"useCardToPlayered",
                },
                logTarget:"target",
                filter:function (event, player) {
                    if(event.target == player || (event.card.name !='sha'& event.card.name != 'juedou')) return false; 
                    return event.target.hp >= player.hp;
                },
                forced:true,
                preHidden:true,
                content:function () {
                    "step 0"
                    trigger.target.choosePlayerCard(trigger.target, 'hej', '选择一张牌交给' + get.translation(player) + '，或点“取消”此牌无法被响应').set('ai',function(button){
                        if (trigger.target.countCards('j') == 0 || trigger.target.countCards('h', 'shan') == 0){
                        return false; 
                        }
                        else get.attitude(_status.event.player,_status.event.target);
                    }).set('target',trigger.target);
                    "step 1"
                    if (result.bool) {
                        trigger.target.give(result.cards, player);
                        player.draw();
                    }
                    else {
                        trigger.getParent().directHit.push(trigger.target);
                        player.recover();
                        player.draw();
                    }
                },
                ai:{
                    "maixie_defend":true,
                    skillTagFilter:function (player, tag, arg) {
                        if(event.target == player || event.card.name != 'sha') return false; 
                        return arg.target.hp > player.hp;
                    },
                },
                "_priority":0,
            },
            "reimu_damage":{
                mod:{
                    targetInRange:function(card){
                        if(card.name=='sha') return true;
                    },
                    maxHandcardBase:function(player){
                        return Math.max(player.hp,game.countPlayer());
                    },
                },
                locked:true,
                trigger:{
                    player:"useCard",
                },
                direct:true,
                content:function(){
                    player.draw();
                    if(player.maxHp<=2){
                        trigger.baseDamage+=game.roundNumber;
                        player.addTempSkill("reimu_damage_2");
                    }
                    else {
                        player.maxHp--;
                        player.update();
                    }
                },
                subSkill:{
                    "2":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        frequent:true,
                        filter:function (event, player) {
                            return event.player == player;
                          },
                        content:function () {
                            "step 0"
                            player.damage(player.countUsed());
                        },
                        sub:true,
                        sourceSkill:"reimu_damage",
                        "_priority":0,
                    },
                },
                "_priority":0,
            },
            "reimu_awake":{
                audio:"ext:车万符斗祭:1",
                derivation:"reimu_damage",
                trigger:{
                    global:"gameStart",
                    player:"enterGame",
                },
                juexingji:true,
                forced:true,
                skillAnimation:true,
                animationColor:"ice",
                filter:function (event, player) {
                    return game.hasPlayer(function (current) {
                        return current.group == "shen";
                    });
                },
                content:function () {
                    'step 0'
                    player.awakenSkill('reimu_awake');
                    player.maxHp = 7;
                    'step 1'
                    player.addSkill('reimu_damage');
                },
                "_priority":0,
            },
            "reimu_extra":{
                derivation:"reimu_saisen",
                trigger:{
                    global:["gainAfter","loseAsyncAfter"],
                },
                filter:function (event, player) {
                    return game.hasPlayer(function (current) {
                        return current.isPhaseUsing() && event.player != player && event.getg(current).length > 0 && current.countCards('h') > player.countCards('e') + 7;
                    });
                },
                juexingji:true,
                forced:true,
                skillAnimation:true,
                animationColor:"ice",
                content:function () {
                    'step 0'
                    player.awakenSkill('reimu_extra');
                    'step 1'
                    player.addSkill('reimu_saisen');
                },
                "_priority":0,
            },
            "kaguya_dilemma":{
                audio:"ext:车万符斗祭:1",
                locked:true,
                group:["kaguya_dilemma_good","kaguya_dilemma_bad"],
                "_priority":0,
            },
            "kaguya_dilemma_good":{
                audio:"kaguya_dilemma",
                trigger:{
                    player:"recoverEnd",
                },
                logTarget:"source",
                filter:function (event, player) {
                    return event.source && event.source.isIn();
                },
                content:function () {
                    "step 0";
                    event.num = trigger.num;
                    "step 1";
                    if (event.num > 0) {
                        trigger.source.draw();
                        event.num--;
                        event.redo();
                    }
                },
                "_priority":0,
            },
            "kaguya_dilemma_bad":{
                audio:"ext:车万符斗祭:1",
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event, player) {
                    return event.source && event.source != player && event.source.isIn();
                },
                logTarget:"source",
                content:function () {
                    "step 0";
                    trigger.source
                        .chooseCard("选择一张方片牌交给" + get.translation(player) + "，或点“取消”失去1点体力", function (card) {
                            return get.suit(card) == "diamond";
                        })
                        .set("ai", function (card) {
                            var player = _status.event.getParent().player,
                                source = _status.event.player;
                            if (get.effect(source, { name: "losehp" }, source, source) >= 0) return 0;
                            if (get.attitude(player, source) > 0) return 11 - get.value(card);
                            return 7 - get.value(card);
                        });
                    "step 1";
                    if (result.bool) {
                        trigger.source.give(result.cards, player);
                    } else {
                        trigger.source.loseHp();
                    }
                },
                ai:{
                    "maixie_defend":true,
                    effect:{
                        target:function (card, player, target) {
                            if (player.hasSkillTag("jueqing", false, target)) return [1, -2];
                            if (!target.hasFriend()) return;
                            if (get.tag(card, "damage")) return [1, 0, 0, -1];
                        },
                    },
                },
                "_priority":0,
            },
            "kaguya_inight":{
                audio:"ext:车万符斗祭:1",
                trigger:{
                    global:"useCardAfter",
                },
                frequent:true,
                popup:false,
                filter:function(event, player) {
                    return event.player != player
                      && _status.currentPhase != player&& get.color(event.card, event.player) == 'red'&& get.type(event.card) == 'basic' &&player.countCards("hes", { suit: "diamond" }) > 0;
                  },
                content:function(){
                    "step 0"
                    player.addTempSkill("kaguya_inight_lebu");
                    player.chooseToUse({
                      logSkill: event.name,
                      preTarget: trigger.player,
                      position:"he",
                      prompt: `对${get.translation(trigger.player)}使用一张方片基本牌或装备牌当做【封魔阵】？`,
                        filterCard: function (card, player) {
                        return get.name(card) == 'lebu' && lib.filter.filterCard.apply(this, arguments);
                      },
                      filterTarget: function (card, player, target) {
                        return target == _status.event.preTarget && lib.filter.targetEnabled.apply(this, arguments);
                      },
                      addCount: false,
                    });
                    "step 1"
                    if (!result.bool) {
                      event.finish();
                      return;
                    }
                },
                ai:{
                    basic:{
                        order:1,
                        useful:1,
                        value:8,
                    },
                },
                subSkill:{
                    lebu:{
                        enable:"chooseToUse",
                        filterCard:function(card){
                            return get.suit(card) == "diamond"&& get.type(card) != "trick";
                        },
                        position:"hes",
                        viewAs:{
                            name:"lebu",
                        },
                        sub:true,
                        sourceSkill:"kaguya_inight",
                        "_priority":0,
                        ai:{
                            basic:{
                                order:1,
                                useful:1,
                                value:8,
                            },
                            result:{
                                ignoreStatus:true,
                                target:(player, target) => {
                                    if (target === _status.currentPhase && target.skipList.includes("phaseUse")) {
                                        let evt = _status.event.getParent("phase");
                                        if (evt && evt.phaseList.indexOf("phaseJudge") <= evt.num) return 0;
                                    }
                                    let num = target.needsToDiscard(3),
                                        cf = Math.pow(get.threaten(target, player), 2);
                                    if (!num) return -0.01 * cf;
                                    if (target.hp > 2) num--;
                                    let dist = Math.sqrt(1 + get.distance(player, target, "absolute"));
                                    if (dist < 1) dist = 1;
                                    if (target.isTurnedOver()) dist++;
                                    return (Math.min(-0.1, -num) * cf) / dist;
                                },
                            },
                            tag:{
                                skip:"phaseUse",
                            },
                        },
                    },
                },
                "_priority":0,
            },
            "tenshi_masochist":{
                audio:"ext:车万符斗祭:1",
                trigger:{
                    player:"damageEnd",
                },
                filter:function(event){
                    return event.num>0;
                },
                content:async function(event,trigger,player){
                    event.count=1;
                    // event.goto -> while
                    while(true){
                        event.count--;
                        const {cards}=await
                        game.cardsGotoOrdering(get.cards(trigger.num*2));
                        if(_status.connectMode) game.broadcastAll(function()
            {_status.noclearcountdown=true});
                        event.given_map={};
                        if(!cards.length) return;
                        // event.goto -> do while
                        do{
                            const {result:{bool,links}} =
                                  cards.length==1?
                                  {result:{links:cards.slice(0),bool: true}}:
                            await player.chooseCardButton('请选择要分配的牌',true,cards,[1,cards.length]).set('ai',()=>{
                                if(ui.selected.buttons.length==0) return 1;
                                return 0;
                            });
                            if(!bool) return;
                            cards.removeArray(links);
                            event.togive=links.slice(0);
                            const {result:{targets}}=await player.chooseTarget('选择一名角色获得'+get.translation(links),true).set('ai',target=>{
                                const att=get.attitude(_status.event.player,target);
                                if(_status.event.enemy){
                                    return -att;
                                }
                                else if(att>0){
                                    return att/(1+target.countCards('h'));
                                }
                                else{
                                    return att/100;
                                }
                            }).set('enemy',get.value(event.togive[0],player,'raw')<0);
                            if(targets.length){
                                const id=targets[0].playerid,
                                      map=event.given_map;
                                if(!map[id]) map[id]=[];
                                map[id].addArray(event.togive);
                            }
                        }
                        while(cards.length>0);
                        if(_status.connectMode){
                            game.broadcastAll(function(){
                                delete _status.noclearcountdown;game.stopCountChoose()});
                        }
                        const list=[];
                        for(const i in event.given_map){
                            const source=(_status.connectMode?lib.playerOL:game.playerMap)[i];
                            player.line(source,'green');
                            if(player!==source&&(get.mode()!=='identity'||player.identity!=='nei')) player.addExpose(0.2);
                            list.push([source, event.given_map[i]]);
                        }
                        game.loseAsync({
                            gain_list:list,
                            giver:player,
                            animate:'draw',
                        }).setContent('gaincardMultiple');
                        if(event.count>0&&player.hasSkill(event.name)&&!get.is.blocked(event.name, player)){
                            const {
                                result:{bool:chooseBoolResultBool}}=await player.chooseBool(get.prompt2(event.name)).set('frequentSkill',event.name);
                            if(chooseBoolResultBool) player.logSkill(event.name);
                            else return;
                        }
                        else return;
                    }
                },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    effect:{
                        target:function(card,player,target){
                            if(get.tag(card,'damage')){
                                if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                                if(!target.hasFriend()) return;
                                let num=1;
                                if(get.attitude(player,target)>0){
                                    if(player.needsToDiscard()) num=0.7;
                                    else num=0.5;
                                }
                                if(target.hp>=4) return [1,num*2];
                                if(target.hp==3) return [1,num*1.5];
                                if(target.hp==2) return [1,num*0.5];
                            }
                        },
                    },
                },
                "_priority":0,
            },
            "tenshi_sp":{
                audio:"ext:车万符斗祭:1",
                forced:true,
                trigger:{
                    global:"judgeEnd",
                },
                filter:function (event, player){
                    return get.color(event.result.card) == 'red' && get.distance(player, event.player) <= 1;
                },
                content:function () {
                    var card = trigger.result.card;
                    trigger.player.$give(card, player); 
                    player.gain(card, 'gain2'); 
                },
                "_priority":0,
            },
            "koakuma_find":{
                audio:"ext:车万符斗祭:1",
                mod:{
                    aiOrder:function(player, card, num) {
                        if(num<=0||get.itemtype(card)!=='card'||get.type(card)!=='equip') return num;
                        let eq=player.getEquip(get.subtype(card));
                        if(eq&&get.equipValue(card)-get.equipValue(eq)<Math.max(1.2,6-player.hp)) return 0;
                    },
                },
                locked:false,
                enable:"phaseUse",
                usable:1,
                position:"he",
                filterCard:true,
                selectCard:[1,8],
                prompt:"弃置至多X张牌并摸等量的牌（X为场上存活人数）",
                check:function(card){
                    return 6-get.value(card)
                },
                content:async function(event,trigger,player){
                    player.draw(event.cards.length);
                },
                ai:{
                    order:1,
                    result:{
                        player:1,
                    },
                    threaten:1.5,
                },
                "_priority":0,
            },
            "nazrin_treasurehunt":{
                audio:"ext:车万符斗祭:1",
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                frequent:false,
                content:function(){
                    'step 0'
                    var next=player.judge(function(card){
                        if(get.color(card)=='black') return 1;
                        return -1;
                    });
                    next.set('callback',function(){
                        if(event.judgeResult.color=='black') player.gain(card,'gain2');
                    });
                    'step 1'
                    if(result.judge>0) player.chooseBool('是否再次发动【探宝】？').set(event.name);
                    else event.finish();
                    'step 2'
                    if(result.bool) event.goto(0);
                },
                "_priority":0,
            },
            "nazrin_agile":{
                audio:"ext:车万符斗祭:1",
                mod:{
                    aiValue:function (player, card, num) {
                        if (get.name(card) != "shan" && get.color(card) != "black")
                            return;
                        var cards = player.getCards("hs", function (card) {
                            return get.name(card) == "shan" || get.color(card) == "black";
                        });
                        cards.sort(function (a, b) {
                            return (get.name(b) == "shan" ? 1 : 2) - (get.name(a) == "shan" ? 1 : 2);
                        });
                        var geti = function () {
                            if (cards.includes(card)) {
                                return cards.indexOf(card);
                            }
                            return cards.length;
                        };
                        if (get.name(card) == "shan") 
                            return Math.min(num, [6, 4, 3][Math.min(geti(), 2)]) * 0.6;
                        return Math.max(num, [6.5, 4, 3][Math.min(geti(), 2)]);
                    },
                    aiUseful:function () {
                        return lib.skill.reqingguo.mod.aiValue.apply(this, arguments);
                    },
                },
                locked:false,
                enable:["chooseToRespond","chooseToUse"],
                filterCard:function (card) {
                    return get.color(card) == "black";
                },
                position:"hes",
                viewAs:{
                    name:"shan",
                },
                viewAsFilter:function (player) {
                    if (!player.countCards("hes", { color: "black" })) 
                        return false;
                },
                prompt:"将一张黑色牌当闪打出",
                check:function () {
                    return 1;
                },
                ai:{
                    order:2,
                    respondShan:true,
                    skillTagFilter:function (player) {
                        if (!player.countCards("hes", { color: "black" })) return false;
                    },
                    effect:{
                        target:function (card, player, target, current) {
                            if (get.tag(card, "respondShan") && current < 0) return 0.6;
                        },
                    },
                    basic:{
                        useful:(card, i) => {
                            let player = _status.event.player,
                                basic = [7, 5.1, 2],
                                num = basic[Math.min(2, i)];
                            if (player.hp > 2 && player.hasSkillTag("maixie")) num *= 0.57;
                            if (
                                player.hasSkillTag("freeShan", false, null, true) ||
                                player.getEquip("rewrite_renwang")
                            )
                                num *= 0.8;
                            return num;
                        },
                        value:[7,5.1,2],
                    },
                    result:{
                        player:1,
                    },
                },
                "_priority":0,
            },
            "shikieiki_trial":{
                audio:"ext:车万符斗祭:2",
                trigger:{
                    global:"judge",
                },
                direct:true,
                filter:function(event,player){
                    return player.countCards('hes')>0;
                },
                content:function(){
                    "step 0"
                    player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+ get.translation(trigger.player.judging[0])+'，'+get.prompt('shikieiki_trial'),'hes',function(card){
                        var player=_status.event.player;
                        var mod2=game.checkMod(card,player,'unchanged','cardEnabled2',player);
                        if(mod2!='unchanged') return mod2;
                        var mod=game.checkMod(card,player,'unchanged','cardRespondable',player);
                        if(mod!='unchanged') return mod;
                        return true;
                    }).set('ai',function(card){
                        var trigger=_status.event.getTrigger();
                        var player=_status.event.player;
                        var judging=_status.event.judging;
                        var result=trigger.judge(card)-trigger.judge(judging);
                        var attitude=get.attitude(player,trigger.player);
                        if(attitude==0||result==0) return 0;
                        if(attitude>0){
                            return result-get.value(card)/2;
                        }
                        else{
                            return -result-get.value(card)/2;
                        }
                    }).set('judging',trigger.player.judging[0]);
                    "step 1"
                    if(result.bool){
                        player.respond(result.cards,'shikieiki_trial','highlight','noOrdering');
                    }
                    else{
                        event.finish();
                    }
                    "step 2"
                    if(result.bool){
                        if(trigger.player.judging[0].clone){
                            trigger.player.judging[0].clone.classList.remove('thrownhighlight');
                            game.broadcast(function(card){
                                if(card.clone){
                                    card.clone.classList.remove('thrownhighlight');
                                }
                            },trigger.player.judging[0]);
                            game.addVideo('deletenode',player,get.cardsInfo([trigger.player.judging[0].clone]));
                        }
                        game.cardsDiscard(trigger.player.judging[0]);
                        trigger.player.judging[0]=result.cards[0];
                        trigger.orderingCards.addArray(result.cards);
                        game.log(trigger.player,'的判定牌改为',result.cards[0]);
                        game.delay(2);
                    }
                },
                ai:{
                    rejudge:true,
                    tag:{
                        rejudge:1,
                    },
                },
                "_priority":0,
            },
            "shikieiki_majesty":{
                audio:"ext:车万符斗祭:1",
                trigger:{
                    player:"damageEnd",
                },
                logTarget:"source",
                preHidden:true,
                filter:function(event, player) {
                    return event.source && event.source.countGainableCards(player, event.source != player ? "he" : "e") > 0 && event.num > 0;
                },
                content:async function(event, trigger, player) {
                    player.gainPlayerCard(true, trigger.source, trigger.source != player ? "he" : "e");
                },
                ai:{
                    "maixie_defend":true,
                    effect:{
                        target:function(card, player, target) {
                            if (player.countCards("he") > 1 && get.tag(card, "damage")) {
                                if (player.hasSkillTag("jueqing", false, target)) return [1, -1.5];
                                if (get.attitude(target, player) < 0) return [1, 1];
                            }
                        },
                    },
                },
                "_priority":0,
            },
            "medicine_ciguatera":{
                audio:"ext:车万符斗祭:1",
                direct:true,
                trigger:{
                    global:"phaseZhunbeiBegin",
                },
                content:function(){
                    'step 0'
                    event.target=trigger.player;
                    player.chooseToDiscard(get.prompt('medicine_ciguatera',event.target),'he',{ color: 'black' }).set('ciguatera',get.attitude(player,trigger.player)<-2).set('ai',function(card){
                        if(!_status.event.ciguatera) return 0;
                        return 7-get.value(card);
                    }).logSkill=['medicine_ciguatera',event.target]; 
                    'step 1'
                    if (result.bool) { 
                        target.loseHp(); 
                    } 
                    else { 
                        event.finish(); 
                    }
                    'step 2'
                    trigger.player.chooseUseTarget({ name: 'jiu'}, true, 'nopopup', 'noanimate').set('logSkill','nolog'); 
                },
                "_priority":0,
            },
            "medicine_melancholy":{
                audio:"ext:车万符斗祭:1",
                trigger:{
                    player:"damageAfter",
                },
                check:function(event,player){ 
                    return get.attitude(player,event.source) <= 0; 
                },
                filter:function(event,player){ 
                    return event.source&&event.source!=player; 
                },
                content:function (){
                    "step 0" 
                    event.cards = get.cards(); 
                    player.showCards(event.cards); 
                    "step 1" 
                    player.gain(cards, 'gain2'); 
                    "step 2" 
                    if(get.suit(event.cards) !='club') {
                        trigger.source.addTempSkill('medicine_melancholy_block', 'phaseEnd');
                    }
                },
                ai:{
                    maixie:true,
                    "maixie_defend":true,
                    effect:{
                        target:function(card, player, target) {
                            if (player.countCards("h") > 1 ) {
                                if (player.hasSkillTag("jueqing", false, target)) return [1, -1.5];
                                if (get.attitude(target, player) < 0) return [1, 1];
                            }
                        },
                    },
                },
                subSkill:{
                    block:{
                        charlotte:true,
                        mark:true,
                        intro:{
                            content:"你抑郁了",
                        },
                        mod:{
                            "cardEnabled2":function(card){
                                if(get.position(card)=='h') return false;
                            },
                        },
                        sub:true,
                        "_priority":0,
                        sourceSkill:"medicine_melancholy",
                    },
                },
                "_priority":0,
            },
            "yuuka_rs":{
                audio:"ext:车万符斗祭:1",
                trigger:{
                    target:"useCardToTargeted",
                },
                filter:function (event, player) {
                    return event.player != player && event.card &&get.type(event.card) == 'trick'&& event.targets.length == 1;
                },
                check:function (event, player) {
                    return event.card.name != 'juedou';
                },
                content:function () {
                    'step 0'
                    trigger.card.name = 'juedou';
                    if (trigger.card.isCard && trigger.cards.length) {
                        trigger.card.isCard = false;
                    }
                },
                group:"yuuka_rs_sha",
                subSkill:{
                    sha:{
                        audio:"ext:车万符斗祭:1",
                        enable:["chooseToUse","chooseToRespond"],
                        filter:function(event,player){ 
                            return player!=_status.currentPhase&&player.countCards('h')>0; 
                        },
                        viewAs:{
                            name:"sha",
                        },
                        viewAsFilter:function(player){
                            return player.countCards('hs')>0;
                        },
                        filterCard:true,
                        position:"hs",
                        prompt:"将一张手牌当做【杀】使用",
                        check:function(card){
                            return 6-get.value(card);
                        },
                        sub:true,
                        sourceSkill:"yuuka_rs",
                        ai:{
                            yingbian:function (card, player, targets, viewer) {
                                if (get.attitude(viewer, player) <= 0) return 0;
                                var base = 0,
                                    hit = false;
                                if (get.cardtag(card, "yingbian_hit")) {
                                    hit = true;
                                    if (
                                        targets.some((target) => {
                                            return (target.mayHaveShan(
                                                viewer,
                                                "use",
                                                target.getCards("h", (i) => {
                                                    return i.hasGaintag("sha_notshan");
                                                })
                                            ) && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.natureList(card)) > 0);
                                        }))
                                        base += 5;
                                }
                                if (get.cardtag(card, "yingbian_add")) {
                                    if (game.hasPlayer(function (current) {
                                        return (!targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0);
                                    }))
                                        base += 5;
                                }
                                if (get.cardtag(card, "yingbian_damage")) {
                                    if (targets.some((target) => {
                                        return (get.attitude(player, target) < 0 && (hit || !target.mayHaveShan(viewer,"use",target.getCards("h", (i) => {
                                            return i.hasGaintag("sha_notshan");
                                        })) || player.hasSkillTag("directHit_ai",true,{target: target,card: card,},true)) && !target.hasSkillTag("filterDamage", null, {player: player,card: card,jiu: true,
                                        }));
                                    }))
                                        base += 5;
                                }
                                return base;
                            },
                            canLink:function (player, target, card) {
                                if (!target.isLinked() && !player.hasSkill("wutiesuolian_skill")) return false;
                                if (player.hasSkill("jueqing") || player.hasSkill("gangzhi") || target.hasSkill("gangzhi")) return false;
                                return true;
                            },
                            basic:{
                                useful:[5,3,1],
                                value:[5,3,1],
                            },
                            order:function(item, player) {
                                let res = 3.2;
                                if (player.hasSkillTag("presha", true, null, true)) res = 10;
                                if (
                                    typeof item !== "object" ||
                                    !game.hasNature(item, "linked") ||
                                    game.countPlayer((cur) => cur.isLinked()) < 2
                                )
                                    return res;
                                //let used = player.getCardUsable('sha') - 1.5, natures = ['thunder', 'fire', 'ice', 'kami'];
                                let uv = player.getUseValue(item, true);
                                if (uv <= 0) return res;
                                let temp = player.getUseValue("sha", true) - uv;
                                if (temp < 0) return res + 0.15;
                                if (temp > 0) return res - 0.15;
                                return res;
                            },
                            result:{
                                target:function (player, target, card, isLink) {
                                    let eff = -1.5,
                                        odds = 1.35,
                                        num = 1;
                                    if (isLink) {
                                        let cache = _status.event.getTempCache("sha_result", "eff");
                                        if (typeof cache !== "object" || cache.card !== get.translation(card))
                                            return eff;
                                        if (cache.odds < 1.35 && cache.bool) return 1.35 * cache.eff;
                                        return cache.odds * cache.eff;
                                    }
                                    if (
                                        player.hasSkill("jiu") ||
                                        player.hasSkillTag("damageBonus", true, {
                                            target: target,
                                            card: card,
                                        })
                                    ) {
                                        if (
                                            target.hasSkillTag("filterDamage", null, {
                                                player: player,
                                                card: card,
                                                jiu: true,
                                            })
                                        )
                                            eff = -0.5;
                                        else {
                                            num = 2;
                                            if (get.attitude(player, target) > 0) eff = -7;
                                            else eff = -4;
                                        }
                                    }
                                    if (
                                        !player.hasSkillTag(
                                            "directHit_ai",
                                            true,
                                            {
                                                target: target,
                                                card: card,
                                            },
                                            true
                                        )
                                    )
                                        odds -=
                                            0.7 *
                                            target.mayHaveShan(
                                                player,
                                                "use",
                                                target.getCards("h", (i) => {
                                                    return i.hasGaintag("sha_notshan");
                                                }),
                                                "odds"
                                            );
                                    _status.event.putTempCache("sha_result", "eff", {
                                        bool: target.hp > num && get.attitude(player, target) > 0,
                                        card: get.translation(card),
                                        eff: eff,
                                        odds: odds,
                                    });
                                    return odds * eff;
                                },
                            },
                            tag:{
                                respond:1,
                                respondShan:1,
                                damage:function (card) {
                                    if (game.hasNature(card, "poison")) return;
                                    return 1;
                                },
                                natureDamage:function (card) {
                                    if (game.hasNature(card, "linked")) return 1;
                                },
                                fireDamage:function (card, nature) {
                                    if (game.hasNature(card, "fire")) return 1;
                                },
                                thunderDamage:function (card, nature) {
                                    if (game.hasNature(card, "thunder")) return 1;
                                },
                                poisonDamage:function (card, nature) {
                                    if (game.hasNature(card, "poison")) return 1;
                                },
                            },
                        },
                        "_priority":0,
                    },
                },
                "_priority":0,
            },
            "yuuka_sadist":{
                audio:"ext:车万符斗祭:1",
                direct:true,
                trigger:{
                    source:"dieAfter",
                },
                filterTarget:function (card, player, target) { 
                    return game.hasPlayer(p => p != player && target.inRangeOf(player) && p.countCards('he'));
                },
                content:function () { 
                    'step 0'
                    player.chooseTarget(get.prompt('yuuka_sadist'),function(card,player,target){
                        return game.hasPlayer(p => p != player && target.inRangeOf(player) && p.countCards('he'))&& target.isAlive();
                    }).set('ai',function(target){ 
                        var player=_status.event.player; 
                        return get.damageEffect(target,player,player); 
                    }); 
                    'step 1' 
                    if(result.bool){ 
                        player.logSkill('yuuka_sadist',result.targets); 
                        result.targets[0].damage(); 
                    } 
                },
                ai:{
                    expose:0.2,
                    threaten:1.5,
                    effect:{
                    },
                },
                group:"yuuka_sadist_add",
                subSkill:{
                    add:{
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        frequent:function(event,player){ 
                            return get.attitude(player,event.player)<0&&event.player.hp==1; 
                        },
                        filter:function(event,player){ 
                            return event.player!=player&&event.player.hp==1&&event.notLink(); 
                        },
                        content:function(){ 
                            trigger.num++; 
                        },
                        ai:{
                            threaten:1.2,
                        },
                        sub:true,
                        "_priority":0,
                        sourceSkill:"yuuka_sadist",
                    },
                },
                "_priority":0,
            },
            "tewi_lucky":{
                trigger:{
                    player:"loseEnd",
                    global:["equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter","addToExpansionAfter"],
                },
                forced:true,
                audio:"ext:车万符斗祭:1",
                filter:function (event,player){
                    return player.countCards('h')<1;
                },
                content:function (){
                    player.draw(2);
                },
                ai:{
                    threaten:0.8,
                    effect:{
                        target:function(card) {
                            if (card.name == "guohe" || card.name == "liuxinghuoyu") return 0.5;
                        },
                    },
                    noh:true,
                    skillTagFilter:function(player, tag) {
                        if (tag == "noh") {
                            if (player.countCards("h") != 1) return false;
                        }
                    },
                },
                "_priority":0,
            },
            "kogasa_surprise":{
                audio:"ext:车万符斗祭:1",
                enable:"phaseUse",
                usable:1,
                filter:function (event, player) {
                    return player.countCards('h') > 0;
                },
                filterTarget:function (card, player, target) {
                    return player != target;
                },
                filterCard:true,
                check:function (card) {
                    return 8 - get.value(card);
                },
                discard:false,
                content:function () {
                    'step 0'
                    game.log(player, '把一张牌贴在头上，唰地一下出现在',target,'的面前。');
                    ui.cardPile.insertBefore(cards[0], ui.cardPile.firstChild);
                    target.chooseControl('heart2', 'diamond2', 'club2', 'spade2').set('ai', function (event) {
                        switch (Math.floor(Math.random() * 6)) {
                            case 0:
                                return 'heart2';
                            case 1:
                            case 4:
                            case 5:
                                return 'diamond2';
                            case 2:
                                return 'club2';
                            case 3:
                                return 'spade2';
                        }
                    });
                    'step 1'
                    game.log(target, '选择了' + get.translation(result.control));
                    event.choice = result.control;
                    target.chat('我选'+get.translation(event.choice));
                    event.cards = get.cards();
                    target.gain(event.cards);
                    target.addShownCards(event.cards,"visible_mcdh");
                    'step 2'
                    if (get.suit(event.cards) + '2' != event.choice){
                        player.chat('猜错了');
                        target.damage();
                        game.log(target, '受到了',player,'的惊吓，',event.cards,'被贴到了',target,'的头上。');
                    }
                    else
                        player.chat('猜对了');
                        game.log(target,'并没有被吓到，一把扯下了贴在头上的',event.cards,'。');
                },
                ai:{
                    order:1,
                    result:{
                        target:function (player, target) {
                            var eff = get.damageEffect(target, player);
                            if (eff >= 0) return 1 + eff;
                            var value = 0, i;
                            var cards = player.get('h');
                            for (i = 0; i < cards.length; i++) {
                                value += get.value(cards[i]);
                            }
                            value /= player.countCards('h');
                            if (target.hp == 1) return Math.min(0, value - 7);
                            return Math.min(0, value - 5);
                        },
                    },
                },
                "_priority":0,
            },
            "kogasa_jolly":{
                audio:"ext:车万符斗祭:1",
                trigger:{
                    player:"phaseDrawAfter",
                },
                forced:true,
                popup:false,
                content:function(){
                    'step 0'
                    player.chooseTarget('请选择目标','令一名角色摸一张牌').set('ai',function(target){
                        return get.attitude(_status.event.player,target)*Math.sqrt(Math.max(1,4-target.countCards('h')));
                    });
                    'step 1'
                    if(result.bool){
                        var target=result.targets[0];
                        player.logSkill('kogasa_jolly');
                        target.draw();
                        game.log(player,'非常愉快，牌堆顶的一张牌消失了，出现在',target,'的手上。');
                    }
                },
                "_priority":0,
            },
            "patchouli_library":{
                audio:"ext:车万符斗祭:2",
                trigger:{
                    player:"useCard",
                },
                forced:true,
                filter:function (event) {
                    return get.type(event.card) == 'trick';
                },
                content:function () { 
                    player.draw(); 
                },
                mod:{
                    targetInRange:function (card, player, target, now) {
                        var type = get.type(card);
                        if (type == 'trick' || type == 'delay') return true;
                    },
                },
                "_priority":0,
            },
            "patchouli_knowledge":{
                audio:"ext:车万符斗祭:1",
                forced:true,
                trigger:{
                    target:"useCardToTarget",
                },
                filter:function (event, player) {
                    return get.type(event.card)=='trick'&&get.suit(event.card)=='spade';
                },
                content:function(){
                    trigger.getParent().excluded.add(player);
                    trigger.cancel();
                    game.log(player,"一眼就看穿了这张符卡，直接挡下。");
                },
                ai:{
                    effect:{
                        target:function (event,card, player, target) {
                            if (get.type(event.card) == 'trick') {
                                if (event.targets.length == 1) {
                                    if (card.suit != 'spade') return 0.1;
                                    return 0.2;
                                }
                            }
                        },
                    },
                },
                group:["patchouli_knowledge_judgeBefore","patchouli_knowledge_wuxierespond"],
                subSkill:{
                    judgeBefore:{
                        audio:"patchouli_knowledge",
                        mod:{
                            targetEnabled:function (card) {
                                if (card.name == 'shandian'&&get.suit(card) == 'spade') return false;
                            },
                        },
                        forced:true,
                        frequent:true,
                        trigger:{
                            player:"phaseJudgeBefore",
                        },
                        filter:function (card, player) {
                                    return player.countCards('js', { suit: 'spade' }) > 0;
                        },
                        content:function () {
                            player.chooseToDiscard(true, 'js', function (card) {
                                return get.suit(card) == 'spade';
                            });
                            game.log(player,"一眼就看穿了这张符卡，直接挡下。");
                        },
                        sub:true,
                        sourceSkill:"patchouli_knowledge",
                        "_priority":0,
                    },
                    wuxierespond:{
                        audio:"patchouli_knowledge",
                        forced:true,
                        frequent:true,
                        trigger:{
                            player:"wuxieBegin",
                        },
                        filter:function (event,player){
                            return event.card&&get.type(event.card)=='trick'&&get.suit(event.card)=='spade' &&event.player != player;
                        },
                        check:function (event,player){
                            if(get.attitude(player,event.target)<=0){
                                return true;
                            }
                            return false;
                        },
                        content:function (){
                            trigger.untrigger();
                            trigger.finish();
                            game.log(player,"一眼就看穿了这张符卡，直接挡下。");
                        },
                        sub:true,
                        sourceSkill:"patchouli_knowledge",
                        "_priority":0,
                    },
                },
                "_priority":0,
            },
            "boss_tongchou":{
                unique:true,
                group:["boss_tongchou_1"],
                zhuSkill:true,
                filter:function(event, player) {
                    if (!player.hasZhuSkill("boss_tongchou") || !game.hasPlayer(current => current != player)) return false;
                    return !event.jijiang && (event.type != "phase" || !player.hasSkill("boss_tongchou_2"));
                },
                enable:["chooseToUse","chooseToRespond"],
                viewAs:{
                    name:"sha",
                },
                filterCard:function() {
                    return false;
                },
                selectCard:-1,
                ai:{
                    order:function() {
                        return get.order({ name: "sha" }) + 0.3;
                    },
                    respondSha:true,
                    skillTagFilter:function(player) {
                        if (!player.hasZhuSkill("boss_tongchou") || !game.hasPlayer(current => current != player)) return false;
                    },
                    yingbian:function (card, player, targets, viewer) {
                        if (get.attitude(viewer, player) <= 0) return 0;
                        var base = 0,
                            hit = false;
                        if (get.cardtag(card, "yingbian_hit")) {
                            hit = true;
                            if (
                                targets.some((target) => {
                                    return (
                                        target.mayHaveShan(
                                            viewer,
                                            "use",
                                            target.getCards("h", (i) => {
                                                return i.hasGaintag("sha_notshan");
                                            })
                                        ) &&
                                        get.attitude(viewer, target) < 0 &&
                                        get.damageEffect(target, player, viewer, get.natureList(card)) > 0
                                    );
                                })
                            )
                                base += 5;
                        }
                        if (get.cardtag(card, "yingbian_add")) {
                            if (
                                game.hasPlayer(function (current) {
                                    return (
                                        !targets.includes(current) &&
                                        lib.filter.targetEnabled2(card, player, current) &&
                                        get.effect(current, card, player, player) > 0
                                    );
                                })
                            )
                                base += 5;
                        }
                        if (get.cardtag(card, "yingbian_damage")) {
                            if (
                                targets.some((target) => {
                                    return (
                                        get.attitude(player, target) < 0 &&
                                        (hit ||
                                            !target.mayHaveShan(
                                                viewer,
                                                "use",
                                                target.getCards("h", (i) => {
                                                    return i.hasGaintag("sha_notshan");
                                                })
                                            ) ||
                                            player.hasSkillTag(
                                                "directHit_ai",
                                                true,
                                                {
                                                    target: target,
                                                    card: card,
                                                },
                                                true
                                            )) &&
                                        !target.hasSkillTag("filterDamage", null, {
                                            player: player,
                                            card: card,
                                            jiu: true,
                                        })
                                    );
                                })
                            )
                                base += 5;
                        }
                        return base;
                    },
                    canLink:function (player, target, card) {
                        if (!target.isLinked() && !player.hasSkill("wutiesuolian_skill")) return false;
                        if (
                            player.hasSkill("jueqing") ||
                            player.hasSkill("gangzhi") ||
                            target.hasSkill("gangzhi")
                        )
                            return false;
                        return true;
                    },
                    basic:{
                        useful:[5,3,1],
                        value:[5,3,1],
                    },
                    result:{
                        target:function (player, target, card, isLink) {
                            let eff = -1.5,
                                odds = 1.35,
                                num = 1;
                            if (isLink) {
                                let cache = _status.event.getTempCache("sha_result", "eff");
                                if (typeof cache !== "object" || cache.card !== get.translation(card))
                                    return eff;
                                if (cache.odds < 1.35 && cache.bool) return 1.35 * cache.eff;
                                return cache.odds * cache.eff;
                            }
                            if (
                                player.hasSkill("jiu") ||
                                player.hasSkillTag("damageBonus", true, {
                                    target: target,
                                    card: card,
                                })
                            ) {
                                if (
                                    target.hasSkillTag("filterDamage", null, {
                                        player: player,
                                        card: card,
                                        jiu: true,
                                    })
                                )
                                    eff = -0.5;
                                else {
                                    num = 2;
                                    if (get.attitude(player, target) > 0) eff = -7;
                                    else eff = -4;
                                }
                            }
                            if (
                                !player.hasSkillTag(
                                    "directHit_ai",
                                    true,
                                    {
                                        target: target,
                                        card: card,
                                    },
                                    true
                                )
                            )
                                odds -=
                                    0.7 *
                                    target.mayHaveShan(
                                        player,
                                        "use",
                                        target.getCards("h", (i) => {
                                            return i.hasGaintag("sha_notshan");
                                        }),
                                        "odds"
                                    );
                            _status.event.putTempCache("sha_result", "eff", {
                                bool: target.hp > num && get.attitude(player, target) > 0,
                                card: get.translation(card),
                                eff: eff,
                                odds: odds,
                            });
                            return odds * eff;
                        },
                    },
                    tag:{
                        respond:1,
                        respondShan:1,
                        damage:function (card) {
                            if (game.hasNature(card, "poison")) return;
                            return 1;
                        },
                        natureDamage:function (card) {
                            if (game.hasNature(card, "linked")) return 1;
                        },
                        fireDamage:function (card, nature) {
                            if (game.hasNature(card, "fire")) return 1;
                        },
                        thunderDamage:function (card, nature) {
                            if (game.hasNature(card, "thunder")) return 1;
                        },
                        poisonDamage:function (card, nature) {
                            if (game.hasNature(card, "poison")) return 1;
                        },
                    },
                },
                subSkill:{
                    "1":{
                        audio:"input",
                        trigger:{
                            player:["useCardBegin","respondBegin"],
                        },
                        logTarget:"targets",
                        filter:function(event, player) {
                            return event.skill == "boss_tongchou";
                        },
                        forced:true,
                        content:async function(event, trigger, player) {
                            delete trigger.skill;
                            trigger.getParent().set("boss_tongchou", true);
                            while (true) {
                                if (event.current == undefined) event.current = player.next;
                                if (event.current == player) {
                                    player.addTempSkill("boss_tongchou_2");
                                    trigger.cancel();
                                    trigger.getParent().goto(0);
                                    return;
                                } 
                                const chooseToRespondEvent = event.current.chooseToRespond("是否替" + get.translation(player) + "打出一张弹幕？", { name: "sha" });
                                chooseToRespondEvent.set("ai", () => {
                                    const event = _status.event;
                                    return get.attitude(event.player, event.source) - 2;
                                });
                                chooseToRespondEvent.set("source", player);
                                chooseToRespondEvent.set("boss_tongchou", true);
                                chooseToRespondEvent.set("skillwarn", "替" + get.translation(player) + "打出一张弹幕");
                                chooseToRespondEvent.noOrdering = true;
                                chooseToRespondEvent.autochoose = lib.filter.autoRespondSha;
                                const { bool, card, cards } = (await chooseToRespondEvent).result;
                                if (bool) {
                                    trigger.card = card;
                                    trigger.cards = cards;
                                    trigger.throw = false;
                                    if (typeof event.current.ai.shown == "number" && event.current.ai.shown < 0.95) {
                                        event.current.ai.shown += 0.3;
                                        if (event.current.ai.shown > 0.95) event.current.ai.shown = 0.95;return;
                                    } else event.current = event.current.next;
                                } else event.current = event.current.next;
                            }
                        },
                        sub:true,
                        sourceSkill:"boss_tongchou",
                        "_priority":0,
                    },
                    "2":{
                        trigger:{
                            global:["useCardAfter","useSkillAfter","phaseAfter"],
                        },
                        silent:true,
                        charlotte:true,
                        filter:function(event) {
                            return event.skill != "boss_tongchou";
                        },
                        content:async function(event, trigger, player) {
                            player.removeSkill("boss_tongchou_2");
                        },
                        forced:true,
                        popup:false,
                        sub:true,
                        sourceSkill:"boss_tongchou",
                        "_priority":1,
                    },
                },
                "_priority":0,
            },
            "boss_xieli":{
                audio:"input",
                unique:true,
                zhuSkill:true,
                trigger:{
                    player:["chooseToRespondBefore","chooseToUseBefore"],
                },
                filter:function(event, player) {
                    if (event.responded) return false;
                    if (player.storage.boss_xieliing) return false;
                    if (!player.hasZhuSkill("boss_xieli")) return false;
                    if (!event.filterCard({ name: "shan", isCard: true }, player, event)) return false;
                    return game.hasPlayer(current => current != player);
                },
                check:function(event, player) {
                    if (get.damageEffect(player, event.player, player) >= 0) return false;
                    return true;
                },
                content:async function(event, trigger, player) {
                    while (true) {
                        let bool;
                        if (!event.current) event.current = player.next;
                        if (event.current == player) return;
                            if ((event.current == game.me && !_status.auto) || get.attitude(event.current, player) > 2 || event.current.isOnline()) {
                                player.storage.boss_xieliing = true;
                                const next = event.current.chooseToRespond("是否替" + get.translation(player) + "打出一张闪？", { name: "shan" });
                                next.set("ai", () => {
                                    const event = _status.event;
                                    return get.attitude(event.player, event.source) - 2;
                                });
                                next.set("skillwarn", "替" + get.translation(player) + "打出一张闪");
                                next.autochoose = lib.filter.autoRespondShan;
                                next.set("source", player);
                                bool = (await next).result.bool;
                            }
                        player.storage.boss_xieliing = false;
                        if (bool) {
                            trigger.result = { bool: true, card: { name: "shan", isCard: true } };
                            trigger.responded = true;
                            trigger.animate = false;
                            if (typeof event.current.ai.shown == "number" && event.current.ai.shown < 0.95) {
                                event.current.ai.shown += 0.3;
                                if (event.current.ai.shown > 0.95) event.current.ai.shown = 0.95;
                            }
                            return;
                        } else {
                            event.current = event.current.next;
                        }
                    }
                },
                ai:{
                    respondShan:true,
                    skillTagFilter:function(player) {
                        if (player.storage.boss_xieliing) return false;
                        if (!player.hasZhuSkill("boss_xieli")) return false;
                        return game.hasPlayer(current => current != player);
                    },
                },
                "_priority":0,
            },
            "boss_xisheng":{
                audio:"input",
                unique:true,
                zhuSkill:true,
                trigger:{
                    player:"recoverAfter",
                },
                direct:true,
                filter:function (event,player){
                    if (player.isDying()||player.hp != 1) return false;
                    if (!event.card || event.card.name != "tao") return false;
                    return true;
                },
                check:function (event,player){
                    return get.attitude(player,event.source)>=0;
                },
                logTarget:"source",
                content:function (){
                    'step 0'
                    trigger.source.chooseBool(get.prompt2("boss_xisheng")).set('ai', function () {
                        var evt = _status.event;
                        return get.attitude(evt.player, evt.getParent().player) > 0 && evt.getParent().player.hp <= evt.player.hp && !evt.player.isDying();
                    });
                    'step 1'
                    if (result.bool) {
                        player.logSkill('boss_xisheng');
                        trigger.source.loseHp();
                        player.recover(trigger.source);
                    }
                },
                "_priority":0,
            },
            "boss_yingyuan":{
                zhuSkill:true,
                mod:{
                    maxHandcard:function (player, num) {
                        return num + game.countPlayer(function (current) {
                            if (current.identity == 'zhong') return 1;
                        });
                    },
                },
                "_priority":0,
            },
            "喝醉描述":{
                "_priority":0,
            },
            wine:{
                trigger:{
                    player:"damageBegin1",
                },
                Yx:true,
                popup:false,
                filter:function (event, player) {
                    return event.num >= player.hp;
                },
                charlotte:true,
                mark:true,
                marktext:"<img style=width:25px src=extension/车万符斗祭/image/tag/wine.gif >",
                intro:{
                    content:"你喝醉了",
                },
                forced:true,
                content:function () {
                    "step 0"
                    player.changeHujia();
                    //trigger.num -= 1;
                    game.log(player,"醒酒了。");
                    player.removeSkill("wine");
                    game.broadcastAll(function (player) {
                        player.removeSkill("jiu");
                    }, player);
                    game.addVideo("jiuNode", player, false);
                },
                group:["wine_phaselose","wine_sha","wine_chixu"],
                subSkill:{
                    phaselose:{
                        trigger:{
                            player:"phaseBegin",
                        },
                        Yx:true,
                        forced:true,
                        popup:false,
                        content:function(){
                                game.log(player,"醒酒了。");
                                player.removeSkill("wine");
                        },
                        sub:true,
                        sourceSkill:"wine",
                        "_priority":0,
                    },
                    sha:{
                        trigger:{
                            player:"shaBegin",
                        },
                        filter:function (event, target) {
                            return event.card.name == 'sha';
                        },
                        content:function(){
                            //"step 0"
                            //if(player!=_status.currentPhase) {
                            //    trigger.baseDamage++;
                           // }
                            "step 1"
                            game.log(player,"醒酒了。");
                            player.removeSkill("wine");
                        },
                        Yx:true,
                        forced:true,
                        popup:false,
                        sub:true,
                        sourceSkill:"wine",
                        "_priority":0,
                    },
                    chixu:{
                        trigger:{
                            global:"phaseBegin",
                        },
                        filter:function(event,player){
                            return player != _status.currentPhase;
                        },
                        Yx:true,
                        direct:true,
                        content:function(){
                                player.chooseUseTarget({ name: 'jiu'}, true, false, 'nopopup','noanimate').set('logSkill','nolog');
                        },
                        sub:true,
                        sourceSkill:"wine",
                        "_priority":0,
                        ai:{
                            basic:{
                                useful:(card, i) => {
                                    if (_status.event.player.hp > 1) {
                                        if (i === 0) return 4;
                                        return 1;
                                    }
                                    if (i === 0) return 7.3;
                                    return 3;
                                },
                                value:(card, player, i) => {
                                    if (player.hp > 1) {
                                        if (i === 0) return 5;
                                        return 1;
                                    }
                                    if (i === 0) return 7.3;
                                    return 3;
                                },
                            },
                            order:() => {
                                if (_status.event.dying) return 9;
                                let sha = get.order({ name: "sha" });
                                if (sha > 0) return sha + 0.2;
                                return 0;
                            },
                            result:{
                                target:(player, target, card) => {
                                    if (target && target.isDying()) return 2;
                                    if (!target || target._jiu_temp || !target.isPhaseUsing()) return 0;
                                    let usable = target.getCardUsable("sha");
                                    if (
                                        !usable ||
                                        (lib.config.mode === "stone" &&
                                         !player.isMin() &&
                                            player.getActCount() + 1 >= player.actcount) ||
                                        !target.mayHaveSha(player, "use", card)
                                    )
                                        return 0;
                                    let effs = { order: 0 },
                                        temp;
                                    target.getCards("hs", (i) => {
                                        if (get.name(i) !== "sha" || ui.selected.cards.includes(i)) return false;
                                        temp = get.order(i, target);
                                        if (temp < effs.order) return false;
                                        if (temp > effs.order) effs = { order: temp };
                                        effs[i.cardid] = {
                                            card: i,
                                            target: null,
                                            eff: 0,
                                        };
                                    });
                                    delete effs.order;
                                    for (let i in effs) {
                                        if (!lib.filter.filterCard(effs[i].card, target)) continue;
                                        game.filterPlayer((current) => {
                                            if (
                                                get.attitude(target, current) >= 0 ||
                                                !target.canUse(effs[i].card, current, null, true) ||
                                                current.hasSkillTag("filterDamage", null, {
                                                    player: target,
                                                    card: effs[i].card,
                                                    jiu: true,
                                                })
                                            )
                                                return false;
                                            temp = get.effect(current, effs[i].card, target, player);
                                            if (temp <= effs[i].eff) return false;
                                            effs[i].target = current;
                                            effs[i].eff = temp;
                                            return false;
                                        });
                                        if (!effs[i].target) continue;
                                        if (
                                            target.hasSkillTag(
                                                "directHit_ai",
                                                true,
                                                {
                                                    target: effs[i].target,
                                                    card: i,
                                                },
                                                true
                                            ) ||
                                            (usable === 1 &&
                                                (target.needsToDiscard() > Math.max(0, 3 - target.hp) ||
                                                    !effs[i].target.mayHaveShan(
                                                        player,
                                                        "use",
                                                        effs[i].target.getCards((i) => {
                                                            return i.hasGaintag("sha_notshan");
                                                        })
                                                    )))
                                        ) {
                                            delete target._jiu_temp;
                                            return 1;
                                        }
                                    }
                                    delete target._jiu_temp;
                                    return 0;
                                },
                            },
                            tag:{
                                save:1,
                                recover:0.1,
                            },
                        },
                    },
                },
                "_priority":0,
            },
            "youmu_nitoryuu":{
                audio:"ext:车万符斗祭:1",
                Yx:true,
                popup:false,
                trigger:{
                    global:"phaseBefore",
                    player:"enterGame",
                },
                forced:true,
                filter:function(event, player) {
                    return (event.name != "phase" || game.phaseNumber == 0);
                },
                content:function() {
                    player.expandEquip(1);
                },
                group:["youmu_nitoryuu_equiped","youmu_nitoryuu_phaseSha"],
                subSkill:{
                    equiped:{
                        audio:"youmu_nitoryuu",
                        trigger:{
                            player:"equipAfter",
                        },
                        frequent:true,
                        filter:function (event, player) {
                            return get.subtype(event.card)=='equip1' && player.getEquips(1).length == 2;
                        },
                        content:function () {
                            if(_status.currentPhase == player){
                                player.addTempSkill("youmu_nitoryuu_shaCount","phaseEnd");
                            }
                            if(player.getEquips(1).length < 2){
                                if(player.storage.ganjin > 0){
                                    player.storage.ganjin -= 1;
                                    game.log(player,"失去了一点干劲");
                                }
                                player.removeSkill("youmu_nitoryuu_shaCount");
                            }
                            
                        },
                        sub:true,
                        sourceSkill:"youmu_nitoryuu",
                        "_priority":0,
                    },
                    phaseSha:{
                        trigger:{
                            player:"phaseUseBegin",
                        },
                        direct:true,
                        filter:function (event, player) {
                            return player.getEquips(1).length == 2;
                        },
                        content:function (){
                            game.log(player,"额外获得了一点干劲");
                            player.storage.ganjin += 1;
                        },
                        sub:true,
                        sourceSkill:"youmu_nitoryuu",
                        "_priority":0,
                    },
                    shaCount:{
                        trigger:{
                            player:"equipAfter",
                        },
                        frequent:true,
                        usable:1,
                        content:function(){
                            game.log(player,"额外获得了一点干劲");
                            player.storage.ganjin += 1;
                        },
                        charlotte:true,
                        mark:true,
                        marktext:"<img style=width:25px src=extension/车万符斗祭/image/tag/attacked.png >",
                        intro:{
                            content:"出牌阶段你可以额外使用一张弹幕。",
                        },
                        sub:true,
                        sourceSkill:"youmu_nitoryuu",
                        "_priority":0,
                    },
                },
                "_priority":0,
            },
            "youmu_mjchz":{
                audio:"ext:车万符斗祭:1",
                forced:true,
                locked:true,
                group:["youmu_mjchz_sha","youmu_mjchz_juedou"],
                preHidden:["youmu_mjchz_sha","youmu_mjchz_juedou"],
                subSkill:{
                    sha:{
                        audio:"youmu_mjchz",
                        trigger:{
                            player:"useCardToPlayered",
                        },
                        forced:true,
                        filter:function(event, player) {
                            return event.card.name == "sha" && !event.getParent().directHit.includes(event.target);
                        },
                        logTarget:"target",
                        content:async function(event, trigger, player) {
                            const id = trigger.target.playerid;
                            const map = trigger.getParent().customArgs;
                            if (!map[id]) map[id] = {};
                            if (typeof map[id].shanRequired == "number") {
                                map[id].shanRequired++;
                            } else {
                                map[id].shanRequired = 2;
                            }
                        },
                        ai:{
                            "directHit_ai":true,
                            skillTagFilter:function(player, tag, arg) {
                                if (arg.card.name != "sha" || arg.target.countCards("h", "shan") > 1) return false;
                            },
                        },
                        sub:true,
                        sourceSkill:"youmu_mjchz",
                        "_priority":0,
                    },
                    juedou:{
                        audio:"youmu_mjchz",
                        trigger:{
                            player:"useCardToPlayered",
                            target:"useCardToTargeted",
                        },
                        forced:true,
                        logTarget:function(trigger, player) {
                            return player == trigger.player ? trigger.target : trigger.player;
                        },
                        filter:function(event, player) {
                            return event.card.name == "juedou";
                        },
                        content:async function(event, trigger, player) {
                            const id = (player == trigger.player ? trigger.target : trigger.player)["playerid"];
                            const idt = trigger.target.playerid;
                            const map = trigger.getParent().customArgs;
                            if (!map[idt]) map[idt] = {};
                            if (!map[idt].shaReq) map[idt].shaReq = {};
                            if (!map[idt].shaReq[id]) map[idt].shaReq[id] = 1;
                            map[idt].shaReq[id]++;
                        },
                        ai:{
                            "directHit_ai":true,
                            skillTagFilter:function(player, tag, arg) {
                                if (arg.card.name != "juedou" || Math.floor(arg.target.countCards("h", "sha") / 2) > player.countCards("h", "sha")) return false;
                            },
                        },
                        sub:true,
                        sourceSkill:"youmu_mjchz",
                        "_priority":0,
                    },
                },
                "_priority":0,
            },
            "yugi_fp":{
                audio:"ext:车万符斗祭:1",
                shaRelated:true,
                trigger:{
                    player:"useCardToPlayered",
                },
                check:function (event, player) {
                    return get.attitude(player, event.target) < 0;
                },
                filter:function (event, player) {
                    return event.card.name == 'sha';
                },
                logTarget:"target",
                preHidden:true,
                content:function () {
                    'step 0'
                    player.judge(function (card) {
                        if (get.color(card) == 'red') return 2;
                        return -1;
                    }).judge2 = function (result) {
                        return result.bool;
                    };
                    'step 1'
                    if (result.bool) trigger.getParent().directHit.add(trigger.target);
                    else player.addTempSkill("yugi_fp_discard");
                },
                subSkill:{
                    discard:{
                        trigger:{
                            source:"damageEnd",
                        },
                        frequent:true,
                        popup:false,
                        filter:function (event, player) {
                            return event.card && event.card.name == 'sha' && event.notLink() && event.player != player;
                        },
                        content:function () {
                            player.discardPlayerCard(trigger.player, 'he', true);
                        },
                        sub:true,
                        sourceSkill:"yugi_fp",
                        "_priority":0,
                    },
                },
                "_priority":0,
            },
            "yugi_qiangxi":{
                forced:true,
                mod:{
                    globalFrom:function(from, to, distance) {
                        return distance - 1;
                    },
                },
                "_priority":0,
            },
            "mokou_reborn":{
                audio:"ext:车万符斗祭:1",
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                direct:true,
                filter:function (event, player) {
                    return player.hp < player.maxHp &&player.getCards("he").length > player.hp;
                },
                content:function () {
                    "step 0"
                    player.chooseToDiscard(get.prompt2("mokou_reborn"),player.hp,'he',{ color:"red" }).set('ai', function (card) {
                                return 6 - get.value(card);
                            });
                    "step 1"
                    if(result.bool) {
                        player.logSkill("mokou_reborn");
                        player.recover();}
                },
                ai:{
                    skillTagFilter:function(player) {
                        if (!player.countCards("he", { color: "red" })) return true;
                    },
                },
                "_priority":0,
            },
            "mokou_ashes":{
                audio:"ext:车万符斗祭:1",
                trigger:{
                    player:"phaseJieshuBegin",
                },
                check:function (event, player) {
                    return player.hp >= 3 ||player.countCards('hs', { name: 'tao' }) + player.hp > 1;
                },
                content:function() {
                    player.loseHp(1);
                    player.draw(2);
                },
                "_priority":0,
            },
            input:{
                audio:"ext:车万符斗祭:1",
                "_priority":0,
            },
            upgrade:{
                audio:"input",
                juexingji:true,
                forced:true,
                trigger:{
                    global:"gameDrawAfter",
                },
                filter:function(event,player){
                    return game.countPlayer(function(current){return current.group=='fdj'})<=game.players.length/2 || game.hasPlayer(function (current) {
                        return current.group == "shen";
                    });
                },
                content:function () {
                    //若游戏开始时符势力人数不足一半或存在神势力，你将变得不讲武德，获得御结。
                    player.awakenSkill('upgrade');
                    player.addSkill("numup");
                    if(game.hasPlayer(function (current){return current.group == "shen"})){
                        player.addTempSkill("yujie","phaseBegin");
                    }
                    player.removeSkill('upgrade');
                },
                "_priority":0,
            },
            numup:{
                trigger:{
                    player:"drawBegin",
                },
                direct:true,
                content:function () {
                    trigger.num += Math.floor((player.maxHp+player.getDamagedHp())/3);
                },
                "_priority":0,
            },
            yujie:{
                audio:"shiki_omusubi",
                trigger:{
                    global:"roundStart",
                },
                usable:1,
                direct:true,
                content() {
                    "step 0";
                    player.chooseTarget(true,get.prompt2("shiki_omusubi"), lib.filter.notMe).set("ai", function (target) {
                        var player = _status.event.player;
                        if (player.isHealthy()) return 0;
                        if (player.hp < 3 && player.getDamagedHp() < 2) return 0;
                        var list = [];
                        if (lib.character[target.name]) list.addArray(lib.character[target.name][3]);
                        if (lib.character[target.name1]) list.addArray(lib.character[target.name1][3]);
                        if (lib.character[target.name2]) list.addArray(lib.character[target.name2][3]);
                        list = list.filter(function (i) {
                            return !player.hasSkill(i);
                        });
                        if (!list.length) return 0;
                        return 1 + Math.random();
                    });
                    "step 1";
                    if (result.bool) {
                        var target = result.targets[0];
                        player.logSkill("shiki_omusubi", target);
                        var list = [];
                        if (lib.character[target.name]) list.addArray(lib.character[target.name][3]);
                        if (lib.character[target.name1]) list.addArray(lib.character[target.name1][3]);
                        if (lib.character[target.name2]) list.addArray(lib.character[target.name2][3]);
                        player.addSkills(list);
                        game.broadcastAll(function (list) {
                            lib.character.key_shiki[3].addArray(list);
                            game.expandSkills(list);
                            for (var i of list) {
                                var info = lib.skill[i];
                                if (!info) continue;
                            }
                        }, list);
                    }
                },
                "_priority":0,
            },
            nolog:{
                audio:"ext:车万符斗祭:1",
                "_priority":0,
            },
        },
        translate:{
            "yuyuko_pcb":"诱死",
            "yuyuko_pcb_info":"出牌阶段限一次，你可以令一名其它角色失去一点体力，然后其于回合结束阶段回复一点体力。回合结束阶段，若你于出牌阶段没有发动过该技能，则所有体力值为1的其它角色失去一点体力。",
            "yuyuko_souldrain":"离魂",
            "yuyuko_souldrain_info":"你的回合内，当一名其它角色进入濒死状态时，你摸一张牌，然后你可以与该角色拼点： <br/>>> 若你赢，则将其体力上限改为1。 <br/>>> 若你没赢，则将其体力值改为1。",
            "yuyuko_pcb_extract":"反魂",
            "yuyuko_pcb_extract_info":"锁定技，一名角色被击坠后，你可以增加一点体力上限或回复一点体力。你的手牌上限是你的体力上限。",
            "daiyousei_support":"支援",
            "daiyousei_support_info":"出牌阶段，你可将任意张牌交给其他角色，此阶段你给出的牌首次达到三张时，你回复1点体力。",
            "daiyousei_moe":"卖萌",
            "daiyousei_moe_info":"锁定技，摸牌阶段你额外摸X张牌（X为你已损失的体力值）。",
            "seiga_heterodoxy":"邪仙",
            "seiga_heterodoxy_info":"出牌阶段，你可以将一张手牌以一名其他角色的身份使用。<br/>>> 以此法使用弹幕消耗你的干劲。<br/>>> 你成为此法使用的群体符卡的目标后，可以跳过此次结算。",
            "flandre_csd":"毁灭",
            "flandre_csd_info":"锁定技，每当你使用弹幕或弹幕战指定其他角色为目标后，其所有技能无效直到回合结束。",
            ganjin:"干劲",
            "ganjin_info":"",
            "干劲描述":"干劲描述",
            "干劲描述_info":"符斗祭专属：<br>①自己的回合开始：获得1点干劲。<br>②回合内：使用弹幕、重铸武器牌需要消耗1点干劲；装备八卦炉时，使用弹幕不消耗干劲。<br>③酒没有使用次数限制且不能在濒死时使用，使用酒的目标获得喝醉状态，效果保持到该角色的下个回合开始。在此期间：使用弹幕，伤害+1并解除醉酒状态；受到致命伤害，此次伤害-1并解除喝醉状态。<br>④作为boss且没有boss技，选择以下技能之一作为boss技：同仇、协力、牺牲、应援。",
            "flandre_cs":"狂咲",
            "flandre_cs_info":"摸牌阶段，你可以少摸一张牌，若如此做，你获得以下效果直到回合结束： <br/>>> 当你没有干劲时，你可以对本阶段内没有成为过弹幕目标的其他角色使用弹幕。 <br/>>> 你为伤害来源的弹幕和弹幕战造成的伤害+1。",
            "flandre_cs_1":"狂咲",
            "flandre_cs_1_info":"",
            "flan_sword":"魔剑",
            "flan_sword_info":"你的普通【杀】视为火属性。当你使用卡牌即将对目标造成伤害时，你对目标造成的伤害+1；若你未受伤，将失去等额体力，否则将体力调整至1点。此后你回复等额的体力。当你成为一张牌的目标时，若你已损失体力大于装备区的牌数，可摸此差值的牌数，再弃置一张牌，否则摸一张牌。",
            "flan_awake":"恶魔之力",
            "flan_awake_info":"觉醒技，当你于第0轮游戏进入濒死时，回复至最大体力，每过1轮减少1点回复值，至少回复体力至1点，摸等同游戏轮数的牌数，获得技能【魔剑】，若游戏轮数大于最大体力则再失去【狂咲】。",
            "shinmyoumaru_mallet":"万宝槌",
            "shinmyoumaru_mallet_info":"当一名角色的判定牌生效前，你可以用一张点数大于此牌的牌替换之。",
            "shinmyoumaru_venge":"付丧神之怨",
            "shinmyoumaru_venge_info":"每当其他角色装备区的牌因弃置而置入弃牌堆时，你可以进行一次判定，若为9~K，你对其造成1点伤害。",
            "seiga_extend":"通灵",
            "seiga_extend_info":"限定技，你的回合内，当有角色被击坠时，你可以获得其一个技能。（不包括限定技，觉醒技）",
            "seiga_daotai_max":"结界_初",
            "seiga_daotai_max_info":"其他角色的准备阶段开始，且你没有装备防具时，你获得1点护甲。<br>当你以此法获得护甲，直到自己受到伤害后：<br>①若存在护甲，移除所有护甲并恢复等量体力，摸等同护甲值的牌数；<br>②若存在护甲时处于出牌阶段，再失去1点体力。",
            "seiga_daotai":"道胎动",
            "seiga_daotai_info":"锁定技，其他角色的准备阶段开始，且你没有装备防具时，你获得1点护甲（不超过体力上限），未受伤则额外失去1点体力。<br>当你以此法获得护甲，直到自己的准备阶段或受到伤害后：<br>①若存在护甲，结算后移除所有护甲；<br>②若你的回合外以此法移除护甲，且护甲不小于当前体力或其他存活人数，摸等同护甲值的牌数；<br>③若你的回合内以此法移除护甲，若未受伤，失去1点干劲，否则摸等同护甲值的牌数，再弃置自己任意区域等量的牌。",
            "reimu_exterminate_active":"退治",
            "reimu_exterminate_active_info":"",
            "reimu_exterminate_damage":"退治",
            "reimu_exterminate_damage_info":"",
            "reimu_clear":"快晴",
            "reimu_clear_info":"你对一名其他角色造成伤害后，你可以与其各摸一张牌，若此时位于其它角色的出牌阶段，停止当前结算并结束出牌阶段。",
            "reimu_tribute":"纳奉",
            "reimu_tribute_info":"BOSS技，其他角色的出牌阶段限一次，若你的手牌数小于体力上限，其可以将一张手牌置入你的明牌区。",
            "reimu_tribute_good":"纳奉",
            "reimu_tribute_good_info":"",
            "reimu_tribute2":"纳奉",
            "reimu_tribute2_info":"",
            "reimu_tribute_bad":"纳奉",
            "reimu_tribute_bad_info":"",
            "visible_cards":"明牌",
            "visible_cards_info":"",
            "reimu_tribute_ok":"纳奉",
            "reimu_tribute_ok_info":"",
            "reimu_exterminate":"退治",
            "reimu_exterminate_info":"其他角色的回合内，你可以于以下时机无视距离对其使用一张弹幕： <br/>>> 出牌阶段，你受到伤害后。 <br/>>> 回合结束阶段，且该角色本回合对其他角色造成过伤害。",
            "reimu_saisen":"赛钱",
            "reimu_saisen_info":"其他角色成为你弹幕或弹幕战的目标时，若其体力大于等于你，其须选择交给你一张任一区域的牌，你再摸一张牌，否则该牌无法被响应，你回复一点体力，摸一张牌。",
            "reimu_damage":"梦想天生",
            "reimu_damage_info":"你使用【杀】无距离限制。锁定技，你使用一张牌后，摸1张牌；若你的体力上限小于等于2，你造成的所有伤害和回复+X，回合结束时使用几张牌，受到几点伤害，否则使用卡牌将失去1点体力上限。手牌上限基数变为场上存活人数。（X为当前游戏轮数）",
            "reimu_awake":"博丽",
            "reimu_awake_info":"觉醒技，游戏开始，场上存在神将，你将体力上限调整为7，获得【梦想天生】。若其他角色获得牌后的手牌比你的装备多7张以上，你获得【赛钱】。",
            "reimu_extra":"博丽",
            "reimu_extra_info":"",
            "kaguya_dilemma":"难题",
            "kaguya_dilemma_info":"每当一名角色令你回复1点体力后，你可以令其摸一张牌；每当你受到一次伤害后，你可以令伤害来源选择一项：<br>>> 交给你一张方块牌，<br>>> 失去1点体力。",
            "kaguya_dilemma_good":"难题",
            "kaguya_dilemma_good_info":"",
            "kaguya_dilemma_bad":"难题",
            "kaguya_dilemma_bad_info":"",
            "kaguya_inight":"永夜",
            "kaguya_inight_info":"你的回合外，每当其他角色使用的红色基本牌置入弃牌堆时，你可以将一张红色基本牌或装备牌当封魔阵对其使用。",
            "tenshi_masochist":"抖M",
            "tenshi_masochist_info":"每当你受到1点伤害后，你可以观看牌堆顶的两张牌，并将这些牌交给至少一名角色。",
            "tenshi_sp":"绯想",
            "tenshi_sp_info":"锁定技，距离1以内的角色的红色判定牌生效后，你获得之。",
            "koakuma_find":"寻找",
            "koakuma_find_info":"出牌阶段限一次，你可以弃置至多X张牌，然后摸等量的牌。（X为场上存活角色数）",
            "nazrin_treasurehunt":"探宝",
            "nazrin_treasurehunt_info":"准备阶段开始时，你可以进行一次判定，若结果为黑，你获得此牌且你可以重复此流程。",
            "nazrin_agile":"轻敏",
            "nazrin_agile_info":"你可以将一张黑色手牌当擦弹使用或打出。",
            "shikieiki_trial":"审判",
            "shikieiki_trial_info":"每当一名角色的判定牌生效前，你可以打出一张牌代替之。",
            "shikieiki_majesty":"威严",
            "shikieiki_majesty_info":"每当你受到一次伤害后，你可以获得伤害来源的一张牌。",
            "medicine_ciguatera":"神经之毒",
            "medicine_ciguatera_info":"一名角色准备阶段开始时，你可以弃置一张黑色牌，令其失去1点体力并获得喝醉状态。",
            "medicine_melancholy":"忧郁之毒",
            "medicine_melancholy_info":"每当你受到一次有来源的伤害后，你可以展示并获得牌堆顶的一张牌，若此牌不是梅花牌，伤害来源不能使用或打出手牌，直到回合结束。",
            "yuuka_rs":"逆鳞",
            "yuuka_rs_info":"每当你成为其他角色使用的单体符卡效果目标时，你可以将其视为弹幕战效果；你的回合外，你可以将一张手牌当做弹幕使用或打出。",
            "yuuka_sadist":"施虐",
            "yuuka_sadist_info":"当你击坠一名角色时，你可以对攻击范围内一名其他角色造成1点伤害；你对体力值为1的其他角色造成的伤害+1。",
            "tewi_lucky":"幸运",
            "tewi_lucky_info":"锁定技，每当你失去最后的手牌时，你摸两张牌。",
            "kogasa_surprise":"惊吓",
            "kogasa_surprise_info":"出牌阶段限一次，你可以选择一张手牌并指定一名其他角色，该角色选择一种花色后，获得此牌并明置之。若此牌与其选择的花色不同，你对其造成1点伤害。",
            "kogasa_jolly":"愉快",
            "kogasa_jolly_info":"锁定技，摸牌阶段摸牌后，你令一名角色摸一张牌。",
            "patchouli_library":"图书",
            "patchouli_library_info":"锁定技，每当你使用非延时符卡时，你摸一张牌；你使用符卡无距离限制。",
            "patchouli_knowledge":"博学",
            "patchouli_knowledge_info":"锁定技，黑桃符卡对你无效。",
            "boss_tongchou":"同仇",
            "boss_tongchou_info":"当你需要使用或打出一张弹幕时，其他玩家可以代替你使用或打出一张弹幕。",
            "boss_xieli":"协力",
            "boss_xieli_info":"当你需要使用或打出一张擦弹时，其他玩家可以代替你使用或打出一张擦弹。",
            "boss_xisheng":"牺牲",
            "boss_xisheng_info":"当你于濒死状态下，被一名角色使用麻薯而回复体力至1后，其可以失去一点体力，令你额外回复一点体力。",
            "boss_yingyuan":"应援",
            "boss_yingyuan_info":"锁定技，每有一名道中存活，你的手牌上限增加一。",
            "喝醉描述":"喝醉描述",
            "喝醉描述_info":"酒没有使用次数限制且不能在濒死时使用，使用酒的目标获得喝醉状态，效果保持到该角色的下个回合开始。在此期间：使用弹幕，伤害+1并解除醉酒状态；受到致命伤害，此次伤害-1并解除喝醉状态。",
            wine:"喝醉",
            "wine_info":"",
            "youmu_nitoryuu":"二刀流",
            "youmu_nitoryuu_info":"你可以同时装备2把武器牌，攻击距离按其中较高者计算，武器技能 同时有效；装备了2把武器时，出牌阶段开始时你多获得1点干劲，你可以主动 弃置其中1张武器牌（执行{人形操控}的效果时你需要交出所有武器）。 ",
            "youmu_mjchz":"迷津慈航斩",
            "youmu_mjchz_info":"锁定技，你使用的弹幕需要连续使用两张擦弹来抵消；与你进行弹幕战的角色每次需要连续打出两张弹幕。",
            "yugi_fp":"怪力",
            "yugi_fp_info":"当你使用弹幕指定了其他角色为目标时，你可以进行一次判定，若为 红色，则此弹幕不能被擦弹响应；若为黑色，则此弹幕造成伤害后，你弃置其1张牌。",
            "yugi_qiangxi":"强袭",
            "yugi_qiangxi_info":"锁定技，你与其他角色计算距离时始终-1。",
            "mokou_reborn":"重生",
            "mokou_reborn_info":"准备阶段开始时，你可以弃置X张红色牌，然后回复1点体力。（X为你的体力值）",
            "mokou_ashes":"浴火",
            "mokou_ashes_info":"结束阶段开始时，你可以失去1点体力，然后摸两张牌。",
            input:"input",
            "input_info":"",
            upgrade:"蒸蒸日上",
            "upgrade_info":"",
            numup:"提升",
            "numup_info":"游戏开始时，若符势力人数不足一半，你的回复量和摸牌数+X。（X为体力上限与已失去体力之和的1/3，向下取整）<br>若场上存在神势力，你临时获得一次技能御结。",
            yujie:"御结",
            "yujie_info":"神山识的御结，去掉减体力上限，不可取消，仅一次有效。",
            nolog:"喝醉",
            "nolog_info":"",
        },
    },
    intro:"",
    author:"yxq",
    diskURL:"",
    forumURL:"",
    version:"0.1",
},files:{"character":["test_1.jpg","yuyuko.jpg","daiyousei.jpg","shinmyoumaru.jpg","shikieiki.jpg","tenshi.jpg","nazrin.jpg","kogasa.jpg","kaguya.jpg","koakuma.jpg","medicine.jpg","tewi.jpg","youmu.jpg","mokou.jpg","yugi.jpg","flandre.jpg","seiga.jpg","patchouli.jpg","reimu.jpg","yuuka.jpg"],"card":["suwakohat.png"],"skill":[],"audio":[]}}
});