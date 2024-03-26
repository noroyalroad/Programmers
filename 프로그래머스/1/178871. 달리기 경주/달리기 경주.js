// 현재 플레이어의 랭킹을 만든다 
// 그 랭킹을 가지고 callings에서 선수이름이 부를 때 마다 인덱스 변경 
function solution(players, callings) {
    var answer = [];
    let playerobj = {}
    players.forEach((v,i)=>{playerobj[v]=i})
    
    for(let name of callings){
        
       let rank = playerobj[name] 
       
       let temp =  players[rank-1] 
       players[rank-1]  = players[rank]
        players[rank] = temp 
        
        playerobj[players[rank-1] ] = rank -1
        playerobj[players[rank] ] =rank
        
    }
    
    return players;
}