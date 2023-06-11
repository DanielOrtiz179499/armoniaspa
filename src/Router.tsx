import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/armoniaspa/home'
import { LoginPage } from './pages/armoniaspa/login'
import { RouterLayout } from './common/RouterLayout'
export const AppRouter: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/home" element={<HomePage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}
