function solution(keymap, targets) {
    
    let keyindex = {}
    
    for(let x of keymap){
        [...x].map((v,i)=>{
            if(keyindex[v]===undefined){
                keyindex[v]= i+1
            }
            else{
                keyindex[v]=Math.min(keyindex[v],i+1)
            }
        })
    }
 
   const answer =  targets.map(v=>{
       let sum = 0 
       let flag = true
       
       for(let x of v){
           
           if(keyindex[x]===undefined){
               flag =false
           }
           else{
               sum+=keyindex[x]
           }
       }
       return flag ? sum : -1
       
      
       
       
   })
   
    
    
    
    
    return answer ;
}