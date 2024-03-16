// 
function solution(s) {
    var answer = 0;
    
    let same = 0 
    let diff = 0 
    let start = "" 
    
    s.split("").forEach((v)=>{ 
        
        if(start===""){ 
            start = v
            same+=1
            
        }
        else if(start ===v){
            same+=1 
           
        }
        else{
            diff+=1
        }
        if(same===diff){
            same = 0
            diff = 0
            start = ""
            answer+=1 
        }
        
    })
    
    if(same!==0 || diff !==0){
        answer+=1
}
    
    
    
    
    return answer
}