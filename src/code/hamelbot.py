import os
import discord
from dotenv import load_dotenv
import botcommands


v = "1.0.3"

load_dotenv()
TOKEN = os.getenv("HAMEL_BOT")

if os.path.exists("updater-old.py"):
    os.system("rm updater-old.py")

client = discord.Client()
currentChannel = None

@client.event
async def on_ready():
    print(str(client.user) + " has connected")
    botcommands.bot = client



@client.event
async def on_message(message):

    botcommands.message = message
    botcommands.channel = message.channel

    parameter = ""

    # slice messages into potential commands and parameters
    # one word commands, like $doge and !hello
    if " " in message.content:
        breakpoint = message.content.find(" ")
        command = message.content.lower()[:breakpoint]
        parameter = message.content[breakpoint + 1:]

    else:
        command = message.content

    commandList = {
        "!wiki": botcommands.wiki,
        "!pokepic": botcommands.pokepic,
        "$doge": botcommands.doge,
        "$btc": botcommands.btc,
        "$bitcoin": botcommands.btc,
        "#amc": botcommands.amc,
        "$gme": botcommands.gme,
        "$moon": botcommands.moon,
        "$stock": botcommands.stock,
        "$crypto": botcommands.crypto,
        "!quickimage": botcommands.quickimage,
        "!image": botcommands.image,
        "!clean": botcommands.clean,
        "!purge": botcommands.purge,
        "!battleship": botcommands.battleship,
        "!update": botcommands.update,    

        ";test": botcommands.test,

    }

    if command == "!v" or command == "!version":
        await botcommands.channel.send(v)
    elif command in commandList:
        returned = await commandList[command](parameter)






client.run(TOKEN)





