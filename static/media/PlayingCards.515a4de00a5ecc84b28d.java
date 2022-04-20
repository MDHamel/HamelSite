import java.util.ArrayList;
import java.util.Collections;

public class PlayingCards {

    public enum Color{
        RED,
        BLACK
    }

    public static class Card{
        private Color color;
        private String suit;
        private String value;
        private int numValue;

        public Card(String suit, String val, int numVal){
            if (suit.equals("Diamonds") || suit.equals("Hearts")){
                this.color = Color.RED;
            }
            else{
                this.color = Color.BLACK;
            }
            this.suit = suit;
            this.value = val;
            this.numValue = numVal;
        }

        public Color getColor(){return this.color;}

        public String getValue(){return this.value;}

        public int getNumValue(){return this.numValue;}

        public void setNumValue(int numValue){this.numValue = numValue;}

        public String getSuit(){return this.suit;}

        @Override
        public String toString() {
            return value + " of " + suit;
        }
    }

    public static class Deck{

        String[] suits = {"Clubs", "Spades", "Diamonds", "Hearts"};
        String[] values = {"Ace", "2", "3", "4", "5", "6","7", "8", "9", "10", "Jack", "Queen", "King"};

        ArrayList<Card> cards = new ArrayList<>();

        public Deck(int[] numValues){
            for(String suit : suits){
                for(int i = 0; i < 13; i++){
                    cards.add(new Card(suit, values[i], numValues[i]));
                }
            }

            for(int i = 0; i < 20; i++){
                Collections.shuffle(this.cards);
            }
        }

        public Deck(){
            this(new int[]{11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10});
        }

        public Card draw(){
            return cards.remove(0);
        }

        @Override
        public String toString() {
            String allOfEm = "";
            for(Card c : this.cards){
                allOfEm += c.toString() + "\n";
            }
            return  allOfEm + "Card Count: " + Integer.toString(cards.size());
        }
    }
}
