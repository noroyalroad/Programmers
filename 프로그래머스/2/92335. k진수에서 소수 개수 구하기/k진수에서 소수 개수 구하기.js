// 소수 판단  
// 자기 자신외에 나누어 지지 않는 수 

const isPrime = (n) =>{
    
    let cnt = 0
    for(let i = 2 ; i<=Math.sqrt(n) ; i++ ){
        if(n%i===0){
            return false
        }
    }
   return true
}
function solution(n, k) {
    var answer = 0;
    
    const N = (n).toString(k).split("0")
    
    for(let x of N){
        console.log(x)
        if(+(x)!==1 && +(x)!==0){
            
            if(isPrime(+(x))){
                answer++
            }
        }
       
    }
    // console.log(isPrime(12))
    
    return answer;
}
