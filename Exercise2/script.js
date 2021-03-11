const fizBuz = () => {
  let out = "";
  for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0 && i % 3 == 0) out += " fizbuz ";
    else if (i % 2 == 0) out += " fiz ";
    else if (i % 3 == 0) out += " buz ";
    else out += i;
  }
  return out;
};

let circle = (r) => {
  let out = "";
  const circumference = (r * Math.PI * 2).toPrecision(2);
  const area = (Math.pow(r, 2) * Math.PI).toPrecision(2);
  out =
    "Circumference of circle is equal = " +
    circumference +
    "\n" +
    "Area pf circle is equal = " +
    area;
  return out;
};
//Ad1
console.log(fizBuz());
//Ad2
const radius = prompt("Please enter radius of circle", "10");
console.log(circle(radius));
