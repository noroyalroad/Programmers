//1231 일 때 하나 만들 수 있음 

// 뒤에서 4개 1231 
function solution(ingredient) {
    var answer = 0; 
    
    let ham = [] 
    
    for(let x of ingredient){
        
        ham.push(x) 
        
        if(ham.slice(-4).join("")==="1231"){
            answer+=1 
            ham.splice(-4) 
        }
    }
    return answer;
}