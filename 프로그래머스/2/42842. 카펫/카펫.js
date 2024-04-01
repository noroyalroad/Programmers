//  카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.

function solution(brown, yellow) {
    var answer = [];
    
    let total = brown+ yellow
    
    
    
    for(let w = 3 ; w < total ; w++){
        for(let h= 1 ; h <total; h++ ){
            if(w>=h && w*h===total && (w-2 )* (h -2 ) ===yellow){
                return [w,h]
            }
        }
    }
    
    }

 