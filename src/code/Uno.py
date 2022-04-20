from UnoCards import *
from random import choice


class Player:

    def __init__(self, playerNum):
        self.hand = []
        self.playerNumber = playerNum

    def playCard(self, index):
        return self.hand.pop(index)

    def addToHand(self, card):
        self.hand.append(card)

    def getCard(self,index):
        return self.hand[index]

    def checkHand(self, cardInPlay):
        for card in self.hand:
            if card == cardInPlay:
                return True
        return False

    def checkHandIndex(self, index):
        return index >= 0 and index < len(self.hand)

    def checkLatestCard(self, cardInPlay):
        return self.hand[-1] == cardInPlay

    def isUno(self):
        return len(self.hand) == 1

    def isWinner(self):
        return len(self.hand) == 0

    def __str__(self):
        playerHand = "Hand:\t"

        for i in range(len(self.hand)):
            playerHand += "({0}): {1}\t".format(i, str(self.hand[i]))

        return playerHand


def playerIndexHandler(currentIndex, playerCount):
    if currentIndex == playerCount:
        return 0
    elif currentIndex < 0:
        return playerCount - 1
    else:
        return currentIndex



def game():

    deck = Deck()

    playerCount = 2 #change to "" LATER

    while playerCount == "":
        playerCount = input("How many players will there be?\t")

        if not playerCount.isdigit():
            print("That is not an acceptable input, try again.\n")
            playerCount =""
        else:
            playerCount = int(playerCount)

    players = []

    for i in range(playerCount):
        players.append(Player(i+1))

    for i in range(7):
        for p in players:
            p.addToHand(deck.draw())

    #play the card ontop of the deck, but if that card is a wild card, switch to a random color
    cardInPlay = deck.draw()
    while cardInPlay.getColor() == Color.WILD:
        cardInPlay.color = choice(list(Color))

    currentPlayerIndex = 0
    winner = None
    direction = 1


    while not winner:
        currentPlayer = players[currentPlayerIndex]
        print("Player {0}'s turn:".format(currentPlayerIndex+1))
        print("Card in Play: " + str(cardInPlay))
        print(str(currentPlayer))

        if not currentPlayer.checkHand(cardInPlay):
            while not currentPlayer.checkLatestCard(cardInPlay):
                card = deck.draw()
                print("You can't play a card, so you drew a card: " + str(card))
                currentPlayer.addToHand(card)
            print(str(currentPlayer))

        cardToPlayIndex = ""

        while cardToPlayIndex == "":
            cardToPlayIndex = input("Please select the index of the card you want to play: ")

            if cardToPlayIndex.isdigit():
                cardToPlayIndex = int(cardToPlayIndex)

                if not currentPlayer.checkHandIndex(cardToPlayIndex):
                    print("That is not a valid option, please try again.")
                    cardToPlayIndex = ""

            else:
                print("That is not a valid option, please try again.")
                cardToPlayIndex = ""

        if currentPlayer.getCard(cardToPlayIndex) == cardInPlay:
            cardInPlay = currentPlayer.playCard(cardToPlayIndex)
        else:
            print("\n\t---- That is not a valid card, try again ----\n")
            continue

        if currentPlayer.isUno():
            print("Player {0} has UNO!".format(currentPlayerIndex+1))
        elif currentPlayer.isWinner():
            winner = currentPlayer
            print ("\t\t\tPlayer {0} WINS!!!!".format(currentPlayerIndex+1))
            break

        if cardInPlay.getValue() == "Skip Card":
            currentPlayerIndex = playerIndexHandler(currentPlayerIndex + direction, playerCount)

        elif cardInPlay.getValue() == "+2 Card":
            currentPlayerIndex = playerIndexHandler(currentPlayerIndex + direction, playerCount)
            players[currentPlayerIndex].addToHand(deck.draw())
            players[currentPlayerIndex].addToHand(deck.draw())

        elif cardInPlay.getValue() == "+4 Card":
            currentPlayerIndex = playerIndexHandler(currentPlayerIndex + direction, playerCount)
            for nothing in range(4):
                players[currentPlayerIndex].addToHand(deck.draw())

        elif cardInPlay.getValue() == "Reverse Card":
            direction = -direction


        if cardInPlay.getColor() == Color.WILD:
            colorIn = ""
            while colorIn == "":
                colorIn = input("Change the color to Red, Green, Yellow, or Blue: ")

                if colorIn[0].lower() == 'r':
                    cardInPlay.color = Color.RED
                elif colorIn[0].lower() == 'b':
                    cardInPlay.color = Color.BLUE
                elif colorIn[0].lower() == 'g':
                    cardInPlay.color = Color.GREEN
                elif colorIn[0].lower() == 'y':
                    cardInPlay.color = Color.YELLOW
                else:
                    print("Not a valid option, please try again")
                    colorIn = ""

        currentPlayerIndex = playerIndexHandler(currentPlayerIndex + direction, playerCount)
        print("\n---------------------------------------------------------------------\n")








