import java.util.* ; 
class Solution {
    public List<Integer> solution(int[] arr, int divisor) {
        List <Integer> answer = new ArrayList<>() ; 
        
        for(int n : arr){
            if(n%divisor==0){
                answer.add(n) ; 
            }
          }
        
        
        
        answer.sort(Comparator.naturalOrder());
        
        if(answer.isEmpty()){
            answer.add(-1) ; 
        }

        return  answer;
    }
}