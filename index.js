// i'm too lazy to name all the function like last homework >:(

function cau1() {
  let a = 1,
    ans = "";
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      ans += a + " ";
      if (i == 0) {
        ans += " ";
      }
      a += 1;
    }
    if (a === 100) {
      return ans;
    }
    ans += "\n";
  }
  return ans;
}

console.log(cau1());
// -----------------------------------------------
function cau2(arr1) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = Math.ceil(arr1[i] / 2); j >= 1; j--) {
      if (arr1[i] % j === 0 && j > 1) {
        break;
      } else if (j === 1) {
        console.log(arr1[i]);
        break;
      }
    }
  }
}

cau2([654, 123, 71, 2, 1, 6, 8, 9, 456]);
// -----------------------------------------------
function cau3(n) {
  let ans = 0;
  for (let i = 2; i <= n; i++) {
    ans += i;
  }
  ans += 2 * n;
  console.log(ans);
}

cau3(10); //2+3+4+5+6+7+8+9+10+20 = 74
// -----------------------------------------------
function cau4(n) {
  let arr1 = [],
    count = 0;
  for (let i = Math.ceil(n / 2); i >= 1; i--) {
    if (n % i === 0) {
      arr1.push(i);
      count += 1;
    }
  }
  console.log(arr1, count);
}

cau4(12);
// -----------------------------------------------
function cau5(n) {
  let nStr = n.toString(),
    ans = "";
  for (let i = nStr.length - 1; i >= 0; i--) {
    ans += nStr[i];
  }
  console.log(ans);
}

cau5(123456);
// -----------------------------------------------
function cau6() {
  let totalFlag = 0,
    ans = 0;
  for (let i = 1; i <= 100; i++) {
    if (totalFlag + ans >= 100) {
      console.log(ans);
      break;
    }
    totalFlag += i;
    ans = i + 1;
  }
}

cau6(); //1+2+3+4+5+6+7+8+9+10+11+12+13+14 => 14 is answer
// -----------------------------------------------
function cau7(n) {
  for (let i = 0; i <= 10; i++) {
    console.log(n + " x " + i + " = " + n * i + "\n");
  }
}

cau7(5);
// -----------------------------------------------
function cau8() {
  let players = [[], [], [], []],
    cards = [
      "4K",
      "KH",
      "5C",
      "KA",
      "QH",
      "KD",
      "2H",
      "10S",
      "AS",
      "7H",
      "9K",
      "10D",
    ];

  for (let i = 0; i < cards.length; i++) {
    if (i % 4 === 0) {
      players[0].push(cards[i]);
    } else if (i % 4 === 1) {
      players[1].push(cards[i]);
    } else if (i % 4 === 2) {
      players[2].push(cards[i]);
    } else {
      players[3].push(cards[i]);
    }
  }
  console.log(players);
}

cau8();
// -----------------------------------------------
function cau9(m, n) {
  if (m * 2 > n) {
    return (
      "invalid input: total legs of chicken (which is the lowest) is " +
      m * 2 +
      " but just " +
      n +
      " are given"
    );
  }
  if (m < 0 || n < 1 || n % 2 !== 0) {
    return "invalid negative input or legs total input";
  }
  let dogs = 0,
    chickens = m;
  while (true) {
    if (chickens * 2 + dogs * 4 < n) {
      chickens -= 1;
      dogs += 1;
    } else if (chickens * 2 + dogs * 4 === n) {
      return "chickens: " + chickens + " and dogs: " + dogs;
    }
  }
}

console.log(cau9(36, 100));
// -----------------------------------------------
/* Assume the hour-hand always point right to the hour number 
        but the minute-hand isn't
        and the minute-hand can point anywhere right to the minute and hour number
    So let to be clear the calculation:
        each nearest hour number is 30 degree apart (360/12 = 30)
        each nearest minute number is 6 degree apart (30/5 = 6)
    Therefore: there are 2 angle between them, 
        which is obtuse angle and acute angle
        so both answer is correct
*/
function cau10(h, m) {
  return Math.abs((h % 12) * 30 - (m % 60) * 6);
}
// function input is (int hour, int minute)
console.log(cau10(10, 10));
console.log(cau10(5, 0));
console.log(cau10(2, 10));
