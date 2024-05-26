// /2 
// /2 /2 -1  
class Solution {
    public String solution(String s) {
        String answer = "";
        String []ss = s.split("");
        System.out.print(ss[ss.length/2]) ;
        if(ss.length%2!=0){
            return ss[ss.length/2];
        }
        
        return ss[ss.length/2-1]+ ss[ss.length/2];
    }
}