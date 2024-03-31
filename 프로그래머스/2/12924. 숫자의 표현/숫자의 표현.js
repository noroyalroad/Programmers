function solution(n) {
    let answer = 0;
    
    for (let a = 1; a <= n; a++) {
        if ((n % a === 0) && ((n / a) % 2 === 1)) {
            answer++;
        }
    }
    
    return answer;
}
