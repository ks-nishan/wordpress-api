var WPAPI = require( 'wpapi' );
console.log('Starting...');

// You must authenticate to be able to POST (create) a post
var wp = new WPAPI({
    endpoint: 'https://nishanthan47.wordpress.com/wp-json/wp/v2/',
    username: 'nishanthan@enlear.com',
    password: '2ayacwxfstlew6nq'
});

// Function to create a demo post
async function createDemoPost() {
    try {
        console.log('post is loading...')
        const response = await wp.posts().create({
            title: 'Title',
            content: 'Example content',
            status: 'publish'
        });
        console.log('Post created successfully. Post ID:', response.id);
    } catch (error) {
        console.error('Error creating post:', error);
    }
}

// Call the function to create the demo post
createDemoPost();
