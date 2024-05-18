class Solution {
    boolean solution(String s) {
        boolean answer = true;

        // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
        
        s = s.toUpperCase();
       
        int p = 0 , y= 0 ; 
            
        for(int i = 0 ; i < s.length() ; i++){
            if(s.charAt(i)=='P'){
                p++ ; 
            }
            else if(s.charAt(i)=='Y'){
                y++ ; 
            }
        }
    

        return p==y;
    }
}