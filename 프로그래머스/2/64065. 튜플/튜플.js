// solution 
//0 , 튜플들을 배열화 한다 . 
//1 . { } 제거하고 튜플을 배열에 넣는다 
//2. 튜플의 크기로 오름차순 정렬
function solution(s) {
    var answer = []; 
    let tuples = []
    //1 
    s.slice(2,s.length-2).split("},{").forEach(e=>{
        
        const TUPLE  = e.split(",").map(v=>Number(v)) 
        tuples.push(TUPLE)
        
        
    })
    
    let te = tuples.sort((a,b)=>a.length-b.length)
    
    
    
    
    return [...new Set(te.flat())]
}