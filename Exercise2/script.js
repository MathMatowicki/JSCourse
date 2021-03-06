//Ad1
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
//Ad2
let circle = (r) => {
  let out = "";
  const circumference = (r * Math.PI * 2).toFixed(2);
  const area = (Math.pow(r, 2) * Math.PI).toFixed(2);
  out =
    "Circumference of circle is equal = " +
    circumference +
    "\n" +
    "Area pf circle is equal = " +
    area;
  return out;
};
//Ad3.1
const foo31 = () => {
  let arr = [];
  while (
    arr.reduce(function (acc, val) {
      return acc + val;
    }, 0) < 200
  )
    arr.push(Math.round(Math.random() * (10 - 1) + 1));

  return arr;
};
//Ad3.2
const delMinFromArray = (arr) => {
  const smallest = Math.min(...arr);
  const index = arr.indexOf(smallest);

  return arr.filter((_, i) => i !== index);
};
//Ad3.3
const delMaxFromArray = (arr) => {
  const max = Math.max(...arr);
  const index = arr.indexOf(max);

  return arr.filter((_, i) => i !== index);
};
//Ad3.4
const foo34 = (arr) => {
  let tempArr = [];
  const counts = {};

  arr.forEach((el) => {
    counts[el] = counts[el] ? (counts[el] += 1) : 1;
  });

  console.log(counts);
};
//Ad 3.5
const foo35 = (arr) => {
  let tempArr = arr.splice(0, 10);
  tempArr.forEach((element) => {
    arr.push(element);
  });
  return arr;
};
//Ad 4
const changeName = (nameArray) => {
  nameArray.forEach((element, index) => {
    nameArray[index] = nameArray[index].replace(/a/i, "4");
    nameArray[index] = nameArray[index].replace(/e/i, "3");
    if (nameArray[index].length > 6) {
      nameArray[index] =
        nameArray[index].substring(0, 3) +
        "..." +
        nameArray[index].substring(
          nameArray[index].length - 3,
          nameArray[index].length
        );
    }
  });
};
//Ad5
const getPriceList = (foodString) => {
  let separate = foodString.split(", ");
  let priceList = [];
  separate.forEach((word, index) => {
    let object = {};
    object[word] = (Math.random() * (10 - 1) + 1).toFixed(2);
    object["quantity"] = Math.round(Math.random() * (5 - 1) + 1);
    priceList.push(object);
  });
  return priceList;
};

const getShopList = (priceList) => {
  let shopList = [];
  for (let index = 0; index < priceList.length / 2; index++) {
    let item = priceList[Math.floor(Math.random() * priceList.length)];
    shopList.push(item);
  }
  return shopList;
};

const getSumPrice = (shopList) => {
  let sum = 0;
  shopList.forEach((element) => {
    sum +=
      parseFloat(Object.values(element)[0]) *
      parseInt(Object.values(element)[1]);
  });
  return sum;
};
//Ad1
console.log(fizBuz());
//Ad2
const radius = prompt("Please enter radius of circle", "10");
console.log(circle(radius));
//Ad3.1
let arr = foo31();
console.log(arr);
//Ad3.2
arr = delMinFromArray(arr);
console.log(arr);
//Ad3.3
arr = delMaxFromArray(arr);
console.log(arr);
//Ad3.4
foo34(arr);
//Ad3.5
arr = foo35(arr);
console.log(arr);
//Ad4
let nameArray = ["Andrzej", "Mateusz", "Jarek", "Mariusz", "Kazimierz"];
changeName(nameArray);
console.log(nameArray);
//Ad5
console.log("Cennik");
let foodString = "jajka, mleko, masło, chleb";

let priceList = getPriceList(foodString);
console.log(priceList);

const shopList = getShopList(priceList);
console.log("Lista zakupów:");
console.log(shopList);
console.log("Cena zakupów:");
console.log(getSumPrice(shopList));
