import java.util.Scanner;

public class POJO1 {
    public static void main(String[] args) {
        ParkingLot obj = new ParkingLot();

        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Vehicle Number: ");
        obj.setVno(sc.nextInt());
        System.out.println("Enter parking hours: ");
        obj.setHours(sc.nextInt());

        obj.calculate();
        obj.display();
    }
}

class ParkingLot {
    private int vno;
    private int hours;
    private double bill;

    public void setVno(int vno) {
        this.vno = vno;
    }

    public void setHours(int hours) {
        this.hours = hours;
    }

    // void input(int vno, int hours) {
    // this.vno = vno;
    // this.hours = hours;
    // }

    void calculate() {
        if (hours == 1) {
            bill = hours * 3;
        } else if (hours > 1) {
            bill = hours * 1.50;
        }
    }

    void display() {
        System.out.println("Your Bill of Vehicle No. " + vno + " : " + bill);
    }
}