import java.util.* ;
class Solution {
    public int solution(int n) {
        int answer = 0;
        
        
        List<Integer>  N = new ArrayList<>() ; 
        
        for(int i =1 ; i <=n ; i++){
            if(n%i==0){
                answer+=i ;
            }
        }
        System.out.print(N);
        
        
        return answer;
    }
    public static void main(String [] args) {
        Solution te = new Solution() ;
        System.out.println(te.solution(12)) ;
    }
}