// choices	뜻
// 1	매우 비동의
// 2	비동의
// 3	약간 비동의
// 4	모르겠음
// 5	약간 동의
// 6	동의
// 7	매우 동의


// survey[i]의 첫 번째 캐릭터는 i+1번 질문의 비동의 관련 선택지를 선택하면 받는 성격 유형을 의미합니다.
// survey[i]의 두 번째 캐릭터는 i+1번 질문의 동의 관련 선택지를 선택하면 받는 성격 유형을 의미합니다.
function solution(survey, choices) {
    
    let score =  {
        1: 3 ,  
        2: 2 , 
        3 : 1, 
        4 : 0 ,
        5: 1 ,
        6: 2 ,
        7: 3 
          
    }
    let mbti = {
        "R" : 0 ,
         "T" : 0, 
         "C" : 0 ,
        "F" : 0,
        "J" : 0, 
        "M" : 0,
        "A" :0, 
        "N" : 0
        
    }
    var answer = '';
    
    survey.forEach((v,i)=>{
        if(choices[i]<4) {
            mbti[v[0]] +=  score[choices[i]]
             
        }
        else {
            mbti[v[1]] += score[choices[i]]
            
        }
    })
    
    
    for(let x of ["RT","CF", "JM","AN"]){
             
       console.log(mbti[x[0]] ,mbti[x[1]])
        
        if(mbti[x[0]] ===mbti[x[1]]){
            answer+=x[0]
        }
        else if(mbti[x[0]] >mbti[x[1]]){
            answer+=x[0]
        }
        else{
            answer+=x[1]
        }       
    }
    
    return answer;
}