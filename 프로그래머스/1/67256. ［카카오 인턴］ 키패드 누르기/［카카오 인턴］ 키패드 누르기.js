//키패드는 4행 3열  
// 각 숫자의 위치  
//1. 왼손과 오른손의 위치를 번호를 누를 때 알 수 있어야 한다 
// 첫 시작은 왼손은 * 오른손은 # 
//1 4 7 3 6 9 외에 다른 숫자를 눌렀을 시 현재 왼손의 위치와 오른손의 위치와 다른 숫자의 거리를 계산하여 더 작은 걸로 결정한다 
// 거리가 같은 경우는 hand에 따라 
function solution(numbers, hand) {
    
    let keypad = [ [3,1], [0,0], [0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2] ]   
    
   
    var answer = '';
     let left = [3,0] 
    let right = [3,2] 
    
    
    for(let x of numbers){
        
        
        if(x===1 || x===4 || x===7){
            answer+='L' 
            left = keypad[x]
            
        }
        else if(x===3 || x===6 || x===9){
            answer+="R" 
            right = keypad[x]
        }
        else{
            
            let leftdistance  = Math.abs(left[0] - keypad[x][0]) + Math.abs(left[1] - keypad[x][1]);
            let rightdistance = Math.abs(right[0] - keypad[x][0]) + Math.abs(right[1] - keypad[x][1]);

            
            
            
            if(leftdistance < rightdistance){
                answer+='L'
                left = keypad[x]
            }
            else if(leftdistance >rightdistance){
                 answer+='R'
                 right = keypad[x]
            }
            else{
                if(hand==="right"){
                    answer+='R'
                    right = keypad[x]
                }
                else{
                     answer+='L'
                     left = keypad[x]
                    
                }
            }
            
        }
        
        
    }

    
    
    return answer;
}