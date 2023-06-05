const assert = require('assert');

exports.createPostValidator = (req, res, next) => {
  try {
    assert(req.body.title, "Write a Title");
    assert(req.body.title.length >= 4 && req.body.title.length <= 150, 'Title must be 4 to 150 chars');
    assert(req.body.body, "Write a body");
    assert(req.body.body.length >= 4 && req.body.body.length <= 2000, 'Body must be 4 to 2000 chars');
    next();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
