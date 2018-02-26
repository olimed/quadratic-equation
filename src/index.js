module.exports = function solveEquation(equation) {
  // your implementation
  const regex = RegExp(/\s*(\-?[0-9]*)\s*\*\s*x\s*\^\s*2\s*(\-?\+?\s*[0-9]*)\s*\*\s*x\s*(\-?\+?\s*[0-9]*)\s*/);
  
  let arrCoff = regex.exec(equation)

  let firstCoff = +arrCoff[1]
  let secondCoff = arrCoff[2]
  let thirdCoff = arrCoff[3]

  function parseCoff(coff){
    let reg = RegExp(/(\-?\+?)\s*([0-9]*)/)
    let coffs = reg.exec(coff)
    if (coffs[1] === '-')
      return (-1) * coffs[2]
    else
      return coffs[2]
  }

  secondCoff = parseCoff(secondCoff)
  thirdCoff = parseCoff(thirdCoff)

  let solv = []

  let D = secondCoff*secondCoff - 4 * firstCoff * thirdCoff
  if (D >= 0)
    {
      solv.push(Math.round(((-1)*secondCoff + Math.sqrt(D)) / (2 * firstCoff)))
      solv.push(Math.round(((-1)*secondCoff - Math.sqrt(D)) / (2 * firstCoff)))
      //return solv
    }
  else
    return "Error. D < 0"
  if (firstCoff >= 0)
    {
      return [solv[1], solv[0]]
    }
    else
      return solv
  

}

