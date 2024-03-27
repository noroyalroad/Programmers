// 1. 폭탄이 위치한 주변은 싹다 1로 바꾼다 

// 1, 위, 아래, 좌, 우, 대각선 설정 
function solution(board) {
    var answer = 0;
   
    const DIRECTION =[[-1, 0], [1, 0], [0, 1], [0, -1], [-1, 1], [1, 1], [1, -1], [-1, -1]]
    
    
// 0,0    0,1. 0,2
// 1,0    1,1  1,2 
// 2,0    2,1  2 2
    const [MAX_X, MAX_Y]  = [board.length , board[0].length]
    
    
    for(let i= 0 ;i< board.length ; i ++){
        for(let j= 0 ; j< board[i].length;j++){
            if(board[i][j]===1){
                console.log(i,j)
                
                DIRECTION.forEach(v=>{
                    let [nx ,ny] = [ i , j] 
                    let [dirx, diry] = [v[0], v[1]]
                    
                    dirx+=nx 
                    diry+=ny
                    if(dirx >=0 && dirx  < MAX_X && diry >=0 && diry  < MAX_Y &&  board[dirx][diry]===0){ 
                        
                        board[dirx][diry] = -1
                        
                    }
                    
                    
                })
                
               
            }
        }
    }
    
  console.log(board)
    
    
    
    
    
    
    return board.flat().filter(v=>v===0).length;
}