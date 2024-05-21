import java.util.* ; 
class Solution {
    public int[] solution(long n) { 
        
        String [] nn = String.valueOf(n).split("") ;
        int[] answer = new int[nn.length];
        
        for(int i = 0; i< nn.length; i++){
            
            answer[i] = Integer.parseInt(nn[nn.length-1-i]) ; 
            
            // System.out.println(nn[nn.length-1-i]) ; 
        }
        
        
        
        return answer;
    }
}