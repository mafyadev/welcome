const express = require("express");
const app = express();
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];
app.use(express.static("public"));
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});
app.get("/dreams", (request, response) => {
  response.json(dreams);
});
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});




const Discord = require ("discord.js")
const moment = require ("moment")
const jano = new Discord.Client();
const prefix = "m!";


jano.login("ODI1MzM3NzUzNDQ5MDA1MDU2.YF8drg.V_RQ2ZymNOYZpsc50d-wx9Rveos");
jano.on("ready", async () => {
  console.log(`Logged in as ${jano.user.username}!`);
  jano.user.setStatus("ONLINE");
  jano.user.setActivity(`${prefix}help`, { type: "WATCHING" });
  jano.guilds.cache.forEach(g => {
    if (g.member(jano.user).hasPermission("ADMINISTRATOR")) {
      g.fetchInvites().then(guildInvites => {});
    }
  });
});

//////////

jano.on("message", message => {
if (message.content === prefix +"help") {
const embed = new Discord.MessageEmbed()
.setColor("BLACK")
.setThumbnail("https://media.tenor.com/images/85500641e177bccfc805cac8a2805e3f/tenor.gif")
.setAuthor("Prefix [ m! ]","https://discord.com/api/oauth2/authorize?client_id=825337753449005056&permissions=8&scope=bot")
.setDescription(` 
**
𝐖𝐞𝐥𝐜𝐨𝐦𝐞 [change channel]
𝐋𝐞𝐟𝐭 [change channel]
**
**[ invite ]**
**[ click here ](https://discord.com/api/oauth2/authorize?client_id=825337753449005056&permissions=8&scope=bot)** 
**[ support ]**
**[ click here ](https://discord.gg/e6qdr5kXZh)**
 `)
    
    .setFooter(` System bot ✨ | Coded by , MAFYA`, jano.user.avatarURL)
    .setURL("https://discord.gg/DCJ3uyxQDk")
      
    message.channel.send(embed);
      message.react("<a:jano_27:799630916820795422>");
  }
});
//////////////

/////////// code welcome
jano.on("guildMemberAdd", member => {
  const channel = member.guild.channels.cache.find(
    channel => channel.name === "⛅│𝚆𝙴𝙻𝙲𝙾𝙼𝙴"
  );
  let jano = member.user.avatarURL();
  if (!channel) return;
  const joinembed = new Discord.MessageEmbed()
    .setTitle(
      `<a:mafya_10:799629559217389608>**A new member just arrived**<a:mafya_10:799629559217389608>`
    )
    .setColor("RANDOM")
    .setThumbnail(jano)
    .addField(
      "<a:mafya_28:799630995317850152>| **name** : ",
      `${member}
    · · • • • ✤ • • • · ·`
    )
    .addField(
      "<a:mafya_13:804354511355117598>| **Welcome**",
      `Welcome to the server, ${member}
    · · • • • ✤ • • • · ·`
    )
    .addField(
      "<a:mafya_14:804354530606186527><a:mafya_15:804354549653438534>| **User** :",
      "**[" + `${member.id}` + "]**"
    )
    .addField(
      "<a:mafya_10:799629559217389608>| **Your are the member**<a:mafya_10:799629559217389608>",
      `${member.guild.memberCount}
      · · • • • ✤ • • • · ·`
    )
    .addField("Server", `${member.guild.name}`, true)
    .setFooter(`**${member.guild.name}**`)
    .setTimestamp()
    .setImage(
      "https://cdn.discordapp.com/attachments/822522514307022909/825340612965957653/standard_12.gif"
    )
    .setFooter(`${member.guild.name}`)
    .setTimestamp();
  channel.send(joinembed);
});
////////////// code left
jano.on("guildMemberRemove", member => {
  const channel = member.guild.channels.cache.find(
    channel => channel.name === "𝐋𝐞𝐟𝐭"
  );
  let jano = member.user.avatarURL();
  if (!channel) return;
  const joinembed = new Discord.MessageEmbed()
    .setTitle(
      `left`
    )
    .setImage(
      "https://thumbs.gfycat.com/ChiefBiodegradableAmericanalligator-size_restricted.gif"
    )
    .setColor("RANDOM")
    .setThumbnail(jano)
    .addField("👥|𝐍𝐀𝐌𝐄:", `${member}`)
    .addField("<a:jano_13:799300705323188285>├baxerche mle shkaw┤<a:jano_13:799300705323188285>", `!`)
    .addField("✶⊶⊷⊶⊷❍⊶⊷⊶⊷✶;(",   "<a:jano_12:799299644055748632>naya aw servera<a:jano_12:799299644055748632>")
    .addField(
      "⳺☟مــیــمــبەرەکــان ماوە⳻",
      `${member.guild.memberCount}` + " ڪــەس"
    )
    .setFooter(`${member.guild.name}`)
    .setTimestamp();
  channel.send(joinembed);
});
/////////////// code embed
jano.on("guildMemberAdd", member => {
  const joinembed = new Discord.MessageEmbed()

    .setColor("RANDOM")
    .setTitle(
      `__**A new member just arrived!**__`
    )
    .addField(
      "<a:jano_28:799630995317850152>| name : ",
      `${member}
    · · • • • ✤ • • • · ·`
    )
    .addField(
      "<a:jano_28:799630995317850152>| Welcome",
      `Welcome to the server, ${member}
    · · • • • ✤ • • • · ·`
    )
    .addField(
      " <a:jano_16:799306063714451476>| User :",
      "**[" + `${member.id}` + "]**"
    )
    .addField(
      "<a:jano_16:799306063714451476>| Your are the member",
      `${member.guild.memberCount}
      · · • • • ✤ • • • · ·`
    )
    .addField("Server", `${member.guild.name}`, true)
    .setFooter(`**${member.guild.name}**`)
    .setTimestamp()
    .setImage(
      "https://media.discordapp.net/attachments/806608889805537309/808492139172200458/ImpracticalFearfulEsok-max-1mb.gif"
    )
    .setFooter(`${member.guild.name}`)
    .setTimestamp();
  member.send(joinembed);
});
/////////////////
