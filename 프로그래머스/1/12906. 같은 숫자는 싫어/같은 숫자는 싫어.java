import java.util.*;

public class Solution {
    public  List<Integer> solution(int []arr) {
        int[] answer = {};
        List<Integer> list = new ArrayList<>() ;  
        
        
        
        if (arr.length == 0) {
            return list;
        }

        list.add(arr[0]); // 첫 번째 요소를 추가

        for (int i = 1; i < arr.length; i++) {
            if (list.get(list.size() - 1) != arr[i]) {
                list.add(arr[i]);
            }
        }
        
        
        
        // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
        System.out.println("Hello Java");

        return list;
    }
}