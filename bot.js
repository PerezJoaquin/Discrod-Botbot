const Discord = require('discord.js');
const bot = new Discord.Client();
const XMLHttpRequest = require('request');

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
    	//message.channel.send('PONG! HTTP v3');
        XMLHttpRequest('http://danbooru.donmai.us/posts/random.json', function (error, response, body) {
            //console.log('body:', body); // Print the HTML for the Google homepage.
            //return body;
            //response = JSON.parse(body);
            message.channel.send(body);
        });
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
                        response = JSON.parse(httpGet("http://danbooru.donmai.us/posts/random.json?tags="+args[2]));  
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
                    response = JSON.parse(httpGet("http://danbooru.donmai.us/posts/random.json?tags="+args[2]));
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
                pstoa = httpGet("http://danbooru.donmai.us/posts/random.json");
                console.log("pstoa:" + pstoa);
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
    }catch(e){
        console.log(e);
        message.channel.send(e);
        message.channel.send('Ocurrió un error con el pedido');
    }
});
function httpGet(theUrl){
    var repose;
    XMLHttpRequest(theUrl, function (error, response, body) {
        //console.log('body:', body); // Print the HTML for the Google homepage.
        console.log("body: " + body);
        repose = body;
    });
    console.log("repose: " + repose);
    return repose;
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
