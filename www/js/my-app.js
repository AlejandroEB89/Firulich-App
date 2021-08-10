
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

    dialog: {

    buttonCancel: 'Cancelar',

  },
    // Add default routes
    routes: [
      {path: '/index/',url: 'index.html',},
      {path: '/registro/',url: 'registro.html',},
      {path: '/verZona/',url: 'verZona.html',},



      // Rutas de usuario
      {path: '/usuarioHome/',url: 'usuarioHome.html', options : { transition: "f7-fade"}},
      {path: '/listaOrg/',url: 'listaOrg.html',},
      {name:'VerOrgDesdeUsu', path: '/VerOrgDesdeUsu/:id/',url: 'VerOrgDesdeUsu.html',},  //
      {path: '/enAdopcionOrg/',url: 'enAdopcionOrg.html',},
      {path: '/verAnimalDesdeUsu/:id',url: 'verAnimalDesdeUsu.html',},
      {path: '/peticionAdopcion/',url: 'peticionAdopcion.html',},
      {path: '/rescatadosOrg/',url: 'rescatadosOrg.html',},
      {path: '/verAnimaldopDesdeUsu/:id',url: 'verAnimaldopDesdeUsu.html',},
      {path: '/recomendacionesOrg/',url: 'recomendacionesOrg.html',},
      {path: '/serTransito/',url: 'serTransito.html',},
      {path: '/donar/',url: 'donar.html',},
      {path: '/infoOrg/',url: 'infoOrg.html',},


      {path: '/publicarZona/',url: 'publicarZona.html',},
      {path: '/verAnimalZona/',url: 'verAnimalZona.html',},

      // Rutas de organizacion
      {path: '/orgHome/',url: 'orgHome.html',},
      {path: '/miPerfilOrg/',url: 'miPerfilOrg.html',},
      {path: '/misFliasTransito/',url: 'misFliasTransito.html',},
      {path: '/misRecomendaciones/',url: 'misRecomendaciones.html',},
      {path: '/nuevaRecomenda/',url: 'nuevaRecomenda.html',},
      {path: '/misRescatados/',url: 'misRescatados.html',},
      {path: '/verAnimaldop/:id/',url: 'verAnimaldop.html',},
      {path: '/misAdopcion/',url: 'misAdopcion.html',},
      {path: '/verAnimal/:id/',url: 'verAnimal.html',},
      {path: '/misPeticionesAdop/',url: 'misPeticionesAdop.html',},
      {path: '/publicarOrg/',url: 'publicarOrg.html',},
      {path: '/ingresoManual/',url: 'ingresoManual.html',},      //hacer esta page init



    ]
    // ... other parameters
  });

var mainView = app.views.create('.view-main');



// -------------- Variables de datos del usuario /Organización ------------------//

var tipodeUsuario="";
var nombreUsuario="";
var apellidoUsuario="";
var fechaNacUsuario="";
var nombreOrganizacion="";
var nombreRespOrganizacion="";
var fechaCreacionOrg="";
var apellidoRespOrganizacion="";
var redesOrg="";
var email="";
var emailOrg="";
var urlFotoPerfilOrg="";
var password="";
var provincia="";
var localidad="";
var localidadOrg="";
var descripcionOrg="";
var orgElegida="";
var linkAOrg="";
var nroIor="";
var idOr="";
var idMailOr="";
var idnomOr="";
var idLoc="";
var idPcia="";
var idDescOr="";

var bancoOrg="";
var titularCtaOrg="";
var cbuOrg="";
var nroCtaOrg="";
var cuilOrg="";
var cuentaMpOrg="";

var tituloRec="";
var txtRec="";
var idRec="";

// -------------- Variables para Adoptante ------------------//

var nomAdoptante="";
var apeAdoptante="";
var profesionAdoptante="";
var localidadAdoptante="";
var provinciaAdoptante="";
var telefonoAdoptante="";
var direccionAdoptante="";
var linkRedesAdoptante="";
var porqueAdoptante="";
var cicloVidaAdoptante="";
var compromisoAdoptante="";
var necesidadesAdoptante="";
var alergiasAdoptante="";
var viviendaAdoptante="";
var familiaAdoptante="";
var viviendaPropiaAdoptante="";
var perimisoPropAdoptante="";
var mudanzaAdoptante="";
var castracionAdoptante="";
var tieneMascotasAdoptante="";
var cuidaMascotasAdoptante="";
var algoMasAdoptante="";
var emailAdoptante="";
var fechaNacAdoptante="";
var edadUsuario="";
var fechaDeAdopcion="";
var avisoEsUsuario="";
var timeStampAdop="";
// -------------- Variables para base de datos  ------------------//
var db=firebase.firestore();
var storageRef = firebase.storage().ref();
colUsuarios=db.collection("usuarios");
colOrganizaciones=db.collection("organizaciones");
colAnimalesEnAdopcion=db.collection("animalesEnAdopcion");
colFamiliasTransito= db.collection("familiasTransito");
colRecomendaciones=db.collection("recomendaciones");
colPeticionAdopcion=db.collection("peticionesAdop");
colAnimalesAdoptados=db.collection("animalesAdoptados");
colAnimalesEnZona=db.collection("animalesEnZona");
// -------------- Variables para Animales ------------------//

var nombre_Animal="";
var tipo_Animal="";
var genero_Animal="";
var descripción_Animal="";
var id_AnimalBD="";
var urlAnimal="";
var ind="";
// --------------Variables para mapas ------------------------------------------ ------------------//
var map="";
var platform="";
var latitudCenter="";
var longitudCenter="";
var pos="";

var emailZona="";
var latitudZona="";
var longitudZona="";
var nombre_AnimalZona="";
var tipoAnimalZona="";
var descripcion_AnimalZona="";
var tipo_Publicacion="";
var urlAnimalZona="";
var ubicacionZona="";
var timeStampZona="";
var localidadZona="";
var provinciaZona="";
var tipoUbi="";
var idAniZona="";
var indexZona=0;
// -------------------------------------------------------- ------------------//
// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
    platform = new H.service.Platform({
      'apikey': 'nREUKFWksz9bAOp4X0mDLYLsCWmoSZ0ps2XiFwmvIkg'
 });


/*
// CODIGO PARA GEOLOCALIZACION DEL DISPOSITIVO ///
 var onSuccessGPS = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');

              latitud=position.coords.latitude;
              longitud=position.coords.longitude;
              console.log("pos: "+latitud+" "+ longitud);
    };

    // onError Callback receives a PositionError object
    //
    function onErrorGPS(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccessGPS, onErrorGPS);
*/

});




// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
    console.log(e);
})

//  -------------------------- PAGE INIT INDEX ----------------------------------------------------
$$(document).on('page:init', '.page[data-name="index"]', function (e) {
    console.log("estoy en index");

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
           dateFormat: 'yyyy/mm/dd',
           toolbarCloseText: 'Listo',
           headerPlaceholder: 'Seleccionar Fecha'
         });

   calendarModal = app.calendar.create({
          inputEl: '#fechaCreaOrg',
          openIn: 'customModal',
          header: true,
          footer: true,
          dateFormat: 'yyyy/mm/dd',
          toolbarCloseText: 'Listo',
          headerPlaceholder: 'Seleccionar Fecha'
        });



    $$("#btnCamaraPerfil").on("click", fnCamaraPerfil)
    $$("#btnGaleriaPerfil").on("click", fnGaleriaPerfil);
    $$("#btnRegistrar").on("click", fnRegistrar);
    $$("#toggleTipoUsuario").on("change", fnTipodeRegistro);



})

//    -------------------------PAGE INIT VER ZONA-----------------------------------------------
$$(document).on('page:init', '.page[data-name="verZona"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log("estoy en verZona");
    $$("#publicarPerdido").on("click", fnPublicaEnZona)


    $$("#verNomZona").append(localidadZona)
    $$("#atrasZona").on("click", function(){
      if(tipodeUsuario=="org"){
        mainView.router.navigate("/orgHome/")
      }
      if(tipodeUsuario=="usuario"){
        mainView.router.navigate("/usuarioHome/")
      }
    });

            var defaultLayers = platform.createDefaultLayers();

          	// Instantiate (and display) a map object:
          	map = new H.Map(
                  document.getElementById('mapContainer'),
              	defaultLayers.vector.normal.map,
              	{
                	zoom: 14,
                	center: { lat: latitudCenter, lng: longitudCenter }
                  });


            coordsCenter={lat: latitudCenter, lng: longitudCenter};
            var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
            var ui = H.ui.UI.createDefault(map, defaultLayers, 'es-ES');    ///TypeError: cant read property UI of undefined
            map.setCenter(coordsCenter);

            var refAnimalesEnZona= colAnimalesEnZona.where("provincia", "==", provinciaZona).where("localidad", "==", localidadZona).orderBy("timeStamp", "desc")
            refAnimalesEnZona.get()
              .then(function(querySnapshot) {
                console.log("adentro del then")
                  querySnapshot.forEach(function(docActual){
                    console.log("adentro del forEach")
                    nombre_AnimalZona=docActual.data().Nombre_Animal
                    tipo_Publicacion= docActual.data().Tipo_Publicacion
                    tipoAnimalZona=docActual.data().Tipo_Animal
                    descripcion_AnimalZona=docActual.data().Descripcion_Zona
                    urlAnimalZona=docActual.data().url_Animal
                    emailZona=docActual.data().email
                    timeStampZona=docActual.data().timeStamp
                    latitudZona=docActual.data().latitud
                    longitudZona=docActual.data().longitud
                    contactoZona=docActual.data().telefono
                    ubicacionZona=docActual.data().direccion
                    localidadZona=docActual.data().localidad
                    provinciaZona=docActual.data().provincia
                    idAniZona=docActual.id
                    fechaPubliZona=docActual.data().fechaPubli
                    console.log("-"+nombre_AnimalZona+"-" + tipo_Publicacion + "- en direccion: " + ubicacionZona+ "-lati:"+latitudZona+" -longi:"+longitudZona);


                    coordsA= {lat: latitudZona, lng: longitudZona};
                    pngIcono="img/"+tipoAnimalZona+"-"+tipo_Publicacion+".png";
                    console.log(pngIcono)
                    var icon=new H.map.Icon(pngIcono);

////////////////////////////   GRUPO PARA ANIMALES PERDIDOS     ////////////////////////////////////////////////////

            if(tipo_Publicacion=="Perdido"){

                function addMarkerToGroup(groupPerdidos, coordsA, html) {
                  var marker = new H.map.Marker(coordsA, {icon: icon});
                  // add custom data to the marker
                  marker.setData(html);
                  groupPerdidos.addObject(marker);
                }

                /**
                 * Add two markers showing the position of Liverpool and Manchester City football clubs.
                 * Clicking on a marker opens an infobubble which holds HTML content related to the marker.
                 * @param {H.Map} map A HERE Map instance within the application
                 */
                function addInfoBubble(map) {
                  var groupPerdidos = new H.map.Group();

                  map.addObject(groupPerdidos);

                  // add 'tap' event listener, that opens info bubble, to the group
                  groupPerdidos.addEventListener('tap', function (evt) {
                    // event target is the marker itself, group is a parent event target
                    // for all objects that it contains
                    var bubble = new H.ui.InfoBubble(evt.target.getGeometry(), {
                      // read custom data
                      content: evt.target.getData()
                    });
                    // show info bubble
                    ui.addBubble(bubble);
                  }, false);

                  addMarkerToGroup(groupPerdidos, coordsA,
                    '<div>'+nombre_AnimalZona+'</div><div>'+tipoAnimalZona+', '+tipo_Publicacion+'<br /></div><div>'+ubicacionZona+'</div><div>'+contactoZona+'</div><br /><div><a href="#" onclick="setAnimalZona(\''+idAniZona+'\')"> Ver </a></div>',);

                }

                addInfoBubble(map);
            }
////////////////////////////   GRUPO PARA ANIMALES DEAMBULANDO     ////////////////////////////////////////////////////

            if(tipo_Publicacion=="Encontrado"){

                function addMarkerToGroup(groupEncontrados, coordsA, html) {
                  var marker = new H.map.Marker(coordsA, {icon: icon});
                  // add custom data to the marker
                  marker.setData(html);
                  groupEncontrados.addObject(marker);
                }

                /**
                 * Add two markers showing the position of Liverpool and Manchester City football clubs.
                 * Clicking on a marker opens an infobubble which holds HTML content related to the marker.
                 * @param {H.Map} map A HERE Map instance within the application
                 */
                function addInfoBubble(map) {
                  var groupEncontrados = new H.map.Group();

                  map.addObject(groupEncontrados);

                  // add 'tap' event listener, that opens info bubble, to the group
                  groupEncontrados.addEventListener('tap', function (evt) {
                    // event target is the marker itself, group is a parent event target
                    // for all objects that it contains
                    var bubble = new H.ui.InfoBubble(evt.target.getGeometry(), {
                      // read custom data
                      content: evt.target.getData()
                    });
                    // show info bubble
                    ui.addBubble(bubble);
                  }, false);

                  addMarkerToGroup(groupEncontrados, coordsA,
                    '<div>'+tipoAnimalZona+', '+tipo_Publicacion+'</div>' +
                    '<div>'+nombre_AnimalZona+'</div> <div>'+ubicacionZona+'</div><br /><div> <a href="#" onclick="setAnimalZona(\''+idAniZona+'\')"> Ver </a></div>',);

                }

                addInfoBubble(map);
            }





                    if(tipo_Publicacion=="Encontrado"){
                      infoCard="Visto en: "
                    } else {
                      infoCard="Se perdió en: "
                    }
                    var tarjeAnimalZona='<a href="#" onclick="setAnimalZona(\''+idAniZona+'\')" class="link verOrg"> <div id="org" class="card demo-card-header-pic "><div style="background-image:url('+urlAnimalZona+')" class="card-header justify-content-flex-start align-items-flex-end txtCards"> <div class="align-items-flex-end margenIcono"> <img src="'+pngIcono+'"></div> ' + nombre_AnimalZona +' </div>  <div class="card-content card-content-padding"> <p class="text-color-black"> ' + infoCard+  ubicacionZona +'</p> <p  class="text-align-justify maxTarjeta noMargin text-color-black">' + descripcion_AnimalZona+'</p> </div> </div></a>'

                    $$("#bloqueZona").append(tarjeAnimalZona);

                  })
              })
              .catch( function(error){
                console.log("Error : "+ error);
              });


})


//    -------------------------PAGE INIT PUBLICAR ZONA-----------------------------------------------
$$(document).on('page:init', '.page[data-name="publicarZona"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log("estoy en publicarZona");
    console.log("tipo de ubicacion: "+ tipoUbi);



    var defaultLayers = platform.createDefaultLayers();

    // Instantiate (and display) a map object:
    var map = new H.Map(
          document.getElementById('mapContainerZ'),
        defaultLayers.vector.normal.map,
        {
          zoom: 14,
          center: { lat: latitudCenter, lng: longitudCenter }
          });


    coordsCenter={lat: latitudCenter, lng: longitudCenter};
    var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    var ui = H.ui.UI.createDefault(map, defaultLayers, 'es-ES');    ///TypeError: cant read property UI of undefined
    map.setCenter(coordsCenter);

    $$("#btnAgregarMarcador").on("click", function (){

      if(tipoUbi=="direccion"){
        console.log("Agregar dire al mapa con direccion")
        ubicacionZona=$$("#ubiAniZona").val();

                   url = 'https://geocoder.ls.hereapi.com/6.2/geocode.json';
                   app.request.json(url, {
                   searchtext: ubicacionZona+','+localidadZona+','+ provinciaZona,
                   //searchtext: 'Rivadavia 300, Plottier, Neuquén',
                   apiKey: '9ZP-Ymz47rJhyadmWM7OeTtmy9c5tu_0bX68jatLVa8',
                   gen: '9'
                 }, function (data) {
                    // hacer algo con data
                    console.log("geo:" + data);
                    console.dir(data)
                    datosZ=JSON.stringify(data);
                    console.log(datosZ)
                    //datosJson=JSON.parse(JSON.stringify(data));
                    latitudZona=data.Response.View[0].Result[0].Location.DisplayPosition.Latitude;
                    longitudZona=data.Response.View[0].Result[0].Location.DisplayPosition.Longitude;
                    console.log("lati dire ingresada: "+ latitudZona);
                    console.log("long dire ingresada: "+ longitudZona);

                    coordsZ= {lat: latitudZona, lng: longitudZona};
                    /*pngIcono="img/"+tipoAnimalZona+"-"+tipo_Publicacion+".png";
                    console.log(pngIcono)
                    var icon=new H.map.Icon(pngIcono);*/


                    function addDraggableMarker(map, behavior){

                      var marker = new H.map.Marker(coordsZ, {
                        // mark the object as volatile for the smooth dragging
                        volatility: true
                      });
                      // Ensure that the marker can receive drag events
                      marker.draggable = true;
                      map.addObject(marker);

                      // disable the default draggability of the underlying map
                      // and calculate the offset between mouse and target's position
                      // when starting to drag a marker object:
                      map.addEventListener('dragstart', function(ev) {
                        var target = ev.target,
                            pointer = ev.currentPointer;
                        if (target instanceof H.map.Marker) {
                          var targetPosition = map.geoToScreen(target.getGeometry());
                        //  targetPositionZ=JSON.stringify(targetPosition);
                        //  console.log("targetPos: "+ targetPositionZ)
                          target['offset'] = new H.math.Point(pointer.viewportX - targetPosition.x, pointer.viewportY - targetPosition.y);
                          behavior.disable();
                        }
                      }, false);


                      // re-enable the default draggability of the underlying map
                      // when dragging has completed
                      map.addEventListener('dragend', function(ev) {
                        var target = ev.target;
                        if (target instanceof H.map.Marker) {
                          //console.log("%j", target);
                          console.dir(target);
                          latitudPre=target.$["0"]
                          longitudPre=target.$["1"]

                          stringLati=latitudPre.toString();
                          stringLati="-"+stringLati;
                          console.log("Correccion lati: " + stringLati);
                          stringLongi=longitudPre.toString();
                          console.log("-"+stringLati+"-")
                          var length = 11;
                          var trimmedlat= stringLati.substring(0, length);
                          var trimmedlong= stringLongi.substring(0, length);
                          console.log("longi nueva por drag: "+ trimmedlong)
                          console.log("lati nueva por drag: "+ trimmedlat)

                          longitudZona=trimmedlong;
                          latitudZona=trimmedlat;



                          nuevasCoords={lat: latitudZona, lng: longitudZona};
                          map.setCenter(nuevasCoords);


                  /// INTENTO DE SACAR LA NUEVA DIRECCION DESPUES DEL DRAG PERO NO OTORGA BUENOS RESULTADOS (me da como resultado bariloche) ////
                          url = 'https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json';
                          app.request.json(url, {
                              prox: latitudZona+','+ longitudZona,
                              mode: 'retrieveAddresses',
                              apiKey: '9ZP-Ymz47rJhyadmWM7OeTtmy9c5tu_0bX68jatLVa8',
                              gen: '9'
                            }, function (data) {
                               // hacer algo con data
                               console.dir(data);
                          }, function(xhr, status) { console.log("error geo: "+status); }   );




                          behavior.enable();
                        }
                      }, false);

                      // Listen to the drag event and move the position of the marker
                      // as necessary
                       map.addEventListener('drag', function(ev) {
                        var target = ev.target,
                            pointer = ev.currentPointer;
                        if (target instanceof H.map.Marker) {
                          target.setGeometry(map.screenToGeo(pointer.viewportX - target['offset'].x, pointer.viewportY - target['offset'].y));

                        //  targetZ=JSON.stringify(target);
                          //console.log("target set geo: " + targetZ)
                        }
                      }, false);
                    }



                    addDraggableMarker(map, behavior);




                  }, function(xhr, status) { console.log("error geo: "+status); } )


            }//Fin del if(tipoUbi)

      if(tipoUbi=="gps"){

        var onSuccessGPS = function(position) {
           /*    alert('Latitude: '          + position.coords.latitude          + '\n' +
                     'Longitude: '         + position.coords.longitude         + '\n' +
                     'Altitude: '          + position.coords.altitude          + '\n' +
                     'Accuracy: '          + position.coords.accuracy          + '\n' +
                     'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
                     'Heading: '           + position.coords.heading           + '\n' +
                     'Speed: '             + position.coords.speed             + '\n' +
                     'Timestamp: '         + position.timestamp                + '\n');
       */
                     latitudZona=position.coords.latitude;
                     longitudZona=position.coords.longitude;
                     console.log("posGPS: "+latitudZona+" "+ longitudZona);

                     coordsGPS={lat: latitudZona, lng: longitudZona};
                     var marker = new H.map.Marker(coordsGPS, {
                       // mark the object as volatile for the smooth dragging
                       volatility: true
                     });
                     // Ensure that the marker can receive drag events
                     map.addObject(marker);


           };

           // onError Callback receives a PositionError object
           //
           function onErrorGPS(error) {
               alert('code: '    + error.code    + '\n' +
                     'message: ' + error.message + '\n');
           }

           navigator.geolocation.getCurrentPosition(onSuccessGPS, onErrorGPS);


         } //fin tipoUbi GPS

      }) //fin onclick agregar al mapa

    $$("#tipoPubliZona").on("change", function(){
      tipo_Publicacion=$$("#tipoPubliZona").val();
      if(tipo_Publicacion=="Encontrado"){
        console.log("animal deambulando")
        $$("#nombreManejador").removeClass("activo");
        $$("#nombreManejador").addClass("hidden");
      } else {
        console.log("animal extraviado")
        $$("#nombreManejador").removeClass("hidden");
        $$("#nombreManejador").addClass("activo");
      }
    });

    $$("#publicarEnZona").on("click", fnPublicarEnMapa);
    $$("#btnGaleriaZona").on("click", fnGaleriaZona);       //// VER COMO SOLUCIONAR LA UBICACION MANUALMENTE
    $$("#btnCamaraZona").on("click", fnCamaraZona);        //podria ser que pongo poublicar y me sale un dialog con las opciones de ingresar direccion o de acceder a la ubicación



})

//    -------------------------PAGE INIT verAnimalZona (Animales en zona) -----------------------------------------------
$$(document).on('page:init', '.page[data-name="verAnimalZona"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized

/// FALTA MOSTRAR ALGUNOS DATOS COMO TELEFONO Y VER DE PODER ELIMINARLO
// EL TEMA DE LAS BURBUJAS CONECTADAS CON VER ANIMALZONA

if(tipo_Publicacion=="Perdido"){
  $$("#nomAniZona").append(nombre_AnimalZona+" se perdió");
  $$("#tipoPubliZona").append(tipoAnimalZona+" extraviado/a");
  //datosHtml='<p class="col text-color-white centrar">Contacto: '+contactoZona+'</p> <p class="col text-color-white centrar">'+ubicacionZona+", "+localidadZona+'</p> '
  //$$("#datosZona").append(datosHtml);
}
if(tipo_Publicacion=="Encontrado"){
  $$("#nomAniZona").html(tipoAnimalZona+" encontrado");
  $$("#tipoPubliZona").append(tipoAnimalZona+" deambulando");
  //datosHtml='<p class="col text-color-white centrar">'+ubicacionZona+", "+localidadZona+'</p> '
  //$$("#datosZona").append(datosHtml);
}

$$("#ubicacionZona").append(ubicacionZona);
$$("#telZona").append(contactoZona);


$$("#fotoAZona").attr("src", urlAnimalZona);
$$("#fechaPubliZona").append(fechaPubliZona);
$$("#descripAZona").html(descripcion_AnimalZona);


$$("#adoptar").on("click", function(){mainView.router.navigate("/peticionAdopcion/")});



})





//    --------------------------    SESION DE USUARIOS  ------------------------------------------------------
//    -------------------------PAGE INIT USUARIO HOME-----------------------------------------------
$$(document).on('page:init', '.page[data-name="usuarioHome"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log("estoy en usuarioHome");
    console.log("fecha Nac: " + fechaNacUsuario )





    $$("#usuNombrePerfil").html(nombreUsuario);

    $$("#cerrarSUsu").on("click", fnCerrarSesion);

    fnCalcularEdad(fechaNacUsuario);



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
          urlFotoPerfilOrg=docActual.data().url_FotoPerfil
          console.log(nombreOrganizacion+ " de " + localidadOrg + " " + provinciaOrg + " " + emailRefOrg);

          tarjetasOrganizaciones='<a href="#" onclick="setOrganizacion(\''+nombreOrganizacion+'\')" class="link verOrg"> <div id="org" class="card demo-card-header-pic "><div style="background-image:url('+urlFotoPerfilOrg+')" class="card-header align-items-flex-end"> </div>  <div class="card-content card-content-padding"><div><p class="txtCards align-items-flex-end noMargin text-color-black"> ' + nombreOrganizacion +'</p> </div> <p class="text-color-black"> ' + localidadOrg+', '+ provinciaOrg +'</p> <p  class="text-align-justify maxTarjeta noMargin text-color-black">' + descripcionOrg+'</p> </div> </div></a>'    //,+localidadOrg+,+provinciaOrg+,+descripcionOrg+        //\''+nombreOrganizacion+'\'

          $$("#bloqueOrganizaciones").append(tarjetasOrganizaciones); //    /VerOrgDesdeUsu/verOr'+indice+'/

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
    //console.log('La org es id: ' + page.route.params.id );
    orgElegida=page.route.params.id;
    linkAOrg="/VerOrgDesdeUsu/"+orgElegida+"/";

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
    console.log("tipo: "+ tipodeUsuario)


    var refEnAdopDeOrg= colAnimalesEnAdopcion.where("email", "==" , emailOrg);
    var indAnimalesEnAdop=0;
    refEnAdopDeOrg.get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc){
            indAnimalesEnAdop++;
            nombre_Animal=doc.data().Nombre_Animal
            genero_Animal= doc.data().Genero_Animal
            tipo_Animal=doc.data().Tipo_Animal
            descripcion_Animal=doc.data().Descripcion_Animal
            urlAnimal=doc.data().url_Animal
            console.log(nombre_Animal + " que es " + genero_Animal + " indice: " + indAnimalesEnAdop);

               var tarjetaAni='<a href="#" onclick="setAnimal(\''+nombre_Animal+'\')" class="link verOrg"> <div id="org" class="card demo-card-header-pic "><div style="background-image:url('+urlAnimal+')" class="card-header align-items-flex-end txtCards"> ' + nombre_Animal +' </div>  <div class="card-content card-content-padding"> <p class="text-color-black"> <b>' + tipo_Animal+', '+ genero_Animal +'</b></p> <p  class="text-align-justify maxTarjeta noMargin text-color-black">' + descripcion_Animal+'</p> </div> </div></a>'

            $$("#bloqueAdopcionDeOrg").append(tarjetaAni);

          })
      })
      .catch( function(error){
        console.log("Error: "+ error);
      });


      console.log("El link a org es: " +linkAOrg)
      $$("#irAOrgConId").on("click", function(){mainView.router.navigate(linkAOrg)})     //ir hacia atrás

})
//    -------------------------PAGE INIT verAnimalDesdeUsu (lista de adopcion de x org (desde usuario)) -----------------------------------------------
$$(document).on('page:init', '.page[data-name="verAnimalDesdeUsu"]', function (e, page) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log("estoy en verAnimalDesdeUsu");
    console.log('el id es: ' + page.route.params.id );
    console.log("animal es: "+ nombre_Animal);


$$("#nomAniUsu").html(nombre_Animal);
$$("#fotoAUsu").attr("src", urlAnimal);
$$("#tipoYGeneroUsu").html(tipo_Animal+", "+genero_Animal);
$$("#descripAUsu").html(descripcion_Animal);

$$("#adoptar").on("click", function(){mainView.router.navigate("/peticionAdopcion/")});



})

//    -------------------------PAGE INIT peticionAdopcion (usuario quiere Adoptar Animal) -----------------------------------------------
$$(document).on('page:init', '.page[data-name="peticionAdopcion"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
      console.log("estoy en peticionAdopcion");
      console.log(emailOrg);
      console.log(nombre_Animal);
      $$("#quieroAdoptarA").append(nombre_Animal);
      var popup = app.popup.create({

        el: '#popupInfoAdopcion',
        on: {
          opened: function () {
            console.log('Popup opened')
          }
        }
      });
      app.popup.open("#popupInfoAdopcion");



      $$("#viviendaPropiaAdop").on("change", function(){
          tipoVivienda=$$("#viviendaPropiaAdop").val();
          if(tipoVivienda=="Alquiler"){
            console.log("alquila casa")
            $$("#permisoPropManejador").removeClass("hidden");
            $$("#permisoPropManejador").addClass("activo");
            $$("#alquilerMudanzaManejador").removeClass("hidden");
            $$("#alquilerMudanzaManejador").addClass("activo");

          } else {
            console.log("tiene vivienda propia")
            $$("#permisoPropManejador").removeClass("activo");
            $$("#permisoPropManejador").addClass("hidden");
            $$("#alquilerMudanzaManejador").removeClass("activo");
            $$("#alquilerMudanzaManejador").addClass("hidden");
          }
      })


      $$("#btnAdoptar").on("click", fnAdoptar);







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
      $$("#hizoTransito").on("change", function(){
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

      console.log(linkAOrg)
      $$("#irAVerOrgConId").on("click",function(){mainView.router.navigate(linkAOrg)});


})


//    -------------------------PAGE INIT rescatadosOrg (rescatados de X org (desde usuario)) -----------------------------------------------
$$(document).on('page:init', '.page[data-name="rescatadosOrg"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log("estoy en rescatadosOrg");
    console.log("traer animales de: "+ emailOrg);



        var refRescatadosOrg= colAnimalesAdoptados.where("emailorg", "==" , emailOrg);
        var indice=0;
        refRescatadosOrg.get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(docResOrg){
                indice++;
                nombre_Animal=docResOrg.data().Nombre_Animal
                genero_Animal= docResOrg.data().Genero_Animal
                tipo_Animal=docResOrg.data().Tipo_Animal
                descripcion_Animal=docResOrg.data().Descripcion_Animal
                fechaDeAdopcion=docResOrg.data().Fecha_Adopcion
                urlAnimal=docResOrg.data().url_Animal

                console.log("-"+nombre_Animal+"-  adoptado por " + nomAdoptante + " indice: " + indice + " fecha: " + fechaDeAdopcion);

                  var tarjeAdoptadoOrg='<a href="#" onclick="setAnimalAdoptadoDeOrg(\''+nombre_Animal+'\')" class="link verOrg"> <div id="org" class="card demo-card-header-pic "><div style="background-image:url('+urlAnimal+')" class="card-header align-items-flex-end txtCards"> ' + nombre_Animal +' </div>  <div class="card-content card-content-padding"> <p class="text-color-black"> <b> Fecha Adopción: '+fechaDeAdopcion+'</b></p> <p  class="text-align-justify maxTarjeta noMargin text-color-black">' + descripcion_Animal+'</p> </div> </div></a>'

                $$("#bloqueAdoptadosOrg").append(tarjeAdoptadoOrg);

              })
          })
          .catch( function(error){
            console.log("Error : "+ error);
          });




      console.log("El link a org es: " +linkAOrg)
      $$("#aOrg").on("click", function(){mainView.router.navigate(linkAOrg)})     //ir hacia atrás








})


//    -------------------------PAGE INIT verAnimaldopDesdeUsu (Ver animal Adoptado desde Usuario)  -----------------------------------------------
$$(document).on('page:init', '.page[data-name="verAnimaldopDesdeUsu"]', function (e, page) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log('Pag. VverAnimaldopDesdeUsu con id: ' + page.route.params.id );
    console.log("estoy en verAnimaldop");


    $$("#nomAnimalitoAdop").html(nombre_Animal);
    $$("#fotoAadop").attr("src", urlAnimal);        //Esta hardcodeadaaa
    $$("#tipoYGeneroAdop").append(tipo_Animal+", "+genero_Animal);
    $$("#descripAdop").html(descripcion_Animal);
    $$("#localidadYPciaAdop").append(localidadAdoptante+", "+provinciaAdoptante);
    $$("#cuandoSeAdopto").append(fechaDeAdopcion);





})


//    -------------------------PAGE INIT ingresoManual (ingresar manualmente datos de una adopción)  -----------------------------------------------
$$(document).on('page:init', '.page[data-name="ingresoManual"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log("estoy en ingresoManual");

    $$("#marcarAdop").append(nombre_Animal);
    $$("#marcar").on("click", function(){

        nomAdoptante=$$("#nomManual").val();
        apeAdoptante=$$("#apeManual").val();
        edadUsuario=$$("#edadManual").val();
        provinciaAdoptante=$$("#pciaManual").val();
        localidadAdoptante=$$("#localidadManual").val();
        profesionAdoptante=$$("#profesionManual").val();
        direccionAdoptante=$$("#direccionManual").val();
        telefonoAdoptante=$$("#telManual").val();
        linkRedesAdoptante=$$("#linkRedesManual").val();
        viviendaAdoptante=$$("#viviendaManual").val();
        viviendaPropiaAdoptante=$$("#viviendaPropManual").val();
        familiaAdoptante=$$("#familiaManual").val();
        tieneMascotasAdoptante=$$("#mascotasManual").val();
        emailAdoptante="No es usuario Firulichapp";

        if (linkRedesAdoptante==""){
          linkRedesAdoptante="--";
        }

        if(nomAdoptante=="" || apeAdoptante=="" || edadUsuario=="" || provinciaAdoptante=="" ||  localidadAdoptante=="" ||  profesionAdoptante==""
        ||  direccionAdoptante=="" || telefonoAdoptante=="" || viviendaAdoptante=="" || viviendaPropiaAdoptante=="" ||  familiaAdoptante=="" ||  tieneMascotasAdoptante=="" ){
          app.dialog.alert("¡Completá todos los campos!", "¡Oops!");
        } else{
          console.log("estoy en else");
          app.dialog.confirm("¡"+nomAdoptante+" "+apeAdoptante+" va a adoptar a " +nombre_Animal+"!" ,"Confirmá la Adopción", fnGuardarAdopcion);
        }

    });




})

//    -------------------------PAGE INIT recomendacionesOrg (recomendaciones de X org (desde usuario)) -----------------------------------------------
$$(document).on('page:init', '.page[data-name="recomendacionesOrg"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log("estoy en recomendacionesOrg");
    console.log("org es: "+ emailOrg)

    var refRecomendaciones= colRecomendaciones.where("email", "==" , emailOrg);
    refRecomendaciones.get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(docRec){
            tituloRec=docRec.data().titulo
            txtRec=docRec.data().texto
            console.log("Recomendación:" + tituloRec + " " +txtRec);

            var nuevaRecomendaOrg=`  <li class="accordion-item"><a class="item-content item-link" href="#">
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

            $$("#acordionRecomendaOrg").append(nuevaRecomendaOrg)

          })
      })
      .catch( function(error){
        console.log("Error: "+ error);
      });

      console.log(linkAOrg)
      $$("#vuelvoAOrg").on("click",function(){mainView.router.navigate(linkAOrg)});

})

//    -------------------------PAGE INIT Donar (datos para donar de X org (desde usuario)) -----------------------------------------------
$$(document).on('page:init', '.page[data-name="donar"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log("estoy en donar");
    console.log("-"+emailOrg+"-");
    var popup = app.popup.create({

      el: '#popupDonar',
      on: {
        opened: function () {
          console.log('Popup opened')
        }
      }
    });
    app.popup.open("#popupDonar");

    var refDeOrg= colOrganizaciones
    refDeOrg.get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc){
            if(nombreOrganizacion==doc.data().Nombre){
            console.log("banco: "+ doc.data().Banco);
               bancoOrg=doc.data().Banco
               titularCtaOrg= doc.data().Titular_Cta
               cbuOrg= doc.data().Cbu_Cta
               nroCtaOrg=doc.data().Nro_Cta
               cuilOrg=doc.data().Nro_Cuil
               cuentaMpOrg=doc.data().MercadoPago

               $$("#bancoOrgdesdeUsu").append(bancoOrg);
               $$("#titularCtaOrgdesdeUsu").append(titularCtaOrg);
               $$("#cbuOrgdesdeUsu").append(cbuOrg);
               $$("#nroCtaOrgdesdeUsu").append(nroCtaOrg);
               $$("#cuilOrgdesdeUsu").append(cuilOrg);
               $$("#mPagoOrgdesdeUsu").append(cuentaMpOrg);
            }

          })
      })
      .catch( function(error){
        console.log("Error : "+ error);
      });


    console.log(linkAOrg)
    $$("#volverVerOrg").on("click",function(){mainView.router.navigate(linkAOrg)});



})

//    -------------------------PAGE INIT infoOrg (info de X org (desde usuario)) -----------------------------------------------
$$(document).on('page:init', '.page[data-name="infoOrg"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log("estoy en infoOrg");
    console.log(linkAOrg)
    console.log(nombreOrganizacion)
    console.log(descripcionOrg)
    console.log(localidadOrg)
    console.log(provinciaOrg)
    console.log(nombreRespOrganizacion)
    console.log(apellidoRespOrganizacion)
    console.log("email de org:-"+emailOrg+"-");
    $$("#vuelvoAVerOrg").on("click",function(){mainView.router.navigate(linkAOrg)});


    $$("#perfildeOrg").append(nombreOrganizacion);
    $$("#nOrgdesdeUsu").append(nombreOrganizacion);
    $$("#dOrgdesdeUsu").append(descripcionOrg);
    $$("#nResOrgdesdeUsu").append(nombreRespOrganizacion+" "+apellidoRespOrganizacion);
    $$("#lOrgdesdeUsu").append(localidadOrg);
    $$("#pOrgdesdeUsu").append(provinciaOrg);

    var creacionFecha=new Date(fechaCreacionOrg);
    var y=creacionFecha.getFullYear();
    var m=creacionFecha.getMonth()+1;
    var d=creacionFecha.getDate();
    var laFechaEs=d+"/"+m+"/"+y;
    console.log("lafechaes: " +laFechaEs);

    $$("#fechaCOrg").append(laFechaEs);

    if(redesOrg==undefined){
      $$("#redesOrgdesdeUsu").append("--")
    } else {
      $$("#redesOrgdesdeUsu").append(redesOrg);
    }







})
// ---------------------------------------SESION DE ORGANIZACION ---------------------------------------------------------------------------------

//    -------------------------PAGE INIT ORG HOME-----------------------------------------------
$$(document).on('page:init', '.page[data-name="orgHome"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log("estoy en orgHome" );



    $$("#perfilFoto").attr("src", urlFotoPerfilOrg);
    $$("#orgNombrePerfil").html(nombreOrganizacion);
    $$("#cerrarSOrg").on("click", fnCerrarSesion);
})


//    -------------------------PAGE INIT misAdopcion (animales en adopcion de org que inicio sesion)  -----------------------------------------------
$$(document).on('page:init', '.page[data-name="misAdopcion"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log("estoy en misAdopcion");
    console.log(emailOrg);
    console.log("tipousu: "+ tipodeUsuario)
    var refMisAnimalesEnAdopcion= colAnimalesEnAdopcion.where("email", "==" , emailOrg);
    var indice=0;
    refMisAnimalesEnAdopcion.get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(docActual){
            indice++;
            nombre_Animal=docActual.data().Nombre_Animal
            genero_Animal= docActual.data().Genero_Animal
            tipo_Animal=docActual.data().Tipo_Animal
            descripcion_Animal=docActual.data().Descripcion_Animal
            urlAnimal=docActual.data().url_Animal
            console.log("-"+nombre_Animal+"-  que es " + genero_Animal + " indice: " + indice);


            var tarjeAnimal='<a href="#" onclick="setAnimal(\''+nombre_Animal+'\')" class="link verOrg"> <div id="org" class="card demo-card-header-pic "><div style="background-image:url('+urlAnimal+')" class="card-header align-items-flex-end txtCards"> ' + nombre_Animal +' </div>  <div class="card-content card-content-padding"> <p class="text-color-black"> ' + tipo_Animal+', '+ genero_Animal +'</p> <p  class="text-align-justify maxTarjeta noMargin text-color-black">' + descripcion_Animal+'</p> </div> </div></a>'

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


    var popup = app.popup.create({

      el: '#popupPeticionDeAnimal',
      on: {
        opened: function () {
          console.log('Popup opened')
        }
      }
    });

    var popup = app.popup.create({

      el: '#popupEditarAnimal',
      on: {
        opened: function () {
          console.log('Popup opened')
        }
      }
    });

    $$("#editarTipoAnimal").val(tipo_Animal);
    $$("#editarNombreAnimal").val(nombre_Animal);
    $$("#editarGeneroAnimal").val(genero_Animal);
    $$("#editDescripcion_animal").text(descripcion_Animal);
    $$("#editFotoAnimal").attr("src", urlAnimal);

    $$("#galeriaEditAnimal").on("click", fnGaleriaEditAnimal);
    $$("#camaraEditAnimal").on("click", fnCamaraEditAnimal);

    console.log("animal es:-" +nombre_Animal+"-");
    console.log("es: " + tipo_Animal);
    console.log("es: " + genero_Animal);
    console.log(descripcion_Animal);
    console.log("url: "+ urlAnimal);

    $$("#nomAnimalElegido").html(nombre_Animal);
    $$("#fotoA").attr("src", urlAnimal);
    $$("#tipoYGenero").html(tipo_Animal+", "+genero_Animal)
    $$("#descripA").html(descripcion_Animal);

    $$("#adoptado").on("click", fnMarcarComoAdoptado);
    $$("#editarAni").on("click", fnEditarAnimal);
    $$("#borrarAni").on("click", fnBorrarAnimal);




})


//    -------------------------PAGE INIT misRescatados (animales rescatados de org que inicio sesion)  -----------------------------------------------
$$(document).on('page:init', '.page[data-name="misRescatados"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log("estoy en misRescatados");
    console.log(emailOrg)

    var refMisAnimalesRescatados= colAnimalesAdoptados.where("emailorg", "==" , emailOrg);
    var indice=0;
    refMisAnimalesRescatados.get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(docRes){
            indice++;
            urlAnimal=docRes.data().url_Animal
            nombre_Animal=docRes.data().Nombre_Animal
            genero_Animal= docRes.data().Genero_Animal
            tipo_Animal=docRes.data().Tipo_Animal
            descripcion_Animal=docRes.data().Descripcion_Animal
            nomAdoptante=docRes.data().Nombre_Adoptante
            apeAdoptante=docRes.data().Apellido_Adoptante
            edadUsuario=docRes.data().Edad_Adoptante

            console.log("-"+nombre_Animal+"-  adoptado por " + nomAdoptante + " indice: " + indice);

             var tarjeAdoptado='<a href="#" onclick="setAnimalAdoptado(\''+nombre_Animal+'\')" class="link verOrg"> <div id="org" class="card demo-card-header-pic "><div style="background-image:url('+urlAnimal+')" class="card-header align-items-flex-end txtCards"> ' + nombre_Animal +' </div>  <div class="card-content card-content-padding"> <p class="text-color-black"> <b>Adoptante: '+nomAdoptante+' '+apeAdoptante+'</b></p> <p  class="text-align-justify maxTarjeta noMargin text-color-black">' + descripcion_Animal+'</p> </div> </div></a>'

            $$("#bloqueAdoptados").append(tarjeAdoptado);

          })
      })
      .catch( function(error){
        console.log("Error : "+ error);
      });



})

//    -------------------------PAGE INIT verAnimaldop (Ver animal Adoptado de org que inicio sesion)  -----------------------------------------------
$$(document).on('page:init', '.page[data-name="verAnimaldop"]', function (e, page) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log('Pag. VerAnimaldop con id: ' + page.route.params.id );
    console.log("estoy en verAnimaldop");
    console.log("fechaDeAdopcion: "+fechaDeAdopcion)

    $$("#nomAdoptadoElegido").html(nombre_Animal);
    $$("#fotoAadop").attr("src", urlAnimal);        //Esta hardcodeadaaa
    $$("#tipoYGeneroAdop").append(tipo_Animal+", "+genero_Animal);
    $$("#descripAdop").html(descripcion_Animal);
    $$("#fechAdop").append(fechaDeAdopcion);
    $$("#nombreAdopTante").append(nomAdoptante+" "+apeAdoptante);
    $$("#edadAdop").append(edadUsuario+" años");
    $$("#localidadPciaAdop").append(localidadAdoptante+", "+provinciaAdoptante);
    $$("#profesiónAdoptante").append(profesionAdoptante);
    $$("#direccionAdoptante").append(direccionAdoptante);
    $$("#telefonoAdoptante").append(telefonoAdoptante);
    $$("#redesAdoptante").append(linkRedesAdoptante);
    $$("#familiaAdoptante").append(familiaAdoptante);
    $$("#mascotasAdoptante").append(tieneMascotasAdoptante);
    $$("#viviendaAdoptante").append(viviendaAdoptante);
    $$("#viviendaPropAdoptante").append(viviendaPropiaAdoptante);
    $$("#correoAdoptante").append(emailAdoptante);


})

//    -------------------------PAGE INIT misRecomendaciones (recomendaciones de org que inicio sesion)  -----------------------------------------------
$$(document).on('page:init', '.page[data-name="misRecomendaciones"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log("estoy en misRecomendaciones");

    var refMisRecomendaciones= colRecomendaciones.where("email", "==" , emailOrg);
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
                  <div class="row">
                  <a href="#" class="item-link item-content popup-open" data-popup=".popupEditarReco" onclick="setRecomendacion(\``+tituloRec+`\`)">
                    <div class="item-inner">
                      <div class="item-after text-color-white">Editar</div>
                    </div>
                  </a>
                  <a href="#" class="item-link item-content" onclick="fnBorrarRecomenda(\``+tituloRec+`\`)">
                    <div class="item-inner">
                      <div class="item-after text-color-white">Borrar</div>
                    </div>
                  </a>
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

      el: '#popupNuevaRecomenda',
      on: {
        opened: function () {
          console.log('Popup opened')
        }
      }
    });


    $$("#botonPublicarRecomenda").on("click", fnNuevaRecomenda);
    $$("#editaRecomenda").on("click", fnEditarRecomenda);





})


//    -------------------------PAGE INIT misFliasTransito (familias transito de org que inicio sesion)  -----------------------------------------------
$$(document).on('page:init', '.page[data-name="misFliasTransito"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log("estoy en misFliasTransito");
    console.log(emailOrg);

    var refMisTransitos=colFamiliasTransito.where("emailorg", "==", emailOrg);

    refMisTransitos.get()
    .then(function(querySnapshot){
      querySnapshot.forEach(function(doc){

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
        edadUsuario=doc.data().Edad

   var acordionT=`  <li class="accordion-item">
                      <a class="item-content item-link" href="#">
                        <div class="item-inner">
                          <div class="item-title text-color-white"><b>`+nombre_Transito+` `+apellido_Transito+`</b></div>
                          </div>
                      </a>
                      <div class="accordion-item-content">
                        <div class="block">
                          <h4 class="item-title centrar text-color-white"><b>DATOS DEL HOGAR</b></h4>
                            <p class="text-align-center text-color-white"><b> Edad:</b> `+edadUsuario+`</p>
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
                            <p class="text-align-center text-color-white"> <b> Desea agregar:</b> `+agrega_Transito+`</p>
                          </div>
                        </div>
                    </li>`;

      $$("#acordionTransitos").append(acordionT);

      })
    })
    .catch( function(error){
      console.log("Error: "+ error);
    });




})


//    -------------------------PAGE INIT misPeticionesAdop (lista de peticiones de Adopción)  -----------------------------------------------
$$(document).on('page:init', '.page[data-name="misPeticionesAdop"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log("estoy en misPeticionesAdop");





/////////////////////////////////////////////////////////////////////////////////////////////////////////
   var refMisPeticiones=colPeticionAdopcion.where("emailorg", "==", emailOrg).orderBy("time_Stamp_Adop", "desc");
    var indice=0;

    refMisPeticiones.get()
    .then(function(querySnapshot){
      querySnapshot.forEach(function(doc){
        indice++;
        console.log("estoy en el then");
        console.log("peticion para: " + doc.data().Animal)
        nombre_Animal=doc.data().Animal
        tipo_Animal=doc.data().Tipo_Animal
        genero_Animal=doc.data().Genero_Animal
        descripcion_Animal=doc.data().Descripcion_Animal
        nomAdoptante=doc.data().Nombre
        apeAdoptante=doc.data().Apellido
        edadUsuario=doc.data().Edad
        profesionAdoptante=doc.data().Profesion_Adop
        localidadAdoptante=doc.data().Localidad
        provinciaAdoptante=doc.data().Provincia
        telefonoAdoptante=doc.data().Telefono
        direccionAdoptante=doc.data().Direccion
        linkRedesAdoptante=doc.data().Redes
        porqueAdoptante=doc.data().Porque_Adop
        cicloVidaAdoptante=doc.data().Ciclo_Adop
        compromisoAdoptante=doc.data().Compromiso_Adop
        necesidadesAdoptante=doc.data().Necesidades_Adop
        alergiasAdoptante=doc.data().Alergias_Adop
        viviendaAdoptante=doc.data().Vivienda
        familiaAdoptante=doc.data().Familia
        viviendaPropiaAdoptante=doc.data().Vivienda_Prop_Adop
        perimisoPropAdoptante=doc.data().Permiso_Prop_Adop
        mudanzaAdoptante=doc.data().Mudanza_Adop
        castracionAdoptante=doc.data().Castracion_Adop
        tieneMascotasAdoptante=doc.data().Tiene_Mascotas
        cuidaMascotasAdoptante=doc.data().Cuida_Mascotas
        algoMasAdoptante=doc.data().Agrega
        emailAdoptante=doc.data().email
        timeStampAdop=doc.data().time_Stamp_Adop

    var acordionT=`  <li class="accordion-item">
                      <a class="item-content item-link" href="#">
                        <div class="item-inner">
                          <div class="item-title text-color-white"><b>Petición para: `+nombre_Animal+`</b></div>
                          </div>
                      </a>
                      <div class="accordion-item-content">
                        <div class="block">
                            <h4 class="item-title centrar text-color-white"><b>DATOS DEL ADOPTANTE</b></h4>
                            <p class="text-align-center text-color-white"><b> Nombre Completo:</b> `+nomAdoptante+` `+apeAdoptante+`</p>
                            <p class="text-align-center text-color-white"><b> Edad:</b> `+edadUsuario+`</p>
                            <p class="text-align-center text-color-white"><b> Razón Adopción:</b> `+porqueAdoptante+`</p>
                            <p class="text-align-center text-color-white"><b> Compromiso de por vida:</b> `+cicloVidaAdoptante+`</p>
                            <p class="text-align-center text-color-white"><b> Cuidados del Animal:</b> `+compromisoAdoptante+`</p>
                            <p class="text-align-center text-color-white"><b> Podes cubrir sus necesidades:</b> `+necesidadesAdoptante+`</p>
                            <p class="text-align-center text-color-white"><b> Tiene Mascotas:</b> `+tieneMascotasAdoptante+`</p>
                            <p class="text-align-center text-color-white"><b> Cuidado de sus mascotas:</b> `+cuidaMascotasAdoptante+`</p>
                            <p class="text-align-center text-color-white"> <b> Grupo Familiar :</b> `+familiaAdoptante+`</p>
                            <p class="text-align-center text-color-white"><b> Alergías:</b> `+alergiasAdoptante+`</p>
                            <p class="text-align-center text-color-white"><b> Opinión sobre Castración:</b> `+castracionAdoptante+`</p>

                            <h4 class="item-title centrar text-color-white"><b>DATOS DEL HOGAR</b></h4>
                            <p class="text-align-center text-color-white"> <b> Vive en:</b> `+viviendaPropiaAdoptante+`</p>
                            <p class="text-align-center text-color-white"> <b> Tipo de Vivienda:</b> `+viviendaAdoptante+`</p>
                            <p class="text-align-center text-color-white"> <b> Permiso del Propietario:</b> `+perimisoPropAdoptante+`</p>
                            <p class="text-align-center text-color-white"> <b> En caso de mudanza:</b> `+mudanzaAdoptante+`</p>

                            <h4 class="item-title centrar text-color-white"> <b>DATOS DE CONTACTO</b></h4>
                            <p class="text-align-center text-color-white"> <b> Es de:</b> `+localidadAdoptante+`, `+provinciaAdoptante+`  </p>
                            <p class="text-align-center text-color-white"> <b> Profesión:</b> `+profesionAdoptante+`</p>
                            <p class="text-align-center text-color-white"> <b> Teléfono:</b> `+telefonoAdoptante+`</p>
                            <p class="text-align-center text-color-white"> <b> E-mail:</b> `+emailAdoptante+`</p>
                            <p class="text-align-center text-color-white"> <b> Redes:</b> `+linkRedesAdoptante+`</p>
                            <p class="text-align-center text-color-white"> <b> Agrega:</b> `+algoMasAdoptante+`</p>
                          </div>
                        </div>
                    </li>`;

      $$("#acordionPeticionesAdop").append(acordionT);

      })
    })
    .catch( function(error){
      console.log("Error: "+ error);
    });


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


        var refMisPeticiones=colPeticionAdopcion.where("emailorg", "==", emailOrg).orderBy("time_Stamp_Adop")

        refMisPeticiones.onSnapshot((querySnapshot) => {
            var peticiones = [] ; // [ [timestamp, Animal], [timestamp, Animal] ] // armo otro arreglo con el timestamp y el animal que corresponde
            querySnapshot.forEach((doc) => {
                  nomAdoptante=doc.data().Nombre
                  nombre_Animal=doc.data().Animal
                  timeStampAdop=doc.data().time_Stamp_Adop
                  console.log("timeStamp: "+ timeStampAdop)
                  var peti=[nomAdoptante, nombre_Animal, timeStampAdop]
                  console.log("Peticion: ", peti.join(", "));
                  peticiones.push(peti);




              });

                  console.log("Peticiones: ", peticiones.join("--"));
                  cantPetic=peticiones.length;
                  console.log(cantPetic)

/*
////////////// INTENTO 1 FALLIDO //////////////////////////////////////

                console.log("idnoti: "+idNot)
                for (i=0; i<cantPetic; i++){
                  if(peticiones[i][3]>idNot){
                    cordova.plugins.notification.local.schedule({
                    id:idNot,
                    title: 'Tenés una Petición de Adopción',
                    text: nomAdoptante +' quiere adoptar a '+nombre_Animal,
                    trigger: { in: 5, unit: 'second' },
                    foreground: true,
                    vibrate: true,

                });
                  }
                }

*/
/////////////////// INTENTO 2 nunca se dispara (idNot siempre es mayor)////////////////////////////////////
/*
                var idNot=Date.now();
                if(idNot<timeStampAdop){
                  cordova.plugins.notification.local.schedule({
                  id:idNot,
                  title: 'Tenés una Petición de Adopción',
                  text: nomAdoptante +' quiere adoptar a '+nombre_Animal,
                  trigger: { in: 5, unit: 'second' },
                  foreground: true,
                  vibrate: true,

              });
                }
*/
////////////////////////////////////// OTRA OPCION (se dispara siempre que entro a la pagina) ///////////////////
                  var idNot=Date.now();
                  cordova.plugins.notification.local.schedule({
                  id:idNot,
                  title: 'Tenés una Petición de Adopción',
                  text: nomAdoptante +' quiere adoptar a '+nombre_Animal,
                  trigger: { in: 5, unit: 'second' },
                  foreground: true,
                  vibrate: true,

                  });


        });







})

//    -------------------------PAGE INIT miPerfil (perfil de org que inicio sesion)  -----------------------------------------------
$$(document).on('page:init', '.page[data-name="miPerfilOrg"]', function (e){
    // Do something here when page with data-name="about" attribute loaded and initialized

    console.log("estoy en miPerfilOrg");
    console.log("email:" + emailOrg+"-")
    console.log("nom: "+ nombreRespOrganizacion)
    console.log("desc: "+ descripcionOrg)
    console.log("banco: "+ bancoOrg)

    calendarModal = app.calendar.create({
           inputEl: '#creaFechaOrga',
           openIn: 'customModal',
           header: true,
           footer: true,
           dateFormat: 'yyyy/mm/dd',
           toolbarCloseText: 'Listo',
           headerPlaceholder: 'Seleccionar Fecha'
         });

    var refDeOrg= colOrganizaciones
    refDeOrg.get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc){
            if(emailOrg==doc.id){
            console.log("banco: "+ doc.data().Banco);
               bancoOrg=doc.data().Banco
               titularCtaOrg= doc.data().Titular_Cta
               cbuOrg= doc.data().Cbu_Cta
               nroCtaOrg=doc.data().Nro_Cta
               cuilOrg=doc.data().Nro_Cuil
               cuentaMpOrg=doc.data().MercadoPago
               redesOrg=doc.data().Redes
               fechaCreacionOrg=doc.data().Fecha_Crea_Org
               if(redesOrg==undefined){
                 $$("#redesOrg").append("--")
               } else {
                 $$("#redesOrg").append(redesOrg);
               }

               if(bancoOrg==undefined){
                 $$("#bancoOrg").append("--")
               } else {
                 $$("#bancoOrg").append(bancoOrg);
               }

               if(titularCtaOrg==undefined){
                 $$("#titularCtaOrg").append("--")
               } else {
                 $$("#titularCtaOrg").append(titularCtaOrg);
               }

               if(cbuOrg==undefined){
                 $$("#cbuOrg").append("--")
               } else {
                 $$("#cbuOrg").append(cbuOrg)
               }

               if(nroCtaOrg==undefined){
                 $$("#nroCtaOrg").append("--")
               } else {
                 $$("#nroCtaOrg").append(nroCtaOrg)
               }

               if(cuilOrg==undefined){
                 $$("#cuilOrg").append("--")
               } else {
                 $$("#cuilOrg").append(cuilOrg)
               }

               if(cuentaMpOrg==undefined){
                 $$("#mPagoOrg").append("--")
               } else {
                 $$("#mPagoOrg").append(cuentaMpOrg)
               }

            }

          })
      })
      .catch( function(error){
        console.log("Error : "+ error);
      });



      $$("#fotoPerfil").attr("src", urlFotoPerfilOrg); //aca se va aponer la foto de perfil
      $$("#nOrg").append(nombreOrganizacion);
      $$("#nResOrg").append(nombreRespOrganizacion+" "+apellidoRespOrganizacion);
      $$("#dOrg").html(descripcionOrg);
      $$("#lOrg").append(localidadOrg);
      $$("#pOrg").append(provinciaOrg);


      var creaOrgFecha=new Date(fechaCreacionOrg);
      var ye=creaOrgFecha.getFullYear();
      var me=creaOrgFecha.getMonth()+1;
      var di=creaOrgFecha.getDate();
      var laFechaOrgEs=di+"/"+me+"/"+ye;
      console.log("lafechaes: " +laFechaOrgEs);

      $$("#fCrOrg").append(laFechaOrgEs);


      $$("#btnCamara2").on("click", fnEditarCamara2);     //  estas funciones hay que desarrollar
      $$("#btnGaleria2").on("click", fnEditarGaleria2);   //
      $$("#editarNomOrg").on("click", fnEditarNomOrg);
      $$("#editarNomRespOrg").on("click", fnEditarNomRespOrg);
      $$("#editarLocOrg").on("click", fnEditarLocOrg);
      $$("#editarPciaOrg").on("click", fnEditarPciaOrg);
      $$("#editarDescOrg").on("click", fnEditarDescOrg);
      $$("#editarMPagoOrg").on("click", fnEditarMPagoOrg);
      $$("#editarBancoOrg").on("click", fnEditarBancoOrg);
      $$("#editartitularCtaOrg").on("click", fnEditarTitularCtaOrg);
      $$("#editarcbuOrg").on("click", fnEditarCbuOrg);
      $$("#editarNroCtaOrg").on("click", fnEditarNroCtaOrg);
      $$("#editarCuilOrg").on("click", fnEditarCuilOrg);
      $$("#editarRedesOrg").on("click", fnEditarRedesOrg);
      $$("#editarFechaCOrg").on("click", fnEditarFechaCrea);
      $$("#actualizarFotoPerfil").on("click", fnEditarFotoPerfil);

      var popup = app.popup.create({

        el: '#popupEditarDescOrg',
        on: {
          opened: function () {
            console.log('Popup opened')
          }
        }
      });

      var popup = app.popup.create({

        el: '#popupEditarFotoPerfil',
        on: {
          opened: function () {
            console.log('Popup opened')
          }
        }
      });

      var popup = app.popup.create({

        el: '#popupEditarFechaOrg',
        on: {
          opened: function () {
            console.log('Popup opened')
          }
        }
      });

})

//    -------------------------PAGE INIT publicarOrg (org publica nuevo animal en adopcion)  -----------------------------------------------
$$(document).on('page:init', '.page[data-name="publicarOrg"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log("estoy en publicarOrg");

$$("#publicarEnAdopcion").on("click", fnPublicarEnAdopcion);
$$("#btnGaleria").on("click", fnGaleria);
$$("#btnCamara").on("click", fnCamara);




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




function fnRegistrarUsuario(){                             //// Tengo que decidir si usar geolocation o gps
  email = $$("#emailRegistro").val();
  password = $$("#passwordRegistro").val();
  nombreUsuario = $$("#nomUsu").val();
  apellidoUsuario = $$("#apeUsu").val();
  provincia = $$("#provincia").val();
  localidad = $$("#localidad").val();
  fechaNacUsuario= $$("#fechanac").val()


  if (email=="" || password=="" || nombreUsuario=="" || apellidoUsuario=="" || provincia=="" || localidad=="" || fechaNacUsuario=="" ) {
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
                      Fecha_Nac: fechaNacUsuario,
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
  emailOrg = $$("#emailRegistro").val();
  password = $$("#passwordRegistro").val();
  nombreOrganizacion = $$("#nomOrg").val();
  nombreRespOrganizacion = $$("#nomRespOrg").val();
  apellidoRespOrganizacion = $$("#apeUsu").val();
  provinciaOrg = $$("#provincia").val();
  localidadOrg = $$("#localidad").val();
  descripcionOrg = $$("#descOrg").val();
  fechaCreacionOrg = $$("#fechaCreaOrg").val();
  urlFotoPerfilOrg = $$("#fotoPerfilDeOrg").attr("src");

  if (emailOrg=="" || password=="" || nombreRespOrganizacion=="" || apellidoRespOrganizacion=="" || nombreOrganizacion=="" || provinciaOrg=="" || localidadOrg=="" || urlFotoPerfilOrg=="" ) {
    app.dialog.alert("Completá todos los campos!!", "Oops");
  } else {
      firebase.auth().createUserWithEmailAndPassword(emailOrg, password)
              .then( function() {

                    var nuevaOrg={
                      Nombre:nombreOrganizacion,
                      nomResponsable:nombreRespOrganizacion,
                      apellidoResponsable:apellidoRespOrganizacion,
                      TipoUsuario: tipodeUsuario,
                      Provincia: provinciaOrg,
                      Localidad: localidadOrg,
                      Descripción: descripcionOrg,
                      Fecha_Crea_Org:fechaCreacionOrg,
                      url_FotoPerfil:urlFotoPerfilOrg,
                    }

                    MiId=emailOrg;
                    colOrganizaciones.doc(MiId).set(nuevaOrg)
                      .then(function (docRef){
                        console.log("Se guardo en bd con el id: ", docRef.id);

                      })
                      .catch(function(error){
                        console.log("Error: " + error);
                      });

                    app.dialog.confirm("Ya registraste a tu Organización!! Iniciá sesión para empezar!!", "Genial!");
                    console.log('Se registró la organizacion: ' + nombreOrganizacion + " correctamente, y su responsable es: " + nombreRespOrganizacion + " " + apellidoRespOrganizacion );
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
    $$("#fotoPerfilOrgManejador").removeClass("hidden");
    $$("#fotoPerfilOrgManejador").addClass("activo");

    $$("#fechaCreaOrgManejador").removeClass("hidden");
    $$("#fechaCreaOrgManejador").addClass("activo");
    $$("#fechaNacManejador").removeClass("activo");
    $$("#fechaNacManejador").addClass("hidden");

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

    $$("#fotoPerfilOrgManejador").removeClass("activo");
    $$("#fotoPerfilOrgManejador").addClass("hidden");
    $$("#fechaCreaOrgManejador").removeClass("activo");
    $$("#fechaCreaOrgManejador").addClass("hidden");
    $$("#fechaNacManejador").removeClass("hidden");
    $$("#fechaNacManejador").addClass("activo");
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
              fechaNacUsuario=doc.data().Fecha_Nac
              nombreUsuario= doc.data().Nombre
              apellidoUsuario= doc.data().Apellido
              tipodeUsuario= doc.data().TipoUsuario
              provincia= doc.data().Provincia
              localidad= doc.data().Localidad

              localidadZona=localidad;
              provinciaZona=provincia;
              emailZona=email;

                  url = 'https://geocoder.ls.hereapi.com/6.2/geocode.json';
                  app.request.json(url, {
                  searchtext: ','+localidad+','+ provincia,
                  //searchtext: 'Rivadavia 300, Plottier, Neuquén',
                  apiKey: '9ZP-Ymz47rJhyadmWM7OeTtmy9c5tu_0bX68jatLVa8',
                  gen: '9'
                }, function (data) {
                   // hacer algo con data
                   console.log("geo:" + data);
                   datos=JSON.stringify(data);
                   console.log(datos)
                   //datosJson=JSON.parse(JSON.stringify(data));
                   latitudCenter=data.Response.View[0].Result[0].Location.DisplayPosition.Latitude;
                   longitudCenter=data.Response.View[0].Result[0].Location.DisplayPosition.Longitude;
                   console.log("lati: "+ latitudCenter);
                   console.log("long: "+ longitudCenter);
              }, function(xhr, status) { console.log("error geo: "+status); }   );


              console.log( "Accedió: " +  nombreUsuario+ " " + apellidoUsuario + " que es " + tipodeUsuario + " de " + localidad  + " " + provincia );
              mainView.router.navigate("/usuarioHome/");
          }
      }).catch((error) => {
          console.log("Error getting document:", error);
      });

      orgRef.get()
      .then((doc) => {
          if (doc.exists) {
              emailOrg=email;                                  //si es organizacion se agrega nombreorg y va a al perfil de usuario
              console.log("Es una organizacion: "+emailOrg );
              console.log("Document data:", doc.data());
              nombreOrganizacion=doc.data().Nombre
              nombreRespOrganizacion=doc.data().nomResponsable
              apellidoRespOrganizacion = doc.data().apellidoResponsable
              tipodeUsuario=doc.data().TipoUsuario
              localidadOrg=doc.data().Localidad
              provinciaOrg=doc.data().Provincia
              fechaCreacionOrg=doc.data().Fecha_Crea_Org
              descripcionOrg=doc.data().Descripción
              urlFotoPerfilOrg=doc.data().url_FotoPerfil

              localidadZona=localidadOrg;
              provinciaZona=provinciaOrg;
              emailZona=emailOrg;

                  url = 'https://geocoder.ls.hereapi.com/6.2/geocode.json';
                  app.request.json(url, {
                  searchtext: ','+localidadOrg+','+ provinciaOrg,
                  //searchtext: 'Rivadavia 300, Plottier, Neuquén',
                  apiKey: '9ZP-Ymz47rJhyadmWM7OeTtmy9c5tu_0bX68jatLVa8',
                  gen: '9'
                }, function (data) {
                   // hacer algo con data
                   console.log("geo:" + data);
                   datos=JSON.stringify(data);
                   console.log(datos)
                   //datosJson=JSON.parse(JSON.stringify(data));
                   latitudCenter=data.Response.View[0].Result[0].Location.DisplayPosition.Latitude;
                   longitudCenter=data.Response.View[0].Result[0].Location.DisplayPosition.Longitude;
                   console.log("lati: "+ latitudCenter);
                   console.log("long: "+ longitudCenter);


              }, function(xhr, status) { console.log("error geo: "+status); }   );


              console.log( "Accedió: " +  nombreOrganizacion+ " que es una " + tipodeUsuario + " de " + localidadOrg  + " " + provinciaOrg + " y su responsable es: " + nombreRespOrganizacion + " " + apellidoRespOrganizacion);
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
  app.dialog.confirm("¿Querés cerrar la sesión actual?", "¡Hey!", function(){
    mainView.router.navigate("/index/")
  });
}


function fnPublicarEnAdopcion(){
  app.dialog.confirm("¿Querés publicar un nuevo animal en adopción?", "Hey!", function(){
    nombre_Animal=$$("#nombreAnimal").val();
    genero_Animal=$$("#generoAnimal").val();
    descripcion_Animal=$$("#descripcion_animal").text();
    tipo_Animal=$$("#tipoAnimal").val();
    urlAnimal=$$("#foto").attr("src");
    console.log("se va a publicar: "+ nombre_Animal + " que es: " + tipo_Animal + " y es: " +  genero_Animal);
    console.log("la url es: "+ urlAnimal);
    var nuevoAnimalEnAdopcion={
      email:emailOrg,
      Tipo_Animal: tipo_Animal,
      Nombre_Animal: nombre_Animal,
      Genero_Animal: genero_Animal,
      Descripcion_Animal: descripcion_Animal,
      url_Animal:urlAnimal,
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

  fnCalcularEdad(fechaNacUsuario);
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
        Edad: edadUsuario,
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

      console.log("edad transito: " + edadUsuario);

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
        email:emailOrg,
        titulo: titRecomenda,
        texto: textRecomenda,
      }


      colRecomendaciones.add(nuevaRecomedacion)
        .then(function (docRef){
          console.log("Se guardo en bd con el id: ", docRef.id);
          app.dialog.alert ("¡Creaste una nueva recomendación!", "¡¡Listo!!", function() {app.popup.close("#popupNuevaRecomenda")} );
          mainView.router.navigate("/orgHome/");
        })
        .catch(function(error){
          console.log("Error: " + error);
        });
    });

  }
}


function fnMarcarComoAdoptado(){
  // 1° tengo que tener datos del animal, de la peticion de adopcion, y del usuario.
  // 2° tengo que eliminar el documento de ese animal de colAnimalesEnAdopcion
  // 3° tengo que crear un nuevo documento en AnimalesRescatados con los datos del adoptante
  console.log("marcar como adoptado a:-"+nombre_Animal+"-");
  console.log("el correo de org es:-"+ emailOrg+"-");
  app.dialog.confirm("Vas a marcar como adoptado a: "+nombre_Animal,"Confirmar Adopción",function(){
    app.dialog.create({
        title: '¡Atención!',
        text: 'Si no es un usuario Firulichapp podés ingresar sus datos manualmente',
        buttons: [

          {text: 'Es usuario Firulichapp',
            onClick: function(){                                              //quizas seria mejor si al hacer click en es usuario--haga laconsulta de las peticiones de ese animal y muestre los nombres de los adoptantes en un dialog..
              console.log("es usuario firulichapp");
              fnTraerDatosAnimal();
              var miPeticion=colPeticionAdopcion.where("Animal", "==", nombre_Animal)
              miPeticion.get()
              .then(function(querySnapshot){
                  console.log("estoy en las peticiones");
                  //console.log(querySnapshot.data());
                    querySnapshot.forEach(function(doc){
                      if(doc.exists){
                        //console.log(doc.data());
                        console.log("Adoptante: "+ doc.data().Nombre+" "+doc.data().Apellido);
                        nomAdoptante=doc.data().Nombre;
                        apeAdoptante=doc.data().Apellido
                        localidadAdoptante=doc.data().Localidad
                        provinciaAdoptante=doc.data().Provincia
                        edadUsuario=doc.data().Edad
                        emailAdoptante=doc.data().email

                        var acoA=`  <li class="accordion-item">
                                         <a class="item-content item-link" href="#" >
                                           <div class="item-inner">
                                             <div class="item-title text-color-white"><b>`+nomAdoptante+` `+apeAdoptante+`</b></div>
                                             </div>
                                         </a>
                                         <div class="accordion-item-content">
                                           <div class="block">
                                             <h4 class="item-title centrar text-color-white"><b>DATOS DEL ADOPTANTE</b></h4>
                                               <p class="text-align-center text-color-white"><b> Edad:</b> `+edadUsuario+`</p>
                                               <p class="text-align-center text-color-white"> <b> Vive en:</b> `+localidadAdoptante+`, `+provinciaAdoptante+`  </p>
                                               <div class="block block-strong no-hairlines FormatoBtnIni  noMargin">
                                                 <button onclick="SetAdoptante(\``+emailAdoptante+`\`)" class="button btn button-large button-fill">
                                                   <span> Establecer como Adoptante</span>
                                                 </button>
                                               </div>
                                             </div>
                                           </div>
                                       </li>`;

                        app.popup.open("#popupPeticionDeAnimal");

                        $$("#peticionesDelAnimal").html(nombre_Animal);
                        $$("#adoptantesAnimalX").append(acoA);


                    } //aca termina el if doc exists

                    }); //aca termina el forEach
                  }) //el then
                .catch((error) => {
                      console.log("Error getting document:", error);
                });

            } //fin onclick primer boton
          }, //fin primer boton
        {text: 'Ingresar Datos Manualmente',
            onClick: function(){
              console.log("ingresar manualmente");
              fnTraerDatosAnimal();
              mainView.router.navigate("/ingresoManual/")
            } //fin onClick ingreso manual
        }, //  fin boton ingreso manual

        {text: 'Cancelar',
          onClick:function(){
              console.log("cancelar todo")
            },
        },
      ],
      verticalButtons: true,
    }).open(); //fin dialogo creado (es usuario firulichapp o no)



  });   // finaliza el primer confirm
}  //hasta aca tengo que comentar desde el principio (op2)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*  app.dialog.confirm("Vas a marcar como adoptado a: "+nombre_Animal,"Confirmar Adopción",function(){
  var miPeticion=colPeticionAdopcion.where("Animal", "==", nombre_Animal)         //Busco si hay una peticion de adop para ese animal
    miPeticion.get()
    .then(function(querySnapshot){
        querySnapshot.forEach(function(doc){
        console.log("entre al then..buscando peticion de:-"+nombre_Animal+"-")
          if(doc.exists){
            //console.log(doc.data());
            console.log("tengo peticion para: "+ nombre_Animal);
            fnTraerDatosAnimal();   //Busco los datos del animal seleccionado

          } else{
              console.log("el animal no tiene una peticion")
              app.dialog.confirm("¡"+nombre_Animal+" no tiene una petición de adopción! ¿Deseas ingresar los datos manualmente?", "¡Oops!", fnIngresarAdopManual)
            }
          })
          // el resto de las cosas las tengo que hacer por afuera del for each
          //deberia hacer un confirm (es usuario de firulichapp? Si? => app.dialog.prompt(ingresa el mail) ----- No? => function ingresar datos manualmente)
          app.dialog.create({
              title: '¡Atención!',
              text: 'Si no es un usuario Firulichapp podés ingresar sus datos manualmente',

              buttons: [

                {text: 'Es usuario Firulichapp',
                  onClick: function(){                                              //quizas seria mejor si al hacer click en es usuario--haga laconsulta de las peticiones de ese animal y muestre los nombres de los adoptantes en un dialog..
                    console.log("es usuario firulichapp");
                    app.dialog.prompt("Ingresa su email", "Datos Adoptante", function(correoAdop){
                        console.log("Usuario:-"+correoAdop+"-");
                        fnTraerDatosUsuario(correoAdop);
                        setTimeout(function(){
                          console.log("antes de la petición emailAdoptante es:-"+ emailAdoptante+"-");
                          if (avisoEsUsuario=="NO"){
                            console.log(avisoEsUsuario);
                            app.dialog.alert("¡No existe ese usuario!", "Oops!")
                          }
                          else{
                            var miPeticionAdop=colPeticionAdopcion.where("email", "==", emailAdoptante)         //Busco si hay una peticion de adop para ese animal
                            miPeticionAdop.get()

                            .then((querySnapshot) => {
                              querySnapshot.forEach((doc) => {
                                // doc.data() is never undefined for query doc snapshots
                                console.log("hay peticion de ese usuario");

                                if (nombre_Animal==doc.data().Animal) {
                                    console.log("existe de ese usuario para este animal")
                                    console.log("tengo la peticion del usuario:-"+ doc.data().email+"-");
                                    telefonoAdoptante=doc.data().Telefono
                                    direccionAdoptante=doc.data().Direccion
                                    viviendaAdoptante=doc.data().Vivienda
                                    viviendaPropiaAdoptante=doc.data().Vivienda_Prop_Adop
                                    profesionAdoptante=doc.data().Profesion_Adop
                                    familiaAdoptante=doc.data().Familia
                                    linkRedesAdoptante=doc.data().Redes
                                    tieneMascotasAdoptante=doc.data().Tiene_Mascotas

                                    app.dialog.confirm("¡"+nomAdoptante+" "+apeAdoptante+" va a adoptar a " +nombre_Animal+"!" ,"Confirmá la Adopción", fnGuardarAdopcion);

                                 } else {
                                    // doc.data() will be undefined in this case
                                    console.log("el email no tiene una peticion");
                                    app.dialog.alert("¡"+emailAdoptante+" no tiene una petición de adopción para "+nombre_Animal+"!" , "¡Oops!");
                                  }

                              });

                            })
                            .catch((error) => {
                                console.log("Error getting document:", error);
                            });
                          }
                        },1300);
                    })

                    //aca deberia ---1°hacer consulta a peticiones de adopcion para ese animal
                    //mostrar en un dialog las peticiones (con los nombres de usuario como botones)
                    //al hacer clik => dialog.confirm "elusuarioapretado va a adoptar a nombreanimal", fnGuardarAdopcion


                  },
                },

                {text: 'Ingresar manualmente',
                  onClick:function(){
                    console.log("ingresar manualmente");
                    fnTraerDatosAnimal();
                    mainView.router.navigate("/ingresoManual/")
                  },
                },


                {text: 'Cancelar',
                  onClick:function(){
                      console.log("cancelar todo")
                    },
                },
              ],
            verticalButtons: true,
            }).open();


      })
    .catch( function(error){
        console.log("Error: "+ error);
      });
    });

}  */ //hasta aca inclusive es la ocpion 1

function fnAdoptar(){
  console.log(nombreUsuario, email, emailOrg, fechaNacUsuario);
  fnCalcularEdad(fechaNacUsuario);

  porqueAdop=$$("#porqueAdop").val();
  cicloVidaAdop=$$("#cicloVidaAdop").val();
  compromisoAdop=$$("#compromisoAdop").val();
  necesidadesAdop=$$("#necesidadesAdop").val();
  tieneMascotasAdop=$$("#tieneMascotasAdop").val();
  cuidaMascotasAdop=$$("#cuidaMascotasAdop").val();
  familiaAdop= $$("#familiaAdop").val();
  alergiasAdop=$$("#alergiasAdop").val();
  viviendaAdop= $$("#viviendaAdop").val();
  viviendaPropiaAdop=$$("#viviendaPropiaAdop").val();
  perimisoPropAdop=$$("#perimisoPropAdop").val();
  mudanzaAdop=$$("#mudanzaAdop").val();
  castracionAdop=$$("#castracionAdop").val();
  profesionAdop=$$("#profesionAdop").val();
  telefonoAdop=$$("#telefonoAdop").val();
  linkRedesAdop=$$("#linkRedesAdop").val();
  direccionAdop=$$("#direccionAdop").val();
  algoMasAdop=$$("#algoMasAdop").val();
  timeStampAdop=Date.now();
  console.log("tiempo: "+timeStampAdop);


  if(viviendaPropiaAdop=="Vivienda Propia"){
    perimisoPropAdop="--";
    mudanzaAdop="--";
  }

  if(algoMasAdop==""){
    algoMasAdop="No agrega nada";
  }
  console.log("familia: " + familiaAdop)
  if (porqueAdop=="" || cicloVidaAdop=="" || compromisoAdop=="" ||  necesidadesAdop=="" ||  tieneMascotasAdop=="" ||  familiaAdop=="" || cuidaMascotasAdop=="" || alergiasAdop=="" || viviendaAdop=="" ||  necesidadesAdop=="" ||  viviendaPropiaAdop=="" ||  perimisoPropAdop=="" || mudanzaAdop=="" || castracionAdop=="" || telefonoAdop=="" || profesionAdop=="" ||  linkRedesAdop=="" ||  direccionAdop=="") {
    app.dialog.alert("¡¡Completá todos los campos!!", "Oops");
  } else {
    app.dialog.confirm("¡" + nombreUsuario + ", la Adopción es un compromiso de por Vida!"
    + "</br>"+ "¡Nos vamos a estar comunicando con vos!" + "</br>"+ "¡Gracias!" , "Confirmá tu petición!", function(){



      var peticionDeAdopcion={
        //Nombre Animal: deberian estar los datos del animal tmb
        email:email,
        emailorg:emailOrg,
        Nombre: nombreUsuario,
        Apellido: apellidoUsuario,
        Edad: edadUsuario,
        Vivienda: viviendaAdop,
        Familia: familiaAdop,
        Localidad: localidad,
        Provincia: provincia,
        Telefono: telefonoAdop,
        Redes: linkRedesAdop,
        Porque_Adop: porqueAdop,
        Ciclo_Adop: cicloVidaAdop,
        Compromiso_Adop: compromisoAdop,
        Necesidades_Adop: necesidadesAdop,
        Alergias_Adop: alergiasAdop,
        Vivienda_Prop_Adop: viviendaPropiaAdop,
        Permiso_Prop_Adop: perimisoPropAdop,
        Mudanza_Adop: mudanzaAdop,
        Castracion_Adop: castracionAdop,
        Profesion_Adop: profesionAdop,
        Tiene_Mascotas: tieneMascotasAdop,
        Cuida_Mascotas: cuidaMascotasAdop,
        Direccion: direccionAdop,
        Agrega: algoMasAdop,
        Animal:nombre_Animal,
        Tipo_Animal:tipo_Animal,
        Genero_Animal:genero_Animal,
        Descripcion_Animal:descripcion_Animal,
        time_Stamp_Adop:timeStampAdop,
      }


      colPeticionAdopcion.add(peticionDeAdopcion)
        .then(function (docRefo){
          console.log("Se guardo en bd con el id: ", docRefo.id);
          console.log("la edad del usuario guardada es: "+edadUsuario)
          app.dialog.alert ("¡" +nombreUsuario+", ya recibimos tu petición de Adopción! ¡Nos vamos a comunicar con vos!", "¡¡Graciass!!", function() {mainView.router.navigate("/usuarioHome/")} );
        })
        .catch(function(error){
          console.log("Error: " + error);
        });
    });

  }

}

function setOrganizacion(nombre){

  var reforgan= colOrganizaciones
  var indiceA=0;
  reforgan.get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(docActual){
          indiceA++;
          if(nombre==docActual.data().Nombre){
             nombreRespOrganizacion=docActual.data().nomResponsable
             apellidoRespOrganizacion=docActual.data().apellidoResponsable
             nombreOrganizacion=docActual.data().Nombre
             localidadOrg= docActual.data().Localidad
             provinciaOrg= docActual.data().Provincia
             descripcionOrg=docActual.data().Descripción
             emailOrg=docActual.id
             fechaCreacionOrg=docActual.data().Fecha_Crea_Org
             redesOrg=docActual.data().Redes
          }


        })
        mainView.router.navigate('/VerOrgDesdeUsu/verOr'+indiceA+'/')
    })
    .catch( function(error){
      console.log("Error : "+ error);
    });

}



function fnEditarNomOrg(){
  console.log("editar nombre")
  app.dialog.prompt("Ingresa el nuevo nombre", "Editar Nombre de Organización", function(newNombreOrg){
    colOrganizaciones.doc(emailOrg).update({ Nombre: newNombreOrg })
    .then(function() {
    nombreOrganizacion=newNombreOrg;
    console.log("actualizado ok: "+nombreOrganizacion);
    app.dialog.alert("Actualizaste el nombre de la Organización a: "+nombreOrganizacion, "¡Listo!", function(){mainView.router.navigate("/orgHome/")});
    })
    .catch(function(error) {
    console.log("Error: " + error);
    });
  });
}

function fnEditarNomRespOrg(){
  console.log("editar nombre responsable")
  app.dialog.prompt("Ingresa el nuevo nombre", "Editar Nombre del Responsable", function(nuevoNombre){
    colOrganizaciones.doc(emailOrg).update({ nomResponsable: nuevoNombre })
    .then(function() {
    nombreRespOrganizacion=nuevoNombre;
    console.log("actualizado ok: "+nombreRespOrganizacion );
    })
    .catch(function(error) {
    console.log("Error: " + error);
    });
  app.dialog.prompt("Ingresa el nuevo apellido", "Editar Apellido del Responsable", function(nuevoApe){
    colOrganizaciones.doc(emailOrg).update({ apellidoResponsable: nuevoApe })
    .then(function() {
      apellidoRespOrganizacion=nuevoApe;
    console.log("actualizado ok: "+apellidoRespOrganizacion );
    app.dialog.alert("Actualizaste nombre y apellido del Responsable a: "+nombreRespOrganizacion+" "+apellidoRespOrganizacion, "¡Listo!", function(){mainView.router.navigate("/orgHome/")})
    })
    .catch(function(error) {
    console.log("Error: " + error);
    });
  });
  mainView.router.navigate("/miPerfilOrg/");

  });
}


function fnEditarLocOrg(){
  console.log("editar localidad")
  app.dialog.prompt("Ingresa ela localidad", "Editar Localidad", function (nuevaLoc){
    colOrganizaciones.doc(emailOrg).update({ Localidad: nuevaLoc })
    .then(function() {
    console.log("actualizado ok: "+nuevaLoc );
    localidadOrg=nuevaLoc;
    app.dialog.alert("Actualizaste tu Localidad a: "+localidadOrg, "¡Listo!", function(){mainView.router.navigate("/orgHome/")})
    })
    .catch(function(error) {
    console.log("Error: " + error);
    });
  });
}


function fnEditarPciaOrg(){
  console.log("editar provincia")
  app.dialog.prompt("Ingresa la provincia", "Editar Provincia", function (nuevaPcia){
    colOrganizaciones.doc(emailOrg).update({ Provincia: nuevaPcia })
    .then(function() {
    console.log("actualizado ok: "+nuevaPcia);
    provinciaOrg=nuevaPcia;
    app.dialog.alert("Actualizaste tu Provincia a: "+provinciaOrg, "¡Listo!", function(){mainView.router.navigate("/orgHome/")})
    })
    .catch(function(error) {
    console.log("Error: " + error);
    });
  });

}

function fnEditarRedesOrg(){
  console.log("editar redes")
  app.dialog.prompt("Ingresa el link", "Editar Redes Sociales", function (nuevaRed){
    colOrganizaciones.doc(emailOrg).update({ Redes: nuevaRed})
    .then(function() {
    console.log("actualizado ok: "+nuevaRed);
    redesOrg=nuevaRed;
    app.dialog.alert("Actualizaste tus redes a: "+redesOrg, "¡Listo!", function(){mainView.router.navigate("/orgHome/")})
    })
    .catch(function(error) {
    console.log("Error: " + error);
    });
  });

}



function fnEditarDescOrg(){
  console.log("editar descripcion")
    nuevaDescripcion=$$("#nuevaDescripcion").text();
    console.log("newDesc: "+nuevaDescripcion);
    colOrganizaciones.doc(emailOrg).update({ Descripción: nuevaDescripcion })
    .then(function() {
    console.log("actualizado ok: "+nuevaDescripcion );
    descripcionOrg=nuevaDescripcion;
    app.dialog.alert("Actualizaste tu descripción", "¡Listo!")
    })
    .catch(function(error) {
    console.log("Error: " + error);
    });
    app.popup.close("#popupEditarDescOrg");
    mainView.router.navigate("/orgHome/");

}

function fnEditarFechaCrea(){
  console.log("editar fecha")
    nuevaFecha=$$("#creaFechaOrga").val();
    if(nuevaFecha==""){
      app.dialog.alert("Tenes que seleccionar una fecha!", "Oops");
    } else{
        console.log("newfecha: "+nuevaFecha);
        colOrganizaciones.doc(emailOrg).update({ Fecha_Crea_Org: nuevaFecha })
        .then(function() {
        console.log("actualizado ok: "+nuevaFecha );
        fechaCreacionOrg=nuevaFecha;
        app.dialog.alert("Actualizaste la fecha de creación", "¡Listo!")
        })
        .catch(function(error) {
        console.log("Error: " + error);
        });
        app.popup.close("#popupEditarFechaOrg");
        mainView.router.navigate("/orgHome/");
      }

}



function fnEditarMPagoOrg(){
  console.log("editar mercadoPAgo")
  app.dialog.prompt("Ingresa el email de la cuenta", "Cuenta de Mercado Pago", function(cuentaMp){
    colOrganizaciones.doc(emailOrg).update({ MercadoPago: cuentaMp })
    .then(function() {
    console.log("actualizado ok: "+cuentaMp );
    cuentaMpOrg=cuentaMp;
    })
    .catch(function(error) {
    console.log("Error: " + error);
    });
    mainView.router.navigate("/miPerfilOrg/");
    mainView.router.refreshPage();
  });
}

function fnEditarBancoOrg(){
  console.log("editar bancoOrg")
  app.dialog.prompt("Ingresa el Banco", "Editar Banco", function(banco){
    colOrganizaciones.doc(emailOrg).update({ Banco: banco })
    .then(function() {
    console.log("actualizado ok: "+banco );
    bancoOrg=banco;
    })
    .catch(function(error) {
    console.log("Error: " + error);
    });
    mainView.router.navigate("/miPerfilOrg/");
  });
}

function fnEditarTitularCtaOrg(){
  console.log("editar titular cta")
  app.dialog.prompt("Ingresa nombre y apellido", "Titular de la Cuenta", function(titular){
    colOrganizaciones.doc(emailOrg).update({ Titular_Cta: titular })
    .then(function() {
    console.log("actualizado ok: "+titular );
    titularCtaOrg=titular;
    })
    .catch(function(error) {
    console.log("Error: " + error);
    });
    mainView.router.navigate("/miPerfilOrg/");

  });
}


function fnEditarCbuOrg(){
  console.log("editar Cbu ")
  app.dialog.prompt("Ingresa el nro de CBU", "Editar CBU", function(cbu){
    colOrganizaciones.doc(emailOrg).update({ Cbu_Cta: cbu })
    .then(function() {
    console.log("actualizado ok: "+cbu );
    cbuOrg=cbu;
    })
    .catch(function(error) {
    console.log("Error: " + error);
    });
    mainView.router.navigate("/miPerfilOrg/");

  });
}

function fnEditarNroCtaOrg(){
  console.log("editar nro cta ")
  app.dialog.prompt("Ingresa el nro de cuenta", "Editar N° Cuenta", function(nroCta){
    colOrganizaciones.doc(emailOrg).update({ Nro_Cta: nroCta })
    .then(function() {
    console.log("actualizado ok: "+nroCta );
    nroCtaOrg=nroCta;
    })
    .catch(function(error) {
    console.log("Error: " + error);
    });
    mainView.router.navigate("/miPerfilOrg/");

  });
}

function fnEditarCuilOrg(){
  console.log("editar CUIL ")
  app.dialog.prompt("Ingresa el nro de CUIL", "Editar N° CUIL", function(cuil){
    colOrganizaciones.doc(emailOrg).update({ Nro_Cuil: cuil})
    .then(function() {
    console.log("actualizado ok: "+cuil );
    cuilOrg=cuil;
    })
    .catch(function(error) {
    console.log("Error: " + error);
    });
    mainView.router.navigate("/miPerfilOrg/");

  });
}


function setAnimal (nombreA){
  console.log("SET ANIMAL de: "+ emailOrg)
  var refAni= colAnimalesEnAdopcion.where("email", "==", emailOrg).where("Nombre_Animal", "==", nombreA);
  var indiceX=0;
  refAni.get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(docActual){
             console.log("entro al query for each")
             indiceX++;
             nombre_Animal=docActual.data().Nombre_Animal
             tipo_Animal= docActual.data().Tipo_Animal
             genero_Animal= docActual.data().Genero_Animal
             descripcion_Animal=docActual.data().Descripcion_Animal
             urlAnimal=docActual.data().url_Animal
             id_AnimalBD=docActual.id
             console.log("animal es: " + nombre_Animal)
             console.log("es un " + tipo_Animal)
             console.log("id animal: "+ id_AnimalBD);
        })
        if (tipodeUsuario=="usuario"){
          console.log("me jui pa usuario")
          mainView.router.navigate('/verAnimalDesdeUsu/verAUsu'+indiceX+'/')
        }
        if (tipodeUsuario=="org"){
          console.log("me jui pa org")
          mainView.router.navigate('/verAnimal/verA'+indiceX+'/')
        }
              //ACA PUEDO HACER UN IF DE TIPO DE USUARIO PARA EL ROUTER
    })
    .catch( function(error){
      console.log("Error : "+ error);
    });
}

function setAnimalAdoptado(adoptado){

  var refMisadop= colAnimalesAdoptados.where("emailorg", "==" , emailOrg).where("Nombre_Animal", "==", adoptado);
  var indice=0;
  refMisadop.get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(docAdop){
          indice++;
          nombre_Animal=docAdop.data().Nombre_Animal
          genero_Animal=docAdop.data().Genero_Animal
          tipo_Animal=docAdop.data().Tipo_Animal
          descripcion_Animal=docAdop.data().Descripcion_Animal
          urlAnimal=docAdop.data().url_Animal
          nomAdoptante=docAdop.data().Nombre_Adoptante
          apeAdoptante=docAdop.data().Apellido_Adoptante
          edadUsuario=docAdop.data().Edad_Adoptante
          profesionAdoptante=docAdop.data().Profesion
          viviendaAdoptante=docAdop.data().Vivienda
          viviendaPropiaAdoptante=docAdop.data().Vivienda_Prop
          direccionAdoptante=docAdop.data().Direccion
          familiaAdoptante=docAdop.data().Familia
          localidadAdoptante=docAdop.data().Localidad
          provinciaAdoptante=docAdop.data().Provincia
          telefonoAdoptante=docAdop.data().Telefono
          linkRedesAdoptante=docAdop.data().Redes
          tieneMascotasAdoptante=docAdop.data().Tiene_Mascotas
          emailAdoptante=docAdop.data().emailAdoptante
          fechaDeAdopcion=docAdop.data().Fecha_Adopcion
          console.log("-"+nombre_Animal+"-  adoptado por " + nomAdoptante + " indice: " + indice);


        })
      mainView.router.navigate('/verAnimaldop/verAdop'+indice+'/')
    })
    .catch( function(error){
      console.log("Error : "+ error);
    });


}


function setAnimalAdoptadoDeOrg(animal){
  var refMisadop= colAnimalesAdoptados.where("emailorg", "==" , emailOrg).where("Nombre_Animal", "==", animal);
  var indice=0;
  refMisadop.get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(docAdop){
          indice++;
          nombre_Animal=docAdop.data().Nombre_Animal
          genero_Animal=docAdop.data().Genero_Animal
          tipo_Animal=docAdop.data().Tipo_Animal
          descripcion_Animal=docAdop.data().Descripcion_Animal
          localidadAdoptante=docAdop.data().Localidad
          provinciaAdoptante=docAdop.data().Provincia
          fechaDeAdopcion=docAdop.data().Fecha_Adopcion
          urlAnimal=docAdop.data().url_Animal
          console.log("-"+nombre_Animal+"-  adoptado por " + nomAdoptante + " indice: " + indice);


        })
      mainView.router.navigate('/verAnimaldopDesdeUsu/verAdop'+indice+'/')
    })
    .catch( function(error){
      console.log("Error : "+ error);
    });



}

function fnCalcularEdad(fecha){
        var hoy = new Date();
        nacimiento=new Date(fecha);
        edadUsuario=hoy.getFullYear() - nacimiento.getFullYear();
        month = hoy.getMonth() - nacimiento.getMonth();
        diaHoy=hoy.getDate();
        diaNac=nacimiento.getDate();


        if (month < 0 || (month ==0 && diaHoy < diaNac )) {
                edadUsuario--;
            }
        console.log("edad del Usuario: " + edadUsuario);
}


function fnIngresarAdopManual (){
  console.log("voy a ingresar los datos manualmente");
}

function fnTraerDatosAnimal(){
    console.log("traigo datos de animal: " + nombre_Animal)
    var refMiAnimal=colAnimalesEnAdopcion.where("Nombre_Animal", "==", nombre_Animal)

    refMiAnimal.get()
    .then(function(querySnapshot){
      querySnapshot.forEach(function(doc){

        console.log("estoy en el then de animalesEnAdopcion");
        console.log("animal en adop : " + doc.data().Nombre_Animal)
        nombre_Animal=doc.data().Nombre_Animal
        tipo_Animal=doc.data().Tipo_Animal
        genero_Animal=doc.data().Genero_Animal
        descripcion_Animal=doc.data().Descripcion_Animal
        id_AnimalBD=doc.id
        urlAnimal=doc.data().url_Animal
        console.log("id animal:-"+id_AnimalBD);
      })
    })
    .catch( function(error){
      console.log("Error: "+ error);
    });

}


function fnTraerDatosUsuario(e){
  console.log("traigo datos de usuario: "+ e);
    var miAdoptante=colUsuarios.doc(e)              //Busco los datos del correo ingresado
    miAdoptante.get()
    .then(function(docN){
      console.log("entre al then..buscando al usuario: "+e)
      if(docN.exists){                                                 //si el correo existe guardo sus datos
        console.log("encontrado:-"+docN.data().Nombre+"-")
        nomAdoptante=docN.data().Nombre
        apeAdoptante=docN.data().Apellido
        localidadAdoptante=docN.data().Localidad
        provinciaAdoptante=docN.data().Provincia
        emailAdoptante=docN.id
        fechaNacAdoptante=docN.data().Fecha_Nac

        fnCalcularEdad(fechaNacAdoptante);

      } else {
        console.log("el usuario no existe")                          //si no existe guardo en emailadoptante para usarlo en el dialog de aviso que el usaurio no tiene peticion
        emailAdoptante=e;
        avisoEsUsuario="NO";
      }
      })
    .catch( function(error){
      console.log("Error: "+ error);
    });

}


function fnGuardarAdopcion(){
  console.log("guardar adopcion")

  var hoy=new Date();                         // conversion de Date a fecha de adopcion
  var anio=hoy.getFullYear();
  var mes=hoy.getMonth()+1;
  var dia=hoy.getDate();

  if(dia < 10){
    dia = '0' + dia;
   }

   if(mes < 10){
       mes = '0' + mes;
   }

  fechaDeAdopcioncion =dia+"/"+mes+"/"+anio ;                     //anio + "-" + mes + "-" + dia
   console.log("la fecha de adopcion sera: " + fechaDeAdopcioncion)

  var nuevoAdoptado={
    Fecha_Adopcion: fechaDeAdopcioncion,
    emailAdoptante:emailAdoptante,
    emailorg:emailOrg,
    Nombre_Adoptante: nomAdoptante,
    Apellido_Adoptante: apeAdoptante,
    Vivienda: viviendaAdoptante,
    Vivienda_Prop: viviendaPropiaAdoptante,
    Profesion:profesionAdoptante,
    Direccion:direccionAdoptante,
    Familia: familiaAdoptante,
    Localidad: localidadAdoptante,
    Provincia: provinciaAdoptante,
    Telefono: telefonoAdoptante,
    Redes: linkRedesAdoptante,
    Nombre_Animal:nombre_Animal,
    Tipo_Animal:tipo_Animal,
    Genero_Animal:genero_Animal,
    Descripcion_Animal:descripcion_Animal,
    url_Animal:urlAnimal,
    Tiene_Mascotas:tieneMascotasAdoptante,
    Edad_Adoptante: edadUsuario,
  }

  console.log("Edad adoptante: " + edadUsuario);


    colAnimalesEnAdopcion.doc(id_AnimalBD).delete()
    .then(function() {
    console.log("Animal borrado de EnAdopcion! :" +id_AnimalBD);
    })
    .catch(function(error) {
    console.error("Error: ", error);
    });


    colAnimalesAdoptados.add(nuevoAdoptado)
      .then(function (docAdop){
        console.log("Se guardo en bd con el id: ", docAdop.id);
        app.dialog.alert ("¡Encontraste un lindo hogar para "+nombre_Animal+"! ¡Felicidades!" , "¡¡Que Alegría!!", function(){mainView.router.navigate("/misRescatados/");
        });
      })
      .catch(function(error){
        console.log("Error: " + error);
      });

  }

function setRecomendacion(rec){
  console.log(emailOrg)
  console.log("rec:-"+rec+"-");
  var refReco= colRecomendaciones.where("email", "==", emailOrg)
  refReco.get()
  .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc){
        if(doc.data().titulo==rec){
          console.log("titulos coinciden")
          tituloRec=doc.data().titulo;
          txtRec=doc.data().texto;
          idRec=doc.id;
          $$("#editaTitRec").val(tituloRec);
          $$("#editaTextRec").text(txtRec);

        }
      })


  })
  .catch( function(error){
    console.log("Error : "+ error);
  });

}

function fnEditarRecomenda (){
  app.dialog.confirm("¿Vas a guardar los cambios en tu recomendación?", "¡Hey!", function(){
    tituloRec=$$("#editaTitRec").val();
    txtRec=$$("#editaTextRec").text();

    var editaReco=colRecomendaciones.doc(idRec).update
    ({ titulo: tituloRec,
        texto: txtRec })

    .then(function() {
    console.log("actualizado ok");
    app.dialog.alert("¡Recomendación Actulizada!", "¡Listo!", function(){
        app.popup.close("#popupEditarReco");
        mainView.router.navigate('/orgHome/')} )
    })
    .catch(function(error) {
    console.log("Error: " + error);
    });
  })

}


function fnBorrarRecomenda (titulo){

  setRecomendacion(titulo);
  setTimeout(function(){
    console.log("aca es: " + tituloRec);
    app.dialog.confirm("¿Vas a borrar la recomendación?", "¡Hey!", function(){

        var borrarReco=colRecomendaciones.doc(idRec).delete()

        .then(function() {
        console.log("documento borrado");
        app.dialog.alert("¡Recomendación Borrada!", "¡Listo!", function(){
            mainView.router.navigate('/orgHome/')} )
        })
        .catch(function(error) {
        console.log("Error: " + error);
        });
    })
  },1000);

}



function fnCamara() {
// FOTO DESDE CAMARA
    navigator.camera.getPicture(onSuccessCamara,onErrorCamara,
            {
                quality: 70,
                destinationType: Camera.DestinationType.FILE_URI,
                sourceType: Camera.PictureSourceType.CAMERA,
                correctOrientation: true,

            });
}


function fnGaleria() {
    navigator.camera.getPicture(onSuccessCamara,onErrorCamara,
            {
                quality: 50,
                destinationType: Camera.DestinationType.FILE_URI,
                sourceType: Camera.PictureSourceType.PHOTOLIBRARY
            });

}

/*function onSuccessCamara(imageURI) {
    $$("#foto").attr("src", imageURI);
   // RESTA QUE ESTA FOTO SUBA AL STORAGE…. O HACER OTRA COSA...

}*/

function onSuccessCamara(imageData) {
  ind++;
  console.log("imgdata: "+imageData)
  getFileObject(imageData, function(fileObject) { //fn1
     var uploadTask = storageRef.child('animales/img'+nombreOrganizacion+ind+'.jpg').put(fileObject); //recibe un archivo blob y lo sube al cloud storage
     uploadTask.on('state_changed', function(snapshot) {                   //promesa que administra o supervisa el estado de la carga cuando cambie el estado de su snapshot, mostrando el estado del snapsht,
         console.log(snapshot);                                            //
     }, function(error) { //funcion de error
         console.log(error);
         app.dialog.alert(error)
     }, function() {     //funcion que si todo sale bien:
         uploadTask.snapshot.ref.getDownloadURL().then( //obtengo el url de descarga
           function(downloadURL) {
           console.log('el archivo esta disponible en', downloadURL);//Muestro el link
             app.dialog.alert('La imagen ya está subida', "¡Genial!")
           //aca abajo puedo elegir que hacer con mi imagen que ya esta cargada y la puedo manejar a partir de mi download link
            urlAnimal=downloadURL;
            $$("#foto").attr("src", urlAnimal);
            console.log("url: " + urlAnimal)
         });
     });
   });

   // lo de abajo se ejecuta en la funcion on succes (es necesario ejecutar solo getFileFbject) dentro del succes
//toma un blob y un nombre y cambia fecha y nombre, luego devuelve el blob
var blobToFile = function(blob, name) {
 blob.lastModifiedDate = new Date()    //modifica la ultima fecha del blob
 blob.name = name                      //modifica el nombre del blob
 return blob
}
//A partir de la ubicacion de nuestro file y una funcion (cb) ejecuta getfileBlob (funcion especificada abajo)
function getFileObject(filePathOrUrl, cb) {
 getFileBlob(filePathOrUrl, function(blob) { //fn2      //llama a la funcion getFileBlob con el url introducido y una funcion que:
     cb(blobToFile(blob, 'img'+nombreOrganizacion+ind+'.jpg'));             //ejecuta nuestro cb (callback) sobre el blob con nombre y fecha cambiada (el nombre sera 'test.jpg')
 });
};
//obtiene un file desde el servidor utilizando un url,  lo transfrma a tipo blob y ejecuta una funcion (cb) para luego enviarlo al servidor
function getFileBlob(url, cb) {
 var xhr= new XMLHttpRequest()   //creo una nueva instancia de XMLHttpRequest
 xhr.open('GET', url)            //inicializo una peticion asincronica del url al server
 xhr.responseType = "blob"       // declaro que el valor del tipo de respuesta es blob (para luego usarlo mas adelante)
 xhr.addEventListener('load', ()=>{//Le agrego un event listener que cuando cargue  se va a ejecutar
   cb(xhr.response)              //mi cb (callback) con la respuesta del servidor
 })
 xhr.send()                      //Envia la peticion nuevamente.
}
//Se ejecuta la funcion getfileObject con nuestra imagen y el cb que:
/*orden de funcionamiento:
1. getFileObject(imageData, fn1)    || inserto un url
2. getFileBlob (url, fn2)           || realizo desde ese url una peticion, me devuelve un blob
3. fn2                              || ejecuto la funcion 1 con el resultado de:
4. bloblToFile(blob, test.jpg)      || desde mi blob obtengo un file
5. fn1                              ||
*/


 }




function onErrorCamara() {
    console.log('error de camara');
}


function SetAdoptante(mail){
  console.log("set Adoptante");
  console.log("mail del usuario: "+ mail);
  fnTraerDatosUsuario(mail);
  setTimeout(function(){
    console.log("antes de la petición emailAdoptante es:-"+ emailAdoptante+"-");
      var miPeticionAdop=colPeticionAdopcion.where("email", "==", emailAdoptante)         //Busco si hay una peticion de adop para ese animal
      miPeticionAdop.get()

      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log("hay peticion de ese usuario");

          if (nombre_Animal==doc.data().Animal) {
              console.log("existe de ese usuario para este animal")
              console.log("tengo la peticion del usuario:-"+ doc.data().email+"-");
              telefonoAdoptante=doc.data().Telefono
              direccionAdoptante=doc.data().Direccion
              viviendaAdoptante=doc.data().Vivienda
              viviendaPropiaAdoptante=doc.data().Vivienda_Prop_Adop
              profesionAdoptante=doc.data().Profesion_Adop
              familiaAdoptante=doc.data().Familia
              linkRedesAdoptante=doc.data().Redes
              tieneMascotasAdoptante=doc.data().Tiene_Mascotas

              app.dialog.confirm("¡"+nomAdoptante+" "+apeAdoptante+" va a adoptar a " +nombre_Animal+"!" ,"Confirmá la Adopción", fnGuardarAdopcion);
              app.popup.close("#popupPeticionDeAnimal");
           } else {
              // doc.data() will be undefined in this case
              console.log("el email no tiene una peticion");
              app.dialog.alert("¡"+emailAdoptante+" no tiene una petición de adopción para "+nombre_Animal+"!" , "¡Oops!");
            }

        });

      })
      .catch((error) => {
          console.log("Error getting document:", error);
      });

  },1300);
}




function fnEditarCamara2() {
// FOTO DESDE CAMARA
    navigator.camera.getPicture(onSuccessCamara2,onErrorCamara,
            {
                quality: 70,
                destinationType: Camera.DestinationType.FILE_URI,
                sourceType: Camera.PictureSourceType.CAMERA,
                correctOrientation: true,

            });
}


function fnEditarGaleria2() {
    navigator.camera.getPicture(onSuccessCamara2,onErrorCamara,
            {
                quality: 50,
                destinationType: Camera.DestinationType.FILE_URI,
                sourceType: Camera.PictureSourceType.PHOTOLIBRARY
            });

}

/*function onSuccessCamara(imageURI) {
    $$("#foto").attr("src", imageURI);
   // RESTA QUE ESTA FOTO SUBA AL STORAGE…. O HACER OTRA COSA...

}*/

function onSuccessCamara2(imageData) {
  ind++;
  console.log("imgdata: "+imageData)
  getFileObject(imageData, function(fileObject) { //fn1
     var uploadTask = storageRef.child('perfiles/img'+nombreOrganizacion+ind+'.jpg').put(fileObject); //recibe un archivo blob y lo sube al cloud storage
     uploadTask.on('state_changed', function(snapshot) {                   //promesa que administra o supervisa el estado de la carga cuando cambie el estado de su snapshot, mostrando el estado del snapsht,
         console.log(snapshot);                                            //
     }, function(error) { //funcion de error
         console.log(error);
         app.dialog.alert(error)
     }, function() {     //funcion que si todo sale bien:
         uploadTask.snapshot.ref.getDownloadURL().then( //obtengo el url de descarga
           function(downloadURL) {
           console.log('el archivo esta disponible en', downloadURL);//Muestro el link
             app.dialog.alert('La imagen ya está subida', "¡Genial!")
           //aca abajo puedo elegir que hacer con mi imagen que ya esta cargada y la puedo manejar a partir de mi download link
            urlFotoPerfilOrg=downloadURL;
            $$("#edicionfotoPerfil").attr("src", urlFotoPerfilOrg);
            console.log("url: " + urlFotoPerfilOrg)
         });
     });
   });

   // lo de abajo se ejecuta en la funcion on succes (es necesario ejecutar solo getFileFbject) dentro del succes
//toma un blob y un nombre y cambia fecha y nombre, luego devuelve el blob
var blobToFile = function(blob, name) {
 blob.lastModifiedDate = new Date()    //modifica la ultima fecha del blob
 blob.name = name                      //modifica el nombre del blob
 return blob
}
//A partir de la ubicacion de nuestro file y una funcion (cb) ejecuta getfileBlob (funcion especificada abajo)
function getFileObject(filePathOrUrl, cb) {
 getFileBlob(filePathOrUrl, function(blob) { //fn2      //llama a la funcion getFileBlob con el url introducido y una funcion que:
     cb(blobToFile(blob, 'img'+nombreOrganizacion+ind+'.jpg'));             //ejecuta nuestro cb (callback) sobre el blob con nombre y fecha cambiada (el nombre sera 'test.jpg')
 });
};
//obtiene un file desde el servidor utilizando un url,  lo transfrma a tipo blob y ejecuta una funcion (cb) para luego enviarlo al servidor
function getFileBlob(url, cb) {
 var xhr= new XMLHttpRequest()   //creo una nueva instancia de XMLHttpRequest
 xhr.open('GET', url)            //inicializo una peticion asincronica del url al server
 xhr.responseType = "blob"       // declaro que el valor del tipo de respuesta es blob (para luego usarlo mas adelante)
 xhr.addEventListener('load', ()=>{//Le agrego un event listener que cuando cargue  se va a ejecutar
   cb(xhr.response)              //mi cb (callback) con la respuesta del servidor
 })
 xhr.send()                      //Envia la peticion nuevamente.
}
//Se ejecuta la funcion getfileObject con nuestra imagen y el cb que:
/*orden de funcionamiento:
1. getFileObject(imageData, fn1)    || inserto un url
2. getFileBlob (url, fn2)           || realizo desde ese url una peticion, me devuelve un blob
3. fn2                              || ejecuto la funcion 1 con el resultado de:
4. bloblToFile(blob, test.jpg)      || desde mi blob obtengo un file
5. fn1                              ||
*/


 }


function fnEditarFotoPerfil(){
  console.log("editar foto perfil")
    urlNuevaFoto=$$("#edicionfotoPerfil").attr("src");
    console.log("newfoto: "+urlNuevaFoto);
    colOrganizaciones.doc(emailOrg).update({ url_FotoPerfil: urlNuevaFoto })
    .then(function() {
    urlFotoPerfilOrg=urlNuevaFoto;
    console.log("actualizado ok: "+urlFotoPerfilOrg );

    app.dialog.alert("Actualizaste tu foto de perfil!", "¡Listo!")
    })
    .catch(function(error) {
    console.log("Error: " + error);
    });
    app.popup.close("#popupEditarFotoPerfil");
    mainView.router.navigate("/orgHome/");
}




function fnCamaraPerfil() {
// FOTO DESDE CAMARA
    navigator.camera.getPicture(onSuccessCamaraPerfil,onErrorCamara,
            {
                quality: 70,
                destinationType: Camera.DestinationType.FILE_URI,
                sourceType: Camera.PictureSourceType.CAMERA,
                correctOrientation: true,

            });
}


function fnGaleriaPerfil() {
    navigator.camera.getPicture(onSuccessCamaraPerfil,onErrorCamara,
            {
                quality: 50,
                destinationType: Camera.DestinationType.FILE_URI,
                sourceType: Camera.PictureSourceType.PHOTOLIBRARY
            });

}

/*function onSuccessCamara(imageURI) {
    $$("#foto").attr("src", imageURI);
   // RESTA QUE ESTA FOTO SUBA AL STORAGE…. O HACER OTRA COSA...

}*/

function onSuccessCamaraPerfil(imageData) {
  ind++;
  console.log("imgdata: "+imageData)
  getFileObject(imageData, function(fileObject) { //fn1
     var uploadTask = storageRef.child('perfiles/img'+nombreOrganizacion+ind+'.jpg').put(fileObject); //recibe un archivo blob y lo sube al cloud storage
     uploadTask.on('state_changed', function(snapshot) {                   //promesa que administra o supervisa el estado de la carga cuando cambie el estado de su snapshot, mostrando el estado del snapsht,
         console.log(snapshot);                                            //
     }, function(error) { //funcion de error
         console.log(error);
         app.dialog.alert(error)
     }, function() {     //funcion que si todo sale bien:
         uploadTask.snapshot.ref.getDownloadURL().then( //obtengo el url de descarga
           function(downloadURL) {
           console.log('el archivo esta disponible en', downloadURL);//Muestro el link
             app.dialog.alert('La imagen ya está subida', "¡Genial!")
           //aca abajo puedo elegir que hacer con mi imagen que ya esta cargada y la puedo manejar a partir de mi download link
            urlFotoPerfilOrg=downloadURL;
            $$("#fotoPerfilDeOrg").attr("src", urlFotoPerfilOrg);
            console.log("url: " + urlFotoPerfilOrg)
         });
     });
   });

   // lo de abajo se ejecuta en la funcion on succes (es necesario ejecutar solo getFileFbject) dentro del succes
//toma un blob y un nombre y cambia fecha y nombre, luego devuelve el blob
var blobToFile = function(blob, name) {
 blob.lastModifiedDate = new Date()    //modifica la ultima fecha del blob
 blob.name = name                      //modifica el nombre del blob
 return blob
}
//A partir de la ubicacion de nuestro file y una funcion (cb) ejecuta getfileBlob (funcion especificada abajo)
function getFileObject(filePathOrUrl, cb) {
 getFileBlob(filePathOrUrl, function(blob) { //fn2      //llama a la funcion getFileBlob con el url introducido y una funcion que:
     cb(blobToFile(blob, 'img'+nombreOrganizacion+ind+'.jpg'));             //ejecuta nuestro cb (callback) sobre el blob con nombre y fecha cambiada (el nombre sera 'test.jpg')
 });
};
//obtiene un file desde el servidor utilizando un url,  lo transfrma a tipo blob y ejecuta una funcion (cb) para luego enviarlo al servidor
function getFileBlob(url, cb) {
 var xhr= new XMLHttpRequest()   //creo una nueva instancia de XMLHttpRequest
 xhr.open('GET', url)            //inicializo una peticion asincronica del url al server
 xhr.responseType = "blob"       // declaro que el valor del tipo de respuesta es blob (para luego usarlo mas adelante)
 xhr.addEventListener('load', ()=>{//Le agrego un event listener que cuando cargue  se va a ejecutar
   cb(xhr.response)              //mi cb (callback) con la respuesta del servidor
 })
 xhr.send()                      //Envia la peticion nuevamente.
}
//Se ejecuta la funcion getfileObject con nuestra imagen y el cb que:
/*orden de funcionamiento:
1. getFileObject(imageData, fn1)    || inserto un url
2. getFileBlob (url, fn2)           || realizo desde ese url una peticion, me devuelve un blob
3. fn2                              || ejecuto la funcion 1 con el resultado de:
4. bloblToFile(blob, test.jpg)      || desde mi blob obtengo un file
5. fn1                              ||
*/


 }


 function fnEditarAnimal(){
   console.log("editar animal")
   console.log(nombre_Animal);
   console.log("id ani: "+ id_AnimalBD);




     nuevaDescripcion=$$("#editDescripcion_animal").text();
     nuevoTipoAni=$$("#editarTipoAnimal").val();
     nuevoGeneroAni=$$("#editarGeneroAnimal").val();
     nuevoNombreAni=$$("#editarNombreAnimal").val();
     nuevaUrlAni=$$("#editFotoAnimal").attr("src");

     colAnimalesEnAdopcion.doc(id_AnimalBD).update({
       Descripcion_Animal: nuevaDescripcion,
       Nombre_Animal:nuevoNombreAni,
       Genero_Animal:nuevoGeneroAni,
       Tipo_Animal:nuevoTipoAni,
       url_Animal:nuevaUrlAni,
      })
     .then(function() {
       console.log("actualizado ok: "+ nuevoNombreAni);
       descripcion_Animal=nuevaDescripcion;
       nombre_Animal=nuevoNombreAni;
       genero_Animal=nuevoGeneroAni;
       tipo_Animal=nuevoTipoAni;
       urlAnimal=nuevaUrlAni;
       app.dialog.alert("Se guardó la edición", "¡Listo!", function(){
         app.popup.close("#popupEditarAnimal");
         mainView.router.navigate("/misAdopcion/");
        })
     })
     .catch(function(error) {
     console.log("Error: " + error);
     });


}




function fnCamaraEditAnimal() {
// FOTO DESDE CAMARA
    navigator.camera.getPicture(onSuccessCamaraEditPerfil,onErrorCamara,
            {
                quality: 70,
                destinationType: Camera.DestinationType.FILE_URI,
                sourceType: Camera.PictureSourceType.CAMERA,
                correctOrientation: true,

            });
}


function fnGaleriaEditAnimal() {
    navigator.camera.getPicture(onSuccessCamaraEditPerfil,onErrorCamara,
            {
                quality: 50,
                destinationType: Camera.DestinationType.FILE_URI,
                sourceType: Camera.PictureSourceType.PHOTOLIBRARY
            });

}

/*function onSuccessCamara(imageURI) {
    $$("#foto").attr("src", imageURI);
   // RESTA QUE ESTA FOTO SUBA AL STORAGE…. O HACER OTRA COSA...

}*/

function onSuccessCamaraEditPerfil(imageData) {
  ind++;
  console.log("imgdata: "+imageData)
  getFileObject(imageData, function(fileObject) { //fn1
     var uploadTask = storageRef.child('perfiles/img'+nombreOrganizacion+ind+'.jpg').put(fileObject); //recibe un archivo blob y lo sube al cloud storage
     uploadTask.on('state_changed', function(snapshot) {                   //promesa que administra o supervisa el estado de la carga cuando cambie el estado de su snapshot, mostrando el estado del snapsht,
         console.log(snapshot);                                            //
     }, function(error) { //funcion de error
         console.log(error);
         app.dialog.alert(error)
     }, function() {     //funcion que si todo sale bien:
         uploadTask.snapshot.ref.getDownloadURL().then( //obtengo el url de descarga
           function(downloadURL) {
           console.log('el archivo esta disponible en', downloadURL);//Muestro el link
             app.dialog.alert('La imagen ya está subida', "¡Genial!")
           //aca abajo puedo elegir que hacer con mi imagen que ya esta cargada y la puedo manejar a partir de mi download link
            urlAnimal=downloadURL;
            $$("#editFotoAnimal").attr("src", urlAnimal);
            console.log("url: " + urlAnimal)
         });
     });
   });

   // lo de abajo se ejecuta en la funcion on succes (es necesario ejecutar solo getFileFbject) dentro del succes
//toma un blob y un nombre y cambia fecha y nombre, luego devuelve el blob
var blobToFile = function(blob, name) {
 blob.lastModifiedDate = new Date()    //modifica la ultima fecha del blob
 blob.name = name                      //modifica el nombre del blob
 return blob
}
//A partir de la ubicacion de nuestro file y una funcion (cb) ejecuta getfileBlob (funcion especificada abajo)
function getFileObject(filePathOrUrl, cb) {
 getFileBlob(filePathOrUrl, function(blob) { //fn2      //llama a la funcion getFileBlob con el url introducido y una funcion que:
     cb(blobToFile(blob, 'img'+nombreOrganizacion+ind+'.jpg'));             //ejecuta nuestro cb (callback) sobre el blob con nombre y fecha cambiada (el nombre sera 'test.jpg')
 });
};
//obtiene un file desde el servidor utilizando un url,  lo transfrma a tipo blob y ejecuta una funcion (cb) para luego enviarlo al servidor
function getFileBlob(url, cb) {
 var xhr= new XMLHttpRequest()   //creo una nueva instancia de XMLHttpRequest
 xhr.open('GET', url)            //inicializo una peticion asincronica del url al server
 xhr.responseType = "blob"       // declaro que el valor del tipo de respuesta es blob (para luego usarlo mas adelante)
 xhr.addEventListener('load', ()=>{//Le agrego un event listener que cuando cargue  se va a ejecutar
   cb(xhr.response)              //mi cb (callback) con la respuesta del servidor
 })
 xhr.send()                      //Envia la peticion nuevamente.
}
//Se ejecuta la funcion getfileObject con nuestra imagen y el cb que:
/*orden de funcionamiento:
1. getFileObject(imageData, fn1)    || inserto un url
2. getFileBlob (url, fn2)           || realizo desde ese url una peticion, me devuelve un blob
3. fn2                              || ejecuto la funcion 1 con el resultado de:
4. bloblToFile(blob, test.jpg)      || desde mi blob obtengo un file
5. fn1                              ||
*/


 }



function fnBorrarAnimal(){


      app.dialog.confirm("¿Vas a borrar a "+nombre_Animal+ "?", "¡Hey!", function(){

          var borrarAni=colAnimalesEnAdopcion.doc(id_AnimalBD).delete()

          .then(function() {
          console.log("documento borrado");
          app.dialog.alert("¡Ya se borró de tus animales en adopción!", "¡Listo!", function(){
              mainView.router.navigate('/misAdopcion/')} )
          })
          .catch(function(error) {
          console.log("Error: " + error);
          });
      })


  }


  function fnCamaraZona() {
  // FOTO DESDE CAMARA
      navigator.camera.getPicture(onSuccessCamaraZona,onErrorCamara,
              {
                  quality: 70,
                  destinationType: Camera.DestinationType.FILE_URI,
                  sourceType: Camera.PictureSourceType.CAMERA,
                  correctOrientation: true,

              });
  }


  function fnGaleriaZona() {
      navigator.camera.getPicture(onSuccessCamaraZona,onErrorCamara,
              {
                  quality: 50,
                  destinationType: Camera.DestinationType.FILE_URI,
                  sourceType: Camera.PictureSourceType.PHOTOLIBRARY
              });

  }

  /*function onSuccessCamara(imageURI) {
      $$("#foto").attr("src", imageURI);
     // RESTA QUE ESTA FOTO SUBA AL STORAGE…. O HACER OTRA COSA...

  }*/

  function onSuccessCamaraZona(imageData) {
    indexZona++;
    console.log("imgdata: "+imageData)
    getFileObject(imageData, function(fileObject) { //fn1
       var uploadTask = storageRef.child(imageData).put(fileObject); //recibe un archivo blob y lo sube al cloud storage
       uploadTask.on('state_changed', function(snapshot) {                   //promesa que administra o supervisa el estado de la carga cuando cambie el estado de su snapshot, mostrando el estado del snapsht,
           console.log(snapshot);                                            //
       }, function(error) { //funcion de error
           console.log(error);
           app.dialog.alert(error)
       }, function() {     //funcion que si todo sale bien:
           uploadTask.snapshot.ref.getDownloadURL().then( //obtengo el url de descarga
             function(downloadURL) {
             console.log('el archivo esta disponible en', downloadURL);//Muestro el link
               app.dialog.alert('La imagen ya está subida', "¡Genial!")
             //aca abajo puedo elegir que hacer con mi imagen que ya esta cargada y la puedo manejar a partir de mi download link
              urlAnimalZona=downloadURL;
              $$("#fotoAniZona").attr("src", urlAnimalZona);
              console.log("url: " + urlAnimalZona)
           });
       });
     });

     // lo de abajo se ejecuta en la funcion on succes (es necesario ejecutar solo getFileFbject) dentro del succes
  //toma un blob y un nombre y cambia fecha y nombre, luego devuelve el blob
  var blobToFile = function(blob, name) {
   blob.lastModifiedDate = new Date()    //modifica la ultima fecha del blob
   blob.name = name                      //modifica el nombre del blob
   return blob
  }
  //A partir de la ubicacion de nuestro file y una funcion (cb) ejecuta getfileBlob (funcion especificada abajo)
  function getFileObject(filePathOrUrl, cb) {
   getFileBlob(filePathOrUrl, function(blob) { //fn2      //llama a la funcion getFileBlob con el url introducido y una funcion que:
       cb(blobToFile(blob, 'img'+ind+'.jpg'));             //ejecuta nuestro cb (callback) sobre el blob con nombre y fecha cambiada (el nombre sera 'test.jpg')
   });
  };
  //obtiene un file desde el servidor utilizando un url,  lo transfrma a tipo blob y ejecuta una funcion (cb) para luego enviarlo al servidor
  function getFileBlob(url, cb) {
   var xhr= new XMLHttpRequest()   //creo una nueva instancia de XMLHttpRequest
   xhr.open('GET', url)            //inicializo una peticion asincronica del url al server
   xhr.responseType = "blob"       // declaro que el valor del tipo de respuesta es blob (para luego usarlo mas adelante)
   xhr.addEventListener('load', ()=>{//Le agrego un event listener que cuando cargue  se va a ejecutar
     cb(xhr.response)              //mi cb (callback) con la respuesta del servidor
   })
   xhr.send()                      //Envia la peticion nuevamente.
  }
  //Se ejecuta la funcion getfileObject con nuestra imagen y el cb que:
  /*orden de funcionamiento:
  1. getFileObject(imageData, fn1)    || inserto un url
  2. getFileBlob (url, fn2)           || realizo desde ese url una peticion, me devuelve un blob
  3. fn2                              || ejecuto la funcion 1 con el resultado de:
  4. bloblToFile(blob, test.jpg)      || desde mi blob obtengo un file
  5. fn1                              ||
  */


   }

   function setAnimalZona(id){
     console.log("set animal zona")
     console.log("id: "+idAniZona)
     var refAniZona= colAnimalesEnZona.doc(id);
     refAniZona.get()
       .then(function(docActual) {
                nombre_AnimalZona=docActual.data().Nombre_Animal
                tipoAnimalZona= docActual.data().Tipo_Animal
                tipo_Publicacion= docActual.data().Tipo_Publicacion
                descripcion_AnimalZona=docActual.data().Descripcion_Zona
                urlAnimalZona=docActual.data().url_Animal
                id_AnimalZona=docActual.id
                emailZona=docActual.data().email
                ubicacionZona=docActual.data().direccion
                contactoZona=docActual.data().telefono
                latitudZona=docActual.data().latitud
                longitudZona=docActual.data().longitud
                localidadZona=docActual.data().localidad
                provinciaZona=docActual.data().provincia
                timeStampZona=docActual.data().timeStamp
                fechaPubliZona=docActual.data().fechaPubli
                console.log("animal es: " + nombre_AnimalZona)
                console.log("tipoPubli " + tipo_Publicacion)
                console.log("id animal: "+ id_AnimalZona);

             mainView.router.navigate('/verAnimalZona/');
       })
       .catch( function(error){
         console.log("Error : "+ error);
       });

   }


   function fnPublicaEnZona(){
       app.dialog.create({
           title: '¡Atención!',
           text: 'Podés publicar accediendo a tu ubicación actual o ingresando una dirección',
           buttons: [

             {text: 'Con mi ubicación',
               onClick: function(){                                              //quizas seria mejor si al hacer click en es usuario--haga laconsulta de las peticiones de ese animal y muestre los nombres de los adoptantes en un dialog..
                 tipoUbi="gps";
                 mainView.router.navigate("/publicarZona/")
               } //fin onclick ubicacion
             }, //fin primer boton
           {text: 'Con una dirección',
               onClick: function(){
                 tipoUbi="direccion";
                 mainView.router.navigate("/publicarZona/")
               }//fin onClick ingreso manual
           }, //  fin boton direccion

           {text: 'Cancelar',
             onClick:function(){
                 console.log("cancelar todo")
               },
           },
         ],
         verticalButtons: true,
       }).open();

   }



   function fnPublicarEnMapa (){
     console.log("Publicar En Mapa")
     console.log("emailzona: " +emailZona)
     console.log("localidad: "+localidadZona)
     console.log("pcia: "+provinciaZona)


     var hoyZ=new Date();                         // conversion de Date a fecha de publicacion
     var anioZ=hoyZ.getFullYear();
     var mesZ=hoyZ.getMonth()+1;
     var diaZ=hoyZ.getDate();

     if(diaZ < 10){
       diaZ = '0' + diaZ;
      }

      if(mesZ < 10){
          mesZ = '0' + mesZ;
      }

     fechaPubliZona =diaZ+"/"+mesZ+"/"+anioZ ;


     timeStampZona=Date.now();

     tipoAnimalZona=$$("#tipoAniZona").val();
     descripcion_AnimalZona=$$("#descripcion_animalZona").text();
     tipo_Publicacion=$$("#tipoPubliZona").val();
     if(tipo_Publicacion=="Encontrado"){
      nombre_AnimalZona="Visto en la calle"
     }else{
       nombre_AnimalZona=$$("#nombreAniZona").val();
     }

     urlAnimalZona=$$("#fotoAniZona").attr("src");
     ubicacionZona=$$("#ubiAniZona").val();
     contactoZona=$$("#contactoZona").val();
     if(contactoZona==""){
       contactoZona="---"
     }

            console.log("se va a publicar: "+nombre_AnimalZona + " que es: " + tipoAnimalZona + " y esta: " +  tipo_Publicacion);
            console.log("la url es: "+ urlAnimalZona);
            console.log("a publicar con: "+ tipoUbi)

            var nuevoAnimalEnZona={
              timeStamp: timeStampZona,
              email:emailZona,
              Tipo_Animal: tipoAnimalZona,
              Nombre_Animal: nombre_AnimalZona,
              Tipo_Publicacion: tipo_Publicacion,
              Descripcion_Zona: descripcion_AnimalZona,
              url_Animal:urlAnimalZona,
              latitud:latitudZona,
              longitud:longitudZona,
              telefono:contactoZona,
              direccion:ubicacionZona,
              localidad:localidadZona,
              provincia:provinciaZona,
              fechaPubli:fechaPubliZona,
            }

            colAnimalesEnZona.add(nuevoAnimalEnZona)
              .then(function (docRef){
                console.log("Se guardo en bd con el id: ", docRef.id);
                if (tipo_Publicacion=="Encontrado"){
                  app.dialog.confirm("¡Ya publicaste al animalito deambulando en tu zona!", "¡Genial!", function(){
                    if(tipodeUsuario=="org"){
                      mainView.router.navigate("/orgHome/")
                    }
                    if(tipodeUsuario=="usuario"){
                      mainView.router.navigate("/usuarioHome/")
                    }

                    });
                } else{
                  app.dialog.confirm("¡Ya publicaste a "+nombre_AnimalZona+" en tu zona!", "¡Genial!", function(){
                    if(tipodeUsuario=="org"){
                      mainView.router.navigate("/orgHome/")
                    }
                    if(tipodeUsuario=="usuario"){
                      mainView.router.navigate("/usuarioHome/")
                    }

                    });
                }

              })
              .catch(function(error){
                console.log("Error: " + error);
              });


   }
