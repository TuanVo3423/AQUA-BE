const Post = require("../Model/ProductModel");
class PostController {
  // [POST] products/createPost
  createPost(req, res, next) {
    const newPost = new Post(req.body);
    // console.log('newPost : ',newPost);
    newPost
      .save()
      .then((post) => {
        res.status(200).json(post);
      })
      .catch(next);
  }
  // [POST] /products/:id/edit
  editPost(req, res, next) {
    Post.findOne(req.params.id)
      .then((post) => {
        res.json({ post: post });
      })
      .catch(next);
  }
  // [PUT] /products/:id
  updatePost(req, res, next) {
    // console.log('req.body : ',req.body);
    Post.updateOne({ _id: req.body.id }, req.body)
      .then(() => {
        res.status(200).json(req.body);
      })
      .catch(next);
  }
  // [DELETE] /products/:id
  deletePost(req, res, next) {
    Post.deleteOne({ _id: req.params.id })
      .then((post) => {
        res.status(200).json(req.params.id);
      })
      .catch(next);
  }
}
module.exports = new PostController();
