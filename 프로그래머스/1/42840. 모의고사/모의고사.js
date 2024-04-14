//1. 최대치로 생각했을 때 문제가 10000문제 

// 2. while 문으로 
 // 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.
function solution(answers) {
    let answer = [];
    let  F_1 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5] ,F_2 = [2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5] , F_3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    let i = 0
    let cntTotal = { 
        1: 0 ,
        2 : 0,
        3 :0 
    }
    while(i<answers.length){
        
        if(F_1[i% F_1.length]===answers[i]){
            cntTotal["1"]++
        }
        if(F_2[i% F_2.length]===answers[i]){
            cntTotal["2"]++
        }
        if(F_3[i% F_3.length]===answers[i]){
            cntTotal["3"]++
        }
        
        i++
        
    }
       
    const MAX = Math.max(...Object.values(cntTotal) )
    
    for(const f in cntTotal){
        if(cntTotal[f]===MAX){
            answer.push(Number(f))
        }
        
    }
   
 
    return answer
}