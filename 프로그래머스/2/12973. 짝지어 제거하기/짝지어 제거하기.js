// 알파벳 소문자 중 같은 알파벳이 2개 붙어 있는 짝을 찾는다. 
// 제거 한다 
/// 모두 제거가 된다면 종료한다.

// 
function solution(s){
    
    let stack = [] 
    
    
    for(let x of s){
        
    
        
        if(stack[stack.length-1]===x){
            stack.pop()
        }
        else{
            stack.push(x)
            
        }
        
        
        
    }
    
    return stack.length===0 ? 1 : 0

}