function solution(keymap, targets) {
    var answer = [];
    
    
    let keyindex = {} 
    
   for(let x of keymap){
       [...x].forEach((v,i)=>{
           
           if(keyindex[v]){
               
               keyindex[v] = Math.min( keyindex[v],i+1)
           }
           else{
               keyindex[v] = i+1
           }
           
       })
   }
    
    
    return targets.map(v=>{
        
        let sum = 0 
        let flag = true
        for(let x of v){
            
            if(keyindex[x]){
                sum+=keyindex[x]
            }
            else{
                flag = false
            }
            
            
        }
        
        return flag ? sum : -1
    })
    
    
    
    

}