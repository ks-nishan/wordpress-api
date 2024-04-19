var WPAPI = require( 'wpapi' );
console.log('Starting...');

// You must authenticate to be able to POST (create) a post
var wp = new WPAPI({
    endpoint: 'https://nishanthan47.wordpress.com/wp-json/',
    username: 'nishanthan@enlear.com',
    password: 'IgE#7jTy^Goax#%8o0Dy0CgH'
});

//creating a demo post
wp.posts().create({
    title: 'Title',
    content: 'Example content',
    status: 'publish'
}).then(function( response ) {
    // "response" will hold all properties of your newly-created post,
    console.log( response.id );
})
