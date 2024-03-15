function solution(a, b) {
    var answer = 0;
    const absum = parseInt(a.toString()+ b.toString()) 
    const ab2 = 2 * a * b 
    
    
    
    return absum > ab2  ? absum : absum===ab2 ? absum:ab2  
}