const getUserData = (username, onSuccess, onFailure) => {
  setTimeout(() => {
    if (username === "abc") {
      onSuccess({
        name: "ABC XYZ",
        id: 3232323,
        age: 22,
      });
    } else {
      onFailure("No user found");
    }
  }, 3000);
};

const getPost = (userId, onSuccess, onFailure) => {
  setTimeout(() => {
    if (userId) {
      onSuccess({
        caption: "Vaction mode on",
        postId: 232331232,
      });
    } else {
      onFailure("No post found");
    }
  }, 3000);
};

const getComment = (postId, onSuccess, onFailure) => {
  setTimeout(() => {
    if (postId) {
      onSuccess({
        comment: "Nice!",
        commentId: "32323232232",
      });
    } else {
      onFailure("No comment");
    }
  }, 3000);
};

console.time("Start");
getUserData(
  "abc",
  (user) => {
    console.log("User", user);
    getPost(
      user.id,
      (post) => {
        console.log("Post", post);
        getComment(
          post.postId,
          (comment) => {
            console.log("Comment", comment); //*50
            console.timeEnd("Start");
          },
          (err) => {
            console.log(err);
          },
        );
      },
      (err) => {
        console.log(err);
      },
    );
  },
  (err) => {
    console.log(err);
  },
);
