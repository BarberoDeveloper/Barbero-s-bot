const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Bot online!");
});
app.listen(PORT, () => {
  console.log(`Server attivo sulla porta ${PORT}`);
});

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.once('ready', () => {
  console.log(`✅ Bot avviato come ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.content === '!ping') {
    message.reply('Pong!');
  }
});

client.login(process.env.MTI3ODUxNjQ4NDgzMzgwODM5NA.GCgmRZ.1gFOlRt_djelIky2GlNjj5tjnLcutE1FCCeiUQ);
