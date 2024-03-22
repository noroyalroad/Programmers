function solution(n, m, section) {
    let paint = Array.from({length: n}, () => 1);
    
    // section 배열의 요소를 이용하여 특정 위치에 페인트가 칠해졌음을 표시
    section.forEach(index => {
        paint[index - 1] = 0;
    });
    
    let cnt = 0;
    
    // 각 구역에 대해 페인트를 칠하는 과정
    for (let i = 0; i < n; i++) {
        if (paint[i] === 0) {
            cnt++;
            // m 간격으로 페인트를 칠함
            for (let j = i; j < Math.min(n, i + m); j++) {
                paint[j] = 1;
            }
        }
    }
    
    // 페인트 칠한 횟수 반환
   
    return cnt
}
