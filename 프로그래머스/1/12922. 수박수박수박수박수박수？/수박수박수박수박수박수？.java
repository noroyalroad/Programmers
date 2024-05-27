class Solution {
    public String solution(int n) {
        String answer = "";
        String s = "수박" ; 
        
        for(int i=0; i<n ;i++){
            answer+=s ;
        }
        
        String[] newAnswer = answer.split("") ;
        String ans = "" ;
        for(int i=0; i<n ; i++){
            ans+=newAnswer[i];
        }
        
        
        
        return ans;
    }
}