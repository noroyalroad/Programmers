function solution(participant, completion) {
    var answer = '';
    
    
    const part = participant.sort()
    const comp = completion.sort()
    
    
    for(let i =0; i<part.length ; i++){
        
        if(part[i]!==comp[i]){
            return part[i]
        }
    }
    
}