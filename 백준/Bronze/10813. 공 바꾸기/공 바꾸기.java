import java.util.Scanner;

public class Main {
  public static void main(String[] args) {


    Main main = new Main() ;
    main.SwapArr();

  }

public static int SwapArr() {
    Scanner sc = new Scanner(System.in);
    int N, M;
    N = sc.nextInt();
    M = sc.nextInt();

    int[] arr = new int[N];

    for (int i = 0; i < N; i++) {
      arr[i] = i + 1;
    }
    int swap;
    for (int i = 0; i < M; i++) {
      int I, J;
      I = sc.nextInt();
      J = sc.nextInt();

      swap = arr[I - 1];
      arr[I - 1] = arr[J - 1];
      arr[J - 1] = swap;


    }

    for (int i : arr) {
      System.out.print(i + " ");
    }
    return 0;
  }

}