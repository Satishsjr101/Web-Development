import java.awt.Desktop;
import java.net.URI;

class OpenYouTubeMultipleTimes {
    public static void main(String[] args) {

        String youtubeURL = "https://www.youtube.com/";
        String url = "https://www.similarweb.com/website/capcut.com/#overview";
        int numberOfTimes = 20;

        for (int i = 0; i < numberOfTimes; i++) {
            try {
                Desktop.getDesktop().browse(new URI(youtubeURL));
                Desktop.getDesktop().browse(new URI(url));

                Thread.sleep(1000);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}