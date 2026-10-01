import { useId, useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

function FormInput({ label, name, type = 'text', value, onChange, error, autoComplete, required = true, ...props }) {
  const generatedId = useId()
  const inputId = `${name}-${generatedId}`
  const errorId = `${inputId}-error`
  const [passwordVisible, setPasswordVisible] = useState(false)
  const passwordField = type === 'password'
  const actualType = passwordField && passwordVisible ? 'text' : type

  return (
    <div className="min-w-0">
      <label className="mb-2 block font-body text-sm font-semibold text-ink" htmlFor={inputId}>{label}</label>
      <div className="relative">
        <input
          {...props}
          id={inputId}
          name={name}
          type={actualType}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={`min-h-12 w-full rounded-xl border bg-white px-4 font-body text-base text-ink outline-none transition focus-visible:ring-2 focus-visible:ring-blue/30 ${passwordField ? 'pr-12' : ''} ${error ? 'border-red-600 focus:border-red-600' : 'border-line focus:border-blue'}`}
        />
        {passwordField && (
          <button
            type="button"
            aria-label={passwordVisible ? 'Hide password' : 'Show password'}
            aria-pressed={passwordVisible}
            onClick={() => setPasswordVisible((visible) => !visible)}
            className="absolute right-1 top-1 inline-flex h-10 w-10 items-center justify-center rounded-full text-muted hover:bg-pill hover:text-ink focus-visible:outline-2 focus-visible:outline-blue"
          >
            {passwordVisible ? <EyeOff aria-hidden="true" size={18} /> : <Eye aria-hidden="true" size={18} />}
          </button>
        )}
      </div>
      {error && <p id={errorId} className="mt-1.5 font-body text-sm font-medium text-red-700" role="alert">{error}</p>}
    </div>
  )
}

export default FormInput