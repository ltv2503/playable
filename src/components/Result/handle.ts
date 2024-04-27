export const handleResult = (
  grid: Array<Array<boolean>>,
  col: number,
  row: number
): number[] => {
  const newGrid = surroundWithFalse(grid);

  const result: number[] = [];
  // for grid
  const rLength = newGrid.length;
  const cLength = newGrid[0].length;
  console.log(newGrid);
  for (let i = 0; i < rLength; i++) {
    for (let j = 0; j < cLength; j++) {
      if (j === 0) {
        if (i === 0) {
          if (newGrid[i][j + 1]) {
            result.push(-2);
          } else result.push(-11);
        } else result.push(-12);
      } else if (j === cLength - 1) {
        if (i === 0) {
          if (newGrid[i][j - 1]) {
            result.push(-1);
          } else result.push(-11);
        } else result.push(-14);
      } else if (i === rLength - 1) {
        result.push(-11);
      } else {
        if (newGrid[i][j]) {
          result.push(1);
        } else {
          if (i === 0) {
            if (newGrid[i][j - 1] && newGrid[i][j + 1]) {
              if (newGrid[i + 1][j + 1]) {
                result.push(-5);
              } else {
                result.push(-6);
              }
            } else if (newGrid[i][j - 1] && !newGrid[i][j + 1]) {
              result.push(-9);
            } else if (newGrid[i][j + 1] && !newGrid[i][j - 1]) {
              result.push(-7);
            } else result.push(-15);
          } else {
            if (
              newGrid[i][j - 1] &&
              newGrid[i - 1][j] &&
              !newGrid[i][j + 1] &&
              !newGrid[i + 1][j]
            ) {
              result.push(-1);
            } else if (
              !newGrid[i][j - 1] &&
              newGrid[i - 1][j] &&
              newGrid[i][j + 1] &&
              !newGrid[i + 1][j]
            ) {
              result.push(-2);
            } else if (
              !newGrid[i][j - 1] &&
              !newGrid[i - 1][j] &&
              newGrid[i][j + 1] &&
              newGrid[i + 1][j]
            ) {
              result.push(-3);
            } else if (
              newGrid[i][j - 1] &&
              !newGrid[i - 1][j] &&
              !newGrid[i][j + 1] &&
              newGrid[i + 1][j]
            ) {
              result.push(-4);
            } else if (
              newGrid[i][j - 1] &&
              newGrid[i - 1][j] &&
              newGrid[i][j + 1] &&
              newGrid[i + 1][j]
            ) {
              result.push(-5);
            } else if (
              newGrid[i][j - 1] &&
              newGrid[i - 1][j] &&
              newGrid[i][j + 1] &&
              !newGrid[i + 1][j]
            ) {
              result.push(-6);
            } else if (
              !newGrid[i][j - 1] &&
              newGrid[i - 1][j] &&
              newGrid[i][j + 1] &&
              newGrid[i + 1][j]
            ) {
              result.push(-7);
            } else if (
              newGrid[i][j - 1] &&
              !newGrid[i - 1][j] &&
              newGrid[i][j + 1] &&
              newGrid[i + 1][j]
            ) {
              result.push(-8);
            } else if (
              newGrid[i][j - 1] &&
              newGrid[i - 1][j] &&
              !newGrid[i][j + 1] &&
              newGrid[i + 1][j]
            ) {
              result.push(-9);
            }  else if (
              (!newGrid[i][j - 1] &&
                newGrid[i - 1][j] &&
                !newGrid[i][j + 1] &&
                !newGrid[i + 1][j]) ||
              (!newGrid[i][j - 1] &&
                !newGrid[i - 1][j] &&
                !newGrid[i][j + 1] &&
                !newGrid[i + 1][j] &&
                (newGrid[i - 1][j - 1] || newGrid[i - 1][j + 1]) &&
                (!newGrid[i + 1][j - 1] || !newGrid[i + 1][j + 1]))
            ) {
              result.push(-11);
            } else if (
              (!newGrid[i][j - 1] &&
                !newGrid[i - 1][j] &&
                newGrid[i][j + 1] &&
                !newGrid[i + 1][j]) ||
              (!newGrid[i][j - 1] &&
                !newGrid[i - 1][j] &&
                !newGrid[i][j + 1] &&
                !newGrid[i + 1][j] &&
                (newGrid[i - 1][j + 1] || newGrid[i + 1][j + 1]) &&
                (!newGrid[i - 1][j - 1] || !newGrid[i + 1][j - 1]))
            ) {
              result.push(-12);
            } else if (
              (!newGrid[i][j - 1] &&
                !newGrid[i - 1][j] &&
                !newGrid[i][j + 1] &&
                newGrid[i + 1][j]) ||
              (!newGrid[i][j - 1] &&
                !newGrid[i - 1][j] &&
                !newGrid[i][j + 1] &&
                !newGrid[i + 1][j] &&
                (newGrid[i + 1][j - 1] || newGrid[i + 1][j + 1]) &&
                (!newGrid[i - 1][j - 1] || !newGrid[i - 1][j + 1]))
            ) {
              result.push(-13);
            } else if (
              (newGrid[i][j - 1] &&
                !newGrid[i - 1][j] &&
                !newGrid[i][j + 1] &&
                !newGrid[i + 1][j]) ||
              (!newGrid[i][j - 1] &&
                !newGrid[i - 1][j] &&
                !newGrid[i][j + 1] &&
                !newGrid[i + 1][j] &&
                (newGrid[i - 1][j - 1] || newGrid[i + 1][j - 1]) &&
                (!newGrid[i - 1][j + 1] || !newGrid[i + 1][j + 1]))
            ) {
              result.push(-14);
            } else if (
              !newGrid[i][j - 1] &&
              newGrid[i - 1][j] &&
              !newGrid[i][j + 1] &&
              newGrid[i + 1][j]
            ) {
              result.push(-15);
            }else if (
              newGrid[i][j - 1] &&
              !newGrid[i - 1][j] &&
              newGrid[i][j + 1] &&
              !newGrid[i + 1][j]
            ) {
              result.push(-16);
            } else {
              result.push(-10);
            }
          }
        }
      }
    }
  }
  return result;
};

function surroundWithFalse(matrix: boolean[][]) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const newMatrix = [];

  for (let i = 0; i < rows; i++) {
    const newRow = [false, ...matrix[i], false];
    newMatrix.push(newRow);
  }

  const lastRow = Array(cols + 2).fill(false);
  newMatrix.push(lastRow);

  return newMatrix;
}
