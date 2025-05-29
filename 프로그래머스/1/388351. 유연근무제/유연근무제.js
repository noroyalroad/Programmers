// 출근 희망 시각 + 10분
//모든 시각은 시에 100을 곱하고 분을 더한 정수로 표현됩니다. 예를 들어 10시 13분은 1013이 되고 9시 58분은 958이 됩니다.
// 주말은 신경 안 씀 
function roundIfNeeded(num) {
  const hundreds = Math.floor(num / 100) * 100;
  const rest = num % 100;

  if (rest >= 60) {
    const newHundreds = hundreds + 100;
    const remainder = rest - 60; // or just use 5 if that's consistent
    return newHundreds + remainder;
  } else {
    return num;
  }
}

function solution(schedules, timelogs, startday) {
    var answer = 0;
    const obj = {};
    schedules.forEach((_, index) => {
    obj[index] = 0;
});
    
    
   
    
    for(let i=0; i< schedules.length; i++){
        
        for(let j= 0; j<timelogs[i].length; j++){
          
            console.log( roundIfNeeded(schedules[i]+10),roundIfNeeded(  timelogs[i][j]), i)
            if(roundIfNeeded(schedules[i]+10)>=roundIfNeeded(  timelogs[i][j])){
                
                obj[i]++
                 
            }
            else if((j + startday) % 7 === 6 || (j + startday) % 7 === 0){
                obj[i]++
            }
            
    
            
//             if ((j + startday) % 7 === 6 || (j + startday) % 7 === 0) {
//              continue;
//             }

//             else{
//                 console.log(i,schedules[i] ,timelogs[i][j] , (j+startday)%7)
                
//                 if(schedules[i]+10>=timelogs[i][j]){
                    
//                 }
//             }
            
            
            // 6, 0 은 제외 
            // timelog가 스케듈에 10을 더해도 크지 않아야함 
            
            
            
        }
    }
    
    
    
     console.log(obj)
    
    Object.values(obj).forEach(i => {
    if (i === timelogs[0].length) {
        answer++;
    }
});
    
    
    return answer;
}
//   금     토   일     월    화   수    목
//   5      6   7     1     2   3     4    7/8   7/9  7/10  7/11   7/5  7/6
//    0     1   2     3     4   5     6 
// [[710, 2359, 1050, 700, 650, 631, 659],
//  [800, 801, 805, 800, 759, 810, 809], 
//  [1105, 1001, 1002, 600, 1059, 1001, 1100]]

// 1. 