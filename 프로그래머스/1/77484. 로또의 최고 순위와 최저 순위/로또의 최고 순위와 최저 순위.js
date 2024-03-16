//1. 일단 맞은 갯수로 등수 체크 
//2. 그리고 0으로 되어있는 숫자 갯수 체크 
// 1+2  맞은 갯수 등수 
function solution(lottos, win_nums) {
    var answer = [];
    
    const lank = {
        
        "6" : 1,
        "5" : 2 ,
        "4" : 3 ,
        "3" : 4,
        "2" : 5,
        "1" : 6,
        "0" : 6, 
    }
    
    
    const same_num = lottos.filter(v=>win_nums.includes(v)).length
    const zero_num = lottos.filter(v=>v===0).length
    
    
    
    
    
    
    return [lank[same_num+zero_num],lank[same_num]];
}