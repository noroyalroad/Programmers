
// 경화는 수확한 귤 중 'k'개를 골라 상자 하나에 담아 판매하려고 합니다.
//그런데 수확한 귤의 크기가 일정하지 않아 보기에 좋지 않다고 생각한 경화는 귤을 크기별로 분류했을 때 서로 다른 종류의 수를 최소화하고 싶습니다.
// 귤 종류 obj 
function solution(k, tangerine) {
    var answer = 0;
    
    const TANGERINE_TYPE = {} 
    
    for(const X of tangerine){
        
        if( TANGERINE_TYPE[X]){
            TANGERINE_TYPE[X]++
        }
        else{
            TANGERINE_TYPE[X] =1 
        }
    }
    let size = Object.values( TANGERINE_TYPE).sort((a,b)=>b-a)
    
    let i = 0 
    while(k>0){ 
        answer++
        k-=size[i]
        i++
        
     
       
        
    }
    
    console.log(answer)
    return answer;
}
// 