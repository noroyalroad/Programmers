class Solution {
    public int solution(int[] a, int[] b) {
        int answer =0;
        
        
    for(int i=1; i<=a.length;i++){
        answer =  answer+ a[i-1] * b[i-1] ;
    }
        return answer;
    }
}