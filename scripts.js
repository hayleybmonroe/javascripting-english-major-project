$("#response").append("<br />" + "Seven times table:");
for (let i = 1; i < 10; i = i + 1) {
  $("#response").append("<br />" + i + " * " + 7 + " = " + (i*7));
}
$("#response").append("<br />");
$("#response").append("<br />" + "Eight times table:");
for (let i = 1; i < 10; i = i + 1) {
  $("#response").append("<br />" + i + " * " + 8 + " = " + (i*8));
}
$("#response").append("<br />");
$("#response").append("<br />" + "Nine times table:");
for (let i = 1; i < 10; i = i + 1) {
  $("#response").append("<br />" + i + " * " + 9 + " = " + (i*9));
}
$("#response").append("<br />");
$("#response").append("<br />" + "one hundred and thirty-nine times table:");
for (let i = 1; i < 10; i = i + 1) {
  $("#response").append("<br />" + i + " * " + 139 + " = " + (i*139));
}
$("#response").append("<br />");
$("#response").append("<br />" + "Hello times table:");
for (let i = 1; i < 10; i = i + 1) {
  $("#response").append("<br />" + i + " * " + "hello" + " = " + ("hello ".repeat(i)));
}
