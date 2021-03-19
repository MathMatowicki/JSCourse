/*
Wykonaj następujące zadania:
1. Napisz funkcję, która łączy dwie tablice przy pomocy wskazanej operacji - jako pierwszy parametr przyjmuje pewną funkcję dwuparametrową 
i wypełnia tablicę wyjściową wynikiem wykonania tej funkcje na kolejnych elementach obu tablic. Np. jeśli przekazano funkcję obliczającą sumę dwóch
 liczb oraz tablice [4, 5, 6] i [10, 20, 30], zostanie zwrócone [14, 25, 36].
Wypróbuj użycie tej funkcji do stworzenia tablicy punktów z dwóch tablic wypełnionych odpowiednio współrzędnymi x oraz y (czyli np. z tablic [1, 2, 3] oraz [7, 8, 9]
 zostaną stworzone [{x:1,y:7}, {x:2,y:8}, {x:3,y:9}]).
(***) Spróbuj napisać taką wersję tej funkcji, która może przyjąć dowolną liczbę tablic (oraz pewną funkcję przyjmującą liczbę parametrów równą liczbie tablic) - wówczas
np. przekazanie [1,2,3], [5,6,7] i [10,20,30] oraz funkcji dodającej trzy liczby zwróci [16,28,40].
2. Napisz funkcję, która przyjmuje dwa parametry oznaczające początek i koniec zakresu, a następnie zwraca funkcję bezparametrową, której kolejne wywołania będą zwracać
kolejne całkowite wartości tego zakresu (lub NaN po jego przekroczeniu). Np. dla argumentów 3 i 5 kolejne wywołania zwróconej funkcji będą zwracać 3, 4, 5, NaN. Funkcja
powinna działać również wtedy, gdy pierwszy parametr jest większy od drugiego (przechodząc zakres w drugą stronę), np. dla argumentów 7 i 3 kolejno będą zwracane wartości
 7, 6, 5, 4, 3, NaN.
W poniższych zadaniach nie korzystaj z pętli, a jedynie metod tablic, takich jak forEach, map, filter, reduce.

3. Napisz funkcję, która jako argument przyjmuje napis, następnie zlicza w nim wystąpienia każdego znaku i zwraca jako obiekt-słownik.
4. Napisz funkcję, która jako parametr przyjmuje tablicę, z której usuwa co drugi element, a następnie skaluje zawartość do przedziału [0,1]
(czyli poddaje każdy element takiemu przekształceniu, by najmniejsza wartość stała się zerem, a największa jedynką),
po czym wypisuje całość do konsoli, z dokładnością do dwóch miejsc po przecinku. W zadaniu wykorzystaj metody map i filter.
5. Stwórz tablicę o zadanym rozmiarze, wypełnij ją losowymi wartościami z przedziału 1-10, a następnie policz (korzystając z metody reduce) ile występuje 
w niej liczb parzystych i ile wynosi iloczyn wszystkich jej elementów.
*/

//Ad 1

const sum = (a, b) => {
  return a + b;
};
const reduce = (a, b) => {
  return a - b;
};
const product = (a, b) => {
  return a * b;
};
const constructPoint = (a, b) => {
  return { x: a, y: b };
};

function sumAll() {
  let sum = 0;
  for (let i in arguments) {
    sum += arguments[i];
  }
  return sum;
}

const connectArrays = (foo, arrays) => {
  let outArr = [];
  for (let indexX = 0; indexX < arrays[0].length; indexX++) {
    let tempArr = [];
    for (let indexY = 0; indexY < arrays.length; indexY++) {
      tempArr.push(arrays[indexY][indexX]);
    }
    outArr.push(foo(...tempArr));
  }
  return outArr;
};

//Ad2

const rangefoo = (start, end) => {
  let calledTimes = 0;
  let nonParameter = () => {
    if (start < end && end - start >= calledTimes) {
      console.log(start + calledTimes);
      calledTimes++;
    } else if (start > end && start - end >= calledTimes) {
      console.log(start - calledTimes);
      calledTimes++;
    } else {
      console.log(NaN);
    }
  };
  return nonParameter;
};

//Ad3

const dictionary = (text) => {
  return [...text].reduce(
    (res, char) => ((res[char] = (res[char] || 0) + 1), res),
    {}
  );
};

//Ad4

const normalize = (val, min, max) => {
  return ((val - min) / (max - min)).toFixed(2);
};

const scale = (arr) => {
  console.log(
    arr
      .filter((element, index) => index % 2 == 0)
      .map((el) => normalize(el, Math.min(...arr), Math.max(...arr)))
  );
};

//Ad5

const productPlural = (length) => {
  let arr = Array.apply(null, Array(length)).map(function () {});
  arr = arr.map((el) => (el = Math.round(Math.random() * (10 - 1) + 1)));
  console.log(arr);
  console.log(
    "Ilosc parzystych elementow w tablicy = " +
      arr.reduce((sum, next) => {
        if (next % 2 == 0) {
          return sum + 1;
        }
        return sum;
      }, 0)
  );
  console.log("Iloczyn = " + arr.reduce((acc, curr) => acc * curr));
};

//Ad1

console.log("Adaptacja pkt. 1");
console.log(
  connectArrays(constructPoint, [
    [1, 2, 3],
    [1, 2, 3],
  ])
);
console.log("Adaptacja pkt. 1 gwiazdka");
console.log(
  connectArrays(sumAll, [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ])
);

//Ad2

console.log("Adaptacja pkt. 2");

// let range = rangefoo(3, 5);
let range = rangefoo(7, 3);
range();
range();
range();
range();
range();
range();

//Ad3

console.log("Adaptacja pkt. 3");
console.log(dictionary("waltz bad nymph for quick jigs vex")); // panagram

//Ad4

console.log("Adaptacja pkt. 4");
scale([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

//Add5

console.log("Adaptacja pkt. 5");
productPlural(10);
