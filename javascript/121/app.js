var database = [{ username: "hwan", password: "super" }];

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

function singIn(user, pwd) {
  if (user === database[0].username && pwd === database[0].password) {
    console.log(newFeed);
  } else {
    alert("Sorry, wrong username and pwd");
  }
}
singIn(userNamePrompt, passwordPrompt);
