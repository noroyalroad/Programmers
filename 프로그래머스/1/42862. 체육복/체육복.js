
// 여분 체육복 가져온 학생은 다른 학생에게 빌려줄 수 없다.
// 1. lost와 reserve의 중복된 값을 빼준다.
// 2. 서로 비교를 위해 오름차순 정렬을 한다.
// 3. 중복된 값이 없는 상태에서 lost의 앞 뒤 값 reserve와 비교한다.
// 4. lost가 reserve에게 빌렸으면 빌린 lost는 제외시킨다.
// 5. n - 빌리지 못한 lost = return
function solution(n, lost, reserve) {
    var answer = 0;
    
    const lostfilter  = lost.filter(v=>!reserve.includes(v)).sort((a,b)=>a-b)
    const reservefilter = reserve.filter(v=>!lost.includes(v)).sort((a,b)=>a-b)
    
    for(let i = 0 ; i<lostfilter.length; i++){
        for(let j =0 ; j<reservefilter.length;j++){
            
            
            if(lostfilter[i]-1===reservefilter[j] ||lostfilter[i]+1===reservefilter[j]){
                lostfilter.shift()
            }
            
        }
    }
    
    
    
    return n-lostfilter.length;
}