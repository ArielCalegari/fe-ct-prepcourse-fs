function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  let index = array.indexOf(Math.max(...array))
  return index === -1 ? 0 : index;
}

module.exports = encontrarIndiceMayor;
