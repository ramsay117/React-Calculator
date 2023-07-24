export default function (preview, result) {
  const exp = preview.split(' ').filter(item => item != '');
  exp.push(result);
  if (exp.length == 1) {
    return +result;
  }
  let res = +exp[0];
  for (let i = 1; i < exp.length - 1; i += 2) {
    if (exp[i] == '+') {
      res += +exp[i + 1];
    } else if (exp[i] == '-') {
      res -= +exp[i + 1];
    } else if (exp[i] == 'x') {
      res *= +exp[i + 1];
    } else {
      res /= +exp[i + 1];
    }
  }
  return res.toString();
}