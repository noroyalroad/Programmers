
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {


    Main main = new Main() ;
    main.back10871();

  }

  public int back10871 () {

    Scanner sc  = new Scanner(System.in) ;
    int N ,X ;
    N= sc.nextInt();
    X = sc.nextInt() ;

    int [] arr = new int[N] ;

    for(int i = 0 ; i< N; i++){
      arr[i] = sc.nextInt();
    }
    for(int i : arr){
      if(i<X){
        System.out.print(i+" ");
      }
    }

    return  0;


  }
}
