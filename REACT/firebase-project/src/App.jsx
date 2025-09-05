import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './repositories/firebase/config'
import RegisterComponent from './views/login/RegisterComponent.jsx'
import LoginComponent from './views/Login/LoginComponent.jsx'
import { Products } from './views/products/Products.jsx'

function RequireAuth({ children }) {
  const [ready, setReady] = useState(false)
  const [user, setUser] = useState(null)
  useEffect(() => {
    const off = onAuthStateChanged(auth, u => { setUser(u); setReady(true) })
    return () => off()
  }, [])
  if (!ready) return null
  return user ? children : <Navigate to="/login" replace />
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/register" element={<RegisterComponent />} />
        <Route path="/dashboard" element={<RequireAuth><Products /></RequireAuth>} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
