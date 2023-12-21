class J {
    public static void main(String[] args) {
        int arr[] = { 0, 0, 0, 1, 5, 8, 2, 3 };
        int smax = -2147483642;
        int max = arr[0];

        for (int i = 0; i < arr.length; i++) {
            // smax=max;
            if (max < arr[i]) {
                max = arr[i];
            }
            if (smax < arr[i] && max != arr[i]) {
                smax = arr[i];
            }
        }
        System.out.println(smax);
    }
}