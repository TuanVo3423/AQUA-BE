const Post = require("../Model/ProductModel");
const PAGE_SIZE = 6;
class PostController {
  // [POST] products/createPost
  createPost(req, res, next) {
    const newPost = new Post(req.body);
    console.log("newPost : ", req.body.createdAt);
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
  // [GET] products/shop
  getProductShop(req, res, next) {
    // console.log("query", req.query);
    var page = req.query.page;
    if (page) {
      page = parseInt(page);
      var skip = (page - 1) * PAGE_SIZE;

      Post.find({})
        .skip(skip)
        .limit(PAGE_SIZE)
        .then((data) => {
          res.status(200).json(data);
        })
        .catch((err) => console.log(err));
    }
  }

  // [GET] products/shop/filter
  filterProductShop(req, res, next) {
    const field = req.query.category;
    Post.find({ category: field })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch(next);
  }
}
module.exports = new PostController();
