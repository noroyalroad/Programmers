function solution(today, terms, privacies) {
    var answer = [];
    
    const termsobj = {} 
    
    terms.forEach((v,i)=>{
        const vv = v.split(" ") 
        termsobj[vv[0]] =Number(vv[1])
    })
    
    privacies.forEach((v,i)=>{
        
        let privacy = v.split(" ") 
        const ymd =  new Date(privacy[0].split(".").join("-"))
        
        
       
        // console.log(ymd.getMonth()+termsobj[privacy[1]])
        ymd.setMonth( (ymd.getMonth()+termsobj[privacy[1]]))
        ymd.setDate(ymd.getDate()-1)
        
        if(ymd.getDate()>28){
            ymd.setDate(28)
        }
        
        
        let Today = new Date(today.split(".").join("-")) 
        
        
        if(Today>ymd){
            answer.push(i+1)
        }
    })
    
    
    return answer;
}