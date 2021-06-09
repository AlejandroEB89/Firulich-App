
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {
        path: '/registro/',
        url: 'registro.html',
      },
    ]
    // ... other parameters
  });

var mainView = app.views.create('.view-main');

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
    console.log(e);
})

// PAGE INIT INDEX
$$(document).on('page:init', '.page[data-name="index"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized


    var email= "alejandro@google.com"
    var clave = "1234"

    firebase.auth().createUserWithEmailAndPassword(email, clave);
    .then( function(){
        console.log("que paso?");

    });

  .catch( function(error) {
      console.error(error.code);
      console.error(error.message);

      });




})


//PAGE INIT REGISTRO
$$(document).on('page:init', '.page[data-name="registro"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized






})
