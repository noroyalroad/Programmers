//인덱스 활용 
// 
function solution(elements) {
  let answer = 0;
    let temp = [];

    
    for(let i=1; i<=elements.length; i++) {
        for(let j=0; j<elements.length; j++) {
            let value = elements.slice(j, j+i);

            // 2)
            if(j+i > elements.length) {
                value = [...value, ...elements.slice(0, j+i-elements.length)]
            }

            // 3)
            temp.push(value.reduce((sum, e) => sum + e, 0));
        }
    }

    
    temp = [...new Set(temp)];

    
    answer = temp.length;

    return answer;
}