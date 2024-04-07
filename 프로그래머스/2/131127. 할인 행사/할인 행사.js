// 1. 10일 연속으로 일치할 경우 
// 2. 모든 물건을 갯수도 정확하게 살 수 있어야 한다. 

// 
// 1. 사고 싶은 물건과 갯수를 객체로 만듬
// 2. discount를 10개씩 뽑음 
// 3. 일치하느 물건이 있다면 물건의 갯수를 하나씩 내린다. 
//4. 모든 물건의 갯수가 0이라면 cnt ++ 
//1 
const makeObj = (w, n) =>{
    
    let wantObj = {} 
    
    for(let i = 0 ; i< w.length; i++){
       wantObj[w[i]] = n[i]   
    }
    
    
    return wantObj
}

function solution(want, number, discount) {
    var answer = 0;
    
    //2 
    
    for(let i = 0 ; i<discount.length; i++){
        
        const TEN = discount.slice(i, i+10) 
        let cc = makeObj(want, number)
        if(TEN.length===10){
            for(const X of TEN){
                //3 
                if(cc[X]){
                    cc[X]--
                }
            }
            //4
            if(Object.values(cc).every(v=>v===0)){
                answer++
            }
        }
    }
    return answer;
}