function solution(array) {
    var answer = 0;
    
    let arr = {} 
    
    for(let x of array){
        
        if(arr[x]){
            arr[x]++
        }
        else{
            arr[x]=1
        }
    }
    
    let temp = []
    
    for(let x in arr){
        
        temp.push(arr[x])
        
    }


    let max = Math.max(...temp)
    
 
    let temp2 = []
    for(let x in arr){
        
         if(arr[x]===max){
             temp2.push(x)
             
         }
        
        
    }
    
    return temp2.length > 1 ? -1 : Number(temp2[0])
    
   
    
    

}