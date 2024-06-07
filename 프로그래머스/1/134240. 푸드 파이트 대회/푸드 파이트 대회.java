class Solution {
    public String solution(int[] food) {
        String answer = "";
        String left ="" ; 
        String right ="" ; 
        
        for(int i = 1 ; i< food.length ; i++){
           String s = String.valueOf(i) ; 
           String SS = String.valueOf(food.length-i) ; 
           left+= s.repeat(food[i]/2) ;
           right+= SS.repeat(food[food.length-i]/2) ;
           
        }
        
        
        return left+"0"+right;
    }
}