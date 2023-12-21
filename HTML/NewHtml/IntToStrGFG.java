package NewHtml;

public class IntToStrGFG {
    public static void main(String[] args) {

        int arr[] = { 40, 50, 90 };
        int N = arr.length;
        String s="";
        int num = 0, sum = 0;
        for (int i = 0; i < N; i++) {
            s = String.valueOf(i);
            sum += Integer.parseInt(s);
        }
        System.out.println(s);

    }

}
