const express = require('express');
const path = require('path');
const _ = require('lodash');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');

const config = require('./config.js');
var {User} =  require('./models/user');
var {authenticate} = require('./middleware/authenticate');

const app = express();
const port = process.env.PORT || 3100;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/api/users/signup', (req, res) => {
  var body = _.pick(req.body, ['name', 'email', 'password']);
  var user = new User(body);

  user.save().then(() => {
    return user.generateAuthToken();
  }).then((token) => {
    res.header('x-auth', token).send(user);
  }).catch((e) => {
    res.status(400).send(e);
  })
});

app.post('/api/users/login', (req, res) => {
  var body = _.pick(req.body, ['email', 'password']);

  User.findByCredentials(body.email, body.password).then((user) => {
    return user.generateAuthToken().then((token) => {
      res.header('x-auth', token).send(user);
    });
  }).catch((e) => {
    res.status(400).send();
  });
});

app.delete('/api/users/logout', authenticate, (req, res) => {
  req.user.removeToken(req.token).then(() => {
    res.status(200).send();
  }, () => {
    res.status(400).send();
  })
});

app.get('/api/hello', (req, res) => {
  res.send({express: 'Hello From Express'});
});

if(process.env.NODE_ENV == 'production') {
  app.use(express.static(path.join(__dirname, 'client/dist')));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
