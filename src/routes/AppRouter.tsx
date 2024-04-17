import { Route, Routes } from "react-router-dom"

import CardInstrument from "../components/CardInstrument"
import { Menu } from "../components/Menu"

export const AppRouter = () => {
  return (
    <Routes>
      
      <Route path="/"element={<Menu />} />
      <Route path="/instrumentos" element={<CardInstrument />} />
    </Routes>
  )
}
