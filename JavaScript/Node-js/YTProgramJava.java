import java.awt.Desktop;
import java.net.URI;

class YTProgramJava {
    public static void main(String[] args) {

        String youtubeURL = "https://www.youtube.com/";
        int numberOfTimes = 5;

        for (int i = 0; i < numberOfTimes; i++) {
            try {
                Desktop.getDesktop().browse(new URI(youtubeURL));
                Thread.sleep(1000);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}