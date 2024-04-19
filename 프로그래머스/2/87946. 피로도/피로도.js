function solution(k, dungeons) {
    let answer = 0;
    
    let visited = Array(dungeons.length).fill(false) 
    const dfs = ( k, depth ) =>{
    
    for(let i = 0 ; i<dungeons.length; i++ ){
        
        if(visited[i] || k-dungeons[i][0] <0){
            continue
        }
        visited[i] = true 
        let cost = dungeons[i][1] 
        dfs( k - cost, depth+1)
        visited[i] = false 
    }
        
    
    answer= Math.max(answer,depth)    
    
    
    
    
}
    dfs(k,0)
    return answer;
}