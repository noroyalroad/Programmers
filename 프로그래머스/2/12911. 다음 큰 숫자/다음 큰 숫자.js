function solution(n) {
    var answer = 0;
    
    let i = n ; 
    
    const ONE = n.toString(2).split("").filter(v=>v==="1").length
    while(true){
        i+=1 ; 
        let ONE1 = i.toString(2).split("").filter(v=>v==="1").length 
        
        if(ONE===ONE1){
            break ; 
        }
        
        
    }
        
    
        
    return i;
}