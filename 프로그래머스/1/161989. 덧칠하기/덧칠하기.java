class Solution {
    public int solution(int n, int m, int[] section) {
        int answer = 0;
        
        boolean [] paintSection = new boolean[n] ; 
        
        for(int i =0 ; i< n; i++){
            paintSection[i] =true ; 
        }
        for(int i = 0 ; i< section.length; i++){
            paintSection[section[i]-1] = false ; 
        }
        
        // for(boolean i : paintSection){
        //     System.out.println(i) ;
        // }
        
        int i = 0 ; 
        while(i<n){
            if(!paintSection[i]){
                answer++ ; 
                i+=m ;
            }
            else{
                i++ ; 
            }
        }
        return answer;
    }
}