// Câu 1

function factorial(n) {
  let answer = 1;
  if (n == 0 || n == 1) {
    return answer;
  } else if (n > 1) {
    for (var i = n; i >= 1; i--) {
      answer = answer * i;
    }
    return answer;
  }
}
let n = 15;
answer = factorial(n);
console.log("Câu 1")
console.log("Giai thừa của 15 là " + +answer);

// Câu 2

let n2 = 5;
let string = "";

for (i = 1; i <= n2; i++) {
  for (a = 1; a <= n2 - i; a++) {
    string += " ";
  }
  for (b = 0; b < 2 * i - 1; b++) {
    if (i === 1 || i === n2) {
      string += "*";
    } else {
      if (b === 0 || b === 2 * i - 2) {
        string += "*";
      } else {
        string += " ";
      }
    }
  }
  string += "\n";
}
console.log("Câu 2")
console.log(string);

// Câu 3

const form = document.getElementById("form");
const nameInput = document.getElementById("input_name");
const pswInput = document.getElementById("input_psw");
const dobInput = document.getElementById("input_dob");
const gendersInput = document.getElementById("genders");
const button = document.getElementById("button");

let nameStorage = localStorage.getItem("name")
  ? JSON.parse(localStorage.getItem("name"))
  : [];

let pswStorage = localStorage.getItem("psw")
  ? JSON.parse(localStorage.getItem("psw"))
  : [];

let dobStorage = localStorage.getItem("dob")
  ? JSON.parse(localStorage.getItem("dob"))
  : [];

let gendersStorage = localStorage.getItem("genders")
  ? JSON.parse(localStorage.getItem("genders"))
  : [];

function submitRegister() {
  if (
    nameInput.value == "" ||
    pswInput.value == "" ||
    dobInput.value == "" ||
    gendersInput.value == ""
  ) {
    alert("Something is missing");
  } else {
    register();
  }
}

const register = () => {
  nameStorage.push(nameInput.value);
  pswStorage.push(pswInput.value);
  dobStorage.push(dobInput.value);
  gendersStorage.push(gendersInput.value);
  localStorage.setItem("name", JSON.stringify(nameStorage));
  localStorage.setItem("psw", JSON.stringify(pswStorage));
  localStorage.setItem("dob", JSON.stringify(dobStorage));
  localStorage.setItem("genders", JSON.stringify(gendersStorage));
};

function showForm() {
  document.writeln("Name: " + nameStorage + "<br>");
  document.writeln("Password: " + pswStorage + "<br>");
  document.writeln("Date Of Birth: " + dobStorage + "<br>");
  document.writeln("Gender: " + gendersStorage + "<br>");
}
