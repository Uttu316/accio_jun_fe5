var x = 2;
export const p = 4;
export let q = 6;

export function getSum(a, b) {
  console.log(a + b);
}

function Main(heading) {
  const el = document.createElement("h2");
  el.innerHTML = heading;
  document.body.append(el);
}
export default Main;
