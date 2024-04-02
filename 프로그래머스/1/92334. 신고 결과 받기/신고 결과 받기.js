// 1. 주어진 조건에 따라 한 유저가 같은 유저를 여러 번 신고한 경우는 신고 횟수 1회로 처리합니다 
// 2.
// 유저 ID	신고당한 횟수
// "muzi"	1
// "frodo"	2
// "apeach"	0
// "neo"	2 
//3 . 
// 유저 ID	유저가 신고한 ID	정지된 ID
// "muzi"	["frodo", "neo"]	["frodo", "neo"]
// "frodo"	["neo"]	            ["neo"]
// "apeach"	["muzi", "frodo"]	["frodo"]
// "neo"	없음	없음

function solution(id_list, report, k) {
    var answer = [];
    // 1. 
    const SET_REPROT = [...new Set(report)]
    
    // 2  3 
    
    let reportcount = {} 
    let reportobj = {}
    let sendmailcnt = {}
    
    for(let x of id_list){
        reportcount[x] =0
        reportobj[x] = []
        sendmailcnt[x] = 0
    }
    
    
    for(let x of SET_REPROT){
        
        const [WHO_R, PERSON_R] = x.split(" ") 
        
        reportcount[PERSON_R]++
        reportobj[WHO_R].push(PERSON_R)
    }
    
    
    // console.log(reportobj ,"1")
    // console.log(reportcount ,"2")
   
    
     
    for(let x  in reportcount){
        
        if(reportcount[x]>=k){
            
            for(let r in reportobj){
                
                if( reportobj[r].includes(x)){
                    sendmailcnt[r]++
                    
                }
            }
        }
       
       
       
       
    }
     // console.log(sendmailcnt)
    
    
    
    
    
    
    return  Object.values(sendmailcnt);
}