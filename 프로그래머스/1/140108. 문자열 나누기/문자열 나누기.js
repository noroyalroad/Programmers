// 음.. 문제의 설명에 부족함은 없어보입니다. 첫문자와 같은 문자의 개수와 다른 문자의 개수를 세면서 문자열을 읽어나가는데 그 두 개수가 같아지면 그때까지 읽은 문자열을 분리시키고 같은 작업을 반복합니다. 그렇게 문자열의 끝까지 읽었을 때 문자열의 개수를 물어보는 문제입니다. 설명이 똑같죠. 설명 그대로 행하시면 된다는 얘기입니다.

// 이해가 되지 않는다면 설명을 모두 읽고나서 이해하려고 하지 말고 각단계별로 이해해보세요. 문제설명도 이해가 잘 되지 않을까봐 점으로 단계를 구별했으니까 단계별로 이해해보면서 자신이 이해한 것을 입출력 예의 설명과 대조하면서 문제의 의도를 맞춰보세요.


function solution(s) {
    var answer = 0;
    
    
    let start = "" 
    let s_count =  0
    let d_count = 0 
    
    for(let x of s){
        
        if(start===""){
            start=x 
            s_count =1 
            continue
            
        }
        
        if(start===x){
            s_count+=1
        }
        else{
            d_count+=1
        }
        
        if(s_count===d_count){
            start =""
            s_count=0
            d_count=0
            answer+=1
        }
        
        
    }
    if(start!==""){
        answer+=1
    }
    return answer;
}