
// 1. 모든 문자열 소문자로 변환하기
// 2. 문자열 첫번째 글자만 대문자로 변환하기
// 3. 결론 도출
function solution(s) {
    var answer = '';
    
    let S = s.split("") 
    S = S.map(v=> v.toLowerCase()).join("")
    
    let SS = S.split(" ").map(v=>v.charAt(0).toUpperCase()+v.slice(1))
    
    
    
    
    return SS.join(" ");
}