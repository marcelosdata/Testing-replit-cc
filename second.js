function abbreName(name) {
  let abrevacion = name.split(" "); //uso split para convertir el string de los nombres en un array de 2 elementos, para luego ...
  return abrevacion[0][0] + '.' + abrevacion[1][0]
  //luego los retorno y con su index agarro el primer elemento (index cero) y luego el primer elemento de ese index (cero nuevamente y los separ con un punto)
}

console.log(abbreName("Valentina Salazar"))
console.log(abbreName("Michelle Salazar"))