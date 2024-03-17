function solution(n, lost, reserve) {
    var answer = 0;
    const losts = lost.filter(v=>!reserve.includes(v)).sort((a,b)=>a-b)
    const reserves =reserve.filter(v=>!lost.includes(v)).sort((a,b)=>a-b)
    
    for(let i = 0; i<losts.length; i++){
        for(let j = 0 ; j<reserves.length;j++){
            if(losts[i]-1===reserves[j] || losts[i]+1===reserves[j])
                {
                    losts.shift()
                    console.log(losts)
                }
        }
    }
    return n-losts.length;
}