function solution(babbling) {
    var answer = 0;
    
    
    const mm = ["aya", "ye","woo","ma"]   
    
   for(let i =0 ; i< babbling.length;i++){
       for(let j= 0; j< mm.length;j++){
           babbling[i] = babbling[i].replace(mm[j],"1")
       }
   }
    return babbling.map((item)=>item.replaceAll("1","")).filter((item)=>item==="").length
   
   
}