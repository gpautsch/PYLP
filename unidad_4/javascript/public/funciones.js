function isPar(x){
  return x % 2 === 0
}

function sucesor(n){
  return n+1
}

function doble(n) {
  return n + n
}


const isMayorEdad = function(edad){ 
  if( edad  >= 18 )
    return true
  else 
    return false
}

const persona1 = {
  apellido: 'Perez',
  nombre: 'Juan',
  anio_nac: 1988,
  edad: function(){
    const currentYear = new Date().getFullYear()
    return currentYear - this.anio_nac
  }
}