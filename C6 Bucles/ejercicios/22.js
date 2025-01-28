function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  let aumento = num;
  do {
    aumento += 5
  } while (aumento - 40 != num);
  return aumento
}

module.exports = doWhile;