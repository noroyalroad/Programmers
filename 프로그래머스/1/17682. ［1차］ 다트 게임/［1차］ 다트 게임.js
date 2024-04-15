function solution(dartResult) {
    const token = dartResult.split(/([0-9]+[SDT][*#]?)/g).filter((item) => item !== "");
  let answer = 0;
  let an = [];
  console.log(token);

  token.forEach((item, index, array) => {
    let a = item.match(/(\d{1,2})([SDT])([*#]?)/);

    console.log(a);

    let score = parseInt(a[1]);
    const bonus = a[2];
    let option = a[3];

    if (bonus === "S") {
      score = Math.pow(score, 1);
    } else if (bonus === "D") {
      score = Math.pow(score, 2);
    } else if (bonus === "T") {
      score = Math.pow(score, 3);
    }

    if (option === "*") {
      score *= 2;
      an[index - 1] = an[index - 1] * 2;

      // 현재 값에 먼저 2배를 적용한 후에 이전 값에도 2배 적용

      // if (index > 0) {
      //   array[index - 1] = answer * 2;
      // }
    } else if (option === "#") {
      score *= -1;
    }
    an.push(score);
  });

  return an[0] + an[1] + an[2];
}