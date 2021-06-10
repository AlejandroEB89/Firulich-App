
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
      {path: '/registro/',url: 'registro.html',},
      {path: '/gracias/',url: 'gracias.html',},
      {path: '/usuarioHome/',url: 'usuarioHome.html',},
      {path: '/orgHome/',url: 'orgHome.html',},
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

//  -------------------------- PAGE INIT INDEX ----------------------------------------------------
$$(document).on('page:init', '.page[data-name="index"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized


})


//    -------------------------PAGE INIT REGISTRO-----------------------------------------------
$$(document).on('page:init', '.page[data-name="registro"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized

    var tipodeUsuario= "usuario";
    var email = $$("#emailRegistro").val();
    var clave = $$("#passwordRegistro").val();

    $$("#btnRegistrar").on("click", fnRegistrarUsuario);  // fnComprobarDatos (deberia chequear primero)
    $$("#toggleTipoUsuario").on("change", fnTipodeRegistro);



})

//    -------------------------PAGE INIT GRACIAS-----------------------------------------------
$$(document).on('page:init', '.page[data-name="gracias"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    if (tipodeUsuario= "usuario"){
      nombreUsuario=$$("#nomUsu").val();
      $$("#mensajeRegistro").html( nombreUsuario + " ¡gracias por registrarte! ")
    }
    else{
      nombreOrganizacion=$$("#nomOrg").val();
      console.log("la organización registrada es: " + nombreOrganizacion)
      $$("#mensajeRegistro").html("Registraste La organización: " + nombreOrganizacion);
    }


})


// ------------------------- FUNCIONES -------------------------------------------------


function fnRegistrarUsuario(){


  var email = $$("#emailRegistro").val();
  var clave = $$("#passwordRegistro").val();





    firebase.auth().createUserWithEmailAndPassword(email, clave)
        .catch( function(error) {
            console.error(error.code);
            if (error.code == "auth/email-already-in-use") {
                console.error("el mail ya existe...");
              }
            if (error.code == "auth/invalid-email") {
                console.error("El mail es inválido");
              }
            //console.error(error.message);
        } )
        .then( function() {
            console.log('Se registró el Usuario correctamente');
            //var popup = app.popup.create({"#popupRegistrado"});
            mainView.router.navigate('/gracias/');

      });
}


/*
function fnComprobarDatos(){  //aprieto registrar y viene aca, comprueba si esta todo ok y llama a registrar en firebase
  //enviar email y clave (quizas tmb nombres segun tipo de usuario para saber si se puede registrar)
  fnRegistrarUsuario(email, clave);

}
*/


function fnTipodeRegistro (){
  var toggleTipoUsuario = app.toggle.get('.toggle');  // si el toggle esta "off" el tipo de usuario es "usuario" y en "on" es organización
  if(toggleTipoUsuario.checked){
    var tipodeUsuario="org"                 // dependiendo que tipo de usuario es se esconden algunos inputs y se muestran otros
    $$("#nomUsu").removeClass("activo");
    $$("#nomUsu").addClass("hidden");

    $$("#nomOrg").removeClass("hidden");
    $$("#nomOrg").addClass("activo");
    $$("#descOrg").removeClass("hidden");
    $$("#descOrg").addClass("activo");

    console.log("El tipo de usuario es : " + tipodeUsuario );

  } else {
    var tipodeUsuario="usuario"
    $$("#nomOrg").removeClass("activo");
    $$("#nomOrg").addClass("hidden");
    $$("#descOrg").removeClass("activo");
    $$("#descOrg").addClass("hidden");

    $$("#nomUsu").removeClass("hidden");
    $$("#nomUsu").addClass("activo");
    console.log ("El tipo de usuario es : " + tipodeUsuario) ;
  }

}
