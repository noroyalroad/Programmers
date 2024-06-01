class Solution {
    public int solution(String t, String p) {
        int answer = 0;
        
      
        for(int i = 0 ; i<=t.length() - p.length()  ; i++){
            if(Long.parseLong(t.substring(i,p.length()+i))<=Long.parseLong(p)){
                answer++ ;
            }
        }
        return answer;
    }
}
//314    012 0 3 
//141    123 1 4 
//415    234 2 5 
