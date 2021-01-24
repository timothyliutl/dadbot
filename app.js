require('dotenv').config()

const token = process.env.TOKEN;

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', function(message){
    if(message.author.bot){
        
    }else{
        if(message.content.includes('im ') || message.content.includes("i'm ") || message.content.includes("I'm ")){
        message.channel.send("Hi " + message.content.substring(message.content.indexOf(' ')+1) + ", I'm dad");
        }
    }
    
});

client.login(token).catch(function(err){
    console.log(err);
});