let abrev = (name) => {
  let newArr = name.split("");
  return (newArr[0][0]+ '.'+newArr[1][0])
}

abrev('Marcelo Salazar')