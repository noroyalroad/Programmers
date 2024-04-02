// 1. 끝말잇기를 잘못한 경우
// 2. 이미 나온 단어 말한 경우


function solution(n, words) {
    var answer = []; 
    
    
    
    for(let i=1 ;i<words.length ; i++){
        
        
        
        // 1 
        let  fir  = words[i-1] 
        let  sec =  words[i]
        
        
        //  가장 먼저 탈락하는 사람의 번호와 그 사람이 자신의 몇 번째 차례에 탈락하는지를 
        
        if(fir[fir.length-1] !== sec[0]){ 
            
            //짝수번 째는 2빠따 
            // 홀수 번쨰 첫빠따 
            return [ (i%n)+1 , Math.floor((i/n)+1) ]
            
          
        }
        
        
        
       if(words.indexOf(sec)!==i){
           return [ (i%n)+1 , Math.floor((i/n)+1) ]
           
       }
    }

   

    return [0,0];
}