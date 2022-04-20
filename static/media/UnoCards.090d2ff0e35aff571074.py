from enum import Enum
from random import shuffle


class Color(Enum):
    RED = "Red"
    YELLOW = "Yellow"
    GREEN = "Green"
    BLUE = "Blue"
    WILD = "WILD"


class Card:

    def __init__(self, color, cardValue):
        self.color = color

        self.cardValue = cardValue

    def __str__(self):
        return self.color.value + " " + self.cardValue

    def getColor(self):
        return self.color

    def getValue(self):
        return self.cardValue

    def __eq__(self, other):
        return self.getColor() == Color.WILD or other.getColor() == Color.WILD or self.getColor() == other.getColor() or self.getValue() == other.getValue()


class Deck:

    def __init__(self):
        self.cards = []
        self.makeDeck()

    def makeDeck(self):
        # make each card in an uno deck, 4 0's, every other card has eight with 1 of each color and 2 of each color respectively.
        # There are also 4 wild cards and 4 +4 wild cards

        # making the 0's
        self.cards.append(Card(Color.RED, "0"))
        self.cards.append(Card(Color.YELLOW, "0"))
        self.cards.append(Card(Color.GREEN, "0"))
        self.cards.append(Card(Color.BLUE, "0"))

        # making the rest of the numeric cards
        for i in range(1, 10):
            for x in range(2):
                self.cards.append(Card(Color.RED, str(i)))
                self.cards.append(Card(Color.YELLOW, str(i)))
                self.cards.append(Card(Color.GREEN, str(i)))
                self.cards.append(Card(Color.BLUE, str(i)))

        # making the special cards
        for item in ["Skip Card", "Reverse Card", "+2 Card"]:
            for x in range(2):
                self.cards.append(Card(Color.RED, item))
                self.cards.append(Card(Color.YELLOW, item))
                self.cards.append(Card(Color.GREEN, item))
                self.cards.append(Card(Color.BLUE, item))

        # lastly, making the wild cards
        for i in range(4):
            self.cards.append(Card(Color.WILD, "Card"))
            self.cards.append(Card(Color.WILD, "+4 Card"))

        # finally, give the deck a good shuffle
        for i in range(100):
            shuffle(self.cards)

    # for testing to make sure the deck has the right amount of cards
    def __str__(self):
        allOfEm = ""

        for card in self.cards:
            allOfEm += str(card) + "\n"

        return allOfEm

    def draw(self):
        if len(self.cards) == 0:
            self.makeDeck()

        return self.cards.pop(0)





