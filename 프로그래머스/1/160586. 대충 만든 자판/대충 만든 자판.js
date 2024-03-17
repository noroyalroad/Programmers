// ["ABCE"], ["ABDE"]
// [-1]
// 실행한 결괏값 [3]이 기댓값 [-1]과 다릅니다.

// ["BC"], ["AC", "BC"]
// [-1, 3]
// 실행한 결괏값 [1,3]이 기댓값 [-1,3]과 다릅니다.
// 알파벳이 키가 되고 벨류는 인덱스+ 1 이 된다
// 같은 문자가 여러번 할당 되어 있을 수 있는데 이 경우는 최소 인덱스로 벨류를 할당한다 
// target에 있는 알파벳들을 벨류로 바꾼 뒤 합 
// 만들 수 없는 알파벳은 -1 반환 즉 keyindex에 없는 알파벳은 -1 반환

function solution(keymap, targets) {
    var answer = [];
    
    let keyindex = {} 
    
    
    for(let x of keymap){
        [...x].forEach((v,i)=>{
            if(keyindex[v]===undefined){
                keyindex[v]= i+1
            }
            else{
                keyindex[v]=Math.min(keyindex[v],i+1)
            }
        })
        
    }
    
    const re = targets.map((v,i)=>{
      let flag  = true 
      let sum = 0 
     
      v.split("").forEach(s=>{
          if(keyindex[s]===undefined){
              flag= false
          }
          else{
              sum+=keyindex[s]
          }
      })
      
      return flag ? sum : -1
        
    })
    return re;
}