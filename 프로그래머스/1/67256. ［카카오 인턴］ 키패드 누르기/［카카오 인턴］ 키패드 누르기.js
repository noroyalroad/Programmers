
function solution(numbers, hand) {
    
    
    
 
    
    var answer = '';
    
    let keypad = [ [3,1], [0,0],[0,1], [0,2] ,
                     [1,0],[1,1], [1,2] ,
                     [2,0],[2,1], [2,2],
                      ]
    
    
    //왼속 시작 위치 
    let left  =  [3,0]
    //오른손 시작 위치 
    let right = [3,2] 
    
    
    
    let left_press  =(num) =>{
        left  = keypad[num] 
        return answer+='L'
    }
    
    let  right_press =(num)  => {
        right = keypad[num] 
        return answer+='R'
    }
    
    numbers.forEach((v,i)=>{
        
        
        if(v===1 || v===4 || v===7){
            left_press(v)
        }
        else if(v===3 || v===6 || v===9){
            right_press(v)
        }
        
        else{
            	// [ 2, 0 ] l  현재 left 위치 
            	// [ 3, 2 ] r  현재 right 위치 
            	// [ 3, 1 ]  // 1 4 7   3 6 9 가 아닌 숫자의 위치 
            
            let left_compare = Math.abs(left[0]-keypad[v][0])+ Math.abs(left[1]-keypad[v][1]) 
            let right_compare = Math.abs(right[0]-keypad[v][0])+ Math.abs(right[1]-keypad[v][1]) 
            
           left_compare < right_compare ? left_press(v) : left_compare > right_compare ? right_press(v) : hand == 'left' ? left_press(v) : right_press(v);

            
        }
    })
    
    
    
    
    
    
    return answer
    
    
    
    
    
    
    

    }
    


