// 대소문자 구분을 하지 않는다
// hit 일때 que에  push 하고 + 5  
// 만약 큐 사이즈가 캐시 사이즈보다 크다면 앞에 원소 shift 
// 
// miss 
// size 3 
// "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul" 
// miss 원소 없애고 뒤에 push 
function solution(cacheSize, cities) {
    let answer = 0;
    
    let Que = [] 
    
    cities = cities.map(v=> v.toLowerCase())
    
    cities.forEach(v=>{
        
        let flag = Que.includes(v) ;
        
        if(!flag){
            
            Que.push(v)
            
            if(Que.length > cacheSize){
                Que.shift()
            }
            
            answer+=5
                    
        }
        else{
            
            Que = Que.filter(e=>e!==v)
            Que.push(v)
            answer+=1
                         
        }      
        
    })
    return answer;
}