
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if (Array.isArray(matrix)) {
    for(let i = 0; i < matrix.length; i++) {
      if (i === 0 || i%2 === 0){
        for(let j = 0; j < matrix[i].length; j++) {
          if (!!matrix[i] && !!matrix[i][j]){
            result.push(matrix[i][j])  
          }
      }
      } else {
        for(let j = matrix[i].length; j >= 0; j--) {
          if (!!matrix[i] && !!matrix[i][j]){
            result.push(matrix[i][j])  
          }
      }
      }
    }
    return result;
  }else{
    return result
  } 
}
