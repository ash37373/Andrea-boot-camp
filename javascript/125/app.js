var database = [
  { username: "hwan", password: "super" },
  { username: "Sally", password: "123" },
  { username: "ingrid", password: "777" },
];

var newFeed = [
  {
    username: "성환",
    timeline: "졸려 죽겠다.",
  },
  {
    username: "진숙",
    timeline: "나도 졸려죽겠다.",
  },
];

var userNamePrompt = prompt("What's your username ?");
var passwordPrompt = prompt("What's your password ?");

function isUservalid(user, pwd) {
  for (let i = 0; i < database.length; i++) {
    if (user === database[i].username && pwd === database[i].password) {
      return true;
    }
  }
  return false;
}

function singIn(user, pwd) {
  if (isUservalid(user, pwd)) {
    console.log(newFeed);
  } else {
    alert("Sorry, wrong username and pwd");
  }
}
singIn(userNamePrompt, passwordPrompt);
