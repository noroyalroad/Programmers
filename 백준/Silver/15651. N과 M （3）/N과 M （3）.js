const [N, M] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
const back15651 = (N, M) => {
  let visited = Array(N).fill(false);
  let arr = Array(M).fill(0);
  let result = "";

  const dfs = (k) => {
      
    if (k === M) {

      result+= `${arr.join(' ')}\n`;

      return;
    }

    for (let i = 1; i <= N; i++) {
      
      arr[k] = i;
      

      dfs(k + 1);
      
    }
  };

  dfs(0);
    console.log(result)
};

back15651(N, M);