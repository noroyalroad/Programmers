// OO 연구소는 한 번에 K 칸을 앞으로 점프하거나, (현재까지 온 거리) x 2 에 해당하는 위치로 순간이동을 할 수 있는 특수한 기능을 가진 아이언 슈트를 개발하여 판매하고 있습니다.


function solution(n)
{
   let answer = 1 
   
   
   while(n!==1){
       
       n /=2 
       
       
       if(n%1!==0){
           
           n = Math.floor(n)
           answer+=1
           
       }
   }

    return answer;
}