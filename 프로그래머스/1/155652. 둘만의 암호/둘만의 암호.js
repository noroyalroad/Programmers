function solution(s, skip, index) {
    var answer = '';
    
    let alpha = 'abcdefghijklmnopqrstuvwxyz' 
    
    let skipalpha = [...alpha].filter(v=>!skip.includes(v))
    // console.log(skipalpha.length)
    
    for(let x of s){
        let indexs = skipalpha.indexOf(x)+index 
        
        
        
        
        answer+=skipalpha[indexs%skipalpha.length]
        
       
    }
    
    
    return answer;
}