import java.util.* ; 
class Solution {
    public List<Integer> solution(int[] answers) {
        int[] answer = {};
        int [] f_1 = {1, 2, 3, 4, 5, 1, 2, 3, 4, 5} ; 
        int [] f_2 = {2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5} ; 
        int [] f_3 = {3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5} ; 
        
         
        
       int [] people3 ={0,0,0};
        
        for(int i = 0 ; i<answers.length; i++){
            
            if(f_1[i%f_1.length]==answers[i]){
                people3[0]+=1 ;
            }
             if(f_2[i%f_2.length]==answers[i]){
                people3[1]+=1 ;
            }
             if(f_3[i%f_3.length]==answers[i]){
                people3[2]+=1 ;
            }
        }
        
        // for(int k : people3){
        //     System.out.println(k) ; 
        // }
        
        
        int maxScore = Math.max(people3[0],  Math.max(people3[1], people3[2])) ; 
        
          List<Integer> topScorers = new ArrayList<>();
        
        // 최대 점수를 받은 사람들 찾기
        for (int i = 0; i < people3.length; i++) {
            if (people3[i] == maxScore) {
                topScorers.add(i + 1);  // 인덱스를 1부터 시작하도록 조정
            }
        }
        
        // System.out.println(topScorers);
        
        
        
        
        
        
        return topScorers;
    }
}