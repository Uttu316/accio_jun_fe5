console.log("A");

function getData(userId, onSuccess, onFailure) {
  console.log("B");

  if (userId.length > 4) {
    onSuccess({
      name: "ABC",
      id: 23232,
    });
  } else {
    onFailure("Oops wrong user");
  }
  console.log("C");
}

console.log("D");

getData(
  "ABCD",
  (user) => {
    console.log("User", user);
  },
  (error) => {
    console.log("Error", error);
  },
);
console.log("E");
