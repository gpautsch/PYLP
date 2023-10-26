console.log('Entro al app');

(function() {

    // PASO 3. Inicializar Firebase
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
    
      // PASO 4. Obtener elementos
      const preObject = document.getElementById('objeto');
    
      // PASO 5. Crear Referencias
      const dbRefObject = firebase.database().ref().child('curso');
    
      /* PASO 6. En firebase/Realtime creamos un objeto con la siguiente estructura:
        curso: {
          "nombre": "BDA",
          "Horas": 15,
          "institucion": "UNNE - UNaM"
        }
       */
      
      // PASO 7. Sincronizar cambios objeto por Consola
      dbRefObject.on('value', snap => console.log(snap.val()));
      
      // PASO 8. Otra opción para mostrar en pantalla
      dbRefObject.on('value', snap => {preObject.innerText = JSON.stringify(snap.val(),null, 3);});
    
     
    } ());