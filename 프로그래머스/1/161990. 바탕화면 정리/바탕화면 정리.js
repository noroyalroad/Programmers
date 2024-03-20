
// 1. wallpaper를 순회하며 '#'이 있는 좌표 찾기
// 2. x, y 최소값 / 최대값 구하기
// 3. 조건에 맞게 배열에 넣기
function solution(wallpaper) {
    var answer = [];
    
    let temp   = [] 
    
    for(let i in wallpaper){
        for(let j in wallpaper[i]){
            if(wallpaper[i][j]==="#"){
                temp.push([i,j])
            }
        }
    }
    
    let xmin = Math.min(...temp.map(v=>v[0])) 
    let ymin =Math.min(...temp.map(v=>v[1])) 
    let xmax  = Math.max(...temp.map(v=>v[0])) 
    let ymax = Math.max(...temp.map(v=>v[1])) 
    
    return [xmin,ymin, xmax+1, ymax+1];
}



