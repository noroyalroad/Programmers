// 인덱스가 하나씩 올라갈때 마다 판단 하는거 
// 
function check(str) {
    const stack = [];
    for (const x of str) {
        if (x === "[" || x === "{" || x === "(") {
            stack.push(x);
        } else {
            if (stack.length === 0) return false;
            const top = stack.pop();
            if ((x === "]" && top !== "[") || (x === "}" && top !== "{") || (x === ")" && top !== "(")) {
                return false;
            }
        }
    }
    return stack.length === 0;
}


function solution(s) {
    let stack  =[]
    
    
    var answer = 0; 
    
    for(let i = 0 ; i < s.length; i++){
        
        const rotatedStr = s .slice(i) + s.slice(0, i);
        if(check(rotatedStr)){
            answer++
}
        
    }
    
    
    
     
    return answer
    // 
}
// 