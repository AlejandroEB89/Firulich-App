
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
      {path: '/index/',url: 'index.html',},
      {path: '/registro/',url: 'registro.html',},
      {path: '/gracias/',url: 'gracias.html',},
      {path: '/usuarioHome/',url: 'usuarioHome.html',},
      {path: '/orgHome/',url: 'orgHome.html',},
      {path: '/listaOrg/',url: 'listaOrg.html',},
      {path: '/VerOrgDesdeUsu/',url: 'VerOrgDesdeUsu.html',},
      {path: '/enAdopcion/',url: 'enAdopcion.html',},
    ]
    // ... other parameters
  });

var mainView = app.views.create('.view-main');



// -------------- Variables de datos del usuario /Organización ------------------//

var tipodeUsuario="";
var nombreUsuario="";
var apellidoUsuario="";
var nombreOrganizacion="";
var nombreRespOrganizacion="";
var email="";
var password="";
var provincia="";
var localidad="";



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

    var tipodeUsuario="";
    var nombreUsuario="";
    var apellidoUsuario="";
    var nombreOrganizacion="";
    var nombreRespOrganizacion="";
    var email="";
    var password="";
    var provincia="";
    var localidad="";

    console.log("ahora tipo de usuario es : " + tipodeUsuario);

    $$("#btnIniciarSesion").on("click", fnIniciarSesion);


})


//    -------------------------PAGE INIT REGISTRO-----------------------------------------------
$$(document).on('page:init', '.page[data-name="registro"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized


    calendarModal = app.calendar.create({
           inputEl: '#fechanac',
           openIn: 'customModal',
           header: true,
           footer: true,
         });



    $$("#btnRegistrar").on("click", fnRegistrar);  // fnComprobarDatos (deberia chequear primero)
    $$("#toggleTipoUsuario").on("change", fnTipodeRegistro);



})



// ------------------------- FUNCIONES -------------------------------------------------


function fnRegistrar(){
    if (tipodeUsuario=="org"){
          console.log("ES una Organizaciony estoy por registrarla");
          fnRegistrarOrg();
    } else {
          tipodeUsuario="usuario";
          console.log("ES un usuario  y estoy por registrarlo");
          fnRegistrarUsuario();
          }
    }



/*
function fnComprobarDatos(){  //aprieto registrar y viene aca, comprueba si esta todo ok y llama a registrar en firebase
  //enviar email y clave (quizas tmb nombres segun tipo de usuario para saber si se puede registrar)
  fnRegistrarUsuario(email, clave);

}
*/

function fnRegistrarUsuario(){
  email = $$("#emailRegistro").val();
  password = $$("#passwordRegistro").val();
  nombreUsuario = $$("#nomUsu").val();
  apellidoUsuario = $$("#apeUsu").val();
  provincia = $$("#provincia").val();
  localidad = $$("#localidad").val();

  if (email=="" || password=="" || nombreUsuario=="" || apellidoUsuario=="" || provincia=="" || localidad=="" ) {
    app.dialog.alert("Completá todos los campos!!", "Oops");                    /*Comprobar que esten todos los campos comletos*/
  } else {
      firebase.auth().createUserWithEmailAndPassword(email, password)
              .then( function() {

                    var db=firebase.firestore();
                    colUsuarios=db.collection("usuarios");

                    var nuevoUsuario={
                      Nombre:nombreUsuario,
                      Apellido:apellidoUsuario,
                      TipoUsuario: tipodeUsuario,
                      Provincia: provincia,
                      Localidad: localidad,
                    }

                    MiId=email;
                    colUsuarios.doc(MiId).set(nuevoUsuario)
                      .then(function (docDevuelto){
                        console.log("Se guardo en bd con el id: " + docDevuelto.id);

                      })
                      .catch(function(error){
                        console.log("Error: " + error);
                      });

                      app.dialog.confirm("Ya te registraste!! Iniciá sesión para ingresar!", "Genial!");
                      mainView.router.navigate('/index/');
                      console.log('Se registró el Usuario ' + nombreUsuario + " " + apellidoUsuario +  " correctamente");


                })
              .catch( function(error) {
                  console.error(error.code);
                  switch (error.code){
                    case "auth/email-already-in-use" :
                        console.error("el mail ya existe...");
                        app.dialog.alert("Ya existe una cuenta con este correo!", "Oops");
                        break;

                    case "auth/invalid-email":
                        console.error("El mail es inválido");
                        app.dialog.alert("Esa no es una dirección de correo valida!", "Oops");
                        break;
                        default:
                    case "auth/weak-password":
                        console.error("contraseña debil");
                        app.dialog.alert("La contraseña debe contener al menos 8 caracteres", "Oops");
                        break;
                  }
              });

          }
      }


function fnRegistrarOrg(){
  email = $$("#emailRegistro").val();
  password = $$("#passwordRegistro").val();
  nombreOrganizacion = $$("#nomOrg").val();
  nombreRespOrganizacion = $$("#nomRespOrg").val();
  apellidoUsuario = $$("#apeUsu").val();
  provincia = $$("#provincia").val();
  localidad = $$("#localidad").val();

  if (email=="" || password=="" || nombreRespOrganizacion=="" || apellidoUsuario=="" || nombreOrganizacion=="" || provincia=="" || localidad=="" ) {
    app.dialog.alert("Completá todos los campos!!", "Oops");
  } else {
      firebase.auth().createUserWithEmailAndPassword(email, password)
              .then( function() {

                    var db=firebase.firestore();
                    colOrganizaciones=db.collection("organizaciones");

                    var nuevaOrg={
                      Nombre:nombreOrganizacion,
                      nomResponsable:nombreRespOrganizacion,
                      apellidoResponsable:apellidoUsuario,
                      TipoUsuario: tipodeUsuario,
                      Provincia: provincia,
                      Localidad: localidad,
                    }

                    MiId=email;
                    colOrganizaciones.doc(MiId).set(nuevaOrg)
                      .then(function (docRef){
                        console.log("Se guardo en bd con el id: " + docDevuelto.id);

                      })
                      .catch(function(error){
                        console.log("Error: " + error);
                      });

                    app.dialog.confirm("Ya registraste a tu Organización!! Iniciá sesión para empezar!!", "Genial!");
                    console.log('Se registró la organizacion: ' + nombreOrganizacion + " correctamente, y su responsable es: " + nombreRespOrganizacion + " " + apellidoUsuario );
                    mainView.router.navigate('/index/');
                })

              .catch( function(error) {
                  console.error(error.code);
                  switch (error.code){
                    case "auth/email-already-in-use" :
                        console.error("el mail ya existe...");
                        app.dialog.alert("Ya existe una cuenta con este correo!", "Oops");
                        break;

                    case "auth/invalid-email":
                        console.error("El mail es inválido");
                        app.dialog.alert("Esa no es una dirección de correo valida!", "Oops");
                        break;
                        default:
                    case "auth/weak-password":
                        console.error("contraseña debil");
                        app.dialog.alert("La contraseña debe contener al menos 8 caracteres", "Oops");
                        break;
                  }
              });
        }
}





function fnTipodeRegistro (){
  var toggleTipoUsuario = app.toggle.get('.toggle');  // si el toggle esta "off" el tipo de usuario es "usuario" y en "on" es organización
  if(toggleTipoUsuario.checked){
    tipodeUsuario="org";                 // dependiendo que tipo de usuario es se esconden algunos inputs y se muestran otros
    $$("#nomUsuManejador").removeClass("activo");
    $$("#nomUsuManejador").addClass("hidden");

    $$("#nomOrgManejador").removeClass("hidden");
    $$("#nomOrgManejador").addClass("activo");
    $$("#nomRespOrgManejador").removeClass("hidden");
    $$("#nomRespOrgManejador").addClass("activo");

    console.log("El tipo de usuario es : " + tipodeUsuario );

  } else {
    tipodeUsuario="usuario";
    $$("#nomOrgManejador").removeClass("activo");
    $$("#nomOrgManejador").addClass("hidden");
    $$("#nomRespOrgManejador").removeClass("activo");
    $$("#nomRespOrgManejador").addClass("hidden");

    $$("#nomUsuManejador").removeClass("hidden");
    $$("#nomUsuManejador").addClass("activo");
    console.log ("El tipo de usuario es : " + tipodeUsuario) ;
  }

}


function fnIniciarSesion (){
    email=$$("#emailISesion").val();
    password=$$("#passwordISesion").val();
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    console.log("El usuario es correcto y su correo es: " + email);

    var user = userCredential.user;
    mainView.router.navigate("/usuarioHome/");
    // ...
 })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.error(error.code);
    console.error(error.message);
    if (error.code == "auth/user-not-found"){
      console.log('el usuario no existe');
      app.dialog.alert("El usuario no existe!", "Oops");
    }

    if (error.code == "auth/wrong-password"){
      console.log('La contraseña es incorrecta');
      app.dialog.alert("La constraseña es incorrecta", "Oops");
    }

  });


}
