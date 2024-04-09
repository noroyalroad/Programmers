
// 코니는 각 종류별로 최대 1가지 의상만 착용할 수 있습니다.

function solution(clothes) {
    let  answer = 1;
    const CLOTHES = {} 
    clothes.forEach(v=>{
        
        if(CLOTHES[v[1]]){
            CLOTHES[v[1]]++
        }
        else{
            CLOTHES[v[1]] =1 
        }
        
        
    })
    
    for(let type in CLOTHES){
        
        answer*= CLOTHES[type] +1 
    }
    
    
    return answer-1;
}