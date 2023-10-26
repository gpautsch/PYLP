function registrar (){
    //console.log('Diste un clic')
    var email = document.getElementById('email').value;
    var clave = document.getElementById('clave').value;
    console.log(email);
    console.log(clave);
    firebase.auth().createUserWithEmailAndPassword(email, clave)
    .then(function(){
      //SOLO SE EJECUTA VERIFICAR PARA EL USUARIO QUE SE ESTA REGISTRANDO
      verifcar()
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        //alert(errorMessage);
        
        // ...
      });email-clave.html
}

function ingresar (){

  var email = document.getElementById('email2').value;
  var clave = document.getElementById('clave2').value;
  firebase.auth().signInWithEmailAndPassword(email, clave)
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
    // ...
  });email-clave.html
  
  
}

function observador (){


  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log('Existe usuario activo');
      aparece(user);
      var displayName = user.displayName;
      var email = user.email;
      console.log("ESTO ES PARA MOSTRAR LA VERIFICACION VIA MAIL");
      console.log(user.emailVerified);
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      console.log("usuario NO Logueda");

      contenido.innerHTML = `   
      <div class = "container mt-5">   
      <div class="alert alert-success" role="alert">
      <h4 class="alert-heading">Hola!</h4>
      <p>"Para acceder al contenido debe Registrarse"</p>
      </div>
      </div>
      `;


      // ...
    }
  });email-clave.html
  
}

function aparece(user){
  var contenido = document.getElementById('contenido');
  if (user.emailVerified){
      location.href="index.html";
  }
}


function cerrar(){
  firebase.auth().signOut()
  .then(function(){
    console.log("Saliendo....")
  })
  .catch(function(error){
    console.log(error)
  })
}


function verifcar(){
  //PARA CUALQUIER USER, VERIFICA ENVIANDO UN MAIL
  //SOLO SE DEBERÍA EJECUTAR PARA EL USUARIO QUE SE ESTA REGISTRANDO
  // VER CODIGO EN FUNCION REGISTRAR
  var user = firebase.auth().currentUser;
  user.sendEmailVerification().then(function() {
    // email sent
    console.log("Enviando correo...")
    alert("Te hemos enviado un correo de activación");
  }).catch(function(error) {
    // an error heppened
    console.log(error)
  });
}

observador();
