function TheFirst(callback) {
  setTimeout(() => {
    console.log("The First");
    callback();
  }, 2000);
}
function TheSecond() {
  console.log("The Second");
}

TheFirst(TheSecond);
