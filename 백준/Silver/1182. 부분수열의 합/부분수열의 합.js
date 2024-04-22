const [ N, S, ...arr ] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s+/).map(v => +v);

const solution = (n, s, arr) => {
  let answer = 0;

  const dfs = (sum, depth) => {
    if (depth === n) {
      return;
    }
    sum += arr[depth];
    if (sum === s) {
      answer++;
    }

    dfs(sum , depth + 1);
    dfs(sum - arr[depth], depth + 1);
  };

  dfs(0, 0);
  return answer;
};

console.log(solution(N, S, arr));