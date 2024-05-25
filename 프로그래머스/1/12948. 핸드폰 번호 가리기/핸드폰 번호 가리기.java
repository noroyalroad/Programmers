import java.util.* ;
class Solution {
    public String solution(String phone_number) {
        String answer = "";
        String [] s = phone_number.split("") ; 
        
        for(int i =0 ;i<s.length-4 ; i++){
            s[i] = "*" ; 
        }
        
        
        return String.join("",s);
    }
}