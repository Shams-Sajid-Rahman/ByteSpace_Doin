const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function emailError(value) {
  if (!value.trim()) return 'Email is required.'
  if (!emailPattern.test(value.trim())) return 'Enter a valid email address.'
  return ''
}

function passwordError(value) {
  if (!value) return 'Password is required.'
  if (value.length < 8) return 'Password must be at least 8 characters.'
  return ''
}

export function validateLogin(values) {
  return {
    email: emailError(values.email),
    password: passwordError(values.password),
  }
}

export function validateSignup(values) {
  return {
    fullName: values.fullName.trim() ? '' : 'Full name is required.',
    email: emailError(values.email),
    password: passwordError(values.password),
    confirmPassword: !values.confirmPassword
      ? 'Please confirm your password.'
      : values.password !== values.confirmPassword
        ? 'Passwords do not match.'
        : '',
  }
}

export function hasErrors(errors) {
  return Object.values(errors).some(Boolean)
}