class Solution {
    public int solution(String[] babbling) {
        int answer = 0;
        String[] bab = { "aya", "ye", "woo", "ma" }  ; 
        
        for(int i = 0 ; i<babbling.length; i++){
            for(int j= 0 ; j<bab.length; j++ ){
                if(babbling[i].contains(bab[j].repeat(2))){
                    break;
                }
                babbling[i] = babbling[i].replaceAll(bab[j],"1") ;
            }
        }
        for(int i = 0 ; i< babbling.length ; i++){
            babbling[i] = babbling[i].replaceAll("1","") ; 
        }
         for(int i = 0 ; i< babbling.length ; i++){
           if( babbling[i].equals("") ){
               answer++ ; 
           }
        }
        return answer;
    }
}