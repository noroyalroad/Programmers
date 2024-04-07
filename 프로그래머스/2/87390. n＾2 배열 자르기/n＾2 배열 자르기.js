// [ [1, 2, 3] [2,2,3], [3,3,3]]

// left 2 = > [0, 2] => 3 
// left 3 = > [1, 0] => 2
// left 4 = > [1, 1] => 2 
// left 5 = > [1, 2] => 3 


// -> 좌표값에서  max + 1이  x, y의 값이 된다 
// 2, 3, 4 , 5의 좌표는 어떻게 구하나 
//  x의 값은 left / n 
// y의 값은  left % n 

function solution(n, left, right) {
     let arr = Array.from({length: right-left+1}, (_,i)=>left+i)
    
    
    return arr.map(v=> Math.max(Math.floor(v/n),v%n)+1);
}


