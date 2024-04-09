// 선형대 행령의 곱 
// 00 00 01 10

function solution(arr1, arr2) {
    var answer = [[]]; 
    let test = []
    for(let i = 0 ; i< arr1.length ; i++){
        let temp = []
        for(let j = 0; j< arr2[0].length; j++){
            let sum = 0 
            for(let k = 0 ; k< arr1[0].length; k++){
                sum+= arr1[i][k] * arr2[k][j]
                 
            }
           temp.push(sum)
        }
        test.push(temp)
    }
    
    
    return test;
}


