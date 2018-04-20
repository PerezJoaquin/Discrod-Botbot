const Discord = require('discord.js');
const bot = new Discord.Client();
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// Initialize Discord Bot
bot.on('ready', () => {
    console.log('I am ready!');
});

bot.on('message', function (user, userID, channelID, message, evt) {
    try{
        //console.log(message);
        if(message.toLowerCase() == "<@410710444182077450>"){
            bot.sendMessage({
                to: channelID,
                message: ':eggplant:'
            });
        }
        if(message.toLowerCase() == "ayy"){
            bot.sendMessage({
                to: channelID,
                message: ':regional_indicator_l: :regional_indicator_m: :regional_indicator_a: :regional_indicator_o: :alien:'
            });
        }
        if(message.toLowerCase() == "!pp"){
            bot.sendMessage({
                to: channelID,
                embed: {color:0xf17c41, description: "Prueba :eggplant:"}
                //message: ':regional_indicator_l: :regional_indicator_m: :regional_indicator_a: :regional_indicator_o: :alien:'
            });
        }

        //DANBOORU----------------------------------------------------------
        args = message.split(" ");
        if(args[0]+" "+args[1] == "!bb db"){
            if(args[2] != null){
                if(args[3] != null){
                    countSel = [];
                    var d = new Date();
                    minsec = (d.getMinutes()*60) + d.getSeconds();
                    for(i = 0; i < args[3]; i++){                       
                        response = JSON.parse(httpGet("http://danbooru.donmai.us/posts/random.json?tags="+args[2]));
                        //randimg = Math.floor(Math.random() * response.length);      
                        d = new Date();
                        minsec = (d.getDay()*24*60*60) + (d.getHours()*60*60) + (d.getMinutes()*60) + d.getSeconds();           
                        minsec2 = 0;
                        if(i != 0){
                            while(!comprobar(countSel, response["id"])){
                                response2 = JSON.parse(httpGet("http://danbooru.donmai.us/posts/random.json?tags="+args[2]));
                                response = response2;
                                daux = new Date();
                                minsec2 = (daux.getDay()*24*60*60) + (daux.getHours()*60*60) + (daux.getMinutes()*60) + daux.getSeconds();
                                console.log("minsec: " +minsec+"\nminsec2:"+minsec2);
                                if(minsec2 - minsec > 15){
                                    console.log("break");
                                    break;
                                }
                            }
                        }
                        if(minsec2 - minsec > 15){
                            console.log("minsec2: " +minsec2)
                            console.log("break");
                            break;
                        }
                        countSel[i] = response["id"];
                        selimg = response;
                        if(selimg["tag_string_artist"] == ''){
                            selimg["tag_string_artist"] = "Desconocido";
                        }
                        if(selimg["file_url"][0] == "/"){
                            linklink = "http://hijiribe.donmai.us"+selimg["file_url"];
                        }else{
                            linklink = selimg["file_url"]
                        }
                        /*bot.sendMessage({embed:{
                            to: channelID,
                            message: '**Artista**: `' +selimg["tag_string_artist"]+"`\n**Fuente:** <"+selimg["source"]+">\n**Link:** "+linklink
                        }
                        });*/
                        var lastFive = selimg["file_url"].substr(selimg["file_url"].length - 3); // => "Tabs1"
                        if(this.lastFive == "ebm"){
                            bot.sendMessage({
                                to: channelID,
                                embed: {
                                    color:0xf17c41, 
                                    description: '**Artista**: `' +selimg["tag_string_artist"]+"`\n**[Fuente]("+selimg['source']+")** \n**[Link]("+linklink+")**\n**[Danbooru](http://danbooru.donmai.us/posts/"+selimg["id"]+")**",
                                    video: {url: linklink}
                                }
                            });
                        }else{
                            bot.sendMessage({
                                to: channelID,
                                embed: {
                                    color:0xf17c41, 
                                    description: '**Artista**: `' +selimg["tag_string_artist"]+"`\n**[Fuente]("+selimg['source']+")** \n**[Link]("+linklink+")**\n**[Danbooru](http://danbooru.donmai.us/posts/"+selimg["id"]+")**",
                                    image: {url: linklink}
                                }
                            });
                        }
                        console.log("salgo db tag num");
                    }
                }else{
                    response = JSON.parse(httpGet("http://danbooru.donmai.us/posts/random.json?tags="+args[2]));
                    //randimg = Math.floor(Math.random() * response.length);
                    selimg = response;
                    if(selimg["tag_string_artist"] == ''){
                        selimg["tag_string_artist"] = "Desconocido";
                    }
                    if(selimg["file_url"][0] == "/"){
                        linklink = "http://hijiribe.donmai.us"+selimg["file_url"]
                    }else{
                        linklink = selimg["file_url"]
                    }
                    var lastFive = selimg["file_url"].substr(selimg["file_url"].length - 3); // => "Tabs1"
                    if(this.lastFive == "ebm"){
                        bot.sendMessage({
                            to: channelID,
                            embed: {
                                color:0xf17c41, 
                                description: '**Artista**: `' +selimg["tag_string_artist"]+"`\n**[Fuente]("+selimg['source']+")** \n**[Link]("+linklink+")**\n**[Danbooru](http://danbooru.donmai.us/posts/"+selimg["id"]+")**",
                                video: {url: linklink}
                            }
                        });
                    }else{
                        bot.sendMessage({
                            to: channelID,
                            embed: {
                                color:0xf17c41, 
                                description: '**Artista**: `' +selimg["tag_string_artist"]+"`\n**[Fuente]("+selimg['source']+")** \n**[Link]("+linklink+")**\n**[Danbooru](http://danbooru.donmai.us/posts/"+selimg["id"]+")**",
                                image: {url: linklink}
                            }
                        });
                    }
                    console.log("sale db tag");
                }
            }else{
                response = JSON.parse(httpGet("http://danbooru.donmai.us/posts/random.json"));
                //randimg = Math.floor(Math.random() * response.length);
                selimg = response;
                if(selimg["tag_string_artist"] == ''){
                    selimg["tag_string_artist"] = "Desconocido";
                }
                if(selimg["file_url"][0] == "/"){
                    linklink = "http://hijiribe.donmai.us"+selimg["file_url"]
                }else{
                    linklink = selimg["file_url"]
                }
                var lastFive = selimg["file_url"].substr(selimg["file_url"].length - 3); // => "Tabs1"
                if(this.lastFive == "ebm"){
                    bot.sendMessage({
                        to: channelID,
                        embed: {
                            color:0xf17c41, 
                            description: '**Artista**: `' +selimg["tag_string_artist"]+"`\n**[Fuente]("+selimg['source']+")** \n**[Link]("+linklink+")**\n**[Danbooru](http://danbooru.donmai.us/posts/"+selimg["id"]+")**",
                            video: {url: linklink}
                        }
                    });
                }else{
                    bot.sendMessage({
                        to: channelID,
                        embed: {
                            color:0xf17c41, 
                            description: '**Artista**: `' +selimg["tag_string_artist"]+"`\n**[Fuente]("+selimg['source']+")** \n**[Link]("+linklink+")**\n**[Danbooru](http://danbooru.donmai.us/posts/"+selimg["id"]+")**",
                            image: {url: linklink}
                        }
                    });
                }
                console.log("salgo db");
            }
        }

        //SAFEBOORU----------------------------------------------------------
        if(args[0]+" "+args[1] == "!bb sb"){
            if(args[2] != null){
                if(args[3] != null){
                    countSel = [];
                    for(i = 0; i < args[3]; i++){
                        response = JSON.parse(httpGet("http://safebooru.donmai.us/posts/random.json?tags="+args[2]));               
                        if(i != 0){
                            while(!comprobar(countSel, response["id"])){
                                response2 = JSON.parse(httpGet("http://safebooru.donmai.us/posts/random.json?tags="+args[2]));
                                response = response2;
                            }
                        }
                        countSel[i] = response["id"];
                        selimg = response;
                        if(selimg["tag_string_artist"] == ''){
                            selimg["tag_string_artist"] = "Desconocido";
                        }
                        if(selimg["file_url"][0] == "/"){
                            linklink = "http://hijiribe.donmai.us"+selimg["file_url"]
                        }else{
                            linklink = selimg["file_url"]
                        }
                        var lastFive = selimg["file_url"].substr(selimg["file_url"].length - 3); // => "Tabs1"
                        if(this.lastFive == "ebm"){
                            bot.sendMessage({
                                to: channelID,
                                embed: {
                                    color:0xf17c41, 
                                    description: '**Artista**: `' +selimg["tag_string_artist"]+"`\n**[Fuente]("+selimg['source']+")** \n**[Link]("+linklink+")**\n**[Safebooru](http://safebooru.donmai.us/posts/"+selimg["id"]+")**",
                                    video: {url: linklink}
                                }
                            });
                        }else{
                            bot.sendMessage({
                                to: channelID,
                                embed: {
                                    color:0xf17c41, 
                                    description: '**Artista**: `' +selimg["tag_string_artist"]+"`\n**[Fuente]("+selimg['source']+")** \n**[Link]("+linklink+")**\n**[Safebooru](http://safebooru.donmai.us/posts/"+selimg["id"]+")**",
                                    image: {url: linklink}
                                }
                            });
                        }
                        console.log("salgo sb tag num");
                    }
                }else{
                    response = JSON.parse(httpGet("http://safebooru.donmai.us/posts/random.json?tags="+args[2]));
                    selimg = response;
                    if(selimg["tag_string_artist"] == ''){
                        selimg["tag_string_artist"] = "Desconocido";
                    }
                    if(selimg["file_url"][0] == "/"){
                        linklink = "http://hijiribe.donmai.us"+selimg["file_url"]
                    }else{
                        linklink = selimg["file_url"]
                    }
                    var lastFive = selimg["file_url"].substr(selimg["file_url"].length - 3); // => "Tabs1"
                    if(this.lastFive == "ebm"){
                        bot.sendMessage({
                            to: channelID,
                            embed: {
                                color:0xf17c41, 
                                description: '**Artista**: `' +selimg["tag_string_artist"]+"`\n**[Fuente]("+selimg['source']+")** \n**[Link]("+linklink+")**\n**[Safebooru](http://safebooru.donmai.us/posts/"+selimg["id"]+")**",
                                video: {url: linklink}
                            }
                        });
                    }else{
                        bot.sendMessage({
                            to: channelID,
                            embed: {
                                color:0xf17c41, 
                                description: '**Artista**: `' +selimg["tag_string_artist"]+"`\n**[Fuente]("+selimg['source']+")** \n**[Link]("+linklink+")**\n**[Safebooru](http://safebooru.donmai.us/posts/"+selimg["id"]+")**",
                                image: {url: linklink}
                            }
                        });
                    }
                    console.log("salgo sb tag");
                }
            }else{
                response = JSON.parse(httpGet("http://safebooru.donmai.us/posts/random.json"));
                selimg = response;
                if(selimg["tag_string_artist"] == ''){
                    selimg["tag_string_artist"] = "Desconocido";
                }
                if(selimg["file_url"][0] == "/"){
                    linklink = "http://hijiribe.donmai.us"+selimg["file_url"]
                }else{
                    linklink = selimg["file_url"]
                }
                var lastFive = selimg["file_url"].substr(selimg["file_url"].length - 3); // => "Tabs1"
                if(this.lastFive == "ebm"){
                    bot.sendMessage({
                        to: channelID,
                        embed: {
                            color:0xf17c41, 
                            description: '**Artista**: `' +selimg["tag_string_artist"]+"`\n**[Fuente]("+selimg['source']+")** \n**[Link]("+linklink+")**\n**[Safebooru](http://safebooru.donmai.us/posts/"+selimg["id"]+")**",
                            video: {url: linklink}
                        }
                    });
                }else{
                    bot.sendMessage({
                        to: channelID,
                        embed: {
                            color:0xf17c41, 
                            description: '**Artista**: `' +selimg["tag_string_artist"]+"`\n**[Fuente]("+selimg['source']+")** \n**[Link]("+linklink+")**\n**[Safebooru](http://safebooru.donmai.us/posts/"+selimg["id"]+")**",
                            image: {url: linklink}
                        }
                    });
                }
                console.log("salgo sb");
            }
           
        }

        //PPT----------------------------------------------------------------------------
        mensaje = message.substring(0, 7);
        if (mensaje == '!bb ppt') {
            console.log("entré");
            var args = message.substring(4).split(',');
            console.log("args" + args);
            var cmd = message;
            console.log("cmd" + cmd);
            //decisión
            ppt = Math.floor(Math.random() * 3) + 1;
            opt = "";
            res = "";
            switch(ppt){
                case 1:
                    opt = "Piedra :fist:"
                    break;
                case 2:
                    opt = "Papel :raised_hand:"
                    break;
                case 3:
                    opt = "Tijera :v:"
                    break;
            }
        
            //args = args.splice(1);
            switch(cmd) {
                // !ping
                case '!bb ppt piedra':
                    if(ppt == 1){
                        res = " empató con botbot :expressionless:";
                    }else if(ppt == 2){
                        res = " perdió contra botbot :smirk:";
                    }else{
                        res = " le ganó a botbot :confused:";
                    }
                    bot.sendMessage({to: channelID,
                        embed: {
                            color:0xf17c41, 
                            description: "Botbot sacó " + opt + "\n" + user + res
                    }});
                    break;
                case '!bb ppt papel':
                    if(ppt == 1){
                        res = " le ganó a botbot :confused:";
                    }else if(ppt == 2){
                        res = " empató con botbot :expressionless:";
                    }else{
                        res = " perdió contra botbot :smirk:";
                    }
                    bot.sendMessage({to: channelID,
                        embed: {
                            color:0xf17c41, 
                            description: "Botbot sacó " + opt + "\n" + user + res
                    }});
                    break;
                case '!bb ppt tijera':
                    if(ppt == 1){
                        res = " perdió contra botbot :smirk:";
                    }else if(ppt == 2){
                        res = " le ganó a botbot :confused:";
                    }else{
                        res = " empató con botbot :expressionless:";
                    }
                    bot.sendMessage({to: channelID,
                        embed: {
                            color:0xf17c41, 
                            description: "Botbot sacó " + opt + "\n" + user + res
                    }});
                    break;
                case '!bb ppt':
                    bot.sendMessage({to: channelID,
                        embed: {
                            color:0xf17c41, 
                            description: '**Uso**: `!bb ppt piedra/papel/tijera`'
                    }});
                    break;
                default:
                    console.log("default");
                // Just add any case commands if you want to..
            }
            
        }
    }catch(err){
        console.log(err);
    }
});

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    //return xmlHttp.responseText;
    //console.log(xmlHttp.responseText)
    if(xmlHttp.responseText != "[]"){
        return xmlHttp.responseText;
    }
    
}

function comprobar(arr, num){
    try{
        for(j=0;j<arr.length; j++){
            if(arr[j] == num){
                return false;
            }
        }
        return true;
        console.log("numero diferrente--------------------")
    }catch(e){
        console.log("-error en comp array-");
        console.log(e);
    }    
}
bot.login(process.env.BOT_TOKEN);
