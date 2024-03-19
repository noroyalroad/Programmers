// 정렬 후 비교하며 같지 않다면 리턴 
function solution(participant, completion) {
    var answer = '';
    
    participant.sort() 
    completion.sort()
    
    for(let i =0; i<participant.length;i++){
        if(participant[i]!==completion[i]){
            return participant[i]
        }
    }
    
    console.log(participant, completion)
    
    return answer;
}