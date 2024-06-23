// 문자열 중에서 한 번만 등장하는 문자를 찾아라 
//1 . indexOf와 lastindexof로 찾기
//2 . 문자 오름차순 정렬  stream 정렬 
import java.util.* ; 
class Solution {
    public String solution(String s) {
        String answer = "";
        
        for(int i =0 ; i< s.length();i++){
           
            if(s.indexOf(s.charAt(i))==s.lastIndexOf(s.charAt(i))){
                answer+=s.charAt(i);
            }
        }
        char [] chars = answer.toCharArray(); 
        Arrays.sort(chars) ; 
        
        return new String(chars) ;
    }
}