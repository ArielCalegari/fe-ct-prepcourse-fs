function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  let newArray = array.filter(element => element != array[0])
  
  if (newArray.length === 0) return true
  return false
}

module.exports = todosIguales;
