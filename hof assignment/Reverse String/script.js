let string = "this is my string";
function reverse() {
  setTimeout(() => {
    console.log(string.split("").reverse().join(""));
  }, 2000);
}
reverse();
