import React from "react"
import { useSelector } from "react-redux"
import { Typography } from "@mui/material"

const GameStatus = () => {
  const isXNext = useSelector((state) => state.game.isXNext)

  return (
    <Typography variant='h6' sx={{ mt: 2 }}>
      Next Player: {isXNext ? "X" : "O"}
    </Typography>
  )
}

export default GameStatus
