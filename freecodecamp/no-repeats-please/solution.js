const getPermutationsForString = (str, startIndex) => {
  const result = []

  const leftChar = str[startIndex]
  for (let i = startIndex; i < str.length; i++) {
    const rightChar = str[i]

    const tempStrArray = str.split('')
    tempStrArray[startIndex] = rightChar
    tempStrArray[i] = leftChar

    result.push(tempStrArray.join(''))
  }

  return result
}

const permutate = (str, startIndex, result) => {
  const hasMorePermutations = startIndex !== str.length - 1
  if (!hasMorePermutations) {
    result.push(str)
    return result
  }

  const permutations = getPermutationsForString(str, startIndex)
  for (const p of permutations) {
    permutate(p, startIndex + 1, result)
  }

  return result
}

const permutationsWithoutConsecutiveLetters = input => {
  return permutate(input, 0, [])
      .filter(str => !str.match(/(.)\1+/))
      .length
}

export { permutationsWithoutConsecutiveLetters }