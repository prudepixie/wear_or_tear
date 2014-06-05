var Datastore = require ('nedb'),
fs = require ('fs');

var photos = new Datastore ({filename: _dirname + '/data/photos', autoload: true}),
    users = new Datastore ({filename: _dirname + '/data/users', autoload: true});

photos.ensureIndex ({fieldName: 'name', unique: true});
users.ensureIndex ({fieldName: 'ip', unique: true});


var photos_on_disk = fs.readdirSync(_dirname + '/public/photos');

photos_on_disk.forEach(function(photos){
  photos.insert({
    name: photo,
    likes: 0,
    dislikes: 0
  });
})

module.exports = {
  photos: photos,
  users: users
};
