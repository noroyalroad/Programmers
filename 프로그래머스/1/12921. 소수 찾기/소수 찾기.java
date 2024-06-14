import java.util.* ;
class Solution {
    public int solution(int n) {
        int answer = 0;
        
        boolean [] prime = new boolean[n+1] ;
        
        
        for(int  i = 0 ; i<n+1 ; i++){
            prime[i] = true ;
        }
        // 1 2 제외 
        prime[0] =prime[1] = false; 
        
        for(int i = 2 ; i<=Math.sqrt(n) ; i++){
            if(prime[i]){
                for(int j = 2; i* j <=n ; j++){
                    prime[i*j] = false ; 
                }
            }
        }
        
        for(boolean i : prime){
            if(i){
                answer++;
            } ;
        }
        
        
        
        return answer;
    }
}