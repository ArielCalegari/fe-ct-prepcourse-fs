function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  let newArray = array.filter(mes => mes == "Enero" || mes == "Marzo" || mes == "Noviembre");

  if (newArray.length != 3) return "No se encontraron los meses pedidos";

  return newArray
}

module.exports = mesesDelAño;
