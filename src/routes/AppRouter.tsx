import { Route, Routes } from "react-router-dom"
import CardInstrument from "../components/CardInstrument"
import { Menu } from "../components/Menu"
import { Productos } from "../components/Productos"
import { DetalleProducto } from "../components/DetalleProducto"
import { GoogleMaps } from "../components/GoogleMaps"

export const AppRouter = () => {
  return (
    <Routes>
      
      <Route path="/"element={<Menu />} />
      <Route path="/instrumentos" element={<CardInstrument />} />
      <Route path="/productos" element={<Productos/>} />
      <Route path="/detalle">
        <Route path=":idproducto" element={<DetalleProducto />} />
      </Route>
      <Route path="/donde-estamos" element={<GoogleMaps/>} />
    </Routes>
  )
}
