var todos = [
  "clean room",
  "brush teeth",
  "exercise",
  "study javascript",
  "eat healty",
];

var todosImportant = [
  "clean room!",
  "brush teeth!",
  "exercise!",
  "study javascript!",
  "eat healty!",
];

//일반 for
const todosLength = todos.length;
for (var i = 0; i < todosLength; i++) {
  //   console.log(i);
  console.log(todos[i], i);
}

//foreach

//밑의 주석과 똑같.
function logTodos(toto, index) {
  console.log(toto, i);
}
todos.forEach(logTodos);
todosImportant.forEach(logTodos);
/* todos.forEach(function (toto, index) {
  console.log(toto, i);
});
 */
