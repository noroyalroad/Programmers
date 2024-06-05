const solution = (s, n) => {
  const upperalpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const loweralpha = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";

  let answer = "";
  let iii;

  for (let i of s) {
    let iii = 0;

    if (i === i.toLowerCase() && i !== " ") {
      iii = loweralpha.indexOf(i);

      answer += loweralpha.charAt(iii + n);
    } else if (i === i.toUpperCase() && i !== " ") {
      iii = upperalpha.indexOf(i);

      answer += upperalpha.charAt(iii + n);
    } else {
      answer += " ";
    }
  }
  return answer;
};