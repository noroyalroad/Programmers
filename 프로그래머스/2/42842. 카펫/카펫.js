//  
function solution(brown, yellow) {
    var answer = [];
    
    for(let bh = 1 ; bh< brown/2 + 1; bh++){
        let bw = (brown - 2 * bh +4)/ 2
        let [yh, yw] = [bh-2, bw -2] 
        
        if(yellow ===yh*yw && yellow + brown ===bh*bw ){
            return [bw, bh]
        }
    }
    
    
    
}

 