const [N, M] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
const back15649 = (N, M) => {
  let visited = Array(N).fill(false);
  let arr = Array(M).fill(0);
  let result = "";
  const dfs = (k,s) => {
    if (k === M) {
      
      console.log(arr.join(" "));

      return;
    }

    for (let i = s; i <= N; i++) {
      if (visited[i]) {
        continue;
      }
      arr[k] = i;
      visited[i] = true;

      dfs(k + 1, i);
      visited[i] = false;
    }
  };

  dfs(0,1);
};

back15649(N, M);