import java.util.*;

public class Solution {
    // 숫자를 문자열로 
    // 문자열을 배열로 
    // 배열의 원소를 숫자로 
    public int solution(int n) {
        int answer = 0; 
        String N = String.valueOf(n);
        String [] NN = N.split("");

        // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
        
        
        for(String c : NN){
            answer+=Integer.parseInt(c);
            
        }
        
        

        return answer;
    }
}