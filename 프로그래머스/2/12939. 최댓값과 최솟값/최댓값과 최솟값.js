function solution(s) {
    
    
    let answer = "" 
    const S = s.split(" ").map(v=>Number(v))
    
    const [min, max] = [Math.min(...S), Math.max(...S)]
    
    
    
    
    
    return [min,max].join(" ");
}