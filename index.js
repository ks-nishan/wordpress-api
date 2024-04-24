// var WPAPI = require( 'wpapi' );
import axios from "axios";
// import { WordPress } from './WordPress';

console.log('Starting...');

// You must authenticate to be able to POST (create) a post
// var wp = new WPAPI({
//     endpoint: 'https://nishanthan47.wordpress.com/wp-json/wp/v2/',
//     username: 'nishanthan@enlear.com',
//     password: '2ayacwxfstlew6nq'
// });


// // Function to create a demo post
// async function createDemoPost() {
//     try {
//         console.log('creating demo post...')
//         const response = await wp.posts().create({
//             title: 'Title',
//             content: 'Example content',
//             status: 'publish'
//         });
//         console.log('Post created successfully. Post ID:', response.id);
//     } catch (error) {
//         console.error('Error creating post:', error);
//     }
// }

// // // Call the function to create the demo post
// createDemoPost();

export default class WordPress {
  constructor(wpConfig) {
    // Store the URL from the wpConfig object
    this.url = wpConfig.url;
    
    // Create the headers object with the authorization and content-type headers
    this.headers = {
      Authorization: "Basic " + Buffer.from(`${wpConfig.username}:${wpConfig.password}`).toString('base64'),
      "Content-Type": "application/json",
    };
  }

  async createPost(post) {
    try {
      const response = await axios.post(`${this.url}/wp-json/wp/v2/posts`, post, { headers: this.headers });
      return response;
    } catch (error) {
      throw new Error(`Error while creating post: ${error}`);
    }
  }

}

// Define configuration for connecting to the WordPress API
const wpCofig = {
  url: 'https://nishanthan47.wordpress.com',
  username: 'nishanthan@enlear.com',
  password: '2ayacwxfstlew6nq'
};

// Create an instance of the WordPress class
const wp = new WordPress(wpCofig);

const post = {
  title: 'Hello World',
  content: 'My Post **bold** Content.',
  status: 'publish'
};

// Call the createPost method from the WordPress instance and log the result
async function main() {
  try {
    const result = await wp.createPost(post);
    console.log('Result:', result);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
