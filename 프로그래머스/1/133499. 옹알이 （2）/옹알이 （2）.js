
function solution(babbling) {
    
    
    var answer = 0; 
    
    const BABB  = ["aya", "ye", "woo", "ma"]  
    
    for(let i = 0 ; i< babbling.length; i++){
        for(let j = 0 ; j< BABB.length ;j ++){
            
            if(babbling[i].includes(BABB[j].repeat(2))){
                break
            }
            babbling[i] =  babbling[i].replaceAll(BABB[j],"1")
        }
    }
    
    
    
    
    
    
    return babbling.map(v=>v.replaceAll("1","")).filter(v=>v==="").length;
}