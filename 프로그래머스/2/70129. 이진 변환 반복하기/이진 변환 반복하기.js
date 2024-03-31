function solution(s) {
    var answer = [];
    let zero = 0 
    let  i = 0 
    
    while(s!=="1"){
        
        let ss = [...s].filter(v=>v!=="0")
        zero += [...s].filter(v=>v==="0").length
        let len = ss.length
        s = len.toString(2)
        
         i++ 
        
        // console.log(ss, s, len, zero)
    }
    
    return [i,zero];
}