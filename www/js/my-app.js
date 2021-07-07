
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
      {path: '/verZona/',url: 'verZona.html',},



      // Rutas de usuario
      {path: '/usuarioHome/',url: 'usuarioHome.html', options : { transition: "f7-fade"}},
      {path: '/listaOrg/',url: 'listaOrg.html',},
      {path: '/VerOrgDesdeUsu/:id/',url: 'VerOrgDesdeUsu.html',},
      {path: '/enAdopcionOrg/',url: 'enAdopcionOrg.html',},
      {path: '/verAnimalDesdeUsu/:id',url: 'verAnimalDesdeUsu.html',},
      {path: '/peticionAdopcion/',url: 'peticionAdopcion.html',},

      {path: '/rescatadosOrg/',url: 'rescatadosOrg.html',},
      {path: '/recomendacionesOrg/',url: 'recomendacionesOrg.html',},
      {path: '/serTransito/',url: 'serTransito.html',},
      {path: '/donar/',url: 'donar.html',},
      {path: '/infoOrg/',url: 'infoOrg.html',},



      // Rutas de organizacion
      {path: '/orgHome/',url: 'orgHome.html',},
      {path: '/miPerfilOrg/',url: 'miPerfilOrg.html',},
      {path: '/misFliasTransito/',url: 'misFliasTransito.html',},
      {path: '/misRecomendaciones/',url: 'misRecomendaciones.html',},
      {path: '/nuevaRecomenda/',url: 'nuevaRecomenda.html',},
      {path: '/misRescatados/',url: 'misRescatados.html',},
      {path: '/misAdopcion/',url: 'misAdopcion.html',},
      {path: '/publicarOrg/',url: 'publicarOrg.html',},
      {path: '/verAnimal/:id/',url: 'verAnimal.html',},

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
var emailOrg="";
var password="";
var provincia="";
var provinciaOrg="";
var localidad="";
var localidadOrg="";
var descripcionOrg="";
var orgElegida="";
var nroIor="";
var idOr="";
var idMailOr="";
var idnomOr="";
var idLoc="";
var idPcia="";
var idDescOr="";

var nombreOrganizacionElegida="";
var localidadOrgElegida="";
var provinciaOrgElegida="";
var descripcionOrgElegida="";
var emailOrgElegida="";


// -------------- Variables para base de datos  ------------------//
var db=firebase.firestore();
colUsuarios=db.collection("usuarios");
colOrganizaciones=db.collection("organizaciones");
colAnimalesEnAdopcion=db.collection("animalesEnAdopcion");
colFamiliasTransito= db.collection("familiasTransito");
colRecomendaciones=db.collection("recomendaciones");

// -------------- Variables para Animales ------------------//

var nombre_Animal="";
var tipo_Animal="";
var genero_Animal="";
var descripción_Animal="";



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
    console.log("estoy en index");

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
    console.log("estoy en registro");

    calendarModal = app.calendar.create({
           inputEl: '#fechanac',
           openIn: 'customModal',
           header: true,
           footer: true,
         });

   calendarModal = app.calendar.create({
          inputEl: '#fechaCreaOrg',
          openIn: 'customModal',
          header: true,
          footer: true,
        });



    $$("#btnRegistrar").on("click", fnRegistrar);  // fnComprobarDatos (deberia chequear primero)
    $$("#toggleTipoUsuario").on("change", fnTipodeRegistro);



})



//    --------------------------    SESION DE USUARIOS  ------------------------------------------------------
//    -------------------------PAGE INIT USUARIO HOME-----------------------------------------------
$$(document).on('page:init', '.page[data-name="usuarioHome"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log("estoy en usuarioHome");


    $$("#usuNombrePerfil").html(nombreUsuario);

    $$("#cerrarSUsu").on("click", fnCerrarSesion);





})


//    -------------------------PAGE INIT LISTA ORGANIZACIONES (desde usuario)-----------------------------------------------
$$(document).on('page:init', '.page[data-name="listaOrg"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
  console.log("estoy en listaOrg");

  var refOrganizaciones= colOrganizaciones;
  var indice=0;

  refOrganizaciones.get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(docActual){
          indice++;
          nombreOrganizacion=docActual.data().Nombre
          localidadOrg= docActual.data().Localidad
          provinciaOrg= docActual.data().Provincia
          descripcionOrg=docActual.data().Descripción
          emailRefOrg=docActual.id
          console.log(nombreOrganizacion+ " de " + localidadOrg + " " + provinciaOrg + " " + emailRefOrg);
          $$("#bloqueOrganizaciones").append('<div id="em-Org'+indice+'"class="hidden">'+emailRefOrg+'</div> <div id="org" class="card demo-card-header-pic"><div id="imgOrg'+indice+'" style="background-image:url(https://www.ecestaticos.com/image/clipping/557/418/79776773aab795837282c7d4947abaf7/por-que-nos-parece-que-los-perros-sonrien-una-historia-de-30-000-anos.jpg)" class="card-header align-items-flex-end"> <p id="nomOrg'+indice+
            '" class="txtCards align-items-flex-end noMargin"> ' + nombreOrganizacion +'</p> <p id="locOr'+indice+'" class="align-items-flex-end noMargin"> ' + localidadOrg+'</p>  </div> <div class="card-content card-content-padding"> <p id="pciaOr'+indice+'">' + provinciaOrg +
            '</p> <p id="descOr'+indice+'">' + descripcionOrg+'</p> </div> <div class="card-footer"> <a id="verOr'+indice+'" href="/VerOrgDesdeUsu/verOr'+indice+'/" class="link verOrg">' + 'Leer Más' + '</a></div> </div>'); //    /VerOrgDesdeUsu/verOr'+indice+'/

        })
    })
    .catch( function(error){
      console.log("Error: "+ error);
    });


})

//    -------------------------PAGE INIT VerOrgDesdeUsu (desde el perfil de usuario) -----------------------------------------------
$$(document).on('page:init', '.page[data-name="VerOrgDesdeUsu"]', function (e, page) {
    // Do something here when page with data-name="about" attribute loaded and initialized

    console.log("estoy en VerOrgDesdeUsu");
    console.log('La org es id: ' + page.route.params.id );
    orgElegida=page.route.params.id;
    idOr=page.route.params.id;
    nroIor=idOr.replace ("verOr", "");
    idMailOr="#em-Org" + nroIor;
    idnomOr= "#nomOrg" + nroIor;
    idLoc="#locOr" + nroIor;
    idPcia="#pciaOr" + nroIor;
    idDescOr="#descOr" + nroIor;
    console.log("idMailOr: " + idMailOr)
    console.log("idnomOr: " + idnomOr)
    console.log("idLoc: " + idLoc)
    console.log("idPcia: " + idPcia)
    console.log("idDescOr: " + idDescOr)
    console.log("div de la Org: "+ idOr )
    nombreOrganizacion=$$(idnomOr).html();
    localidadOrg=$$(idLoc).html();
    provinciaOrg=$$(idPcia).html();
    descripcionOrg=$$(idDescOr).html();
    emailOrg=$$(idMailOr).html();
    console.log(nombreOrganizacion+ " " + localidadOrg + " " + provinciaOrg);
    console.log(descripcionOrg);
    console.log(emailOrg);


    $$("#VerNomORG").html(nombreOrganizacion);




})


//    -------------------------PAGE INIT enAdopcionOrg (lista de adopcion de x org (desde usuario)) -----------------------------------------------
$$(document).on('page:init', '.page[data-name="enAdopcionOrg"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log("estoy en enAdopcionOrg");
    console.log("traer animales de: "+ emailOrg);



    var refEnAdopDeOrg= colAnimalesEnAdopcion.where("email", "==" , emailOrg);
    var indice=0;
    refEnAdopDeOrg.get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc){
            indice++;
            nombre_Animal=doc.data().Nombre_Animal
            genero_Animal= doc.data().Genero_Animal
            tipo_Animal=doc.data().Tipo_Animal
            descripcion_Animal=doc.data().Descripcion_Animal
            console.log(nombre_Animal + " que es " + genero_Animal + " indice: " + indice);
            var tarjetaAni='<div id="tarjeta'+indice+'" class="card demo-card-header-pic"><div id="imgAUsu'+indice+'" style="background-image:url(img/perro.jpg)" class="card-header align-items-flex-end row"> <p id="nomAUsu'+indice+'" class="txtCards align-items-flex-end noMargin"> ' + nombre_Animal +
             '</p> </div> <div class="card-content card-content-padding"> <div class="row justify-content-space-around noMargin"> <p id="tipoAUsu'+indice+'" class=" align-items-flex-end noMargin"> ' + tipo_Animal+ '</p> <p class=" align-items-flex-end noMargin"> - </p> <p id="generoAUsu'+indice+'" class="align-items-flex-end noMargin">' + genero_Animal + '</p> </div><p id="descAUsu'+indice+'" class="text-align-justify">' + descripcion_Animal  + '</p> </div> <div class="card-footer"> <a id="verAUsu'+indice+'" href="/verAnimalDesdeUsu/verAUsu'+indice+'/" class="link verAnimal">' + 'Leer Más' + '</a></div> </div>';

            $$("#bloqueAdopcionDeOrg").append(tarjetaAni);

          })
      })
      .catch( function(error){
        console.log("Error: "+ error);
      });

      linkAOrg="/VerOrgDesdeUsu/"+orgElegida+"/";
      console.log(linkAOrg)
      $$("#irAOrgConId").on("click", function(){mainView.router.navigate(linkAOrg)})

})
//    -------------------------PAGE INIT verAnimalDesdeUsu (lista de adopcion de x org (desde usuario)) -----------------------------------------------
$$(document).on('page:init', '.page[data-name="verAnimalDesdeUsu"]', function (e, page) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log("estoy en verAnimalDesdeUsu");
    console.log('el id es: ' + page.route.params.id );
    console.log("animal es: "+ nombre_Animal);



idTarjeta=page.route.params.id;
nroT=idTarjeta.replace ("verAUsu", "");
console.log("el nro de tarjeta es:" + nroT);
idNomUsu= "#nomAUsu" + nroT;
idDescUsu="#descAUsu" + nroT;
idTipoUsu="#tipoAUsu" + nroT;
idGeneroUsu="#generoAUsu" + nroT;
idImgnUsu="#imgAUsu" + nroT;
console.log("div del nombre: "+ idNomUsu )
nombre_Animal=$$(idNomUsu).html();
genero_Animal=$$(idGeneroUsu).html();
tipo_Animal=$$(idTipoUsu).html();
descripcion_Animal=$$(idDescUsu).html();
urlIm_Animalusu=$$(idImgnUsu).css("background-image");
imgn_Animal= urlIm_Animalusu.replace('url("http://localhost:3000/browser/www/', "");
imgAUsu=imgn_Animal.replace('")', "")
console.log("animal es: " + nombre_Animal);
console.log("es: " + tipo_Animal);
console.log("es: " + genero_Animal);
console.log(descripcion_Animal);
console.log(imgAUsu);

$$("#nomAniUsu").html(nombre_Animal);
$$("#fotoAUsu").attr("src", imgAUsu);
$$("#tipoYGeneroUsu").html(tipo_Animal+", "+genero_Animal)
$$("#descripAUsu").html(descripcion_Animal);

$$("#adoptar").on("click", function(){mainView.router.navigate("/peticionAdopcion/")});




})

//    -------------------------PAGE INIT peticionAdopcion (usuario quiere Adoptar Animal) -----------------------------------------------
$$(document).on('page:init', '.page[data-name="peticionAdopcion"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
      console.log("estoy en peticionAdopcion");
      console.log(emailOrg);
      var popup = app.popup.create({

        el: '#popupInfoAdopcion',
        on: {
          opened: function () {
            console.log('Popup opened')
          }
        }
      });
      app.popup.open("#popupInfoAdopcion");




      $$("#btnSerTransito").on("click", fnQuieroSerTransito);
      $$("#hizoTransito").on("click", function(){
          hizoTransito=$$("#hizoTransito").val();
          if(hizoTransito=="no"){
            console.log("no hizo transito")
            $$("#expTransitoManejador").removeClass("activo");
            $$("#expTransitoManejador").addClass("hidden");
          } else {
            console.log("si hizo transito")
            $$("#expTransitoManejador").removeClass("hidden");
            $$("#expTransitoManejador").addClass("activo");
          }
      })





})


//    -------------------------PAGE INIT serTransito (usuario quiere ser transito) -----------------------------------------------
$$(document).on('page:init', '.page[data-name="serTransito"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
      console.log("estoy en serTransito");
      console.log(emailOrg);
      var popup = app.popup.create({

        el: '#popupInfo',
        on: {
          opened: function () {
            console.log('Popup opened')
          }
        }
      });
      app.popup.open("#popupInfo");




      $$("#btnSerTransito").on("click", fnQuieroSerTransito);
      $$("#hizoTransito").on("click", function(){
          hizoTransito=$$("#hizoTransito").val();
          if(hizoTransito=="no"){
            console.log("no hizo transito")
            $$("#expTransitoManejador").removeClass("activo");
            $$("#expTransitoManejador").addClass("hidden");
          } else {
            console.log("si hizo transito")
            $$("#expTransitoManejador").removeClass("hidden");
            $$("#expTransitoManejador").addClass("activo");
          }
      })





})


//    -------------------------PAGE INIT rescatadosOrg (rescatados de X org (desde usuario)) -----------------------------------------------
$$(document).on('page:init', '.page[data-name="rescatadosOrg"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log("estoy en rescatadosOrg");






})

//    -------------------------PAGE INIT recomendacionesOrg (recomendaciones de X org (desde usuario)) -----------------------------------------------
$$(document).on('page:init', '.page[data-name="recomendacionesOrg"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log("estoy en recomendacionesOrg");






})


//    -------------------------PAGE INIT infoOrg (info de X org (desde usuario)) -----------------------------------------------
$$(document).on('page:init', '.page[data-name="infoOrg"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log("estoy en infoOrg");






})
// ---------------------------------------SESION DE ORGANIZACION ---------------------------------------------------------------------------------

//    -------------------------PAGE INIT ORG HOME-----------------------------------------------
$$(document).on('page:init', '.page[data-name="orgHome"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log("estoy en orgHome" );


    $$("#orgNombrePerfil").html(nombreOrganizacion);
    $$("#cerrarSOrg").on("click", fnCerrarSesion);




})


//    -------------------------PAGE INIT misAdopcion (animales en adopcion de org que inicio sesion)  -----------------------------------------------
$$(document).on('page:init', '.page[data-name="misAdopcion"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log("estoy en misAdopcion");
    console.log(email);
    var refMisAnimalesEnAdopcion= colAnimalesEnAdopcion.where("email", "==" , email);
    var indice=0;
    refMisAnimalesEnAdopcion.get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(docActual){
            indice++;
            nombre_Animal=docActual.data().Nombre_Animal
            genero_Animal= docActual.data().Genero_Animal
            tipo_Animal=docActual.data().Tipo_Animal
            descripcion_Animal=docActual.data().Descripcion_Animal
            console.log(nombre_Animal + " que es " + genero_Animal + " indice: " + indice);
            var tarjeAnimal='<div id="tarjeta'+indice+'" class="card demo-card-header-pic"><div id="imgA'+indice+'" style="background-image:url(img/perro.jpg)" class="card-header align-items-flex-end row"> <p id="nomA'+indice+'" class="txtCards align-items-flex-end noMargin"> ' + nombre_Animal +
             '</p> </div> <div class="card-content card-content-padding"> <div class="row justify-content-space-around noMargin"> <p id="tipoA'+indice+'" class=" align-items-flex-end noMargin"> ' + tipo_Animal+ '</p> <p class=" align-items-flex-end noMargin"> - </p> <p id="generoA'+indice+'" class="align-items-flex-end noMargin">' + genero_Animal + '</p> </div><p id="descA'+indice+'" class="text-align-justify">' + descripcion_Animal  + '</p> </div> <div class="card-footer"> <a id="verA' +indice+ '" href="/verAnimal/verA'+indice+'/" class="link verAnimal">' + 'Leer Más' + '</a></div> </div>';

            $$("#bloqueAdopcion").append(tarjeAnimal);

          })
      })
      .catch( function(error){
        console.log("Error : "+ error);
      });


})

//    -------------------------PAGE INIT verAnimal (Selecciono animal de la lista de Adopción)  -----------------------------------------------
$$(document).on('page:init', '.page[data-name="verAnimal"]', function (e, page) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log('Pag. VerAnimal con id: ' + page.route.params.id );
    console.log("estoy en verAnimal");

idPag=page.route.params.id;
nroI=idPag.replace ("verA", "");
console.log("el nro de tarjeta es:" + nroI);
idNom= "#nomA" + nroI;
idDesc="#descA" + nroI;
idTipo="#tipoA" + nroI;
idGenero="#generoA" + nroI;
idImgn="#imgA" + nroI;
console.log("div del nombre: "+ idNom )
nombre_Animal=$$(idNom).html();
genero_Animal=$$(idGenero).html();
tipo_Animal=$$(idTipo).html();
descripcion_Animal=$$(idDesc).html();
urlIm_Animal=$$(idImgn).css("background-image");
imgn_Animal= urlIm_Animal.replace('url("http://localhost:3000/browser/www/', "");
imgA=imgn_Animal.replace('")', "")
console.log("animal es: " + nombre_Animal);
console.log("es: " + tipo_Animal);
console.log("es: " + genero_Animal);
console.log(descripcion_Animal);
console.log(imgA);

$$("#nomAnimalElegido").html(nombre_Animal);
$$("#fotoA").attr("src", imgA);
$$("#tipoYGenero").html(tipo_Animal+", "+genero_Animal)
$$("#descripA").html(descripcion_Animal);

$$("#adoptado").on("click", fnMarcarComoAdoptado);


})


//    -------------------------PAGE INIT misRescatados (animales rescatados de org que inicio sesion)  -----------------------------------------------
$$(document).on('page:init', '.page[data-name="misRescatados"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log("estoy en misRescatados");






})

//    -------------------------PAGE INIT misRecomendaciones (recomendaciones de org que inicio sesion)  -----------------------------------------------
$$(document).on('page:init', '.page[data-name="misRecomendaciones"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log("estoy en misRecomendaciones");

    var refMisRecomendaciones= colRecomendaciones.where("email", "==" , email);
    refMisRecomendaciones.get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(docReco){
            tituloRec=docReco.data().titulo
            txtRec=docReco.data().texto
            console.log("Recomendación:" + tituloRec + " " +txtRec);

            var nuevaRecomenda=`  <li class="accordion-item"><a class="item-content item-link" href="#">
                  <div class="item-inner">
                    <div class="item-title text-color-white"><b>`+tituloRec+`</b></div>
                  </div>
                </a>
                <div class="accordion-item-content">
                  <div class="block">
                    <p class="text-align-center text-color-white">`+txtRec+`</p>

                  </div>
                </div>
              </li>`

            $$("#acordionRecomenda").append(nuevaRecomenda)




          })
      })
      .catch( function(error){
        console.log("Error: "+ error);
      });


    var popup = app.popup.create({
      //content: '<div class="popup"><div class="view">  <div class="page"><div class="navbar"><div class="navbar-bg"></div><div class="navbar-inner"><div class="title"> Importante</div><div class="right"><a class="link popup-close">Cerrar</a></div></div></div><div class="page-content"><p> Antes que nada queremos </p>  </div></div> </div>',
      el: '#popupNuevaRecomenda',
      on: {
        opened: function () {
          console.log('Popup opened')
        }
      }
    });


    $$("#botonPublicarRecomenda").on("click", fnNuevaRecomenda);


})


//    -------------------------PAGE INIT misFliasTransito (familias transito de org que inicio sesion)  -----------------------------------------------
$$(document).on('page:init', '.page[data-name="misFliasTransito"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log("estoy en misFliasTransito");
    console.log(email);
    var swiper = app.swiper.create('#contenedorSwiper', {
    speed: 400,
    spaceBetween: 100
    });
    var refMisTransitos=colFamiliasTransito.where("emailorg", "==", email);
    var indice=0;

    refMisTransitos.get()
    .then(function(querySnapshot){
      querySnapshot.forEach(function(doc){
        indice++;
        nombre_Transito=doc.data().Nombre
        apellido_Transito=doc.data().Apellido
        email_Transito=doc.data().email
        telefono_Transito=doc.data().Telefono
        localidad_Transito=doc.data().Localidad
        provincia_Transito=doc.data().Provincia
        redes_Transito=doc.data().Redes
        tiempo_Transito=doc.data().Tiempo_Transito
        hizo_Transito=doc.data().Hizo_Transito
        exp_Transito=doc.data().Exp_Transito
        vivienda_Transito=doc.data().Vivienda
        familia_Transito=doc.data().Familia
        mascotas_Transito=doc.data().Tiene_Mascotas
        agrega_Transito=doc.data().Agrega

  /*      tabTransito=`<div id="tab-`+indice+`" class= "block tab bg-color-purple">
        <div class="block">
          <h1 class="centrar text-color-white">`+nombre_Transito+` `+apellido_Transito+ `</h1>
          <h3 class="block centrar noMargin">Datos del Hogar</h3>
          <div class="list">
            <ul>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">Vivienda: `+ vivienda_Transito +`</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">Grupo Familiar: `+familia_Transito+`</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">Otras Macotas: `+mascotas_Transito +`</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">Experiencia de Tránsito: `+exp_Transito +`</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">Puede dar transito: `+tiempo_Transito +`</div>
                </div>
              </div>
            </li>
            </ul>
          </div>

          <h3 class="block centrar noMargin">Datos de Contacto</h3>
          <div class="list">
            <ul>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">Vive en: `+localidad_Transito+`, `+provincia_Transito+`</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">Teléfono: `+telefono_Transito+`</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">Email: `+email_Transito+`</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">Redes: `+redes_Transito+`</div>
                </div>
              </div>
            </li>
            </ul>
          </div>
      </div>`;
      var cantPostulaciones=0;
      cantPostulaciones=indice-1;
      /*$$("#bloqueTransitos").append(tabTransito);*/

/*      var nuevaSwipe=`<div class="swiper-slide">
                        <div class="block">
                          <h1 class="centrar">`+nombre_Transito+` `+apellido_Transito+ `</h1>
                          <h3 class="block centrar noMargin">Datos del Hogar</h3>
                          <div class="list">
                            <ul>
                            <li>
                              <div class="item-content">
                                <div class="item-inner">
                                  <div class="item-title">Vivienda: `+ vivienda_Transito +`</div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="item-content">
                                <div class="item-inner">
                                  <div class="item-title">Grupo Familiar: `+familia_Transito+`</div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="item-content">
                                <div class="item-inner">
                                  <div class="item-title">Otras Macotas: `+mascotas_Transito +`</div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="item-content">
                                <div class="item-inner">
                                  <p>Experiencia de Tránsito: `+exp_Transito +`</p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="item-content">
                                <div class="item-inner">
                                  <div class="item-title">Puede dar transito: `+tiempo_Transito +`</div>
                                </div>
                              </div>
                            </li>
                            </ul>
                          </div>

                          <h3 class="block centrar noMargin">Datos de Contacto</h3>
                          <div class="list">
                            <ul>
                            <li>
                              <div class="item-content">
                                <div class="item-inner">
                                  <div class="item-title">Vive en: `+localidad_Transito+`, `+provincia_Transito+`</div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="item-content">
                                <div class="item-inner">
                                  <div class="item-title">Teléfono: `+telefono_Transito+`</div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="item-content">
                                <div class="item-inner">
                                  <div class="item-title">Email: `+email_Transito+`</div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="item-content">
                                <div class="item-inner">
                                  <div class="item-title">Redes: `+redes_Transito+`</div>
                                </div>
                              </div>
                            </li>
                            </ul>
                          </div>
                        </div>
                      </div>`;



    $$("#swipes").append(nuevaSwipe);
    var swiper = app.swiper.get('#contenedorSwiper');
    swiper.slideNext();
    console.log("nombre del transito: "+ doc.data().Nombre + "Transito nro: "+ indice);
*/
    var acordionT=`  <li class="accordion-item"><a class="item-content item-link" href="#">
          <div class="item-inner">
            <div class="item-title text-color-white"><b>`+nombre_Transito+` `+apellido_Transito+`</b></div>
          </div>
        </a>
        <div class="accordion-item-content">
          <div class="block">
            <h4 class="item-title centrar text-color-white"><b>DATOS DEL HOGAR</b></h4>
            <p class="text-align-center text-color-white"><b> Vivienda:</b> `+vivienda_Transito+`</p>
            <p class="text-align-center text-color-white"><b> Grupo Familiar:</b> `+familia_Transito+`</p>
            <p class="text-align-center text-color-white"><b> Otras Mascotas:</b> `+mascotas_Transito+`</p>
            <p class="text-align-center text-color-white"> <b>Experiencias Tránsito:</b> `+exp_Transito+`</p>
            <p class="text-align-center text-color-white"> <b> Puede dar transito:</b> `+tiempo_Transito +`</p>
            <h4 class="item-title centrar text-color-white"> <b>DATOS DE CONTACTO</b></h4>
            <p class="text-align-center text-color-white"> <b> Vive en:</b> `+localidad_Transito+`, `+provincia_Transito+`  </p>
            <p class="text-align-center text-color-white"> <b> Teléfono:</b> `+telefono_Transito+`</p>
            <p class="text-align-center text-color-white"> <b> E-mail:</b> `+email_Transito+`</p>
            <p class="text-align-center text-color-white"> <b> Redes:</b> `+redes_Transito+`</p>
          </div>
        </div>
      </li>`;

      $$("#acordionTransitos").append(acordionT);

      })
    })
    .catch( function(error){
      console.log("Error: "+ error);
    });


    /*console.log(cantPostulaciones);
    cantFliasTransito=`<h1 class="centrar">Tenés: `+cantPostulaciones+` postulaciones.</h1>`
    $$("#cantFliasTransito").append(cantFliasTransito);*/






})

//    -------------------------PAGE INIT miPerfil (perfil de org que inicio sesion)  -----------------------------------------------
$$(document).on('page:init', '.page[data-name="miPerfilOrg"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log("estoy en miPerfilOrg");






})

//    -------------------------PAGE INIT publicarOrg (org publica nuevo animal en adopcion)  -----------------------------------------------
$$(document).on('page:init', '.page[data-name="publicarOrg"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log("estoy en publicarOrg");

$$("#publicarEnAdopcion").on("click", fnPublicarEnAdopcion);




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

                      app.dialog.confirm("¡¡Ya te registraste!! Iniciá sesión para ingresar!", "¡Genial!");
                      mainView.router.navigate('/index/');
                      console.log('Se registró el Usuario ' + nombreUsuario + " " + apellidoUsuario +  " correctamente");


                })
              .catch( function(error) {
                  console.error(error.code);
                  switch (error.code){
                    case "auth/email-already-in-use" :
                        console.error("el mail ya existe...");
                        app.dialog.alert("¡Ya existe una cuenta con este correo!", "Oops...");
                        break;

                    case "auth/invalid-email":
                        console.error("El mail es inválido");
                        app.dialog.alert("¡Esa no es una dirección de correo valida!", "Oops...");
                        break;
                        default:
                    case "auth/weak-password":
                        console.error("contraseña debil");
                        app.dialog.alert("¡La contraseña debe contener al menos 8 caracteres!", "Oops...");
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
  descripcionOrg = $$("#descOrg").val();

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
                      Descripción: descripcionOrg,
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
                    console.log(descripcionOrg);
                    mainView.router.navigate('/index/');
                })

              .catch( function(error) {
                  console.error(error.code);
                  switch (error.code){
                    case "auth/email-already-in-use" :
                        console.error("el mail ya existe...");
                        app.dialog.alert("¡Ya existe una cuenta con este correo!", "Oops...");
                        break;

                    case "auth/invalid-email":
                        console.error("El mail es inválido");
                        app.dialog.alert("¡Esa no es una dirección de correo valida!", "Oops...");
                        break;
                        default:
                    case "auth/weak-password":
                        console.error("contraseña debil");
                        app.dialog.alert("¡La contraseña debe contener al menos 8 caracteres!", "Oops...");
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

    $$("#descOrgManejador").removeClass("hidden");
    $$("#descOrgManejador").addClass("activo");

    $$("#fechaCreaOrgManejador").removeClass("hidden");
    $$("#fechaCreaOrgManejador").addClass("activo");

    console.log("El tipo de usuario es : " + tipodeUsuario );

  } else {
    tipodeUsuario="usuario";
    $$("#nomOrgManejador").removeClass("activo");
    $$("#nomOrgManejador").addClass("hidden");
    $$("#nomRespOrgManejador").removeClass("activo");
    $$("#nomRespOrgManejador").addClass("hidden");

    $$("#nomUsuManejador").removeClass("hidden");
    $$("#nomUsuManejador").addClass("activo");

    $$("#descOrgManejador").removeClass("activo");
    $$("#descOrgManejador").addClass("hidden");

    $$("#fechaCreaOrgManejador").removeClass("activo");
    $$("#fechaCreaOrgManejador").addClass("hidden");
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
      app.dialog.alert("El usuario no existe!", "Oops...");
    }

    if (error.code == "auth/wrong-password"){
      console.log('La contraseña es incorrecta');
      app.dialog.alert("La constraseña es incorrecta", "Oops...");
    }

    if (error.code == "auth/invalid-email"){
      console.log('mail invalido');
      app.dialog.alert("¡Ingresa un correo eléctronico válido! ", "Oops...");
    }

  });


}


function fnCerrarSesion(){
  app.dialog.confirm("¿Querés cerrar la sesión actual?", "¡Hey!", function(){mainView.router.navigate("/index/")});
}


function fnPublicarEnAdopcion(){
  app.dialog.confirm("¿Querés publicar un nuevo animal en adopción?", "Hey!", function(){
    nombre_Animal=$$("#nombreAnimal").val();
    genero_Animal=$$("#generoAnimal").val();
    descripcion_Animal=$$("#descripcion_animal").text();
    tipo_Animal=$$("#tipoAnimal").val();
    console.log("se va a publicar: "+ nombre_Animal + " que es: " + tipo_Animal + " y es: " +  genero_Animal);

    var nuevoAnimalEnAdopcion={
      email:email,
      Tipo_Animal: tipo_Animal,
      Nombre_Animal: nombre_Animal,
      Genero_Animal: genero_Animal,
      Descripcion_Animal: descripcion_Animal,
    }

    colAnimalesEnAdopcion.add(nuevoAnimalEnAdopcion)
      .then(function (docRef){
        console.log("Se guardo en bd con el id: ", docRef.id);
        app.dialog.confirm("¡Ya se publicó a " + nombre_Animal + "! ¡¡Ahora a encontrarle Familia!! ", "¡Genial!", function(){mainView.router.navigate("/misAdopcion/")});
      })
      .catch(function(error){
        console.log("Error: " + error);
      });
  });

}



function fnQuieroSerTransito(){

  console.log(nombreUsuario, email);
  vivienda= $$("#vivienda").val();
  familia= $$("#familia").val();
  tiempoTransito=$$("#tiempoTransito").val();
  tieneMascotas=$$("#tieneMascotas").val();
  hizoTransito=$$("#hizoTransito").val();
  expTransito=$$("#expTransito").val();
  if(expTransito==""){
    expTransito="No tuvo";
  }
  linkRedes=$$("#linkRedes").val();
  if(linkRedes==""){
    linkRedes="No adjunta redes";
  }
  telefono=$$("#telefono").val();
  algoMas=$$("#algoMas").val();
  if(algoMas==""){
    algoMas="No agrega nada";
  }

  if (tiempoTransito=="" || tieneMascotas=="" || hizoTransito=="" ||  telefono=="" ||  vivienda=="" ||  familia=="" ) {
    app.dialog.alert("Completá todos los campos!!", "Oops");
  } else {
    app.dialog.confirm("¡" + nombreUsuario + ", vas a pasar nuestra lista de Familias Transitorias"
    + "</br>"+ "Cuando necesitemos un transito te vamos a contactar!"  , "Confirmá tu postulación!", function(){

      var postulacionTransito={
        email:email,
        emailorg:emailOrg,
        Nombre: nombreUsuario,
        Apellido: apellidoUsuario,
        Vivienda: vivienda,
        Familia: familia,
        Localidad: localidad,
        Provincia: provincia,
        Telefono: telefono,
        Redes: linkRedes,
        Tiempo_Transito: tiempoTransito,
        Tiene_Mascotas: tieneMascotas,
        Hizo_Transito: hizoTransito,
        Exp_Transito: expTransito,
        Agrega: algoMas,
      }


      colFamiliasTransito.add(postulacionTransito)
        .then(function (docRef){
          console.log("Se guardo en bd con el id: ", docRef.id);
          app.dialog.alert ("¡" +nombreUsuario+", ya estás en nuestra lista de Familias Transitorias! ¡Tu ayuda es importantísima", "¡¡Graciass!!", function() {mainView.router.navigate("/usuarioHome/")} );
        })
        .catch(function(error){
          console.log("Error: " + error);
        });
    });

  }


/*
  refMisAnimalesEnAdopcion.get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(docActual){
          indice+=1;   // esto es una idea para poder mostrar el animal (en verAnimal.html) que se selecciona de la lista de adopcion (aun no estoy segur a donde voy)
          nombre_Animal=docActual.data().Nombre_Animal
          genero_Animal= docActual.data().Genero_Animal
          tipo_Animal=docActual.data().Tipo_Animal
          descripcion_Animal=docActual.data().Descripcion_Animal
          console.log(nombre_Animal + " que es " + genero_Animal + " indice: " + indice);






    app.dialog.confirm("¡" + nombre_Animal + " ya está publicado! ¡¡Ahora a encontrarle Familia!! ", "Genial!", function(){mainView.router.navigate("/orgHome/")});

  */
}


function fnNuevaRecomenda(){

  titRecomenda=$$("#tituloRecomenda").val();
  textRecomenda=$$("#textoRecomenda").text();

  console.log(titRecomenda + " " + textRecomenda);


  if (titRecomenda=="" || textRecomenda=="" ) {
    app.dialog.alert("Completá todos los campos!!", "Oops");
  } else {
    app.dialog.confirm("¡"+nombreOrganizacion+"! vas a crear la recomendación: "+titRecomenda , "¡Aviso!", function(){

      var nuevaRecomedacion={
        email:email,
        titulo: titRecomenda,
        texto: textRecomenda,
      }


      colRecomendaciones.add(nuevaRecomedacion)
        .then(function (docRef){
          console.log("Se guardo en bd con el id: ", docRef.id);
          app.dialog.alert ("¡Creaste una nueva recomendación!", "¡¡Listo!!", function() {app.popup.close("#popupNuevaRecomenda")} );
        })
        .catch(function(error){
          console.log("Error: " + error);
        });
    });

  }
}


function fnMarcarComoAdoptado(){
  app.dialog.prompt("Ingresa el e-mail del adoptante", "¿Una nueva familia?") //tengo que hacer la conexion entre usuario-org-y peticion de adopcion
}

function fnAdoptar(){

}
