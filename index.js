// i'm too lazy to name all the function like last homework >:(
document.getElementById("defaultOpen").click();
function openProject(evt, projectName) {
  var i, tabcontent, tablinks;

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("tab1");
    // tablinks[i].className = tablinks[i].className.replace(" active", "");
    // tablinks[i].classList = tablinks[i].classList.remove("tab1");
  }

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  document.getElementById(projectName).style.display = "block";
  evt.currentTarget.classList.add("tab1");
  // evt.currentTarget.className += " active";
}

function cau1() {
  let a = 1,
    ans = "";
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      ans += a + " ";
      if (i == 0) {
        ans += "&nbsp";
        ans += "&nbsp";
      }
      a += 1;
    }
    ans += "<br />";
  }
  document.querySelector("#outputCau1").innerHTML = ans;
}

// console.log(cau1());
// -----------------------------------------------
function cau2() {
  let input = document.querySelector("#inputCau2").value.trim();
  let arr1 = input.split(" ");
  let ans = [];

  // console.log(isNaN(Number(arr1[0])))

  if (arr1.length === 1 && isNaN(Number(arr1[0]))) {
    document.querySelector("#outputCau2").innerHTML =
      "Nhập sai input, vui lòng nhập lại đúng format!";
    return;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (isNaN(Number(arr1[i]))) {
      document.querySelector("#outputCau2").innerHTML =
        "Nhập sai input, vui lòng nhập lại đúng format";
      return;
    }
    for (let j = Math.ceil(arr1[i] / 2); j >= 1; j--) {
      if (arr1[i] % j === 0 && j > 1) {
        break;
      } else if (j === 1) {
        ans.push(arr1[i]);
        break;
      }
    }
  }
  document.querySelector(
    "#outputCau2"
  ).innerHTML = `Các số nguyên tố có trong mảng là: [${ans}]`;
}

// cau2([654, 123, 71, 2, 1, 6, 8, 9, 456]);
// -----------------------------------------------
function cau3() {
  let n = document.querySelector("#inputCau3").value.trim();
  let ans = 0;

  if (isNaN(Number(n)) || Number(n) < 2) {
    document.querySelector("#outputCau3").innerHTML =
      "Nhập sai input, vui lòng nhập lại đúng format";
    return;
  }
  n = Number(n);

  for (let i = 2; i <= n; i++) {
    ans += i;
  }
  ans += 2 * n;

  document.querySelector("#outputCau3").innerHTML = ans;
  // console.log(ans);
}

// cau3(10); //2+3+4+5+6+7+8+9+10+20 = 74
// -----------------------------------------------
function cau4() {
  let n = document.querySelector("#inputCau4").value.trim();
  let arr1 = [],
    count = 0;

  if (isNaN(Number(n)) || Number(n) < 1) {
    document.querySelector("#outputCau4").innerHTML =
      "Nhập sai input, vui lòng nhập lại đúng format";
    return;
  }
  n = Number(n);

  for (let i = Math.ceil(n / 2); i >= 1; i--) {
    if (n % i === 0) {
      arr1.push(i);
      count += 1;
    }
  }

  document.querySelector(
    "#outputCau4"
  ).innerHTML = `Lượng ước số: ${count}, đó là: [${arr1}]`;
  // console.log(arr1, count);
}

// cau4(12);
// -----------------------------------------------
function cau5() {
  let n = document.querySelector("#inputCau5").value.trim();
  if (isNaN(Number(n)) || Number(n) < 1) {
    document.querySelector("#outputCau5").innerHTML =
      "Nhập sai input, vui lòng nhập lại đúng format";
    return;
  }
  n = Number(n);

  let nStr = n.toString(),
    ans = "";
  for (let i = nStr.length - 1; i >= 0; i--) {
    ans += nStr[i];
  }
  document.querySelector("#outputCau5").innerHTML = ans;
}

// cau5(123456);
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
  document.querySelector("#outputCau6").innerHTML = `${ans}<br/>
  //1+2+3+4+5+6+7+8+9+10+11+12+13+14=105 => 14 is answer`;
}

// cau6(); //1+2+3+4+5+6+7+8+9+10+11+12+13+14 => 14 is answer
// -----------------------------------------------
function cau7() {
  let n = document.querySelector("#inputCau7").value.trim();
  if (isNaN(Number(n))) {
    document.querySelector("#outputCau7").innerHTML =
      "Nhập sai input, vui lòng nhập lại đúng format";
    return;
  }
  n = Number(n);
  let ans = "";
  for (let i = 0; i <= 10; i++) {
    ans += `${n} x ${i} = ${n * i} <br/>`;
  }
  document.querySelector("#outputCau7").innerHTML = ans;
}

// cau7(5);
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
  document.querySelector(
    "#outputCau8"
  ).innerHTML = `player1 = [${players[0]}] <br/>
  player2 = [${players[1]}] <br/>
  player3 = [${players[2]}] <br/>
  player4 = [${players[3]}]`;
  // console.log(players);
}

// cau8();
// -----------------------------------------------
function cau9() {
  let input = document.querySelector("#inputCau9").value.trim();
  let arr1 = input.split(" ");
  // let ans = [];

  if (
    arr1.length <= 1 ||
    arr1.length > 2 ||
    isNaN(Number(arr1[0])) ||
    isNaN(Number(arr1[1]))
  ) {
    document.querySelector("#outputCau9").innerHTML =
      "Nhập sai input, vui lòng nhập lại đúng format";
    return;
  }
  let m = Number(arr1[0]),
    n = Number(arr1[1]);

  // console.log(m, n);
  if (m * 2 > n) {
    document.querySelector(
      "#outputCau9"
    ).innerHTML = `invalid input: total legs of chicken (which is the lowest) is
    ${m * 2} but just ${n} are given`;
    return;
  }
  if (m < 0 || n < 1 || n % 2 !== 0) {
    document.querySelector(
      "#outputCau9"
    ).innerHTML = `invalid negative input or legs total input`;
    return;
  }

  let dogs = 0,
    chickens = m;
  while (chickens * 2 + dogs * 4 < n) {
    chickens -= 1;
    dogs += 1;
  }
  return (document.querySelector(
    "#outputCau9"
  ).innerHTML = `Số gà: ${chickens}, số chó: ${dogs}`);
}

// console.log(cau9(36, 100));
// -----------------------------------------------

/* Assume the hour-hand always point right to the hour number 
        but the minute-hand isn't
        and the minute-hand can point anywhere right to the minute and hour number
    So let's to be clear the calculation:
        each nearest hour number is 30 degree apart (360/12 = 30)
        each nearest minute number is 6 degree apart (30/5 = 6)
    Therefore: there are 2 angle between them, 
        which is obtuse angle and acute angle
        so both answer is correct
*/
function cau10() {
  let input = document.querySelector("#inputCau10").value.trim();
  let arr1 = input.split(":");

  if (
    arr1.length === 1 ||
    arr1.length > 2 ||
    isNaN(Number(arr1[0])) ||
    isNaN(Number(arr1[1]))
  ) {
    return (document.querySelector("#outputCau10").innerHTML =
      "Wrong input format, please try again");
  }

  let h = Number(arr1[0]),
    m = Number(arr1[1]);
  if (h < 1 || h > 13 || m < 0 || m > 59) {
    return (document.querySelector("#outputCau10").innerHTML =
      "Wrong hour or minute time, please try again");
  }

  return (document.querySelector(
    "#outputCau10"
  ).innerHTML = `Angle between two clock hands is: ${Math.abs(
    (h % 12) * 30 - (m % 60) * 6
  )} or ${360 - Math.abs((h % 12) * 30 - (m % 60) * 6)}`);
}
// function input is (int hour, int minute)
// console.log(cau10(10, 10));
// console.log(cau10(5, 0));
// console.log(cau10(2, 10));

