import base64
import os
from time import sleep
from github import Github
from dotenv import load_dotenv

TOKEN = os.getenv("GIT")


repo = Github(TOKEN).get_repo('MDHamel/Hamel-Bot')

contents = repo.get_contents("")


sleep(3)
print("Starting updater ... ")

for content in contents:
    path = content.path
    file_content = repo.get_contents(path)
    print(content.download_url)
    if(content.download_url):
        file_data = base64.b64decode(file_content.content).decode(encoding='UTF-8',errors='strict')
        print(file_data)
        file_out = open(content.name, "w", encoding="UTF-8")
        file_out.write(file_data)
        file_out.close()

sleep(2)

print("Update Finished!")

print("Opening Updated Bot")

os.system("python3.9 hamelbot.py")

sleep(2)

quit()






