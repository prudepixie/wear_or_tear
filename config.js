var handlebars = require('express3-handlebars'),
    express = require('express'),
    bodyParser = require ('body-parser');


module.exports = function(app){

    // Register and configure the handlebars templating engine
    app.engine('html', handlebars({
        defaultLayout: 'main',
        extname: ".html",
        layoutsDir: __dirname + '/views/layouts'
    }));

    // Set .html as the default template extension
    app.set('view engine', 'html');

    // Tell express where it can find the templates
    app.set('views', __dirname + '/views');

    // Make the files in the public folder available to the world
    app.use(express.static(__dirname + '/public'));

    // Parse POST request data. V4
    app.use(bodyParser());

};
