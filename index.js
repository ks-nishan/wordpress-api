var WPAPI = require( 'wpapi' );
console.log('Starting...');

// You must authenticate to be able to POST (create) a post
var wp = new WPAPI({
    endpoint: 'https://nishanthan47.wordpress.com/wp-json/',
    username: 'nishanthan@enlear.com',
    password: 'IgE#7jTy^Goax#%8o0Dy0CgH'
});

// Function to create a demo post
async function createDemoPost() {
    try {
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
