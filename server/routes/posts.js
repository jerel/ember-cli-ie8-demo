module.exports = function(app) {
  var express = require('express');
  var appRouter = express.Router();
  appRouter.get('/', function(req, res) {
    res.send({
      post:[
        {id: 1, title: 'This is the first post'},
        {id: 2, title: 'This is the second post'}
      ]
    });
  });
  app.use('/posts', appRouter);
};
