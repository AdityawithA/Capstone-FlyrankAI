import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Settings.css';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const THEME_OPTIONS = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'system', label: 'System default' },
];

// --- Pure validation helpers (kept outside the component so they're reusable / testable) ---
function validateFullName(value) {
  if (!value.trim()) return 'Full name is required.';
  return '';
}

function validateEmail(value) {
  const trimmed = value.trim();
  if (!trimmed) return 'Email address is required.';
  if (!EMAIL_REGEX.test(trimmed)) return 'Enter a valid email address (e.g. name@example.com).';
  return '';
}

function validateAll(values) {
  return {
    fullName: validateFullName(values.fullName),
    email: validateEmail(values.email),
  };
}

export default function Settings({ initialValues, onSave }) {
  const [values, setValues] = useState({
    fullName: initialValues?.fullName ?? '',
    email: initialValues?.email ?? '',
    theme: initialValues?.theme ?? 'light',
  });

  const [errors, setErrors] = useState({ fullName: '', email: '' });
  const [touched, setTouched] = useState({ fullName: false, email: false });
  const [isSaving, setIsSaving] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const successTimeoutRef = useRef(null);

  // Clean up the success-message timeout if the component unmounts mid-timer
  useEffect(() => {
    return () => {
      if (successTimeoutRef.current) {
        clearTimeout(successTimeoutRef.current);
      }
    };
  }, []);

  const isFormValid =
    validateFullName(values.fullName) === '' && validateEmail(values.email) === '';

  const handleChange = useCallback(
    (field) => (event) => {
      const { value } = event.target;
      setValues((prev) => ({ ...prev, [field]: value }));

      // Re-validate live only after the field has already been touched once,
      // so errors don't appear before the user has had a chance to type.
      setTouched((prevTouched) => {
        if (prevTouched[field]) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [field]:
              field === 'fullName' ? validateFullName(value) : validateEmail(value),
          }));
        }
        return prevTouched;
      });
    },
    []
  );

  const handleBlur = useCallback(
    (field) => () => {
      setTouched((prev) => ({ ...prev, [field]: true }));
      setErrors((prev) => ({
        ...prev,
        [field]:
          field === 'fullName'
            ? validateFullName(values.fullName)
            : validateEmail(values.email),
      }));
    },
    [values.fullName, values.email]
  );

  const handleThemeChange = useCallback((event) => {
    setValues((prev) => ({ ...prev, theme: event.target.value }));
  }, []);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      const nextErrors = validateAll(values);
      setErrors(nextErrors);
      setTouched({ fullName: true, email: true });

      const valid = nextErrors.fullName === '' && nextErrors.email === '';
      if (!valid) return;

      setIsSaving(true);
      setSuccessMessage('');

      try {
        if (onSave) {
          await onSave(values);
        } else {
          // Fallback no-op "save" so the component works standalone/demo-able
          await new Promise((resolve) => setTimeout(resolve, 500));
        }
        setSuccessMessage('Settings saved successfully.');

        if (successTimeoutRef.current) clearTimeout(successTimeoutRef.current);
        successTimeoutRef.current = setTimeout(() => setSuccessMessage(''), 4000);
      } catch (err) {
        setErrors((prev) => ({
          ...prev,
          form: 'Something went wrong while saving. Please try again.',
        }));
      } finally {
        setIsSaving(false);
      }
    },
    [values, onSave]
  );

  return (
    <div className="settings-page">
      <div className="settings-card">
        <header className="settings-header">
          <h1>Account settings</h1>
          <p>Update your profile details and how the app looks to you.</p>
        </header>

        <form noValidate onSubmit={handleSubmit} className="settings-form">
          {/* Full name */}
          <div className="form-field">
            <label htmlFor="fullName">Full name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={values.fullName}
              onChange={handleChange('fullName')}
              onBlur={handleBlur('fullName')}
              aria-invalid={touched.fullName && !!errors.fullName}
              aria-describedby={errors.fullName ? 'fullName-error' : undefined}
              placeholder="Jane Doe"
              autoComplete="name"
            />
            {touched.fullName && errors.fullName && (
              <p className="field-error" id="fullName-error" role="alert">
                {errors.fullName}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="form-field">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange('email')}
              onBlur={handleBlur('email')}
              aria-invalid={touched.email && !!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              placeholder="jane@example.com"
              autoComplete="email"
            />
            {touched.email && errors.email && (
              <p className="field-error" id="email-error" role="alert">
                {errors.email}
              </p>
            )}
          </div>

          {/* Theme selector */}
          <div className="form-field">
            <label htmlFor="theme">Theme</label>
            <select id="theme" name="theme" value={values.theme} onChange={handleThemeChange}>
              {THEME_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {errors.form && (
            <p className="field-error" role="alert">
              {errors.form}
            </p>
          )}

          <div className="form-actions">
            <button type="submit" disabled={!isFormValid || isSaving}>
              {isSaving ? 'Saving…' : 'Save changes'}
            </button>

            {/* aria-live region: announces success without stealing focus */}
            <span className="success-message" role="status" aria-live="polite">
              {successMessage}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
