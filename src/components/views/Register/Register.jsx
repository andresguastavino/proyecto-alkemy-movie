import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'

import { useAuth } from '../../auth/auth'

import './register.css'

export const Register = () => {
  const auth = useAuth()
  const initialValues = {
    username: '',
    password: '',
    email: '',
    age: '',
    role: '',
    continent: '',
    region: ''
  }

  const validationErrors = {
    username: {
      required: '* Campo obligatorio',
      minLength: 'Mínimo 4 caracteres',
      maxLength: 'Máximo 20 caracteres'
    },
    password: {
      required: '* Campo obligatorio',
      minLength: 'Mínimo 6 caracteres',
      maxLength: 'Máximo 20 caracteres'
    },
    email: {
      required: '* Campo obligatorio',
      validEmail: 'Debes ingresar un formato de email válido '
    },
    age: {
      required: '* Campo obligatorio',
      min: 'Debes ser mayor de edad para poder registrarte',
      max: 'Debes estar vivo para poder registrarte'
    }
  }

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required(validationErrors.username.required)
      .min(4, validationErrors.username.minLength)
      .max(20, validationErrors.username.maxLength),
    password: yup
      .string()
      .required(validationErrors.password.required)
      .min(6, validationErrors.password.minLength)
      .max(20, validationErrors.password.maxLength),
    email: yup
      .string()
      .email(validationErrors.email.validEmail)
      .required(validationErrors.email.required),
    age: yup
      .number()
      .required(validationErrors.age.required)
      .positive()
      .integer()
      .min(18, validationErrors.age.min)
      .max(99, validationErrors.age.max)
  })

  const onSubmit = () => {
    const email = values.email
    const password = values.password

    auth.registerWithEmailAndPassword(email, password)
  }

  const { handleSubmit, handleChange, values, errors, touched, handleBlur } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit
    })

  return (
    <>
      <section className='register-screen'>
        <h1 className='register-screen__title'>Crear una cuenta</h1>
        <h3 className='register-screen__subtitle'>
          ¡Podrás ver todas las series y peliculas que quieras!
        </h3>
        <form onSubmit={handleSubmit} className='register-form'>
          <div>
            <label htmlFor='username'>Nombre *</label>
            <input
              type='text'
              name='username'
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.username && touched.username ? 'error' : ''}
            />
            {errors.username && touched.username && (
              <div>{errors.username}</div>
            )}
          </div>
          <div>
            <label htmlFor='password'>Contraseña</label>
            <input
              type='password'
              name='password'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.password && touched.password ? 'error' : ''}
            />
            {errors.password && touched.password && (
              <div>{errors.password}</div>
            )}
          </div>
          <div>
            <label htmlFor='email'>Email *</label>
            <input
              type='email'
              name='email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email && touched.email ? 'error' : ''}
              placeholder='username@example.com'
            />
            {errors.email && touched.email && <div>{errors.email}</div>}
          </div>
          <div>
            <label htmlFor='age'>Edad *</label>
            <input
              type='number'
              name='age'
              value={values.age}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.age && touched.age ? 'error' : ''}
            />
            {errors.age && touched.age && <div>{errors.age}</div>}
          </div>
          <button type='submit'>Crear cuenta</button>
        </form>
        <article className='login-container'>
          <p>¿Ya estás registrado?</p>
          <Link className='login-button' to='/login'>
            Login
          </Link>
        </article>
      </section>
    </>
  )
}
