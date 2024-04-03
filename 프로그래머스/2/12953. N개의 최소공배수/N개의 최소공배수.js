
// , n개의 수의 최소공배수는 n 개의 수들의 배수 중 공통이 되는 가장 작은 숫자가 됩니다
function getPrimes(n) {
    const primes = [];
    for (let i = 2; i <= n; i++) {
        while (n % i === 0) {
            primes.push(i);
            n /= i;
        }
    }
    return primes;
}
function solution(arr) {
    const maxPrimeCounts = {};
    for (const num of arr) {
        const primes = getPrimes(num);
        const primeCounts = {};
        for (const prime of primes) {
            primeCounts[prime] = (primeCounts[prime] || 0) + 1;
            maxPrimeCounts[prime] = Math.max(maxPrimeCounts[prime] || 0, primeCounts[prime]);
        }
    }
    
    let lcm = 1;
    for (const prime in maxPrimeCounts) {
        lcm *= Math.pow(prime, maxPrimeCounts[prime]);
    }
    
    return lcm;
}