// [[1,0,1,1,1],
//  [1,0,1,0,1],
//  [1,0,1,1,1],
//  [1,1,1,0,1],
//  [0,0,0,0,1]] 

// 11 12 13
// 21 22 23 
// 31 32 33

function solution(maps) {
    var answer = 0;
    let n = maps.length , m = maps[0].length 
    
    const dirX = [-1, 0, 1, 0 ] 
    const dirY = [0, 1, 0, -1]
    
    
    let que = [] 
    
    que.push([0,0,1])
    
    
    while(que.length){
        
        let [x,y,cnt] = que.shift() 
        
        
        if(x===n-1 && y===m-1){
            
            return cnt 
        }
        
        
        for(let i =0 ; i< 4; i++){
            
            let dx = x+ dirX[i] 
            let dy = y+ dirY[i] 
            
            
            if(dx<n && dx>=0 && dy<m && dy>=0 ){
                if(maps[dx][dy]){
                    que.push([dx,dy, cnt+1])
                    maps[dx][dy] =0 
                    
                }
                
            }   
        }
    }

    return -1;
}