Discord = require('discord.js')
const client = new Discord.Client()
console.log('The bot is booting up, please wait a moment')
version = '1.0.0'
codename = 'Tick tock goes the clock'
const db = require('quick.db')
const token = 'NzUzOTMwMjg0NDQ5MjY3Nzc1.X1tWcQ.M4Y9W3CRi_GXnMC_TTJfOaC8kQU'
client.once('ready', () => {
    console.log('countdownOS '+version)
    console.log('Codename: '+codename)
    console.log('The bot has booted up successfully.')
})
client.on('message', message => {
    if(message.content.startsWith('@timerpremium')){
        const args = message.content.trim().split(/ +/g);
        message.guild.createChannel(`${args[0]}`, {type: 'text'}).then(channel => {
            db.set(`PremiumFor${args[0]}`, channel.id)
            channel.send(`!countdown tagme ${args[1]}`)
            return;
        })
    }
})
client.on('message', message => {
    if(message.content == `Countdown done! <@${client.user.id}>`) {
        const cname = message.channel.name
        message.channel.send(`*premiumend --${message.channel.name}`)
        return;
    }
})
client.login(token);