import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Modal, Paper, Typography, Button } from "@mui/material"
import { closeModal, resetGame } from "../redux/action/gameSlice"

const GameModal = () => {
  const { winner, isTie, modalOpen } = useSelector((state) => state.game)
  const dispatch = useDispatch()

  return (
    <Modal open={modalOpen} onClose={() => dispatch(closeModal())}>
      <Paper
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          p: 4,
          textAlign: "center",
        }}
      >
        {winner && (
          <Typography variant='h5' gutterBottom>
            Player {winner} Wins!
          </Typography>
        )}
        {isTie && (
          <Typography variant='h5' gutterBottom>
            It's a Tie!
          </Typography>
        )}
        <Button variant='contained' onClick={() => dispatch(resetGame())}>
          Reset Game
        </Button>
      </Paper>
    </Modal>
  )
}

export default GameModal
