function solution(numbers, target) {
    var answer = 0;
    

    function dfs(sum, i){ 
        
        
        if(i===numbers.length){
            
            if(sum===target){
                answer++
            }
            return 
        }
        
        dfs(sum+ numbers[i], i+1)
        dfs(sum- numbers[i], i+1)
        
        
    }
    dfs(0,0)
    
    
    
    return answer;
}