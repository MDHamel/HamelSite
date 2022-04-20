import java.util.ArrayList;
import java.util.Scanner;


public class BlackJack {

    static class Player{
        private ArrayList<PlayingCards.Card> hand = new ArrayList<>();

        public Player(){}

        public void addCard(PlayingCards.Card c){hand.add(c);}

        public PlayingCards.Card getCard(int index){return hand.get(index);}

        public PlayingCards.Card playCard(int index) {return hand.remove(index);}

        @Override
        public String toString(){
            StringBuilder toRet = new StringBuilder();
            for(PlayingCards.Card c : hand){
                toRet.append(c);
                toRet.append("\t|\t");
            }

            return toRet.toString();
        }

        public int getHandValue(){
            int sum = 0;
            int aceCount = 0;
            for(PlayingCards.Card c : hand){
                aceCount += c.getValue().equals("Ace") ? 1 : 0;
                sum += c.getNumValue();
            }

            while(sum > 21 && aceCount > 0){
                sum -= 10;
                aceCount--;
            }

            return sum;
        }
    }


    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        PlayingCards.Deck deck = new PlayingCards.Deck();

        Player human = new Player();
        Player comp = new Player();

        human.addCard(deck.draw());
        comp.addCard(deck.draw());
        human.addCard(deck.draw());
        comp.addCard(deck.draw());


        boolean isWinner = false;

        String input;
        System.out.printf("Dealer's Card: %s\n", comp.getCard(0));
        do {
            System.out.println("Your cards: " + human);
            System.out.printf("Your hand value is %d\n", human.getHandValue());
            System.out.print("Would you like to Hit or Stand? ");

            input = in.nextLine();

            if (Character.toLowerCase(input.charAt(0)) == 'h') {
                PlayingCards.Card c = deck.draw();

                System.out.println("You drew the " + c + ".");

                human.addCard(c);

                if(human.getHandValue() > 21){
                    System.out.println("\t\tPlayer BUSTS.");
                    return;
                }
                System.out.println("\n____________________________________\n");
                input = "";

            } else if (Character.toLowerCase(input.charAt(0)) == 's') {

            }
            else{
                System.out.println("Choice not valid, try again.");
                input = "";
            }
        }while(input.equals(""));

        while(comp.getHandValue() < 16){
            PlayingCards.Card c = deck.draw();
            comp.addCard(c);
        }

        System.out.println("\n____________________________________\n");

        int dealerVal = comp.getHandValue();
        int playerVal = human.getHandValue();


        System.out.println("Dealer Hand:\t" + comp);
        System.out.printf("Dealer Hand Value: %d\n", dealerVal);
        System.out.println("Player Hand:\t" + human);
        System.out.printf("Player Hand Value: %d\n", playerVal);


        if(dealerVal > 21){
            System.out.println("\t\tDealer BUSTS, Player WINS!");
        }
        else if(dealerVal > playerVal){
            System.out.println("\t\tDealer Wins!");
        }
        else if (dealerVal < playerVal){
            System.out.println("\t\tPlayer WINS!!!");
        }
        else{
            System.out.println("\t\tIt's a Tie!");
        }

    }
}
