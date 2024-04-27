'use client';
import Header from '@/components/Header'
import Result from '@/components/Result';
import { Box, Grid } from '@mui/material'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {

  const [row, setRow] = useState<number>(0);
  const [column, setColumn] = useState<number>(0);
  const [grid, setGrid] = useState<Array<Array<boolean>>>([]);

  useEffect(() => {
    if (row > 0 && column > 0) {
      const grid = Array.from({ length: row }).map((_, index) => (
        Array.from({ length: column }).map((_, index) => false)
      ))
      setGrid(grid);
    }
  }, [row, column])

  return (
    <main className="">

      <Header
        row={row}
        column={column}
        setRow={setRow}
        setColumn={setColumn}
      />
      <Box sx = {{
        height: "calc(100vh - 64px)",
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
      }}>
        {
          row > 0 && column > 0 && (
            <Box>
              {
                Array.from({ length: row }).map((_, r) => (
                  <Grid container key={r} sx = {{
                    height: 55
                  }}>
                    {
                      Array.from({ length: column }).map((_, index) => (
                        <Grid item key={index}>
                          <Box
                            sx = {{
                              width: "50px",
                              height: "50px",
                              backgroundColor: grid?.[r]?.[index] ? "primary.main" : "white",
                              margin: 1,
                              border: 1,
                            }}
                            onClick = {() => {
                                const newGrid = grid.map((row, rIndex) => {
                                  if(rIndex === r) {
                                    return row.map((col, cIndex) => {
                                      if(cIndex === index) {
                                        return !col;
                                      }
                                      return col;
                                    })
                                  }
                                  return row;
                                })
                                setGrid(newGrid);
                            }}
                          >

                          </Box>
                        </Grid>
                      ))
                    }
                  </Grid>
                ))
              }
            </Box>
          )
        }
        <Result row={row} column={column} grid={grid} />
      </Box>
    </main>
  )
}
