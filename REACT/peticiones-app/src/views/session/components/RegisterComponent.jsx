// src/views/Login/RegisterComponent.jsx
import { useState } from 'react'
import { useNavigate, Link } from 'react-router'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../repositories/firebase/config'

const schema = yup.object({
  email: yup.string()
    .email('Formato: nombre@dominio.com')
    .required('Correo requerido'),
  password: yup.string().required('Contraseña requerida')
    .min(8, 'Mínimo 8 caracteres')
    .matches(/[A-Z]/, 'Al menos 1 mayúscula')
    .matches(/[a-z]/, 'Al menos 1 minúscula')
    .matches(/[0-9]/, 'Al menos 1 número')
    .matches(/[!@#$%&*?.,_:<>"|]/, 'Al menos 1 carácter especial'),
  confirm_password: yup.string()
    .oneOf([yup.ref('password'), null], 'Las contraseñas no coinciden')
    .required('Confirma tu contraseña')
})

const mapAuthErr = (code) => ({
  'auth/email-already-in-use': 'El correo ya está registrado',
  'auth/invalid-email': 'Correo inválido',
  'auth/weak-password': 'Contraseña débil',
}[code] || 'No se pudo crear la cuenta')

export default function RegisterComponent() {
  const navigate = useNavigate()
  const [authError, setAuthError] = useState('')
  const { register, handleSubmit, formState:{ errors, isSubmitting } } =
    useForm({ resolver: yupResolver(schema) })

  const onSubmit = async ({ email, password }) => {
    setAuthError('')
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      navigate('/dashboard', { replace: true })
    } catch (e) {
      console.error(e)
      setAuthError(mapAuthErr(e.code))
    }
  }

  return (
    <div className="app-bg screen-center">
      <div className="container">
        <div className="auth-card card soft">
          <h2 className="title">Crear cuenta</h2>

          {authError && <div className="alert error">{authError}</div>}

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                id="email"
                type="email"
                className={`input ${errors.email ? 'invalid' : ''}`}
                placeholder="nombre@dominio.com"
                autoComplete="email"
                {...register('email')}
              />
              {errors.email && <p className="field-error">{errors.email.message}</p>}
            </div>

            <div className="grid grid-2-sm">
              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input
                  id="password"
                  type="password"
                  className={`input ${errors.password ? 'invalid' : ''}`}
                  placeholder="••••••••"
                  autoComplete="new-password"
                  {...register('password')}
                />
                {errors.password && <p className="field-error">{errors.password.message}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="confirm_password">Confirmar contraseña</label>
                <input
                  id="confirm_password"
                  type="password"
                  className={`input ${errors.confirm_password ? 'invalid' : ''}`}
                  placeholder="••••••••"
                  autoComplete="new-password"
                  {...register('confirm_password')}
                />
                {errors.confirm_password && <p className="field-error">{errors.confirm_password.message}</p>}
              </div>
            </div>

            <button className="btn primary w-100" disabled={isSubmitting}>
              {isSubmitting ? 'Creando…' : 'Registrarme'}
            </button>
          </form>

          <p className="small center" style={{ marginTop: 12 }}>
            <span className="muted">¿Ya tienes cuenta?</span>{' '}
            <Link to="/login">Inicia sesión</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
