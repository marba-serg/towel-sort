
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (typeof (matrix) === 'undefined') {
    return []
  } else
    return matrix.map((el, idx) => {
      if (idx % 2 === 0) {
        return el
      } else return el.sort((a, b) => b - a)
    }).flat();
}

