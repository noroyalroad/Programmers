import java.util.Scanner;

public class Main {
  public static void main(String[] args) {


    Main main = new Main() ;
    main.back5597();

  }

public static int back5597() {

    int[] num = new int[30];
    for (int i = 0; i < 30; i++) {
      num[i] = i + 1;
    }
    
    Scanner sc = new Scanner(System.in);

    int[] arr = new int[28];
    for (int i = 0; i < 28; i++) {
      arr[i] = sc.nextInt();
    }

    for (int i = 0; i < num.length; i++) {
      boolean flag = false;
      for (int j = 0; j < arr.length; j++) {
        if (num[i] == arr[j]) {
          flag = true;
          break;
        }
      }
      if (!flag) {
        System.out.println(num[i]);
      }
    }
    return 0;


  }

}