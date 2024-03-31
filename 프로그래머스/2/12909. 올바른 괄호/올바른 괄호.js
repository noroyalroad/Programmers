function solution(s){
    var answer = true;
    
    let cnt = 0

   const S  =s.split("")
   
   
   for(let x of S){
       
       if(x==="("){
           
           cnt+=1
           
       }
       else if(")"){
           cnt+=-1
       }
       
       if(cnt===-1){
           return false
       }
       
           
   }
   
    
    

    return cnt=== 0? true : false;
}