
// 두 쌍의 합이 x 와 같다면 count와 start를 ++ 해준다.
// 두 쌍의 합이 x보다 크면 큰 쪽에서 값을 뺀다 (end--)
// 두 쌍의 합이 x보다 작으면 작은 쪽에서 값을 더한다 (start++)
// 두 포인터의 인덱스가 같으면, 더이상 계산할 쌍이 없다는 것이므로 계산을 마친다.



function solution(people, limit) {
    let count = 0 
    
    
    let start  = 0 , end = people.length -1 
    let cnt  = 0 
    let sum =0 
    let no = []
    people.sort((a,b)=> a-b)
    while(start<=end){
        
       sum  = people[start] + people[end] 
       
        if(sum <= limit){
            
            start ++ 
            end --
            
            
        }
        else if(sum>limit){
            end--
          
        }
       count++
        
        
        
             
    }
    // 1. answer의 크기에 따라     *2  
    // 2. people 크기에서  1번뺀다  
    //  그리고 1 + 2 합쳐서 리턴  
    
 
    console.log(people)
    // console.log(cnt)
    
    
    return  count 
}