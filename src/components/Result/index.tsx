import { Box, Button } from '@mui/material';
import React, { useState } from 'react'
import { TextareaAutosize } from '@mui/base';
import { handleResult } from './handle';
interface ResultProps {
  row: number;
  column: number;
  grid: Array<Array<boolean>>;
}
const Result = ({
  row,
  column,
  grid,
} : ResultProps) => {
  const [result, setResult] = useState<string>('');

  const handleResults = () => {
    const result = {
      rows : row + 1,
      columns : column + 2,
      map: handleResult(grid, column, row),
    };
    setResult(JSON.stringify(result));
  };
  return (
    <Box sx = {{
      mt: 2,
      display: "flex",
      flexDirection: "column",
      gap: 1,
      alignItems: "center",
    }}>
      <Button variant='contained' 
        onClick={handleResults}
      
      >Result</Button>
      <TextareaAutosize 
      minRows = {4}
      style = {{
        width: "300px",
        padding: 10,
        borderRadius: 5,
        border: "1px solid #ccc",
        resize: "none",
        outline: "none",
      }}
        value={result}
      />
    </Box>
  )
}

export default Result