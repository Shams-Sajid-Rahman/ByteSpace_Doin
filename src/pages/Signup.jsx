import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout.jsx'
import Button from '../components/Button.jsx'
import FormInput from '../components/FormInput.jsx'
import { hasErrors, validateSignup } from '../utils/authValidation.js'

function Signup() {
  const navigate = useNavigate()
  const [values, setValues] = useState({ fullName: '', email: '', password: '', confirmPassword: '' })
  const [role, setRole] = useState('Learner')
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    const nextValues = { ...values, [name]: value }
    setValues(nextValues)
    if (errors[name] || (name === 'password' && errors.confirmPassword)) {
      const nextErrors = validateSignup(nextValues)
      setErrors((current) => ({
        ...current,
        [name]: nextErrors[name],
        ...(name === 'password' && current.confirmPassword
          ? { confirmPassword: nextErrors.confirmPassword }
          : {}),
      }))
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validateSignup(values)
    setErrors(nextErrors)
    setSuccess(false)
    if (hasErrors(nextErrors)) return

    setSubmitting(true)
    window.setTimeout(() => {
      // A real app would send credentials to a backend; only the profile is persisted here.
      window.localStorage.setItem('bytespaceUser', JSON.stringify({
        name: values.fullName.trim(),
        email: values.email.trim(),
        role,
      }))
      setSubmitting(false)
      setSuccess(true)
      window.setTimeout(() => navigate('/'), 900)
    }, 450)
  }

  return (
    <AuthLayout title="Create your account" description="Start learning or creating">
      <div>
        <p className="font-body text-sm font-bold uppercase tracking-[0.08em] text-blue">Join the community</p>
        <h1 className="mt-2 font-heading text-3xl font-bold text-ink sm:text-4xl">Create your account</h1>
        <p className="mt-3 font-body text-base leading-6 text-muted">Choose how you’d like to use ByteSpace.</p>
      </div>

      <form className="mt-7 space-y-4" noValidate onSubmit={handleSubmit}>
        <FormInput
          label="Full name"
          name="fullName"
          autoComplete="name"
          value={values.fullName}
          onChange={handleChange}
          error={errors.fullName}
        />
        <FormInput
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
        />

        <fieldset>
          <legend className="mb-2 font-body text-sm font-semibold text-ink">I’m joining as</legend>
          <div className="grid grid-cols-2 rounded-pill bg-pill p-1">
            {['Learner', 'Creator'].map((option) => (
              <label key={option} className="relative cursor-pointer">
                <input
                  className="peer sr-only"
                  type="radio"
                  name="role"
                  value={option}
                  checked={role === option}
                  onChange={() => setRole(option)}
                />
                <span className="flex min-h-10 items-center justify-center rounded-pill px-4 font-body text-sm font-semibold text-muted transition-colors peer-checked:bg-white peer-checked:text-ink peer-checked:shadow-sm peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-blue">
                  {option}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <FormInput
          label="Password"
          name="password"
          type="password"
          autoComplete="new-password"
          value={values.password}
          onChange={handleChange}
          error={errors.password}
        />
        <FormInput
          label="Confirm password"
          name="confirmPassword"
          type="password"
          autoComplete="new-password"
          value={values.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
        />

        {success && <p className="font-body text-sm font-semibold text-blue" role="status">Account created successfully. Taking you to ByteSpace…</p>}
        <Button className="w-full" type="submit" disabled={submitting}>
          {submitting ? 'Creating Account…' : 'Create Account'}
        </Button>
      </form>

      <p className="mt-6 text-center font-body text-sm text-muted">
        Already have an account? <Link className="font-bold text-blue hover:underline" to="/login">Sign In</Link>
      </p>
    </AuthLayout>
  )
}

export default Signup