from bs4 import BeautifulSoup
import requests
import cryptocompare
from yfinance import Ticker
from time import sleep
import asyncio
from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from random import randint
import json
import os
import discord


bot = None
channel = None
message = None

#TODO: Italisize picture

async def wiki(parameter):
    try:
        parameter = parameter.replace(" ", "_")
        url = "https://en.wikipedia.org/wiki/" + parameter

        req = requests.get(url)
        req.raise_for_status()

        soup = BeautifulSoup(req.text, 'html.parser')

        parts = soup.select("p")
        title = soup.select("h1")[0].getText()
        paragraph = ""

        for part in parts:
            #skip through empty paragraphs until the first paragraph
            if part.getText() != "\n":
                paragraph = part.getText()

                # delete content of n size between [ ] usually used for annotations on wikipedia
                while "[" in paragraph:
                    paragraph = paragraph[:paragraph.index("[")] + paragraph[paragraph.index("]") + 1:]
                break

        if "may refer to" in paragraph:
            #this webpage was a manual redirect where the user is supposed to select from a list of options,
            #the parameter might not have been specific enough
            await channel.send("*That topic did not have a direct redirect, try again*" + "\n")
        else:
            await channel.send("**" + title + "**" + "\n" + paragraph)

    except requests.exceptions.HTTPError:
        print(url)
        await channel.send("*There was an error loading the webpage, please check the parameter and try again*" + "\n")


async def pokepic(parameter):
    try:
        print(parameter.find(" "))
        if " " in parameter:
            url = "https://bulbapedia.bulbagarden.net/wiki/" + parameter.split(" ")[1] + "_(Pokémon)"
        else:
            url = "https://bulbapedia.bulbagarden.net/wiki/" + parameter + "_(Pokémon)"

        req = requests.get(url)
        req.raise_for_status()

        soup = BeautifulSoup(req.text, 'html.parser')

        parts = soup.find_all("img")
        if " " in parameter:
            for part in parts:

                if part["alt"].lower() == parameter.lower():
                    await channel.send("https:" + str(part['src']))

        else:
            await channel.send("https:" + str(parts[2]['src']))

    except:
        await channel.send("error: wha happon")

async def doge(parameter):
    await channel.send("Dogecoin Current Price: $" + str(cryptocompare.get_price("DOGE", "USD")["DOGE"]["USD"]))

async def btc(parameter):
    await channel.send("Bitcoin Current Price: $" + str(cryptocompare.get_price("BTC", "USD")["BTC"]["USD"]))

async def amc(parameter):
    amc = Ticker("AMC")
    data = amc.history()
    amcPrice = (data.tail(1)['Close'].iloc[0])
    await channel.send("AMC Price: $" + str(amcPrice))

async def gme(parameter):
    gme = Ticker("GME")
    data = gme.history()
    gmePrice = (data.tail(1)['Close'].iloc[0])
    await channel.send("GME Price: $" + str(gmePrice))

async def moon(parameter):
    await channel.send ("TO THE MOON!!!")

async def stock(parameter):
    try:
        ticker = Ticker(parameter.strip())
        data = ticker.history()
        stockPrice = (data.tail(1)['Close'].iloc[0])
        await channel.send(ticker.info["shortName"] + " Price: $" + str(stockPrice))
    except:
        await channel.send("*Listing was not found, please check symbol and try again*")

async def crypto(parameter):
    try:
        crypto = parameter.strip().upper()
        await channel.send(
            crypto + " Current Price: $" + str(cryptocompare.get_price(crypto, "USD")[crypto]["USD"]))
    except:
        await channel.send("*Listing was not found, please check symbol and try again*")

async def quickimage(parameter):
    url = "https://www.gettyimages.com/photos/" + parameter

    req = requests.get(url)
    req.raise_for_status()

    soup = BeautifulSoup(req.text, 'html.parser')

    image = soup.find("img", {"class": "gallery-asset__thumb gallery-mosaic-asset__thumb"})

    try:
        await channel.send(image["src"])
    except:
        await channel.send("*No images found*")

async def image(parameter):

    m = await channel.send("*Getting image, please wait*")

    url = "https://duckduckgo.com/?q=" + parameter + "&t=hd&va=u&iax=images&ia=images"

    driver_path = "C:/Users/thema/PycharmProjects/dicordBot/"

    o = Options()
    o.add_argument('--headless')

    driver = webdriver.Firefox(driver_path, options=o)

    driver.get(url)
    sleep(1)

    soup = BeautifulSoup(driver.page_source, 'lxml')

    img = soup.find_all("img", {"class": "tile--img__img js-lazyload"})
    await channel.send("https:" + img[0]["data-src"])

    driver.quit()

    await m.delete()


def cleanCheck(m):
    if len(m.content) < 1:
        return False
    return m.author == bot.user or m.content[0] == "!" or m.content[0] == "$"


async def clean(parameter):
    if parameter == "":
        deleted = await channel.purge(limit=3, check=cleanCheck)
    else:
        deleted = await channel.purge(limit=int(parameter), check=cleanCheck)
    m = await channel.send("{} commands deleted".format(len(deleted)))
    await asyncio.sleep(5)
    await m.delete()



async def purge(parameter):
    if parameter == "":
        deleted = await channel.purge(limit=10)
    else:
        deleted = await channel.purge(limit=int(parameter))
    m = await channel.send("{} messages deleted".format(len(deleted)))
    await asyncio.sleep(5)
    await m.delete()


async def battleship(parameter):
    GRID_SIZE = 5
    SHIP_COUNT = 8
    AMMO_COUNT = 16
    LETTER_TO_COORD = {"a": 0, "b": 1, "c": 2, "d": 3, "e": 4}

    currentAmmo = AMMO_COUNT
    currentShips = SHIP_COUNT
    moves = []

    author = message.author
    gameChannel = channel

    def battleshipCheck(m):
        if(m.content == "end"):
            return True
        try:
            return author == m.author and m.channel == gameChannel and len(m.content) == 2 and m.content.lower()[0] in LETTER_TO_COORD and int(m.content[1]) <= GRID_SIZE
        except:
            return False

    boatMatrix = [
        [False, False, False, False, False],
        [False, False, False, False, False],
        [False, False, False, False, False],
        [False, False, False, False, False],
        [False, False, False, False, False],
    ]

    for i in range(SHIP_COUNT):
        y = randint(0, GRID_SIZE-1)
        x = randint(0, GRID_SIZE-1)

        while boatMatrix[y][x]:
            y = randint(0, GRID_SIZE-1)
            x = randint(0, GRID_SIZE-1)

        boatMatrix[y][x] = True

    #had to use an invisible char => "᲼᲼᲼᲼᲼᲼"
    gameBoardMatrix = [
        ["᲼1", "\t2", "\t3", "\t4", "\t5"],
        [":blue_square:",":blue_square:",":blue_square:",":blue_square:",":blue_square:", "A"],
        [":blue_square:",":blue_square:",":blue_square:",":blue_square:",":blue_square:", "B"],
        [":blue_square:",":blue_square:",":blue_square:",":blue_square:",":blue_square:", "C"],
        [":blue_square:",":blue_square:",":blue_square:",":blue_square:",":blue_square:", "D"],
        [":blue_square:",":blue_square:",":blue_square:",":blue_square:",":blue_square:", "E"]
    ]

    gameover = False

    deleteAtEnd = await channel.send("Enter coordinates like A1 or C4, to end the game early type \'end\'")

    dialog = ""
    while not gameover:
        display = dialog + "Ships left: " + str(currentShips) + "\nAmmo: " + str(currentAmmo) + "\n"
        for row in gameBoardMatrix:
            for cell in row:
                display += cell + " "
            display += "\n"

        display += "Enter a coordinate: "

        deletable = await gameChannel.send(display)

        msg = await bot.wait_for("message", check = battleshipCheck)

        if msg.content == "end":
            await channel.send("Ending game...")
            gameover = True
            continue

        y = LETTER_TO_COORD[msg.content.lower()[0]]
        x = int(msg.content[1]) - 1


        if msg.content in moves:
            await gameChannel.send("***Already did that move, try again!***")
        elif(boatMatrix[y][x]):
            currentAmmo -= 1
            moves.append(msg.content)
            dialog = "HIT\n"
            gameBoardMatrix[y+1][x] = ":sailboat:"
            currentShips -= 1
        else:
            currentAmmo -= 1
            moves.append(msg.content)
            dialog = "MISS\n"
            gameBoardMatrix[y + 1][x] = ":ocean:"

        if currentShips == 0:
            display = ""
            for row in gameBoardMatrix:
                for cell in row:
                    display += cell + " "
                display += "\n"
            await gameChannel.send("YOU WIN!\n" + display)
            gameover = True
        elif currentAmmo == 0:
            display = ""
            for row in gameBoardMatrix:
                for cell in row:
                    display += cell + " "
                display += "\n"
            await gameChannel.send("You ran out of ammo\nGAME OVER!\n" + display)
            gameover = True

        await msg.delete()
        await deletable.delete()
    await deleteAtEnd.delete()




async def redditMov(parameter):
    url = "https://www.reddit.com/r/aww/comments/u9deyu/a_beagle_who_plays_piano_and_sings/"

    headers = {'User-Agent':'Mozilla/5.0'}
    response = requests.get(url,headers = headers)

    post_id = url[url.find('comments/') + 9:]
    post_id = f"t3_{post_id[:post_id.find('/')]}"

    path=os.getcwd()+"/video"



    if(response.status_code == 200):    # checking if the server responded with OK
        soup = BeautifulSoup(response.text,'lxml')
        # I looked up the original code of the reddit page 
        # to find where all the data was and it was in a script tag
        # with the id set to 'data'
        required_js = soup.find('script',id='data') 
        
        json_data = json.loads(required_js.text.replace('window.___r = ','')[:-1])
        # 'window.___r = ' and a semicolon at the end of the text were removed
        # to get the data as json
        title = json_data['posts']['models'][post_id]['title']
        title = title.replace(' ','_')
        dash_url = json_data['posts']['models'][post_id]['media']['dashUrl']
        height  = json_data['posts']['models'][post_id]['media']['height']
        dash_url = dash_url[:int(dash_url.find('DASH')) + 4]
        # the dash URL is the main URL we need to search for
        # height is used to find the best quality of video available
        video_url = f'{dash_url}_{height}.mp4'    # this URL will be used to download the video
        audio_url = f'{dash_url}_audio.mp4'    # this URL will be used to download the audio part


    if not os.path.isdir(path):
        os.mkdir(path)

    video = f'{path}/{title}_video.mp4'
    audio = f'{path}/{title}_audio.mp3'

    with open(video,'wb') as file:
        print('Downloading Video...',end='',flush = True)
        response = requests.get(video_url,headers=headers)
        if(response.status_code == 200):
            file.write(response.content)
            print('\rVideo Downloaded...!')
        else:
            print('\rVideo Download Failed..!')

    with open(audio,'wb') as file:
        print('Downloading Audio...',end = '',flush = True)
        response = requests.get(audio_url,headers=headers)
        if(response.status_code == 200):
            file.write(response.content)
            print('\rAudio Downloaded...!')
        else:
            print('\rAudio Download Failed..!')

    def combine_audio(vidname, audname, outname, fps=60): 
        import moviepy.editor as mpe
        my_clip = mpe.VideoFileClip(vidname)
        audio_background = mpe.AudioFileClip(audname)
        final_clip = my_clip.set_audio(audio_background)
        final_clip.write_videofile(outname,fps=fps)

    # subprocess.call(['ffmpeg','-i',f'{title}_video.mp4','-i',f'./{title}_audio.mp3','-map','0:v','-map','1:a','-c:v','copy',f'{title}.mp4'])
    # subprocess.call(['rm',f'{title}_video.mp4',f'{title}_audio.mp3'])

    combine_audio(video, audio, ("video/post.mp4")) # i create a new file

    file = discord.File("video/post.mp4")
    await channel.send(file=file)

async def update(para):
    os.system("cp updater.py updater-old.py")
    os.system("python3 updater-old.py")
    quit()






async def test(parameter):
    pass




















