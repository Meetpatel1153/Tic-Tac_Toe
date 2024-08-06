import React from "react"
import { Container, Typography } from "@mui/material"
import GameBoard from "./components/GameBoard"
import GameStatus from "./components/GameStatus"
import GameModal from "./components/GameModal"

const App = () => {
  return (
    <Container maxWidth='sm' sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant='h3' gutterBottom>
        Tic Tac Toe
      </Typography>
      <GameBoard />
      <GameStatus />
      <GameModal />
    </Container>
  )
}

export default App
