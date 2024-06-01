class Solution {
    public int solution(int n) {
        String answer = "";
        int num = n ;  
        
        while(true){
            
            // System.out.println(num) ; 
            System.out.println(Integer.toString(num%3)) ; 
            answer+= Integer.toString(num%3);
            num/=3 ; 
            
            
            
            if(num==0){
                break;
            }
            
            
            
        }
        
        
        
        System.out.print(Integer.parseInt(answer,3));
        
        return Integer.parseInt(answer,3) ;
    }
}

