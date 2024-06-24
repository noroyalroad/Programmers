import java.util.* ; 
public class Main {
  public static void main(String[] args) {


    Main main = new Main() ;
    main.back10810();

  }

  public static int back10810() {

    int N, M;
    Scanner sc = new Scanner(System.in);

    N = sc.nextInt();
    M = sc.nextInt();
    int[] arr = new int[N];
    for (int i = 0; i < N; i++) {
      arr[i] = 0;
    }

    for (int i = 0; i < M; i++) {
      int I, J, K;
      I = sc.nextInt();
      J = sc.nextInt();
      K = sc.nextInt();


      for (int j = I - 1; j < J; j++) {
        arr[j] = K;
      }


    }
    for (int i : arr) {

      System.out.print(i+" ");

    }


    return 0;
  }
}