const obj = (str) =>{
    
    
    let strObj = {} 
    
    str.forEach(v=>{
        
        if(strObj[v]){
            strObj[v]++
        }
        else{
            strObj[v] =1 
        }
    })
    
    return strObj
}



function solution(str1, str2) {
    var answer = 0;
    
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    let str_1 = []
    let str_2 = []
    const regex = /^[a-z]+$/
    for(let i = 0 ; i <str1.length-1; i++){ 
        let ss = str1.substring(i,i+2) 
        // console.log(ss)
        // console.log(regex.test(ss))
        if(!regex.test(ss)){
            continue
        }
        else{
            str_1.push(ss)
        }
        // console.log(ss)
    }
    
    for(let i = 0 ; i <str2.length-1; i++){ 
        let ss = str2.substring(i,i+2) 
       if(!regex.test(ss)){
            continue
        }
        else{
            str_2.push(ss)
        }
        
        // console.log(ss)
    }
    // console.log(str_1)
    const str1Obj = obj(str_1)
    const str2Obj = obj(str_2)

    // console.log(str1Obj) 
    // console.log(str_2)
    // console.log(str2Obj) 
    
    // 합집합 만들기 
    
    let hap = new Set([...str_1, ...str_2]) 
    // console.log(hap)
    let union = []
    let intersection = [] 
    // let  = 0 
    // let max 
    hap.forEach(v=>{
        //  console.log(v, "v")
        // console.log(str_1 ,str_2 , "dddd") 
        
        let s_1 = str_1.filter(e=>e===v) 
        let s_2  = str_2.filter(e=>e===v)
        if(s_1.length >=s_2.length){
            union.push(s_1)
        }
        
        else{
            union.push(s_2)
        }
        
        if(s_1.length >=s_2.length){
           intersection.push(s_2)
        }
         else{
            intersection.push(s_1)
        }
    })
    
    
    // console.log(  ," jjj")
//     hap.forEach(v=>{
        
//         if(str1Obj[v]&& str2Obj[v]){
            
//             for(let i = 0 ; i<Math.max(str1Obj[v], str2Obj[v]);i++){
//                 union.push(v)
                
//             }
           
//         }
//         if(str1Obj[v]&& str2Obj[v]){
//             for(let i = 0 ; i<Math.min(str1Obj[v], str2Obj[v]);i++){
//                 intersection.push(v)
                
//             }     
//         }
//         else{
//             // intersection.push(v)
//             union.push(v)
            
//         }
//     })
    
    
    
    
    // console.log(union, "합집합")
    // console.log(intersection, "교집합")
    // console.log(intersection.length, union.length )
    // console.log( Math.floor((intersection.length/ union.length) * 65536))
    // 합집합은 있으나  교집합은 있음   ! 
    
    // if(union.length=== 0 && intersection.length > 0 ){
    //     return  65536
    // } 
    // else if(union.length > 0 && intersection.length ===0){
    //     return  65536
    // }
    // else if(union.length === 0 && intersection.length ===0){
    //     return 65536
    // }
    // else{
    //     return Math.floor((intersection.length/ union.length) * 65536)
    // }
    
    
    
    return union.length > 0  &&  intersection.length > 0 ? Math.floor((intersection.flat().length / union.flat().length) * 65536 ) :  65536  ;
}


// [1,1,1,2,2,3,3] 
// [1,1,1,1,2,2,2,3,3,3] 
// 교집합 일 때는 min 
// 하집합 일 때는 max 

//aa1+aa2	AAAA12
// aa aa   aa : 2 
// aa aa aa   aa : 3 