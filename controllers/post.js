const Post = require('../models/post');

exports.getPosts = (req, res) => {

    const posts = Post.find().select("_id title body")
    .then((posts) => {
        res.json({ posts })
    })
    .catch(err => console.log(err));
};

exports.createPost = async (req, res) => {
    try {
        const post = new Post(req.body);
        console.log("CREATE POST: ", req.body);
        const result = await post.save();
        res.json({
            post: result
        });
    } catch (err) {
        res.json({
            error: err.message
        });
    }
};
