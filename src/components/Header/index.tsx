'use client';
import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";

interface HeaderProps {
  row: number;
  column: number;
  setRow: (row: number) => void;
  setColumn: (column: number) => void;
}
const Header = ({
  row,
  column,
  setRow,
  setColumn,
} : HeaderProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        padding: 2,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid container justifyContent="center">
        <Grid item xs={3}>
          <Grid container alignItems="center">
            <Grid item xs={3}>
              {" "}
              Column{" "}
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="outlined-number"
                type="number"
                size="small"
                color="primary"
                value={column}
                sx = {{
                  backgroundColor: "white",
                  borderRadius: 1,
                }}
                // lơn hơn 0
                onChange={(e) => {
                  setColumn(parseInt(e.target.value) > 0 ? parseInt(e.target.value) : 0);
                }
                }

              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container alignItems="center">
            <Grid item xs={3}>
              {" "}
              Row{" "}
            </Grid>
            <Grid item xs={3}>
            <TextField
                id="outlined-number"
                type="number"
                size="small"
                value={row}
                color="primary"
                sx = {{
                  backgroundColor: "white",
                  borderRadius: 1,
                }}
                onChange={(e) => {
                  setRow(parseInt(e.target.value) > 0 ? parseInt(e.target.value) : 0);
                }
                }
                />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <Button>
            <Box
              sx={{
                backgroundColor: "white",
                padding: 1,
                borderRadius: 1,
                size: "small",
              }}
            >
              Add
            </Box>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
