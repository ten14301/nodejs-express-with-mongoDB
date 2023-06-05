const Post = require('../models/post');

exports.getPosts = (req, res) => {
    res.json({
        posts: [
            {title: 'Name first post'},
            {title: 'Name second post'},
        ]
    });
};

exports.createPost = async (req, res) => {
    try {
        const post = new Post(req.body);
        console.log("CREATE POST: ", req.body);
        const result = await post.save();
        res.status(200).json({
            post: result
        });
    } catch (err) {
        res.status(400).json({
            error: err.message
        });
    }
};
