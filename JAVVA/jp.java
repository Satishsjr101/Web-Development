import java.util.Scanner;

 class ReverseWordsInString { 
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter a sentence: ");
        String inputSentence = scanner.nextLine();
        
        String reversedSentence = reverseWords(inputSentence);
        System.out.println("Reversed Sentence: " + reversedSentence);
        
        scanner.close();
    }

    private static String reverseWords(String sentence) {
        String[] words = sentence.split(" ");
        
        StringBuilder reversedSentence = new StringBuilder();
        
        for (int i = words.length - 1; i >= 0; i--) {
            reversedSentence.append(words[i]);
            
            if (i > 0) {
                reversedSentence.append(" ");
            }
        }
        
        return reversedSentence.toString();
    }
}
