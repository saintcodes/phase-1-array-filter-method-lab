// Code your solution here
function findMatching(array, name) {
  let result = array.filter(element => element.toLowerCase() === name.toLowerCase()
  )
  return result
}

function fuzzyMatch(array, string) {
  let result = array.filter(element => element.toLowerCase().indexOf(string.toLowerCase()) === 0)
  return result
}

function matchName(obj, string) {
  let result = obj.filter(element => element.name === string)
  return result
}