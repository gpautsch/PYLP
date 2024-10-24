(function() {

    //Inicializar Firebase
      const config = {
        apiKey: "AIzaSyCJFDI8QQYSsB94MBBrtOo6o",
        authDomain: "pylp.firebaseapp.com",
        databaseURL: "https://pylp2.firebaseio.com",
        projectId: "pylp",
        storageBucket: "pylp2.appspot.com",
        messagingSenderId: "15996538",
        appId: "1:15930538:web:4c1e834d8ca8e7083"
      };
      firebase.initializeApp(config);
    
    //Obtener elementos
    const preObject = document.getElementById('objeto');
    // PASO 3.
    const ulList = document.getElementById('lista');

    //Crear Referencias
    const dbRefObject = firebase.database().ref().child('curso');
    // PASO 4.
    const dbRefList = dbRefObject.child('alumnos');

    // Sincronizar cambios objeto
    //dbRefObject.on('value', snap => {preObject.innerText = JSON.stringify(snap.val(),null, 3);});
    // PASO 5.
    //Sincronizar los elemento añadidos en la lista
    dbRefObject.on('child_added', snap => console.log(snap.val()));

    // PASO 6. Visualizar objeto en el navegador. 
    dbRefList.on('value', snap => {ulList.innerText = JSON.stringify(snap.val(),null, 3);});
       
    } ());