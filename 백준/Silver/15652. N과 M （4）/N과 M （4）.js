const [N, M] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
const back15652 = (N, M) => {
  let visited = Array(N+1).fill(false);
  let arr = Array(M).fill(0);
  let result = "";

  const dfs = (k,s) => {

    if (k===M) {

      console.log(arr.join(" "))
      return;
    }

    for (let i = s; i <= N; i++) {
  
      
      arr[k] = i;
      
      dfs(k + 1,i);
    

    }
  };

  dfs(0,1);

};

back15652(N, M);