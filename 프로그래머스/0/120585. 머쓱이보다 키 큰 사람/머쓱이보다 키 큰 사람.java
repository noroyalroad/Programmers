class Solution {
    public int solution(int[] array, int height) {
        int answer = 0;
        
        for(int arr : array){
            answer+= arr > height ? 1: 0 ;
        }
        return answer;
    }
}