const Discord = require('discord.js');
const bot = new Discord.Client();
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

bot.on('ready', () => {
    console.log('I am ready!');
});

//reply
/*bot.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});*/

//test
bot.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG! HTTP v5');
        /*d = new Date();
        console.log("pingg:" + d + "\n");*/
        console.log("pong: " + httpGet("https://danbooru.donmai.us/posts/random.json"));
  	}
});

//tag
bot.on('message', message => {
    if(message.content.toLowerCase() == "<@410710444182077450>"){
        message.channel.send(':eggplant:');
    }
});
//AYY
bot.on('message', message => {
    if(message.content.toLowerCase() == "ayy"){
        message.channel.send(':regional_indicator_l: :regional_indicator_m: :regional_indicator_a: :regional_indicator_o: :alien:');
    }
});

//DB
bot.on('message', message => {
    try{
        args = message.content.split(" ");
        if(args[0]+" "+args[1] == "!bb db"){
            if(args[2] != null){
                if(args[3] != null){
                    countSel = [];
                    var d = new Date();
                    minsec = (d.getMinutes()*60) + d.getSeconds();
                    for(i = 0; i < args[3]; i++){                       
                        response = JSON.parse(httpGet("https://danbooru.donmai.us/posts/random.json?tags="+args[2]));  
                        d = new Date();
                        minsec = (d.getDay()*24*60*60) + (d.getHours()*60*60) + (d.getMinutes()*60) + d.getSeconds();           
                        minsec2 = 0;
                        if(i != 0){
                            while(!comprobar(countSel, response["id"])){
                                response2 = JSON.parse(httpGet("https://danbooru.donmai.us/posts/random.json?tags="+args[2]));
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
                        var lastFive = selimg["file_url"].substr(selimg["file_url"].length - 3);
                        if(this.lastFive == "ebm"){
                            message.channel.send({embed: {
                                    color: 0xf17c41,
                                    description: '**Artista**: `' +selimg["tag_string_artist"]+"`\n**[Fuente]("+selimg['source']+")** \n**[Link]("+linklink+")**\n**[Danbooru](http://danbooru.donmai.us/posts/"+selimg["id"]+")**",
                                    video: {url: linklink}
                                }
                           });
                        }else{
                            message.channel.send({embed: {
                                    color:0xf17c41, 
                                    description: '**Artista**: `' +selimg["tag_string_artist"]+"`\n**[Fuente]("+selimg['source']+")** \n**[Link]("+linklink+")**\n**[Danbooru](http://danbooru.donmai.us/posts/"+selimg["id"]+")**",
                                    image: {url: linklink}
                                }
                            });
                        }
                        console.log("sal db tag num");
                    }
                }else{
                    response = JSON.parse(httpGet("https://danbooru.donmai.us/posts/random.json?tags="+args[2]));
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
                        message.channel.send({embed: {
                                color:0xf17c41, 
                                description: '**Artista**: `' +selimg["tag_string_artist"]+"`\n**[Fuente]("+selimg['source']+")** \n**[Link]("+linklink+")**\n**[Danbooru](http://danbooru.donmai.us/posts/"+selimg["id"]+")**",
                                video: {url: linklink}
                            }
                        });
                    }else{
                        message.channel.send({embed: {
                                color:0xf17c41, 
                                description: '**Artista**: `' +selimg["tag_string_artist"]+"`\n**[Fuente]("+selimg['source']+")** \n**[Link]("+linklink+")**\n**[Danbooru](http://danbooru.donmai.us/posts/"+selimg["id"]+")**",
                                image: {url: linklink}
                            }
                        });
                    }
                    console.log("sale db tag");
                }
            }else{
                /*XMLHttpRequest('http://danbooru.donmai.us/posts/random.json', function (error, response, body) {
                    response = body;
                });*/
                pstoa = httpGet("https://danbooru.donmai.us/posts/random.json");
                response = JSON.parse(pstoa);
                selimg = response;
                if(selimg["tag_string_artist"] == ''){
                    selimg["tag_string_artist"] = "Desconocido";
                }
                if(selimg["file_url"][0] == "/"){
                    linklink = "http://hijiribe.donmai.us"+selimg["file_url"]
                }else{
                    linklink = selimg["file_url"]
                }
                var lastFive = selimg["file_url"].substr(selimg["file_url"].length - 3);
                if(this.lastFive == "ebm"){
                    message.channel.send({embed: {
                            color:0xf17c41, 
                            description: '**Artista**: `' +selimg["tag_string_artist"]+"`\n**[Fuente]("+selimg['source']+")** \n**[Link]("+linklink+")**\n**[Danbooru](http://danbooru.donmai.us/posts/"+selimg["id"]+")**",
                            video: {url: linklink}
                        }
                    });
                }else{
                    message.channel.send({embed: {
                            color:0xf17c41, 
                            description: '**Artista**: `' +selimg["tag_string_artist"]+"`\n**[Fuente]("+selimg['source']+")** \n**[Link]("+linklink+")**\n**[Danbooru](http://danbooru.donmai.us/posts/"+selimg["id"]+")**",
                            image: {url: linklink}
                        }
                    });
                }
                console.log("sal db");
            }
        }
  //SAFEBOORU------------------------------------------------------
        if(args[0]+" "+args[1] == "!bb sb"){
            if(args[2] != null){
                if(args[3] != null){
                    countSel = [];
                    var d = new Date();
                    minsec = (d.getMinutes()*60) + d.getSeconds();
                    for(i = 0; i < args[3]; i++){                       
                        response = JSON.parse(httpGet("https://safebooru.donmai.us/posts/random.json?tags="+args[2]));  
                        d = new Date();
                        minsec = (d.getDay()*24*60*60) + (d.getHours()*60*60) + (d.getMinutes()*60) + d.getSeconds();           
                        minsec2 = 0;
                        if(i != 0){
                            while(!comprobar(countSel, response["id"])){
                                response2 = JSON.parse(httpGet("https://safebooru.donmai.us/posts/random.json?tags="+args[2]));
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
                        var lastFive = selimg["file_url"].substr(selimg["file_url"].length - 3);
                        if(this.lastFive == "ebm"){
                            message.channel.send({embed: {
                                    color: 0xf17c41,
                                    description: '**Artista**: `' +selimg["tag_string_artist"]+"`\n**[Fuente]("+selimg['source']+")** \n**[Link]("+linklink+")**\n**[Safebooru](http://danbooru.donmai.us/posts/"+selimg["id"]+")**",
                                    video: {url: linklink}
                                }
                           });
                        }else{
                            message.channel.send({embed: {
                                    color:0xf17c41, 
                                    description: '**Artista**: `' +selimg["tag_string_artist"]+"`\n**[Fuente]("+selimg['source']+")** \n**[Link]("+linklink+")**\n**[Safebooru](http://danbooru.donmai.us/posts/"+selimg["id"]+")**",
                                    image: {url: linklink}
                                }
                            });
                        }
                        console.log("sal sb tag num");
                    }
                }else{
                    response = JSON.parse(httpGet("https://safebooru.donmai.us/posts/random.json?tags="+args[2]));
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
                        message.channel.send({embed: {
                                color:0xf17c41, 
                                description: '**Artista**: `' +selimg["tag_string_artist"]+"`\n**[Fuente]("+selimg['source']+")** \n**[Link]("+linklink+")**\n**[Safebooru](http://danbooru.donmai.us/posts/"+selimg["id"]+")**",
                                video: {url: linklink}
                            }
                        });
                    }else{
                        message.channel.send({embed: {
                                color:0xf17c41, 
                                description: '**Artista**: `' +selimg["tag_string_artist"]+"`\n**[Fuente]("+selimg['source']+")** \n**[Link]("+linklink+")**\n**[Safebooru](http://danbooru.donmai.us/posts/"+selimg["id"]+")**",
                                image: {url: linklink}
                            }
                        });
                    }
                    console.log("sale sb tag");
                }
            }else{
                /*XMLHttpRequest('http://danbooru.donmai.us/posts/random.json', function (error, response, body) {
                    response = body;
                });*/
                pstoa = httpGet("https://safebooru.donmai.us/posts/random.json");
                response = JSON.parse(pstoa);
                selimg = response;
                if(selimg["tag_string_artist"] == ''){
                    selimg["tag_string_artist"] = "Desconocido";
                }
                if(selimg["file_url"][0] == "/"){
                    linklink = "http://hijiribe.donmai.us"+selimg["file_url"]
                }else{
                    linklink = selimg["file_url"]
                }
                var lastFive = selimg["file_url"].substr(selimg["file_url"].length - 3);
                if(this.lastFive == "ebm"){
                    message.channel.send({embed: {
                            color:0xf17c41, 
                            description: '**Artista**: `' +selimg["tag_string_artist"]+"`\n**[Fuente]("+selimg['source']+")** \n**[Link]("+linklink+")**\n**[Safebooru](http://danbooru.donmai.us/posts/"+selimg["id"]+")**",
                            video: {url: linklink}
                        }
                    });
                }else{
                    message.channel.send({embed: {
                            color:0xf17c41, 
                            description: '**Artista**: `' +selimg["tag_string_artist"]+"`\n**[Fuente]("+selimg['source']+")** \n**[Link]("+linklink+")**\n**[Safebooru](http://danbooru.donmai.us/posts/"+selimg["id"]+")**",
                            image: {url: linklink}
                        }
                    });
                }
                console.log("sal sb");
            }
        }
        
    //NSFW Danbooru--------------------------------------------------------------------
        if(args[0]+" "+args[1] == "!bb ns"){
            if(args[2] != null){
                if(args[3] != null){
                    countSel = [];
                    var d = new Date();
                    minsec = (d.getMinutes()*60) + d.getSeconds();
                    for(i = 0; i < args[3]; i++){
                        ratingg = selectR();
                        response = JSON.parse(httpGet("https://danbooru.donmai.us/posts/random.json?tags=rating:"+ratingg+" "+args[2]));  
                        d = new Date();
                        minsec = (d.getDay()*24*60*60) + (d.getHours()*60*60) + (d.getMinutes()*60) + d.getSeconds();           
                        minsec2 = 0;
                        if(i != 0){
                            while(!comprobar(countSel, response["id"]) && copRat(response["rating"])){
                                ratingg = selectR();
                                response = JSON.parse(httpGet("https://danbooru.donmai.us/posts/random.json?tags=rating:"+ratingg+" "+args[2]));
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
                        var lastFive = selimg["file_url"].substr(selimg["file_url"].length - 3);
                        if(this.lastFive == "ebm"){
                            message.channel.send({embed: {
                                    color: 0xf17c41,
                                    description: '**Artista**: `' +selimg["tag_string_artist"]+"`\n**[Fuente]("+selimg['source']+")** \n**[Link]("+linklink+")**\n**[Danbooru](http://danbooru.donmai.us/posts/"+selimg["id"]+")**",
                                    video: {url: linklink}
                                }
                           });
                        }else{
                            message.channel.send({embed: {
                                    color:0xf17c41, 
                                    description: '**Artista**: `' +selimg["tag_string_artist"]+"`\n**[Fuente]("+selimg['source']+")** \n**[Link]("+linklink+")**\n**[Danbooru](http://danbooru.donmai.us/posts/"+selimg["id"]+")**",
                                    image: {url: linklink}
                                }
                            });
                        }
                        console.log("sal ns tag num");
                    }
                }else{
                    ratingg = selectR();
                    response = JSON.parse(httpGet("https://danbooru.donmai.us/posts/random.json?tags=rating:"+ratingg+" "+args[2]));
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
                        message.channel.send({embed: {
                                color:0xf17c41, 
                                description: '**Artista**: `' +selimg["tag_string_artist"]+"`\n**[Fuente]("+selimg['source']+")** \n**[Link]("+linklink+")**\n**[Danbooru](http://danbooru.donmai.us/posts/"+selimg["id"]+")**",
                                video: {url: linklink}
                            }
                        });
                    }else{
                        message.channel.send({embed: {
                                color:0xf17c41, 
                                description: '**Artista**: `' +selimg["tag_string_artist"]+"`\n**[Fuente]("+selimg['source']+")** \n**[Link]("+linklink+")**\n**[Danbooru](http://danbooru.donmai.us/posts/"+selimg["id"]+")**",
                                image: {url: linklink}
                            }
                        });
                    }
                    console.log("sale db tag");
                }
            }else{
                /*XMLHttpRequest('http://danbooru.donmai.us/posts/random.json', function (error, response, body) {
                    response = body;
                });*/
                ratingg = selectR();
                response = JSON.parse(httpGet("https://danbooru.donmai.us/posts/random.json?tags=rating:"+ratingg+" "+args[2]));
                selimg = response;
                if(selimg["tag_string_artist"] == ''){
                    selimg["tag_string_artist"] = "Desconocido";
                }
                if(selimg["file_url"][0] == "/"){
                    linklink = "http://hijiribe.donmai.us"+selimg["file_url"]
                }else{
                    linklink = selimg["file_url"]
                }
                var lastFive = selimg["file_url"].substr(selimg["file_url"].length - 3);
                if(this.lastFive == "ebm"){
                    message.channel.send({embed: {
                            color:0xf17c41, 
                            description: '**Artista**: `' +selimg["tag_string_artist"]+"`\n**[Fuente]("+selimg['source']+")** \n**[Link]("+linklink+")**\n**[Danbooru](http://danbooru.donmai.us/posts/"+selimg["id"]+")**",
                            video: {url: linklink}
                        }
                    });
                }else{
                    message.channel.send({embed: {
                            color:0xf17c41, 
                            description: '**Artista**: `' +selimg["tag_string_artist"]+"`\n**[Fuente]("+selimg['source']+")** \n**[Link]("+linklink+")**\n**[Danbooru](http://danbooru.donmai.us/posts/"+selimg["id"]+")**",
                            image: {url: linklink}
                        }
                    });
                }
                console.log("sal db");
            }
        }
        
    }catch(e){
        console.log(e);
        message.channel.send(e);
        message.channel.send('Ocurrió un error con el pedido');
    }
});

function httpGet(theUrl){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    //test xmlHttp.open( "GET", "https://danbooru.donmai.us/posts/2113025.json", false );
    xmlHttp.send( null );
    if(xmlHttp.responseText != "[]"){
        return xmlHttp.responseText;
    }else{
        return httpGet(theUrl);
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

function copRat(rat){
    if(rat == "e" || rat == "q"){
        resturn true;
    }else{
        resturn false;
    }
}

function selectR(){
    varnum = Math.floor((Math.random() * 10) + 1);
    if(varnum <= 5){return "Questionable";}else{return "Explicit";}
}

bot.login(process.env.BOT_TOKEN);
