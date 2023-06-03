import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/armoniaspa/home'
import { LoginPage } from './pages/armoniaspa/login'
import { RouterLayout } from './common/RouterLayout'
export const AppRouter: React.FC<{}> = () => {
	return (
		<Routes>
			<Route path="/" element={<RouterLayout />}>
				<Route path="/armoniaspa/" element={<HomePage />} />
				<Route path="/armoniaspa/login" element={<LoginPage />} />
			</Route>
			<Route path="/nose" element={<div>Hola</div>} />
		</Routes>
	)
}
