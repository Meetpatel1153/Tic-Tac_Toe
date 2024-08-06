import { createSlice } from "@reduxjs/toolkit"

const initialBoard = Array(9).fill(null)

const gameSlice = createSlice({
  name: "game",
  initialState: {
    board: initialBoard,
    isXNext: true,
    winner: null,
    isTie: false,
    modalOpen: false,
    isTimer: 30,
  },
  reducers: {
    handleClick: (state, action) => {
      const index = action.payload
      if (state.board[index] || state.winner) return

      state.board[index] = state.isXNext ? "X" : "O"
      state.isXNext = !state.isXNext

      const winner = calculateWinner(state.board)
      if (winner) {
        state.winner = winner
        state.modalOpen = true
      } else if (!state.board.includes(null)) {
        state.isTie = true
        state.modalOpen = true
      }
    },
    closeModal: (state) => {
      state.modalOpen = false
    },
    resetGame: (state) => {
      state.board = initialBoard
      state.isXNext = true
      state.winner = null
      state.isTie = false
      state.modalOpen = false
    },
  },
})

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

export const { handleClick, closeModal, resetGame } = gameSlice.actions
export default gameSlice.reducer
