class Solution {
    public int[] solution(int n, int m) {
        int[] answer = new int[2];
        
        
         
        
        answer[0] = gcd(n,m) ; 
        answer[1] = n*m/gcd(n,m) ;
  
        
        
        return answer;
    }
    int gcd(int a,int b) {
         return  b == 0 ? a : gcd(b , a%b) ;
        
        } 
}