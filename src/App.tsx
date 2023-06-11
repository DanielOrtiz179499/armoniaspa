import React from 'react'
import './App.css'
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
