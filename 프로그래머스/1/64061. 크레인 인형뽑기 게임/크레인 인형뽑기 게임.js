
// [[0,0,0,0,0],
//  [0,0,1,0,3],
//  [0,2,5,0,1],
//  [4,2,4,4,2],
//  [3,5,1,3,1]]

// [3,0] 
// [1,5,3,5,1,2,1,4]
// board[i] [j] 를 돌면서 0 아닌 0 원소를 찾는다 
// j는 moves의 원소가 된다 
// 찾으면 빈배열에 넣고 그 위치를 0으로 바꾼다 
function solution(board, moves) {
    var answer = 0;
    let stack = []
    
    moves.forEach(v=>{
        
        // let indexdoll = indexs(board,v)
        
        let dollindex =  indexs(board,v-1) 
        
        if(dollindex!==undefined){
            stack.push(dollindex)
            
            if(stack[stack.length-1]===stack[stack.length-2]){
                stack.splice(-2)
                answer+=2
            }
        }
        
        
        console.log(dollindex)
        
    })
    
    return answer;
}

let indexs = (board, index) =>{
        
        for(let i = 0 ; i< board.length;i++){
            
            if(board[i][index]!==0){
                let indexdoll = board[i][index]
                board[i][index] =0
                
                
                return indexdoll
                
            }
            
            
        }
        
        
        
    }