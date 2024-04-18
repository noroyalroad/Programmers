// n이 진법
// t *m 이 숫자   0~ t*m 
// 16진수 문자는 대문자  


// p 가 1일때 0부터 p가 2일 때 1부터  즉  p- 1이 시작 
// 그리고 다음턴은 +m 의 위치가 다음턴 
// 문자길이는 t까지  
// 1111
function solution(n, t, m, p) {
    let answer = "" 
    
    
    const tArray = Array.from({length : t*m}, (_,i)=> i).map(v=>v.toString(n)).join("").toUpperCase().split("")
    
    
    for(let i = p-1 ; i< tArray.length ; i+=m){
        answer+= tArray[i]
        if(answer.length===t){
            break
        }
    }
    
    
    
    
    
    return answer;
}