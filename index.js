import WPAPI from 'wpapi';

console.log('Starting...');

// You must authenticate to be able to POST (create) a post
var wp = new WPAPI({
    endpoint: 'http://localhost:10010/wp-json',
    username: 'nishanthan@enlear.com',
    password: 'mBSK LPal HzIQ rUEt 2tPc 94Et' // application password which is generated from WP admin
});

// Function to create a demo post
async function createDemoPost() {
    try {
        console.log('creating demo post...')
        const response = await wp.posts().create({
            title: 'Title from VS code 8',
            content: 'Example content 8',
            status: 'draft'
        });
        console.log('Post created successfully. Post :', response);
    } catch (error) {
        console.error('Error creating post:', error);
    }
}

// Call the function to create the demo post
createDemoPost();