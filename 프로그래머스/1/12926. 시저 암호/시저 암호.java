class Solution {
    public String solution(String s, int n) {
        String answer = "";
        String lowerAlpha = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz" ; 
        String upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ" ; 
        
        
        int idx ; 
        
        for(int i =0 ; i< s.length(); i++){
            char curr =  s.charAt(i);
            //소문자 일 때 
            if(curr==Character.toLowerCase(curr) && curr!=' ' ){ 
                 idx = lowerAlpha.indexOf(curr) ; 
                answer+= lowerAlpha.charAt(idx+n) ; 
                
                    
            }
            else if(curr==Character.toUpperCase(curr) && curr!=' '){
                 idx = upperAlpha.indexOf(curr) ; 
                answer+= upperAlpha.charAt(idx+n) ; 
                
            }
            else{
                answer+=" " ; 
            }
        }
        return answer;
    }
}