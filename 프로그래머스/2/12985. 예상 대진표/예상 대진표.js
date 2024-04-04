function solution(n,a,b)
{
    var answer = 0;
    
    while (a !== b){
        a = Math.ceil(a / 2); // 올림을 해야 정확히 반으로 나눌 수 있음
        b = Math.ceil(b / 2); // 올림을 해야 정확히 반으로 나눌 수 있음
        answer++;
    }
           
    return answer;
}
