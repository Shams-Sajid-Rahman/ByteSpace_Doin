import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout.jsx'
import Button from '../components/Button.jsx'
import FormInput from '../components/FormInput.jsx'
import { hasErrors, validateLogin } from '../utils/authValidation.js'

function Login() {
  const navigate = useNavigate()
  const [values, setValues] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    const nextValues = { ...values, [name]: value }
    setValues(nextValues)
    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: validateLogin(nextValues)[name] }))
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validateLogin(values)
    setErrors(nextErrors)
    setSuccess(false)
    if (hasErrors(nextErrors)) return

    setSubmitting(true)
    window.setTimeout(() => {
      window.localStorage.setItem('bytespaceUser', JSON.stringify({ email: values.email.trim() }))
      setSubmitting(false)
      setSuccess(true)
      window.setTimeout(() => navigate('/'), 900)
    }, 450)
  }

  return (
    <AuthLayout title="Sign in" description="Welcome back to ByteSpace">
      <div>
        <p className="font-body text-sm font-bold uppercase tracking-[0.08em] text-blue">Welcome back</p>
        <h1 className="mt-2 font-heading text-3xl font-bold text-ink sm:text-4xl">Sign in to ByteSpace</h1>
        <p className="mt-3 font-body text-base leading-6 text-muted">Continue your learning journey.</p>
      </div>

      <form className="mt-8 space-y-5" noValidate onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
        />
        <div>
          <FormInput
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={values.password}
            onChange={handleChange}
            error={errors.password}
          />
          <div className="mt-2 text-right">
            <a className="font-body text-sm font-semibold text-blue hover:underline" href="mailto:support@bytespace.example?subject=Password%20reset">
              Forgot password?
            </a>
          </div>
        </div>
        {success && <p className="font-body text-sm font-semibold text-blue" role="status">Signed in successfully. Taking you to ByteSpace…</p>}
        <Button className="w-full" type="submit" disabled={submitting}>
          {submitting ? 'Signing In…' : 'Sign In'}
        </Button>
      </form>

      <p className="mt-7 text-center font-body text-sm text-muted">
        Don't have an account? <Link className="font-bold text-blue hover:underline" to="/signup">Join Us</Link>
      </p>
    </AuthLayout>
  )
}

export default Login