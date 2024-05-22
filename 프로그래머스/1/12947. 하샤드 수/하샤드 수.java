class Solution {
    public boolean solution(int x) {
        boolean answer = true;
        int sum  = 0  ;
        
        String[] xx = String.valueOf(x).split("") ;  
        
        for(int i = 0 ; i < xx.length ; i++){
            sum+=Integer.parseInt(xx[i]) ;
            
            
        }
        
      
        
        return x%sum==0;
    }
}