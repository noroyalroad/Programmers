import java.util.* ; 
public class Main {
  public static void main(String[] args) {


    Main main = new Main() ;
    main.back10818();

  }

   public  static  int back10818(){

    Scanner sc = new Scanner(System.in) ;

    int N = sc.nextInt() ;
    int [] arr = new int[N] ;

    for(int i =0 ; i< N; i++){
      arr[i] =sc.nextInt();
    }
    int min  = arr[0];  int max =  arr[0] ;

    for(int i :arr){
       min = Math.min(min,i) ;
       max = Math.max(max,i) ;


    }
    System.out.println(min +" "+max);


    return 0;
  }
}