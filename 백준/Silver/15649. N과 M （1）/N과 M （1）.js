const [N, M] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
const back15649 = (N, M) => {
  let visited = Array(N.length).fill(false);
  let arr = Array(M.length).fill(0);
  let result = "";
  const dfs = (k) => {
    if (k === M) {
      
      console.log(arr.join(" "));

      return;
    }

    for (let i = 1; i <= N; i++) {
      if (visited[i]) {
        continue;
      }
      arr[k] = i;
      visited[i] = true;

      dfs(k + 1);
      visited[i] = false;
    }
  };

  dfs(0);
};

back15649(N, M);