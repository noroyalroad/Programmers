const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n'); 
const N = Number(input.shift()); 
let stack = [];
let answer = [];
for(let i=0; i<N; i++){
   let orders = input[i].split(' ')
    if(orders.length === 2){
        let order = orders[0]; 
        let number = Number(orders[1]); 
        stackOrder(order, number); 
    }else{
        let order = orders[0];
        stackOrder(order, 0)
     }
   }

function stackOrder(order, number){
    if(order === 'push'){
        stack.push(number); 
    }else if(order === 'pop'){
        if(stack.length === 0){
            answer.push(-1)
        }else{
            answer.push(stack.pop())
        }
    }else if(order === 'size'){
           answer.push(stack.length);
    }else if(order === 'empty'){
        if(stack.length === 0){
            answer.push(1);
        }else{
            answer.push(0);
        }
    }else{
        if(stack.length === 0){
           answer.push(-1)
        }else{
           answer.push(stack[stack.length-1])
        }
    }
}
console.log(answer.join('\n'));