
// 1. 동, 서, 남, 북에 따른 좌표 생성
// 2. park_x, park_y 최대 좌표 구하기
// 3. 시작점 위치 구하기
// 4. routes에 따른 거리 구하기
// 5. 조건이 충족할 때만 위치 업데이트


function solution(park, routes) {
    var answer = [];
    
    const  DIRECTION = { 
        
        "E" : [0,1] ,
        "W" : [0,-1] ,
        "S" : [1,0] ,
        "N" : [-1,0]
    }
    
    const [PARK_X, PARK_Y ] = [park.length-1, park[0].length-1]
    
    let start = [] 
    
    for(let i=0; i<park.length; i++){
        for(let j=0; j< park[i].length ; j++){
            if(park[i][j]==="S"){
                start = [i,j]
            }       
        }
    }
    
    routes.forEach(v=>{
        
        let [nx, ny] = [start[0], start[1]] 
        let [dir, distance] = v.split(" ") 
        let flag =true
        
        for(let i=0; i<Number(distance);i++){
            
            nx+=DIRECTION[dir][0] 
            ny+=DIRECTION[dir][1] 
            
            if(nx< 0 || nx> PARK_X || ny< 0 || ny>PARK_Y || park[nx][ny]==="X"){
                
                flag = false
                break ; 
                
            }   
        }
        
        if(flag){
            
            start = [nx, ny]
        }
        
    })
    return start;
}