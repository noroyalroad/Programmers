function solution(n) {
    var answer = 0;
    
    let dp = new Array(n+1)
    
    dp[0] = 0 
    dp[1] = 1 
    dp[2] = 1 
    
    
    for(let i =3 ; i<=n ; i++){
        
        dp[i] = (dp[i-1]+dp[i-2])%1234567
        
    }
    console.log(dp[n])
    
    return dp[n];
}