
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
      {path: '/usuarioHome/',url: 'usuarioHome.html', options : { transition: "f7-fade"}},
      {path: '/orgHome/',url: 'orgHome.html',},
      {path: '/verZona/',url: 'verZona.html',},

      // Rutas de usuario
      {path: '/listaOrg/',url: 'listaOrg.html',},
      {path: '/VerOrgDesdeUsu/',url: 'VerOrgDesdeUsu.html',},
      {path: '/enAdopcionOrg/',url: 'enAdopcionOrg.html',},
      {path: '/rescatadosOrg/',url: 'rescatadosOrg.html',},
      {path: '/recomendacionesOrg/',url: 'recomendacionesOrg.html',},
      {path: '/serTransito/',url: 'serTransito.html',},
      {path: '/donar/',url: 'donar.html',},
      {path: '/infoOrg/',url: 'infoOrg.html',},



      // Rutas de organizacion
      {path: '/miPerfil/',url: 'miPerfil.html',},
      {path: '/fliasTransito/',url: 'fliasTransito.html',},
      {path: '/misRecomendaciones/',url: 'misRecomendaciones.html',},
      {path: '/misRescatados/',url: 'misRescatados.html',},
      {path: '/misAdopcion/',url: 'misAdopcion.html',},
      {path: '/publicarOrg/',url: 'publicarOrg.html',},


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


// -------------- Variables para base de datos  ------------------//
var db=firebase.firestore();
colUsuarios=db.collection("usuarios");
colOrganizaciones=db.collection("organizaciones");


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


//    -------------------------PAGE INIT ORG HOME-----------------------------------------------
$$(document).on('page:init', '.page[data-name="orgHome"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized



    $$("#orgNombrePerfil").html(nombreOrganizacion);
    $$("#cerrarSOrg").on("click", fnCerrarSesion);




})

//    -------------------------PAGE INIT USUARIO HOME-----------------------------------------------
$$(document).on('page:init', '.page[data-name="usuarioHome"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized



    $$("#usuNombrePerfil").html(nombreUsuario);

    $$("#cerrarSUsu").on("click", fnCerrarSesion);





})


//    -------------------------PAGE INIT LISTA ORGANIZACIONES (desde usuario)-----------------------------------------------
$$(document).on('page:init', '.page[data-name="listaOrg"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized


  refOrganizaciones= colOrganizaciones;

  refOrganizaciones.get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(docActual){
          nombreOrganizacion=docActual.data().Nombre
          localidadOrg= docActual.data().Localidad
          provinciaOrg= docActual.data().Provincia
          console.log(nombreOrganizacion + " de " + localidadOrg + " " + provinciaOrg );
        //  $$("#listaOrganiza").append()
        })
    })
    .catch( function(error){
      console.log("Error: "+ error);
    });





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

                      var nuevoUsuario={
                      Nombre:nombreUsuario,
                      Apellido:apellidoUsuario,
                      TipoUsuario: tipodeUsuario,
                      Provincia: provincia,
                      Localidad: localidad,
                    }

                    MiId=email;
                    colUsuarios.doc(MiId).set(nuevoUsuario)
                      .then(function(docRef){
                        console.log("Se guardo en bd con el id: ", docRef.id);

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
                        console.log("Se guardo en bd con el id: ", docRef.id);

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
      var user = userCredential.user;
      console.log("El usuario es correcto y su correo es: " + email);

      var usuRef = db.collection("usuarios").doc(email);
      var orgRef = db.collection("organizaciones").doc(email);

      usuRef.get()                                          //compruebo si es usuario o ORGANIZACION
      .then((doc) => {                                      //esto me lo traje de la documentacion de firebase
          if (doc.exists) {                                  //si es usaurio se agrega nombreusuario y va a al perfil de usuario
              console.log("es un usuario!");
              console.log("Document data:", doc.data());
              nombreUsuario= doc.data().Nombre
              apellidoUsuario= doc.data().Apellido
              tipodeUsuario= doc.data().TipoUsuario
              provincia= doc.data().Provincia
              localidad= doc.data().Localidad
              console.log( "Accedió: " +  nombreUsuario+ " " + apellidoUsuario + " que es " + tipodeUsuario + " de " + localidad  + " " + provincia );
              mainView.router.navigate("/usuarioHome/");
          }
      }).catch((error) => {
          console.log("Error getting document:", error);
      });

      orgRef.get()
      .then((doc) => {
          if (doc.exists) {                                     //si es organizacion se agrega nombreorg y va a al perfil de usuario
              console.log("Es una organizacion!");
              console.log("Document data:", doc.data());
              nombreOrganizacion=doc.data().Nombre
              nombreRespOrganizacion=doc.data().nomResponsable
              apellidoUsuario = doc.data().apellidoResponsable
              tipodeUsuario=doc.data().TipoUsuario
              localidad=doc.data().Localidad
              provincia=doc.data().Provincia
              console.log( "Accedió: " +  nombreOrganizacion+ " que es una " + tipodeUsuario + " de " + localidad  + " " + provincia + " y su responsable es: " + nombreRespOrganizacion + " " + apellidoUsuario);
              mainView.router.navigate("/orgHome/");
          }
      }).catch((error) => {
          console.log("Error getting document:", error);
      });






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


function fnCerrarSesion(){
  app.dialog.confirm("¿Querés cerrar la sesión actual?", "Hey!", function(){mainView.router.navigate("/index/")});
}
//
