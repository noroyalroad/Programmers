import java.util.Scanner;

public class Main {
  public static void main(String[] args) {


    Main main = new Main() ;
    main.back3052();

  }
    
   public  static int back3052(){
   Scanner sc= new Scanner(System.in);
    int [] arr = new int[10] ;
    int cnt = 0;

    for(int i=0; i<10 ; i++){
      arr[i] = sc.nextInt()%42;
    }

  
    for(int i =0 ; i<arr.length; i++){
      boolean flag = false ;
      for(int j=0; j<i;j++){
        if(arr[i]==arr[j]){
          flag = true;
          break;
        }

      }
      if(!flag){
        cnt++;
      }
    }
    System.out.println(cnt);
    return  0 ;
  }

    
}
    