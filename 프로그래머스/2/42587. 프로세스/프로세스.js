// [1,2,3,4,5]에서 3은 몇 번째에 실행되는가 
// 타켓 2  3번이  빠져나갈 수 있는 것인건 몇 번째인가 ?   
// 즉 3 보다 큰 숫자들이 없을 때를 빠져나간다. 
// 이제 빠져나갈 때 location이 일치하면 몇번째인지 


// 인덱스를 가지고 다녀야한다 . 
// 왜냐 예를 [1, 1, 9, 1, 1, 1 ] 에서 인덱스 0에 위치한 1이 빠져나갈 때는 언제인가와 인덱스 5번이 빠져나갈 때는 몇 번인지도 생각해야한다 . 
function solution(priorities, location) {
    let answer = 0 
    let find = priorities.map((priorities,i)=>{
        return {priorities,i}
    })
    
    
    const copyPriorities = [...priorities]
    
    
    while(find.length>0){
        
        
        const CURR = find.shift(), MAX_VALUE =  find.some(e=>e.priorities> CURR.priorities) 
        
        
        if(MAX_VALUE){
            find.push(CURR) 
        }
        // 이때가 큰 숫자가 없을 때  큰 숫자들이 빠져나올 때 
        else {
            answer++
            if((CURR.i===location)){
              break;
            }
           
            
            
        }
    }
    
    
    
    return answer;
}



 
