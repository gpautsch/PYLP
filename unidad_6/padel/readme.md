paso 1 *****************

Antes de utilizar cualquier servicio de Firebase, copia y pega estas secuencias de comandos en la parte inferior de la etiqueta <body>:
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/7.23.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/7.23.0/firebase-analytics.js"></script>

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>


paso 2 *****************

	npm install -g firebase-tools

paso 3 *****************

Puedes desplegarlo ahora o más adelante. Para hacerlo ahora, abre una ventana de terminal y accede al directorio "root" de la aplicación web (si no tienes uno, tendrás que crearlo).
Inicia sesión en Google
	$firebase login
Inicia tu proyecto

Ejecuta este comando desde el directorio "root" de tu aplicación:
	$firebase init
Cuando tengas todo listo, despliega tu aplicación web

Incluye los archivos estáticos (p. ej., HTML, CSS o JS) en el directorio de despliegue de tu aplicación, que se configura como "public" de forma predeterminada. Luego, ejecuta el siguiente comando desde el directorio "root" de la aplicación:
	$firebase deploy

Después del despliegue, consulta tu aplicación en amigosdelpadel-com-ar.web.app