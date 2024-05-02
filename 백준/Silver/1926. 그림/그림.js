const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const paper = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));
const [N, M] = paper.shift();
const visited = Array.from(Array(N), () => Array(M).fill(false));
const ds = [[-1, 0], [1, 0], [0, 1], [0, -1]]; 

// BFS
const bfs = (x, y) => {
  let cnt = 1; 
  const queue = [[x, y]];
  while (queue.length) {
    const [cx, cy] = queue.shift();


    for (let i = 0; i < 4; i++) {
      const nx = cx + ds[i][0];
      const ny = cy + ds[i][1];
		
	 
      if (nx >= 0 && nx < N && ny >= 0 && ny < M && !visited[nx][ny] && paper[nx][ny]) {
        visited[nx][ny] = true; 
        cnt++; 
        queue.push([nx, ny]); 
      }
    }
  }
  return cnt; 
};

let painting = 0;
let width = 0; 
let maxWidth = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
		

    if (!visited[i][j] && paper[i][j]) {
      visited[i][j] = true; 
      painting++;
      width = bfs(i, j); 
      if (width > maxWidth) maxWidth = width; 
    }
  }
}

console.log(painting);
console.log(maxWidth);