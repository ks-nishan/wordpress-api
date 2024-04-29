import WPAPI from "wpapi";

console.log("Starting...");

// You must authenticate to be able to POST (create) a post
var wp = new WPAPI({
  endpoint: "http://localhost:10010/wp-json",
  username: "nishakanaga0708@gmail.com",
  password: "E3PA PE9Y GZRv 8iID 3nV2 GRet", // application password which is generated from WP admin
});

// Function to create a post
async function createWordpressPost() {
  try {
    console.log("creating demo post...");
    const response = await wp.posts().create({
      title: "Full Article demo",
      content: "<p>This is a <strong>HTML content 02</strong> post </p>",
      status: "draft",
    });
    console.log("Post created successfully. Post :", response.id);
  } catch (error) {
    console.error("Error creating post:", error);
  }
}

// Call the function to create the demo post
createWordpressPost();

async function toggelWordpressPost(postId) {
  try {
    console.log("toggeling the post...");
    const post = await wp.posts().id(postId);

    let newStatus = post.status === "draft" ? "publish" : "draft";
    const response = await wp.posts().id(postId).update({
      status: newStatus,
    });
    console.log("Post updated successfully :", response.author);
  } catch (error) {
    console.error("Error creating post:", error);
  }
}

// call the function to update the status
// toggelWordpressPost(24);

async function getAllAuthors() {
  try {
    const responce = await wp.users();
    console.log("All Authors : ", responce);
  } catch (error) {
    console.log("Error while getting authors : ", error);
  }
}
// getAllAuthors();

async function getAllPublishedPosts() {
  try {
    const responce = await wp.posts();
    console.log("All Posts : ", responce);
  } catch (error) {
    console.log("Error while getting Posts : ", error);
  }
}
// getAllPublishedPosts();

async function getAuthor(postId) {
  try {
    const post = await wp.posts().id(postId);
    const author = await wp.users().id(post.author);

    console.log('Author Details : ', author);
  } catch (error) {
    console.log('Error while get author info : ', error);
  }
}
// getAuthor(36);
