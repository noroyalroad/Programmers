
// survey[i]의 첫 번째 캐릭터는 i+1번 질문의 비동의 관련 선택지를 선택하면 받는 성격 유형을 의미합니다.
// survey[i]의 두 번째 캐릭터는 i+1번 질문의 동의 관련 선택지를 선택하면 받는 성격 유형을 의미합니다. 


// choice[i] 가 4보다 크면 동의 mbti 점수   작으면 비동의 mbbti 점수

function solution(survey, choices) {
    var answer = '';
    
    
    let score = {
        
        1: 3,
        2: 2,
        3: 1,
        4: 0,
        5: 1,
        6: 2,
        7: 3
 
    }
    
    let mbti ={}
    for(let x of "RTCFJMAN"){
        mbti[x]=0
    }
    
    
    survey.forEach((v,i)=>{
        
        if(choices[i]>4){
            mbti[v[1]] += score[choices[i]]
        }
        else{
            mbti[v[0]] += score[choices[i]]
            
        }
        
        
    })
    
    for(let x of ["RT","CF","JM","AN"]){
        
        if(mbti[x[0]]<mbti[x[1]]){
            answer+=x[1]
        }
        else if(mbti[x[0]]===mbti[x[1]]){
            answer+=x[0]
        }
        else{
            answer+=x[0]
        }
        
        
    }
    
    
    
    return answer;
}