import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Box, Button } from "@mui/material"
import { handleClick } from "../redux/action/gameSlice"

const GameBoard = () => {
  const board = useSelector((state) => state.game.board)
  const dispatch = useDispatch()

  const renderSquare = (index) => {
    return (
      <Button
        variant='outlined'
        onClick={() => dispatch(handleClick(index))}
        sx={{
          width: "100px",
          height: "100px",
          fontSize: "2rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        {board[index]}
      </Button>
    )
  }

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 2,
        maxWidth: "300px",
        margin: "auto",
        mt: 4,
      }}
    >
      {board.map((_, index) => renderSquare(index))}
    </Box>
  )
}

export default GameBoard
