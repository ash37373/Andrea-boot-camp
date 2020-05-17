// For all of these, what is the value of a when the function gets called with the alert()
// #1
function q1() {
  var a = 5;
  if (a > 1) {
    a = 3;
  }
  alert(a); //3
}

//#2
var a = 0;
function q2() {
  a = 5;
}

function q22() {
  alert(a); //5
}

//#3
function q3() {
  window.a = "hello";
}

function q32() {
  alert(a); //hello
}
