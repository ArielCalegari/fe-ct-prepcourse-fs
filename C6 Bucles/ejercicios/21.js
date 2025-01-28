function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  
  let contador = 0
  while (2** contador <= numero) {
    if (2 ** contador == numero) {
      return true
    }
    contador++
  }
  return false
}

module.exports = esPotenciaDeDos;
