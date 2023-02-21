import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Portfolio from './Pages/Page.dir.Portfolio/Portfolio'

function RoutesFile() {
  return (
    <Routes>
        <Route element={<Portfolio/>} path='/'/>
    </Routes>
  )
}

export default RoutesFile