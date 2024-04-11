

function solution(progresses, speeds) {
    var answer = [];
    
    
    const beforeProg =  progresses.map((e,i)=>Math.ceil((100-e)/speeds[i]))
    
    let e = beforeProg[0] , cnt = 0 
    
    for(let i = 0 ; i< beforeProg.length; i++){
        
        if(e>=beforeProg[i]){
            cnt++
        }
        else{
            answer.push(cnt)
            e = beforeProg[i]
            cnt = 1 
        }
        
        
    }
    if(cnt){
        answer.push(cnt)
    }
    
    return answer;
}