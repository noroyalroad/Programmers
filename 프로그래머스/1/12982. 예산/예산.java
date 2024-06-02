import java.util.*; 
class Solution {
    public int solution(int[] d, int budget) {
        int answer = 0;
        
        Arrays.sort(d) ; 
        
        int hap =  0 , i =0 ; 
        
        while(i<d.length){
            
            hap+=d[i] ;
            
            if(hap<budget){
                i++ ;
                
            }
            else if(hap>budget){
                break ;
            }
            answer++;
        }
        return answer;
    }
}