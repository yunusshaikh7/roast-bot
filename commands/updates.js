/*
*
*   Things to add to rb!updates:
* ----------------------------
* Maybe a better command name?
*
*/

const Discord = require("discord.js");

const dbConfigFile = require("../dbConfig.json")
const prefixFile = require("../database/customPrefix/customPrefix.js");

const mysql = require("mysql");

let connection = mysql.createConnection({
    host: dbConfigFile.host,
    user: dbConfigFile.user,
    password: dbConfigFile.password,
    database: dbConfigFile.database,
    port: dbConfigFile.port
});

connection.connect();

exports.run = async (message) => {
    if (message.author.bot) { return; }

    if (message.content.toLowerCase().startsWith(`${prefixFile.prefix}updates`)) {
        return message.channel.send("**2018-11-15:**\n\nRoast-Bot v2.3.0 is now live, the new features are:\n\n<:roast_circle:474755210485563404> Almost **150** new Memes!\n<:roast_circle:474755210485563404> 35 new Roasts!\n<:roast_circle:474755210485563404> `r!website` sends the Roast-Bot website.\n<:roast_circle:474755210485563404> `r!updates` sends what was new in the newest update.\n<:roast_circle:474755210485563404> More information added to `r!server`!\n\nFor more information on v2.3.0 send me a DM or ask in #roast-bot-help.");
    }
}