// [[0,0,0,0,0],
//  [0,0,1,0,3],
//  [0,2,5,0,1],
//  [4,2,4,4,2],
//  [3,5,1,3,1]]
const solution =(board, moves) => {
    var answer = 0;
    let stack = []
    
    moves.forEach(v=>{
        
        let select = selct(board, v-1) 
        
        if(select!==undefined){
            
            stack.push(select) 
            
            if(stack[stack.length-2] ===stack[stack.length-1]){
                stack.pop()
                stack.pop()
                answer+=2
                
            }
            
            
        }
       
    })
    
    return answer;
}

const selct = (board,index) =>{ 
    
    
    for(let i in board){
        
         if(board[i][index] !== 0) {
            let selected = board[i][index];
            board[i][index] = 0;

            return selected;
        }
    }
    
    
    
    
    
    
}