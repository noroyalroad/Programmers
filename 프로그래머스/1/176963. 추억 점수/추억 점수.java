import java.util.* ; 
class Solution {
    public int[] solution(String[] name, int[] yearning, String[][] photo) {
        int[] answer = new int[photo.length]; 
        
        Map<String, Integer> map = new HashMap() ; 
        
        for(int i =0 ; i< name.length; i++){
            map.put(name[i], yearning[i]) ; 
        }
        
       // for (Map.Entry<String, Integer> entry : map.entrySet()) {
       //      System.out.println(entry.getKey() + " : " + entry.getValue());
       //  }
        for(int i  = 0 ; i< photo.length; i++){
            int result = 0 ;
            for(int j = 0 ; j< photo[i].length ; j++){
                if(map.get(photo[i][j])!=null) {
                    result+=map.get(photo[i][j]);
                }
            }
            
             
            answer[i] = result ; 
        }
        return answer;
    }
}