import { Route, Routes } from "react-router-dom"

import CardInstrument from "../components/CardInstrument"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<CardInstrument />} />
    </Routes>
  )
}
