const user = require("../models/user");


exports.getuserById = (req, res, next, userid) => {
  // todoId is coming from the router.param
  // .findById() method will find the User which has id==userId
  user.findById(userid).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "404 user not found",
      });
    }
    // store that User in req.user so that other functions can use it
    req.user = user;
    // Because this is a middleware we have to call the next()
   // which will pass the control to the next function in the middleware stack
    next();
  });
};

exports.getAllUsers = (req, res) => {
    // simply use .find() method and it will return all the User
    user.find()
      .sort("-createdAt")
      .exec((err, users) => {
        // error checking
        if (err || !users) {
          return res.status(400).json({
            error: "Something went wrong in finding all users",
          });
        }
        // return all the Users in json format
        res.json(users);
      });
  };

  exports.getUser = (req, res) => {
    // this is pretty simple because we've already defined a middleware
    // to get a user from the URL id
    // this req.user is coming from that middleware
    return res.json(req.user);
  };
  
  exports.createUser = (req, res) => {
    // we will get json data from the frontend i.e. req.body
    const user = new user(req.body);
  
    // create a User instance by passing 'role' field from 'req.body'
    user.save((err, role) => {
      if (err || !role) {
        return res.status(400).json({
          error: "something went wrong",
        });
      }
      // User is created
      // send the created User as json response
      res.json({ role });
    });
  };

  exports.updateUser = (req, res) => {
    // take req.User from getTodoById() middleware and
    // fetch the User that user wants to update
    const user = req.user;
    // simply change the role of the User that user want to update by
    // the role that user has sent in req.body.role
    user.role = req.body.role;
  
    // simply save that updated user
    user.save((err, t) => {
      if (err || !t) {
        return res.status(400).json({
          error: "something went wrong while updating",
        });
      }
      // send the updated todo as a json response
      res.json(t);
    });
  };

  exports.deleteUser = (req, res) => {
    // take req.user from getUserById() middleware and
    // fetch the User that user wants to delete
    const user = req.user;
    // call .remove() method to delete it
    user.remove((err, role) => {
      if (err || !role) {
        return res.status(400).json({
          error: "something went wrong while deleting the user",
        });
      }
      // send deleted user and success message as a json response
      res.json({
        role_deleted: role,
        message: "role deleted successfully!",
      });
    });
  };
  