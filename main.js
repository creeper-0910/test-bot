// Response for Uptime Robot
const http = require("http");
http
  .createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("このbotは稼働中です \n");
  })
  .listen(3000);

// Discord bot implements
const discord = require("discord.js");
const client = new discord.Client();
const prob = Math.floor(Math.random() * 100);
client.on("ready", message => {
  client.user.setPresence({ game: { name: "botテスト" } });
  console.log("準備が完了しました！");
});

client.on("message", message => {
  if (message.content.startsWith("bot_help") && message.author != client.user) {
    message.channel.send(
      " \nHELP一覧\nbot_help---このヘルプを表示します\nmkch <チャンネル名>---テキストチャンネル作成\nmkvc <チャンネル名>---ボイスチャンネル作成\npic---画像が出てくる\nみなふー---???\nたかめ---???"
    );
    return;
  }
  if (message.content.startsWith("mkch ")) {
    var channelName = message.content.replace(/^mkch /, "");

    message.guild.createChannel(channelName, "text");
    message.channel.send("チャンネルの作成に成功しました");
    return;
  }
  if (message.content.startsWith("mkch　")) {
    var channelName = message.content.replace(/^mkch　/, "");

    message.guild.createChannel(channelName, "text");
    message.channel.send("チャンネルの作成に成功しました");
    return;
  }
  if (message.content.startsWith("mkvc ")) {
    var channelName = message.content.replace(/^mkvc /, "");

    message.guild.createChannel(channelName, "voice");
    message.channel.send("チャンネルの作成に成功しました");
    return;
  }
  if (message.content.startsWith("mkvc　")) {
    var channelName = message.content.replace(/^mkvc　/, "");

    message.guild.createChannel(channelName, "voice");
    message.channel.send("チャンネルの作成に成功しました");
    return;
  }
  if (message.isMemberMentioned(client.user)) {
    message.reply(
      " \nHELP一覧\nbot_help---このヘルプを表示します\nmkch <チャンネル名>---テキストチャンネル作成\nmkvc <チャンネル名>---ボイスチャンネル作成\npic---画像が出てくる\nみなふー---???\nたかめ---???"
    );
    return;
  }
  if (message.content.startsWith("むにえる") && message.author != client.user) {
    message.channel.send("(    ◜   ᴗ    ◝   ) < む   に    え    る");
    return;
  }
  if (message.content.startsWith("む　に　え　る") && message.author != client.user) {
    message.channel.send("(    ◜   ᴗ    ◝   ) < む   に    え    る");
    return;
  }
  if (message.content.startsWith("む に え る") && message.author != client.user) {
    message.channel.send("(    ◜   ᴗ    ◝   ) < む   に    え    る");
    return;
  }
  if (message.content.startsWith("-*ムニエル") && message.author != client.user) {
    message.channel.send("(    ◜   ᴗ    ◝   ) < む   に    え    る");
    return;
  }
   if (message.content.startsWith("-*ﾑﾆｴﾙ") && message.author != client.user) {
    message.channel.send("(    ◜   ᴗ    ◝   ) < む   に    え    る");
    return;
  }
  if (message.content.startsWith("みなふー") && message.author != client.user) {
    message.channel.send("みなふーでｳｪｲｳｪｲ(ง •ᴗ•)ว ⁾⁾");
    return;
  }
  if (message.content.startsWith("みなぷー") && message.author != client.user) {
    message.channel.send("その呼び方は絶対にやめろ！");
    return;
  }
  if (message.content.startsWith("たかめ") && message.author != client.user) {
    message.channel.send(
      "たかめとはAFJサーバーの主であり、\nApple製品の動画を投稿していたりするすごい人だ。\n～minapediaより引用～"
    );
    return;
  }
  if (message.content.startsWith("tk/") && message.author != client.user) {
    message.channel.send("みかき");
    return;
  }
  if (message.content.startsWith("omoti") && message.author != client.user) {
    message.channel.send("https://cdn.discordapp.com/attachments/607803886597832753/706341603593158726/JPEG_20200503_120917.jpg");
    return;
  }
  if (message.content.startsWith("pic2") && message.author != client.user) {
    message.channel.send("https://cdn.discordapp.com/emojis/701429378600665100.png");
    return;
  }
  if (message.content.startsWith("pic") && message.author != client.user) {
  var prandom = Math.floor( Math.random() * 8 );
    console.log(prandom);
    if (prandom == "0"){
    message.channel.send("https://cdn.discordapp.com/emojis/696350233373966366.png?v=1");
  }
    if (prandom == "1"){
    message.channel.send("https://cdn.discordapp.com/emojis/704345511137902632.png?v=1");
  }
    if (prandom == "2"){
    message.channel.send("https://cdn.discordapp.com/emojis/704345621632647258.png?v=1");
  }if (prandom == "3"){
    message.channel.send("https://cdn.discordapp.com/emojis/704345635675045899.png?v=1");
  }
  if (prandom == "4"){
    message.channel.send("https://cdn.discordapp.com/emojis/704345658500317394.png?v=1");
  }if (prandom == "5"){
    message.channel.send("https://cdn.discordapp.com/emojis/704345720135745546.png?v=1");
  }
    }if (prandom == "6"){
    message.channel.send("https://cdn.discordapp.com/emojis/615183793338187788.png?v=1");
  }if (prandom == "7"){
    message.channel.send("https://cdn.discordapp.com/emojis/694153742320140308.gif?v=1");
  }

if (process.env.DISCORD_BOT_TOKEN == undefined) {
  console.log("please set ENV: DISCORD_BOT_TOKEN");
  process.exit(0);
}
});
client.login(process.env.DISCORD_BOT_TOKEN);
