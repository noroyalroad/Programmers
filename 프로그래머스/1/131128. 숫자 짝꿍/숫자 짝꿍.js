function solution(X, Y) {
    var answer = '';
    
    X = [...X] 
    Y=  [...Y]
    
    
    for(let i =0 ; i< 10 ;i++) {
        let xcnt = X.filter(v=>Number(v)===i).length
        let ycnt = Y.filter(v=>Number(v)===i).length 
        
       
        
        answer+=i.toString().repeat(Math.min(xcnt,ycnt))
        
        
        
    }
    
    console.log(typeof answer)
    
    if(answer===""){
        return "-1"
    }
    if([...answer].filter(v=>v==="0").length===answer.length){
        return "0"
    }
    else{
        return [...answer].sort().reverse().join("")
    }
    
}