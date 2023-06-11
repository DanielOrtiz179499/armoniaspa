import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Button, Container } from '@mui/material'
import { NavBar } from './common/NavBar'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './Router'
import { NotificacionProvider } from './context/notification.context'

function App() {
  return (
    <NotificacionProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </NotificacionProvider>
  )
}

export default App
